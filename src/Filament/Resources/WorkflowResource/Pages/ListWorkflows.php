<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\CreateAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Support\Enums\Width;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Forms\Components\FlowBuilder;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\AskAi;
use Packstub\Flow\Support\Templates;
use Packstub\Flow\Support\Tenancy;
use Packstub\Flow\Support\WorkflowGenerator;
use Packstub\Flow\Support\WorkflowTransfer;

class ListWorkflows extends ListRecords
{
    protected static string $resource = WorkflowResource::class;

    /**
     * One primary button (a blank canvas), the model-drafted way beside it
     * when the engine is installed, and the rarer starters — a template,
     * an import — behind the more-actions menu at the end, where its
     * dropdown hangs from the right edge.
     */
    protected function getHeaderActions(): array
    {
        $limit = static::workflowLimit();
        $full = fn (): bool => $limit !== null && static::workflowCount() >= $limit;
        $tooltip = fn (): ?string => $full() ? __('packstub-flow::flow.actions.limit_reached', ['limit' => $limit]) : null;

        return [
            static::describeAction()->disabled($full)->tooltip($tooltip),
            static::createAction()->disabled($full)->tooltip($tooltip),
            ActionGroup::make([
                static::templateAction()->disabled($full),
                static::importAction()->disabled($full),
            ])->tooltip($tooltip),
        ];
    }

    /**
     * The blank-canvas starter, in sentence case like the others.
     */
    public static function createAction(): CreateAction
    {
        return CreateAction::make()->label(__('packstub-flow::flow.actions.new'));
    }

    /**
     * Every way to start a workflow, for the empty table: a first visit
     * lands here, so the starters are shown where the rows will be.
     *
     * @return array<int, Action>
     */
    public static function starterActions(): array
    {
        return [
            static::createAction(),
            static::describeAction(),
            static::templateAction(),
            static::importAction(),
        ];
    }

    /**
     * Describe the workflow in a sentence; a model drafts it from the
     * registered nodes (WorkflowGenerator) and it opens inactive, with the
     * nodes still to fill in marked. Offered when packstub/agents is
     * installed, like the Ask AI action.
     */
    public static function describeAction(): Action
    {
        return Action::make('describe')
            ->label(__('packstub-flow::flow.describe.action'))
            ->icon('heroicon-o-sparkles')
            ->color('gray')
            ->visible(fn (): bool => WorkflowGenerator::isAvailable())
            ->modalHeading(__('packstub-flow::flow.describe.heading'))
            ->modalDescription(__('packstub-flow::flow.describe.description'))
            ->modalSubmitActionLabel(__('packstub-flow::flow.describe.submit'))
            ->modalWidth(Width::Large)
            ->schema([
                Textarea::make('description')
                    ->label(__('packstub-flow::flow.describe.field'))
                    ->placeholder(__('packstub-flow::flow.describe.placeholder'))
                    ->helperText(__('packstub-flow::flow.describe.help'))
                    ->rows(4)
                    ->required()
                    ->maxLength(2000),
                Select::make('model')
                    ->label(__('packstub-flow::flow.nodes.ask_ai.model'))
                    ->options(fn (): array => [AskAi::DEFAULT_MODEL => __('packstub-flow::flow.nodes.ask_ai.default_model')] + AskAi::modelOptions())
                    ->default(AskAi::DEFAULT_MODEL),
            ])
            ->action(function (array $data, Action $action): void {
                $workflow = static::createFrom(fn (): Workflow => WorkflowGenerator::generate((string) ($data['description'] ?? ''), $data['model'] ?? null, static::tenantAttributes()), $action);

                Notification::make()->title(__('packstub-flow::flow.describe.created', ['name' => $workflow->name]))->success()->send();

                $action->redirect(static::reviewUrl($workflow));
            });
    }

