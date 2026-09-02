<?php

namespace Packstub\Flow\Engine;

use Illuminate\Support\Facades\Date;
use Packstub\Flow\Contracts\Delayable;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Events\WorkflowCompleted;
use Packstub\Flow\Events\WorkflowFailed;
use Packstub\Flow\Events\WorkflowStarted;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Flow;
use Packstub\Flow\Jobs\ResumeWorkflowJob;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Support\PayloadSerializer;
use Throwable;

/**
 * Walks a workflow graph from a start node, recording every step on a
 * WorkflowRun. Conditions branch on their true/false handles, Delayable
 * actions hand the remainder of the branch to the queue.
 */
class Runner
{
    protected Graph $graph;

    protected NodeRegistry $registry;

    protected WorkflowRun $run;

    protected int $steps = 0;

    protected bool $paused = false;

    /**
     * @param  array<string, mixed>  $payload
     */
    public function __construct(
        protected Workflow $workflow,
        protected array $payload = [],
        ?Graph $graph = null,
    ) {
        $this->graph = $graph ?? Graph::fromDefinition($workflow->definition);
        $this->registry = app(NodeRegistry::class);
    }

    public function start(string $startNodeId): WorkflowRun
    {
        $startNode = $this->graph->node($startNodeId);

        $runModel = Flow::runModel();

        $this->run = $runModel::query()->create([
            'workflow_id' => $this->workflow->getKey(),
            'trigger_type' => $startNode['data']['identifier'] ?? null,
            'status' => RunStatus::Running,
            'context' => PayloadSerializer::summarize($this->payload),
            'steps' => [],
            'started_at' => Date::now(),
        ]);

        event(new WorkflowStarted($this->workflow, $this->run, $this->payload));

        $this->execute(function () use ($startNode, $startNodeId): void {
            if (! $startNode) {
                throw new WorkflowException("Start node [{$startNodeId}] not found in workflow.");
            }

            $this->visit($startNode, []);
        });

        return $this->run;
    }

    /**
     * Continue a delayed run at the given nodes.
     *
     * @param  array<int, string>  $nodeIds
     */
    public function resume(WorkflowRun $run, array $nodeIds): WorkflowRun
    {
        $this->run = $run;
        $this->run->decrement('pending_resumes');
        $this->run->refresh();
        $this->run->status = RunStatus::Running;

        $this->execute(function () use ($nodeIds): void {
            foreach ($nodeIds as $nodeId) {
                $node = $this->graph->node($nodeId);

                if (! $node) {
                    throw new WorkflowException("Cannot resume: node [{$nodeId}] no longer exists.");
                }

                $this->record($node, __('packstub-flow::flow.steps.resumed'));
                $this->visit($node, []);
            }
        });

        return $this->run;
    }

    public function getRun(): WorkflowRun
    {
        return $this->run;
    }

    /** @return array<string, mixed> */
    public function getPayload(): array
    {
        return $this->payload;
    }

    protected function execute(callable $callback): void
    {
        try {
            $callback();

            $this->finish($this->paused || $this->run->pending_resumes > 0 ? RunStatus::Delayed : RunStatus::Success);
        } catch (Throwable $exception) {
            $this->run->forceFill([
                'status' => RunStatus::Failed,
                'error' => $exception->getMessage(),
                'finished_at' => Date::now(),
            ])->save();

            report($exception);

            event(new WorkflowFailed($this->workflow, $this->run, $this->payload, $exception));
        }
    }

    protected function finish(RunStatus $status): void
    {
        $this->run->status = $status;

        if ($status->isFinished()) {
            $this->run->finished_at = Date::now();
        }

        $this->run->save();

        if ($status === RunStatus::Success) {
            event(new WorkflowCompleted($this->workflow, $this->run, $this->payload));
        }
    }

