<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Support\Tenancy;

class ListWorkflows extends ListRecords
{
    protected static string $resource = WorkflowResource::class;

    protected function getHeaderActions(): array
    {
        $limit = static::workflowLimit();

        return [
            CreateAction::make()
                ->disabled(fn (): bool => $limit !== null && static::workflowCount() >= $limit)
                ->tooltip(fn (): ?string => $limit !== null && static::workflowCount() >= $limit ? __('packstub-flow::flow.actions.limit_reached', ['limit' => $limit]) : null),
        ];
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
