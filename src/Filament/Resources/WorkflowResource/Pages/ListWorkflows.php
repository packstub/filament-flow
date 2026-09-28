<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Forms\Components\FlowBuilder;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Support\Templates;
use Packstub\Flow\Support\Tenancy;
use Packstub\Flow\Support\WorkflowGenerator;

class ListWorkflows extends ListRecords
{
    protected static string $resource = WorkflowResource::class;

    /**
     * One button: the create page holds every way to start — a blank
     * canvas, a template, a description, an export.
     */
    protected function getHeaderActions(): array
    {
        $limit = static::workflowLimit();

        return [
            static::createAction()
                ->disabled(fn (): bool => $limit !== null && static::workflowCount() >= $limit)
                ->tooltip(fn (): ?string => $limit !== null && static::workflowCount() >= $limit ? __('packstub-flow::flow.actions.limit_reached', ['limit' => $limit]) : null),
        ];
    }

    /** The create page, with the blank canvas picked. */
    public static function createAction(): CreateAction
    {
        return CreateAction::make()
            ->label(__('packstub-flow::flow.actions.new'))
            ->url(fn (): string => WorkflowResource::getUrl('create'));
    }

    /**
     * Every way to start a workflow, for the empty table: a first visit
     * lands here, so the starters are shown where the rows will be, each
     * opening the create page with it picked.
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

    /** The create page with "Describe it" picked; offered when packstub/agents is installed. */
    public static function describeAction(): Action
    {
        return Action::make('describe')
            ->label(__('packstub-flow::flow.describe.action'))
            ->icon('heroicon-o-sparkles')
            ->color('gray')
            ->visible(fn (): bool => WorkflowGenerator::isAvailable())
            ->url(fn (): string => CreateWorkflow::startUrl(CreateWorkflow::DESCRIBE));
    }

    /** The create page with "Import" picked. */
    public static function importAction(): Action
    {
        return Action::make('import')
            ->label(__('packstub-flow::flow.transfer.import'))
            ->icon('heroicon-o-arrow-up-tray')
            ->color('gray')
            ->url(fn (): string => CreateWorkflow::startUrl(CreateWorkflow::IMPORT));
    }

    /** The create page with "Template" picked; offered when a template is usable. */
    public static function templateAction(): Action
    {
        return Action::make('template')
            ->label(__('packstub-flow::flow.templates.action'))
            ->icon('heroicon-o-rectangle-stack')
            ->color('gray')
            ->visible(fn (): bool => Templates::all() !== [])
            ->url(fn (): string => CreateWorkflow::startUrl(CreateWorkflow::TEMPLATE));
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
