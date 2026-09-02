<?php

namespace Packstub\Flow\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;

/**
 * Fired when a workflow is switched off after failing too many times in a
 * row (its "Deactivate after N consecutive failures" setting).
 */
class WorkflowDeactivated
{
    use Dispatchable;

    public function __construct(
        public Workflow $workflow,
        public WorkflowRun $run,
        public int $failures,
    ) {}
}
