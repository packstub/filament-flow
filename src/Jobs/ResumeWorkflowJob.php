<?php

namespace Packstub\Flow\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueueAfterCommit;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Packstub\Flow\Engine\Graph;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Flow;
use Packstub\Flow\Support\PayloadSerializer;

/**
 * Continues a run after a Wait step. Carries a snapshot of the graph so a
 * workflow edited during the delay does not change a run already in flight.
 */
class ResumeWorkflowJob implements ShouldQueueAfterCommit
{
    use Dispatchable, InteractsWithQueue, Queueable;

    public int $tries = 1;

    public int $timeout;

    /**
     * @param  array<string, mixed>  $payload  already serialized with PayloadSerializer
     * @param  array<int, string>  $nodeIds
     * @param  array{nodes: array<int, array<string, mixed>>, edges: array<int, array<string, mixed>>}  $graph
     */
    public function __construct(
        public string $runId,
        public array $payload,
        public array $nodeIds,
        public array $graph,
    ) {
        $this->timeout = (int) config('packstub-flow.queue.timeout', 300);
    }

    public function handle(): void
    {
        $run = Flow::runModel()::query()->with('workflow')->find($this->runId);

        if (! $run || ! $run->workflow) {
            return;
        }

        $runner = new Runner(
            $run->workflow,
            PayloadSerializer::unserialize($this->payload),
            new Graph($this->graph['nodes'] ?? [], $this->graph['edges'] ?? []),
        );

        $runner->resume($run, $this->nodeIds);
    }
}
