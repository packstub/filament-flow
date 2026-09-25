<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Width;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Support\Tenancy;

class CreateWorkflow extends CreateRecord
{
    protected static string $resource = WorkflowResource::class;

    protected static bool $canCreateAnother = false;

    protected Width|string|null $maxContentWidth = Width::ThreeExtraLarge;

    /**
     * Name and description only: the workflow starts inactive and opens in
     * the full-page editor, where the canvas is drawn and Settings
     * switches it on.
     */
    public function form(Schema $schema): Schema
    {
        return $schema->components(WorkflowResource::detailsSchema(withActive: false));
    }

    protected function getRedirectUrl(): string
    {
        return static::getResource()::getUrl('edit', ['record' => $this->getRecord()]);
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    protected function mutateFormDataBeforeCreate(array $data): array
    {
        if ($tenant = Tenancy::panelTenant()) {
            $data['tenant_type'] = $tenant->getMorphClass();
            $data['tenant_id'] = (string) $tenant->getKey();
        }

        return $data;
    }

    protected function beforeCreate(): void
    {
        $limit = ListWorkflows::workflowLimit();

        if ($limit !== null && ListWorkflows::workflowCount() >= $limit) {
            Notification::make()->title(__('packstub-flow::flow.actions.limit_reached', ['limit' => $limit]))->danger()->send();

            $this->halt();
        }
    }
}
