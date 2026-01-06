<?php

namespace Xlited\LaravelFlow\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Xlited\LaravelFlow\Models\Workflow;
use Xlited\LaravelFlow\Models\WorkflowLog;
use Xlited\LaravelFlow\Engines\WorkflowRunner;

class ResumeWorkflowJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public string $workflowId,
        public string $logId,
        public array $payload,
        public string $resumeFromNodeId,
        public array $nodes,
        public array $edges,
    ) {
    }

    public function handle(): void
    {
        $workflow = Workflow::find($this->workflowId);
        $log = WorkflowLog::find($this->logId);

        if (!$workflow || !$log) {
            return;
        }

        // Create a new runner instance and resume from the specified node
        $runner = new WorkflowRunner($workflow, $this->payload);
        $runner->resumeFrom($this->resumeFromNodeId, $this->nodes, $this->edges, $log);
    }
}
