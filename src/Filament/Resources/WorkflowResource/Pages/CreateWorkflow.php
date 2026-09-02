<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Support\Tenancy;

class CreateWorkflow extends CreateRecord
{
    protected static string $resource = WorkflowResource::class;

    protected static bool $canCreateAnother = false;

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
