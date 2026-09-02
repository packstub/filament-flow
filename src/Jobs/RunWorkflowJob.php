<?php

namespace Packstub\Flow\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Flow;
use Packstub\Flow\Support\PayloadSerializer;

class RunWorkflowJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable;

    /**
     * @param  array<string, mixed>  $payload  already serialized with PayloadSerializer
     */
    public function __construct(
        public string $workflowId,
        public array $payload,
        public string $startNodeId,
    ) {}

    public function handle(): void
    {
        $workflow = Flow::workflowModel()::query()->find($this->workflowId);

        if (! $workflow || ! $workflow->is_active) {
            return;
        }

        (new Runner($workflow, PayloadSerializer::unserialize($this->payload)))->start($this->startNodeId);
    }
}
