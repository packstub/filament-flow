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
        // Only the "Call workflow" action starts these, through Flow::run()
        // with the node id; a broadcast Flow::dispatch() must not start every
        // workflow that has this trigger.
        return false;
    }
}