    /**
     * Create an inactive workflow from an export: an uploaded file or
     * pasted JSON. The panel's tenant, if any, owns it.
     */
    public static function importAction(): Action
    {
        return Action::make('import')
            ->label(__('packstub-flow::flow.transfer.import'))
            ->icon('heroicon-o-arrow-up-tray')
            ->color('gray')
            ->modalHeading(__('packstub-flow::flow.transfer.import_heading'))
            ->modalDescription(__('packstub-flow::flow.transfer.import_description'))
            ->modalSubmitActionLabel(__('packstub-flow::flow.transfer.submit'))
            ->modalWidth(Width::Large)
            ->schema([
                FileUpload::make('file')
                    ->label(__('packstub-flow::flow.transfer.file'))
                    ->acceptedFileTypes(['application/json', 'text/plain', '.json'])
                    ->storeFiles(false)
                    ->maxSize(1024),
                Textarea::make('json')
                    ->label(__('packstub-flow::flow.transfer.json'))
                    ->rows(6)
                    ->requiredWithout('file'),
            ])
            ->action(function (array $data, Action $action): void {
                $file = $data['file'] ?? null;
                $json = $file instanceof TemporaryUploadedFile ? (string) $file->get() : (string) ($data['json'] ?? '');

                if (trim($json) === '') {
                    Notification::make()->title(__('packstub-flow::flow.transfer.nothing'))->danger()->send();
                    $action->halt();
                }

                $workflow = static::createFrom(fn (): Workflow => WorkflowTransfer::import($json, static::tenantAttributes()), $action);

                Notification::make()->title(__('packstub-flow::flow.transfer.imported', ['name' => $workflow->name]))->success()->send();

                $action->redirect(static::reviewUrl($workflow));
            });
    }

    /**
     * Pick one of the templates (built-in, config, plugin) and create an
     * inactive workflow from it.
     */
    public static function templateAction(): Action
    {
        return Action::make('template')
            ->label(__('packstub-flow::flow.templates.action'))
            ->icon('heroicon-o-rectangle-stack')
            ->color('gray')
            ->visible(fn (): bool => Templates::all() !== [])
            ->modalHeading(__('packstub-flow::flow.templates.heading'))
            ->modalDescription(__('packstub-flow::flow.templates.description'))
            ->modalSubmitActionLabel(__('packstub-flow::flow.templates.submit'))
            ->modalWidth(Width::Large)
            ->schema(function (): array {
                $options = [];
                $descriptions = [];

                $byCategory = Templates::byCategory();
                // The category prefix only helps to tell groups apart — a
                // picker with a single group reads better without it.
                $prefixCategory = count($byCategory) > 1;

                foreach ($byCategory as $category => $templates) {
                    foreach ($templates as $key => $template) {
                        $options[$key] = ($prefixCategory ? $category.' — ' : '').$template['name'];
                        $descriptions[$key] = (string) ($template['description'] ?? '');
                    }
                }

                return [
                    Radio::make('template')
                        ->label(__('packstub-flow::flow.templates.template'))
                        ->options($options)
                        ->descriptions($descriptions)
                        ->required()
                        ->live(),
                    TextInput::make('name')
                        ->label(__('packstub-flow::flow.templates.name'))
                        ->default(fn (Get $get): ?string => Templates::find((string) $get('template'))['name'] ?? null)
                        ->placeholder(fn (Get $get): ?string => Templates::find((string) $get('template'))['name'] ?? null)
                        ->maxLength(120),
                ];
            })
            ->action(function (array $data, Action $action): void {
                $attributes = static::tenantAttributes();

                if (filled($data['name'] ?? null)) {
                    $attributes['name'] = (string) $data['name'];
                }

                $workflow = static::createFrom(fn (): Workflow => Templates::create((string) $data['template'], $attributes), $action);

                Notification::make()->title(__('packstub-flow::flow.templates.created', ['name' => $workflow->name]))->success()->send();

                $action->redirect(static::reviewUrl($workflow));
            });
    }

    /**
     * Run the creation, turning a refused document into a notification.
     *
     * @param  \Closure(): Workflow  $create
     */
    protected static function createFrom(\Closure $create, Action $action): Workflow
    {
        try {
            return $create();
        } catch (WorkflowException|\InvalidArgumentException $e) {
            Notification::make()->title($e->getMessage())->danger()->send();
            $action->halt();

            throw $e;
        }
    }

    /**
     * The edit page of a workflow that was just created inactive from a
     * description, a template or an import: the canvas opens with the
     * nodes still to fill in marked (FlowBuilder::REVIEW_QUERY).
     */
    public static function reviewUrl(Workflow $workflow): string
    {
        return WorkflowResource::getUrl('edit', ['record' => $workflow, FlowBuilder::REVIEW_QUERY => 1]);
    }

    /** @return array<string, string> */
    protected static function tenantAttributes(): array
    {
        $tenant = Tenancy::panelTenant();

        return $tenant ? ['tenant_type' => $tenant->getMorphClass(), 'tenant_id' => (string) $tenant->getKey()] : [];
    }

    public static function workflowLimit(): ?int
    {
        try {
            return FlowPlugin::get()->getMaxWorkflows(Tenancy::panelTenant());
        } catch (\Throwable) {
            return null;
        }
    }

    public static function workflowCount(): int
    {
        return Flow::workflowModel()::query()->when(Tenancy::panelTenant(), fn ($query, $tenant) => $query->ofTenant($tenant))->count();
    }
}
