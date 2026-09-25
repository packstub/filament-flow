<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use BackedEnum;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Facades\Filament;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Models\Contracts\HasName;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Support\Enums\Width;
use Illuminate\Auth\SessionGuard as Guard;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Support\ModelFinder;
use Packstub\Flow\Support\WorkflowTransfer;
use Symfony\Component\HttpFoundation\StreamedResponse;

class EditWorkflow extends EditRecord
{
    protected static string $resource = WorkflowResource::class;

    protected Width|string|null $maxContentWidth = Width::Full;

    /**
     * The workflow's name with the Active switch beside it: the header's
     * actions on the right are then all things you do, not its state.
     */
    public function getHeading(): string|Htmlable
    {
        return new HtmlString(view('packstub-flow::editor.heading', [
            'title' => $this->getRecordTitle(),
            'active' => $this->getAction('active', isMounting: false),
        ])->render());
    }

    /**
     * The heading already names the workflow and the navigation marks
     * Workflows; the canvas gets the room instead.
     */
    public function getBreadcrumbs(): array
    {
        return [];
    }

    /**
     * "Last saved by Jane Doe 2 hours ago · v3" under the name: the user's
     * name when the panel's users carry one, the version when one is
     * stored. Hidden on a phone, where the heading needs the room.
     */
    public function getSubheading(): string|Htmlable|null
    {
        /** @var Workflow $workflow */
        $workflow = $this->getRecord();

        if (! $workflow->updated_by) {
            return null;
        }

        $replace = [
            'by' => static::actorName($workflow->updated_by),
            'at' => $workflow->updated_at?->diffForHumans() ?? '',
            'version' => $workflow->latestVersion?->number,
        ];

        $text = $replace['version']
            ? __('packstub-flow::flow.fields.last_saved_version', $replace)
            : __('packstub-flow::flow.fields.last_saved_by', $replace);

        return new HtmlString('<span class="hidden sm:inline">'.e($text).'</span>');
    }

    /**
     * The name of the user behind an actor string (Audit::actor(): the
     * email, or the id) when the panel's user model has one; the string
     * itself otherwise.
     */
    public static function actorName(string $actor): string
    {
        try {
            $guard = Filament::auth();
            $provider = $guard instanceof Guard ? $guard->getProvider() : null;
            $user = $provider?->retrieveByCredentials(['email' => $actor]) ?? $provider?->retrieveById($actor);
        } catch (\Throwable) {
            return $actor;
        }

        if ($user instanceof HasName) {
            return $user->getFilamentName();
        }

        $name = $user?->getAttribute('name');

        return is_string($name) && $name !== '' ? $name : $actor;
    }

    /**
     * Marks the page for the plugin's stylesheet: the Canvas / Runs /
     * Versions tabs sit at the left edge of the content.
     *
     * @return array<string, mixed>
     */
    public function getExtraBodyAttributes(): array
    {
        return ['class' => 'fi-flow-editor'];
    }

    protected function getHeaderActions(): array
    {
        return [
            static::testAction()->labeledFrom('sm'),
            WorkflowResource::runNowAction()->labeledFrom('sm'),
            // One of the two shows, following the canvas's unsaved changes
            // (the packstubFlowEditor Alpine store); on a phone the bar at
            // the bottom of the page (getFooter()) takes their place.
            $this->savedAction(),
            // Submits the page's form, so the canvas flushes its last change first.
            $this->getSaveFormAction()
                ->formId('form')
                ->extraAttributes([
                    'x-show' => '$store.packstubFlowEditor?.dirty',
                    'x-cloak' => true,
                    'class' => 'fi-flow-header-save',
                ]),
            ActionGroup::make([
                $this->settingsAction(),
                static::exportAction(),
                // Cmd / Ctrl + D duplicates on the canvas.
                DeleteAction::make()->keyBindings([]),
            ])->color('gray'),
        ];
    }

    /**
     * "Saved", in place of Save changes while the canvas has nothing to save.
     */
    public function savedAction(): Action
    {
        return Action::make('saved')
            ->label(__('packstub-flow::flow.editor.saved'))
            ->icon('heroicon-m-check')
            ->color('gray')
            ->disabled()
            ->extraAttributes([
                'x-show' => '! $store.packstubFlowEditor?.dirty',
                'class' => 'fi-flow-header-save',
            ]);
    }

    /**
     * On a phone, Save leaves the header: a bar at the bottom of the page
     * offers it (and Discard) while the canvas has unsaved changes.
     */
    public function getFooter(): ?View
    {
        return view('packstub-flow::editor.unsaved-bar');
    }