    /**
     * @param  array<string, mixed>  $node
     * @param  array<int, string>  $path  ids of the nodes above this one on the current branch
     */
    protected function visit(array $node, array $path): void
    {
        $id = (string) $node['id'];

        if (in_array($id, $path, true)) {
            throw new WorkflowException("Cycle detected at node [{$id}] ({$this->label($node)}).");
        }

        if (++$this->steps > (int) config('packstub-flow.max_steps', 1000)) {
            throw new WorkflowException('Workflow exceeded the maximum number of steps.');
        }

        $path[] = $id;
        $type = $node['type'] ?? null;

        $next = match ($type) {
            NodeType::Trigger->value => $this->visitTrigger($node),
            NodeType::Condition->value => $this->visitCondition($node),
            NodeType::Action->value => $this->visitAction($node),
            default => throw new WorkflowException("Unknown node type [{$type}] at node [{$id}]."),
        };

        foreach ($next as $child) {
            $this->visit($child, $path);
        }
    }

    /** @return array<int, array<string, mixed>> */
    protected function visitTrigger(array $node): array
    {
        $this->record($node, __('packstub-flow::flow.steps.triggered'));

        return $this->graph->next($node['id']);
    }

    /** @return array<int, array<string, mixed>> */
    protected function visitCondition(array $node): array
    {
        $identifier = $node['data']['identifier'] ?? null;
        $condition = $identifier ? $this->registry->condition($identifier) : null;

        if (! $condition) {
            throw new WorkflowException("Condition [{$identifier}] is not registered.");
        }

        $result = $condition->evaluate($node['data']['config'] ?? [], $this->payload);

        $this->record($node, __($result ? 'packstub-flow::flow.steps.condition_true' : 'packstub-flow::flow.steps.condition_false'));

        return $this->graph->next($node['id'], $result ? 'true' : 'false');
    }

    /** @return array<int, array<string, mixed>> */
    protected function visitAction(array $node): array
    {
        $identifier = $node['data']['identifier'] ?? null;
        $action = $identifier ? $this->registry->action($identifier) : null;

        if (! $action) {
            throw new WorkflowException("Action [{$identifier}] is not registered.");
        }

        $config = $node['data']['config'] ?? [];

        if ($action instanceof Delayable) {
            $seconds = $action->getDelaySeconds($config, $this->payload);

            if ($seconds !== null && $seconds > 0) {
                return $this->pause($node, $seconds);
            }
        }

        $action->handle($config, $this->payload);

        $this->record($node, __('packstub-flow::flow.steps.action_done'));

        return $this->graph->next($node['id']);
    }

    /**
     * Schedule the nodes after a Delayable action and stop this branch.
     *
     * @param  array<string, mixed>  $node
     * @return array<int, array<string, mixed>>
     */
    protected function pause(array $node, int $seconds): array
    {
        $nextIds = $this->graph->nextIds($node['id']);

        if ($nextIds === []) {
            $this->record($node, __('packstub-flow::flow.steps.delay_skipped'));

            return [];
        }

        $this->paused = true;
        $this->run->increment('pending_resumes');

        $this->record($node, __('packstub-flow::flow.steps.delayed', ['seconds' => $seconds]));

        $job = new ResumeWorkflowJob(
            $this->run->getKey(),
            PayloadSerializer::serialize($this->payload),
            $nextIds,
            $this->graph->toArray(),
        );

        if ($connection = config('packstub-flow.queue.connection')) {
            $job->onConnection($connection);
        }

        if ($queue = config('packstub-flow.queue.queue')) {
            $job->onQueue($queue);
        }

        dispatch($job->delay(Date::now()->addSeconds($seconds)));

        return [];
    }

    /**
     * @param  array<string, mixed>  $node
     */
    protected function record(array $node, string $message): void
    {
        $steps = $this->run->steps ?? [];

        $steps[] = [
            'at' => Date::now()->toIso8601String(),
            'node_id' => (string) $node['id'],
            'type' => $node['type'] ?? null,
            'label' => $this->label($node),
            'message' => $message,
        ];

        $this->run->steps = $steps;
        $this->run->save();
    }

    /** @param array<string, mixed> $node */
    protected function label(array $node): string
    {
        return (string) ($node['data']['label'] ?? $node['id']);
    }
}
