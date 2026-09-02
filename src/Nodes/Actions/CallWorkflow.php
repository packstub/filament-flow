<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Triggers\WorkflowCalled;
use Packstub\Flow\Support\Tenancy;

/**
 * Starts another workflow from its "Called by another workflow" trigger,
 * passing the current payload along.
 */
class CallWorkflow extends Action
{
    public const MAX_DEPTH = 10;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.call_workflow.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.call_workflow.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-arrow-path';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('workflow_id')
                ->label(__('packstub-flow::flow.nodes.call_workflow.workflow'))
                ->options(fn (): array => Flow::workflowModel()::query()->forTenant(Tenancy::panelTenant())->orderBy('name')->pluck('name', 'id')->all())
                ->searchable()
                ->required()
                ->helperText(__('packstub-flow::flow.nodes.call_workflow.workflow_help')),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $id = $config['workflow_id'] ?? null;
        $workflow = $id ? Flow::workflowModel()::query()->withoutGlobalScopes()->find($id) : null;

        if (! $workflow) {
            throw new WorkflowException('The workflow to call no longer exists.');
        }

        if (! $workflow->is_active) {
            throw new WorkflowException("Workflow [{$workflow->name}] is inactive and cannot be called.");
        }

        $node = $workflow->triggerNode(WorkflowCalled::class);

        if (! $node) {
            throw new WorkflowException("Workflow [{$workflow->name}] has no \"Called by another workflow\" trigger.");
        }

        $depth = (int) ($payload['flow_depth'] ?? 0) + 1;

        if ($depth > self::MAX_DEPTH) {
            throw new WorkflowException('Workflows are calling each other more than '.self::MAX_DEPTH.' levels deep.');
        }

        $run = Flow::run($workflow, [...$payload, 'flow_depth' => $depth], (string) $node['id']);

        if ($run && $run->status === RunStatus::Failed) {
            throw new WorkflowException("Called workflow [{$workflow->name}] failed: {$run->error}");
        }
    }
}
