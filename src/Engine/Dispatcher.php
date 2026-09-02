<?php

namespace Packstub\Flow\Engine;

use Illuminate\Database\Eloquent\Collection;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Flow;
use Packstub\Flow\Jobs\RunWorkflowJob;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Models\WorkflowTrigger;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Trigger;
use Packstub\Flow\Support\PayloadSerializer;

class Dispatcher
{
    public function __construct(protected NodeRegistry $registry) {}

    /**
     * @param  class-string<Trigger>  $triggerClass
     * @param  array<string, mixed>  $payload
     * @return array<int, WorkflowRun>
     */
    public function dispatch(string $triggerClass, array $payload = []): array
    {
        $trigger = $this->registry->trigger($triggerClass);

        if (! $trigger) {
            return [];
        }

        $triggerModel = Flow::triggerModel();

        /** @var Collection<int, WorkflowTrigger> $rows */
        $rows = $triggerModel::query()
            ->where('type', $triggerClass)
            ->whereHas('workflow', fn ($query) => $query->where('is_active', true))
            ->with('workflow')
            ->get();

        $runs = [];

        foreach ($rows as $row) {
            if (! $trigger->matches($row->config ?? [], $payload)) {
                continue;
            }

            $run = $this->run($row->workflow, $payload, $row->node_id);

            if ($run) {
                $runs[] = $run;
            }
        }

        return $runs;
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    public function run(Workflow $workflow, array $payload = [], ?string $startNodeId = null, ?bool $queue = null): ?WorkflowRun
    {
        if (! $workflow->is_active) {
            return null;
        }

        $startNodeId ??= $this->defaultStartNode($workflow);

        if ($startNodeId === null) {
            return null;
        }

        $queue ??= (bool) config('packstub-flow.queue.enabled', false);

        if ($queue) {
            $job = new RunWorkflowJob($workflow->getKey(), PayloadSerializer::serialize($payload), $startNodeId);

            if ($connection = config('packstub-flow.queue.connection')) {
                $job->onConnection($connection);
            }

            if ($queueName = config('packstub-flow.queue.queue')) {
                $job->onQueue($queueName);
            }

            dispatch($job);

            return null;
        }

        return (new Runner($workflow, $payload))->start($startNodeId);
    }

    protected function defaultStartNode(Workflow $workflow): ?string
    {
        $graph = Graph::fromDefinition($workflow->definition);
        $triggers = $graph->nodesOfType(NodeType::Trigger->value);

        return isset($triggers[0]['id']) ? (string) $triggers[0]['id'] : null;
    }
}