    /**
     * Save lives in the header, next to Settings.
     */
    protected function getFormActions(): array
    {
        return [];
    }

    /**
     * The canvas, Runs and Versions as tabs at the top of the page.
     */
    public function hasCombinedRelationManagerTabsWithContent(): bool
    {
        return true;
    }

    public function getContentTabLabel(): ?string
    {
        return __('packstub-flow::flow.editor.canvas');
    }

    public function getContentTabIcon(): string|BackedEnum|Htmlable|null
    {
        return 'heroicon-o-share';
    }

    /**
     * Name, description, Active and the run settings. Applying saves the
     * workflow with the canvas as it is, so switching it on runs the same
     * checks as before: when they fail, the workflow stays inactive, the
     * nodes concerned are marked and the other settings are kept.
     */
    public function settingsAction(): Action
    {
        return Action::make('settings')
            ->label(__('packstub-flow::flow.editor.settings'))
            ->icon('heroicon-o-cog-6-tooth')
            ->color('gray')
            ->modalHeading(__('packstub-flow::flow.editor.settings_heading'))
            ->modalWidth(Width::TwoExtraLarge)
            ->modalSubmitActionLabel(__('packstub-flow::flow.editor.settings_submit'))
            ->fillForm(fn (Workflow $record): array => [
                ...$record->attributesToArray(),
                'is_active' => (bool) ($this->data['is_active'] ?? $record->is_active),
            ])
            ->schema(WorkflowResource::detailsSchema())
            ->action(function (array $data, Workflow $record): void {
                $wasActive = (bool) ($this->data['is_active'] ?? false);

                $this->saveWithActive((bool) ($data['is_active'] ?? false));

                $record->fill(Arr::except($data, ['is_active']))->save();

                if ($record->wasChanged() || $this->data['is_active'] !== $wasActive) {
                    $this->getSavedNotification()?->send();
                }
            });
    }

    /**
     * The "Active" switch next to the workflow's name. Flipping it saves the
     * workflow with the canvas as it is, like the toggle in Settings.
     */
    public function activeAction(): Action
    {
        return Action::make('active')
            ->label(fn (): string => ($this->data['is_active'] ?? false)
                ? __('packstub-flow::flow.editor.active')
                : __('packstub-flow::flow.editor.inactive'))
            ->view('packstub-flow::actions.active-toggle')
            ->action(function (): void {
                $active = ! ($this->data['is_active'] ?? false);

                if ($this->saveWithActive($active)) {
                    Notification::make()
                        ->title($active ? __('packstub-flow::flow.editor.activated') : __('packstub-flow::flow.editor.deactivated'))
                        ->success()
                        ->send();
                }
            });
    }

    /**
     * Save with Active set to $active. When switching on fails the checks,
     * the workflow stays as it was, the nodes concerned are marked on the
     * canvas and a notification says why; returns false then.
     */
    protected function saveWithActive(bool $active): bool
    {
        $wasActive = (bool) ($this->data['is_active'] ?? false);
        $this->data['is_active'] = $active;

        try {
            $this->save(shouldSendSavedNotification: false);
        } catch (ValidationException) {
            $this->data['is_active'] = $wasActive;
            $this->resetErrorBag();

            Notification::make()
                ->title(__('packstub-flow::flow.editor.activation_refused'))
                ->body(__('packstub-flow::flow.editor.activation_refused_body'))
                ->danger()
                ->send();

            return false;
        }

        return true;
    }

    /**
     * Download the workflow as a JSON document (see WorkflowTransfer), to
     * import into another install or keep in version control.
     */
    public static function exportAction(): Action
    {
        return Action::make('export')
            ->label(__('packstub-flow::flow.transfer.export'))
            ->icon('heroicon-o-arrow-down-tray')
            ->color('gray')
            ->action(fn (Workflow $record): StreamedResponse => response()->streamDownload(
                function () use ($record): void {
                    echo WorkflowTransfer::toJson($record);
                },
                Str::slug($record->name).'.flow.json',
                ['Content-Type' => 'application/json'],
            ));
    }

    /**
     * The Runs and Versions tabs are separate Livewire components; tell them
     * a save happened so the new version (and any run it started) shows up
     * without a reload.
     */
    protected function afterSave(): void
    {
        $this->dispatch('packstub-flow-workflow-saved');
    }

