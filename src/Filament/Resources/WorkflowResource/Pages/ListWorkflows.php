<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Support\Enums\Width;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Support\Templates;
use Packstub\Flow\Support\Tenancy;
use Packstub\Flow\Support\WorkflowTransfer;

class ListWorkflows extends ListRecords
{
    protected static string $resource = WorkflowResource::class;

    protected function getHeaderActions(): array
    {
        $limit = static::workflowLimit();
        $full = fn (): bool => $limit !== null && static::workflowCount() >= $limit;
        $tooltip = fn (): ?string => $full() ? __('packstub-flow::flow.actions.limit_reached', ['limit' => $limit]) : null;

        return [
            static::templateAction()->disabled($full)->tooltip($tooltip),
            static::importAction()->disabled($full)->tooltip($tooltip),
            CreateAction::make()->disabled($full)->tooltip($tooltip),
        ];
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

                $action->redirect(WorkflowResource::getUrl('edit', ['record' => $workflow]));
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
            ->icon('heroicon-o-sparkles')
            ->color('gray')
            ->visible(fn (): bool => Templates::all() !== [])
            ->modalHeading(__('packstub-flow::flow.templates.heading'))
            ->modalDescription(__('packstub-flow::flow.templates.description'))
            ->modalSubmitActionLabel(__('packstub-flow::flow.templates.submit'))
            ->modalWidth(Width::Large)
            ->schema(function (): array {
                $options = [];
                $descriptions = [];

                foreach (Templates::byCategory() as $category => $templates) {
                    foreach ($templates as $key => $template) {
                        $options[$key] = $category.' — '.$template['name'];
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

                $action->redirect(WorkflowResource::getUrl('edit', ['record' => $workflow]));
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
