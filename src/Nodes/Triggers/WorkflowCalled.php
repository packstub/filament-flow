<?php

namespace Packstub\Flow\Nodes\Triggers;

use Packstub\Flow\Nodes\Trigger;

/**
 * Started by the "Call workflow" action of another workflow, which passes its
 * own payload along.
 */
class WorkflowCalled extends Trigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.workflow_called.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.workflow_called.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-arrow-right-circle';
    }

    public function matches(array $config, array $payload): bool
    {
        // The dispatcher only offers this trigger to the workflow named by
        // the calling action; see CallWorkflow.
        return true;
    }
}
