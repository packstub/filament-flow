<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Support\Enums\Width;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
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

    /**
     * "Last saved by jane@acme.test 2 hours ago" under the title.
     */
    public function getSubheading(): string|Htmlable|null
    {
        /** @var Workflow $workflow */
        $workflow = $this->getRecord();

        if (! $workflow->updated_by) {
            return null;
        }

        return __('packstub-flow::flow.fields.last_saved_by', ['by' => $workflow->updated_by, 'at' => $workflow->updated_at?->diffForHumans() ?? '']);
    }

    protected function getHeaderActions(): array
    {
        return [
            static::testAction(),
            WorkflowResource::runNowAction(),
            static::exportAction(),
            DeleteAction::make(),
        ];
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
