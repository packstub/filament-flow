<?php

namespace Packstub\Flow\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;

class WorkflowCompleted
{
    use Dispatchable;

    /**
     * @param  array<string, mixed>  $payload
     */
    public function __construct(
        public Workflow $workflow,
        public WorkflowRun $run,
        public array $payload,
    ) {}
}