    /**
     * Dry run from a trigger, with a record and / or a JSON payload: side
     * effects are simulated, conditions evaluated, and the step log shown.
     */
    public static function testAction(): Action
    {
        return Action::make('test')
            ->label(__('packstub-flow::flow.test.label'))
            ->icon('heroicon-o-beaker')
            ->color('gray')
            ->modalHeading(fn (Workflow $record): string => __('packstub-flow::flow.test.heading', ['name' => $record->name]))
            ->modalDescription(__('packstub-flow::flow.test.description'))
            ->modalSubmitActionLabel(__('packstub-flow::flow.test.submit'))
            ->modalWidth(Width::Large)
            ->visible(fn (Workflow $record): bool => $record->triggerNodes() !== [])
            ->schema(fn (Workflow $record): array => [
                Select::make('trigger')
                    ->label(__('packstub-flow::flow.test.trigger'))
                    ->options(fn (): array => static::triggerOptions($record))
                    ->default(fn (): ?string => array_key_first(static::triggerOptions($record)))
                    ->required()
                    ->live(),
                Select::make('model_class')
                    ->label(__('packstub-flow::flow.test.model'))
                    ->options(fn (): array => ModelFinder::options())
                    ->default(fn (Get $get): ?string => static::triggerModel($record, $get('trigger')))
                    ->searchable()
                    ->live(),
                TextInput::make('model_id')
                    ->label(__('packstub-flow::flow.test.model_id'))
                    ->helperText(__('packstub-flow::flow.test.model_id_help'))
                    ->visible(fn (Get $get): bool => filled($get('model_class'))),
                Textarea::make('payload')
                    ->label(__('packstub-flow::flow.test.payload'))
                    ->helperText(__('packstub-flow::flow.test.payload_help'))
                    ->placeholder('{"webhook": {"order": {"id": 42}}}')
                    ->rows(4)
                    ->rule(fn () => function (string $attribute, mixed $value, \Closure $fail): void {
                        if (is_string($value) && trim($value) !== '' && ! json_validate($value)) {
                            $fail(__('packstub-flow::flow.test.invalid_json'));
                        }
                    }),
            ])
            ->action(function (array $data, Workflow $record, $livewire): void {
                $payload = ['manual' => true, 'test' => true];

                if (filled($data['payload'] ?? null)) {
                    $payload = [...$payload, ...(array) json_decode((string) $data['payload'], true)];
                }

                if (filled($data['model_class'] ?? null) && filled($data['model_id'] ?? null)) {
                    $model = $data['model_class']::query()->find($data['model_id']);

                    if (! $model instanceof Model) {
                        Notification::make()->title(__('packstub-flow::flow.test.record_not_found'))->danger()->send();

                        return;
                    }

                    $payload['model'] = $model;
                    $payload['original'] = $model->getOriginal();
                    $payload['changes'] = [];
                }

                $run = Flow::test($record, $payload, $data['trigger'] ?? null);

                if (! $run) {
                    Notification::make()->title(__('packstub-flow::flow.test.no_trigger'))->danger()->send();

                    return;
                }

                $notification = Notification::make()->title(__('packstub-flow::flow.test.finished', ['status' => $run->status->getLabel()]));
                $run->status === RunStatus::Failed ? $notification->danger()->body($run->error) : $notification->success();
                $notification->send();

                // Open the result once this modal has closed.
                $livewire->js("setTimeout(() => \$wire.mountAction('viewTestRun', {run: '{$run->getKey()}'}), 300)");
            });
    }

    public function viewTestRunAction(): Action
    {
        return Action::make('viewTestRun')
            ->label(__('packstub-flow::flow.test.result'))
            ->modalHeading(__('packstub-flow::flow.test.result'))
            ->modalWidth(Width::ThreeExtraLarge)
            ->modalSubmitAction(false)
            ->modalCancelActionLabel(__('packstub-flow::flow.runs.close'))
            ->modalContent(function (array $arguments) {
                $run = Flow::runModel()::query()->find($arguments['run'] ?? null);

                return view('packstub-flow::runs.detail', ['run' => $run, 'canvasUrl' => null]);
            });
    }

    /** @return array<string, string> */
    protected static function triggerOptions(Workflow $workflow): array
    {
        $registry = app(NodeRegistry::class);
        $options = [];

        foreach ($workflow->triggerNodes() as $node) {
            $name = $registry->trigger((string) ($node['data']['identifier'] ?? ''))?->getName();
            $options[(string) $node['id']] = (string) ($node['data']['label'] ?? $name ?? $node['id']);
        }

        return $options;
    }

    protected static function triggerModel(Workflow $workflow, ?string $nodeId): ?string
    {
        foreach ($workflow->triggerNodes() as $node) {
            if ((string) $node['id'] === (string) $nodeId) {
                $class = $node['data']['config']['model_class'] ?? null;

                return is_string($class) && ($node['type'] ?? null) === NodeType::Trigger->value ? $class : null;
            }
        }

        return null;
    }
}
