<?php

namespace Packstub\Flow\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueueAfterCommit;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Flow;
use Packstub\Flow\Support\PayloadSerializer;

/**
 * Runs a workflow on the queue. Dispatched after the surrounding database
 * transaction commits, so a run never sees a record that is rolled back.
 * A run that fails is recorded as failed, not retried: retrying would repeat
 * the actions that already ran.
 */
class RunWorkflowJob implements ShouldQueueAfterCommit
{
    use Dispatchable, InteractsWithQueue, Queueable;

    public int $tries = 1;

    public int $timeout;

    /**
     * @param  array<string, mixed>  $payload  already serialized with PayloadSerializer
     */
    public function __construct(
        public string $workflowId,
        public array $payload,
        public string $startNodeId,
    ) {
        $this->timeout = (int) config('packstub-flow.queue.timeout', 300);
    }

    public function handle(): void
    {
        $workflow = Flow::workflowModel()::query()->find($this->workflowId);

        if (! $workflow || ! $workflow->is_active) {
            return;
        }

        (new Runner($workflow, PayloadSerializer::unserialize($this->payload)))->start($this->startNodeId);
    }
}
