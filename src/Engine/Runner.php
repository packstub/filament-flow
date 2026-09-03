<?php

namespace Packstub\Flow\Engine;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;
use Packstub\Flow\Contracts\Delayable;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Events\WorkflowCompleted;
use Packstub\Flow\Events\WorkflowDeactivated;
use Packstub\Flow\Events\WorkflowFailed;
use Packstub\Flow\Events\WorkflowStarted;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Flow;
use Packstub\Flow\Jobs\ResumeWorkflowJob;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Support\PayloadSerializer;
use Packstub\Flow\Support\Placeholders;
use Throwable;

/**
 * Walks a workflow graph from a start node, recording every step on a
 * WorkflowRun. Conditions branch on their true/false handles, Delayable
 * actions hand the remainder of the branch to the queue, and an action's
 * output travels down its branch as {{ last.* }} / {{ outputs.<id>.* }}.
 *
 * Branches leaving the same node run one after another, in edge order. A
 * node reached again through another branch (a join) runs once.
 */
class Runner
{
    /** Node config keys reserved for the runner (see ManageNode's "Error handling" section). */
    public const RETRIES = '_retries';

    public const RETRY_AFTER = '_retry_after';

    public const ON_ERROR = '_on_error';

    /** How many runs are executing synchronously in this process, one inside another. */
    protected static int $depth = 0;

    protected Graph $graph;

    protected NodeRegistry $registry;

    protected WorkflowRun $run;

    protected int $steps = 0;

    protected bool $paused = false;

    /** @var array<string, true> */
    protected array $visited = [];

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

        $subject = $this->payload['model'] ?? null;

        $this->run = $runModel::query()->create([
            'workflow_id' => $this->workflow->getKey(),
            'trigger_type' => $startNode['data']['identifier'] ?? null,
            'subject_type' => $subject instanceof Model ? $subject::class : null,
            'subject_id' => $subject instanceof Model ? $subject->getKey() : null,
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

            $this->visit($startNode, [], $this->payload);
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

        // Another branch failed the run while this one was waiting: leave the
        // failure as it is instead of running the rest and reporting success.
        if ($this->run->status === RunStatus::Failed) {
            return $this->run;
        }

        $this->run->status = RunStatus::Running;

        $this->execute(function () use ($nodeIds): void {
            foreach ($nodeIds as $nodeId) {
                $node = $this->graph->node($nodeId);

                if (! $node) {
                    throw new WorkflowException("Cannot resume: node [{$nodeId}] no longer exists.");
                }

                $this->record($node, __('packstub-flow::flow.steps.resumed'));
                $this->visit($node, [], $this->payload);
            }
        });

        return $this->run;
    }

    public function getRun(): WorkflowRun
    {
        return $this->run;
    }

    public static function depth(): int
    {
        return static::$depth;
    }

    /** @return array<string, mixed> */
    public function getPayload(): array
    {
        return $this->payload;
    }

    protected function execute(callable $callback): void
    {
        static::$depth++;

        try {
            $callback();

            $this->run->refresh();

            $this->finish($this->paused || $this->run->pending_resumes > 0 ? RunStatus::Delayed : RunStatus::Success);
        } catch (Throwable $exception) {
            $this->fail($exception);
        } finally {
            static::$depth--;
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
            if ($this->workflow->consecutive_failures > 0) {
                $this->workflow->newQuery()->whereKey($this->workflow->getKey())->update(['consecutive_failures' => 0]);
                $this->workflow->consecutive_failures = 0;
            }

            event(new WorkflowCompleted($this->workflow, $this->run, $this->payload));
        }
    }

    protected function fail(Throwable $exception): void
    {
        $this->run->forceFill([
            'status' => RunStatus::Failed,
            'error' => Placeholders::mask($exception->getMessage()),
            'finished_at' => Date::now(),
        ])->save();

        report($exception);

        event(new WorkflowFailed($this->workflow, $this->run, $this->payload, $exception));

        $this->countFailure();
    }

    /**
     * "Deactivate after N consecutive failures": count this failure and
     * switch the workflow off when the limit is reached.
     */
    protected function countFailure(): void
    {
        $limit = (int) ($this->workflow->max_consecutive_failures ?? 0);

        $this->workflow->newQuery()->whereKey($this->workflow->getKey())->increment('consecutive_failures');
        $failures = (int) $this->workflow->newQuery()->whereKey($this->workflow->getKey())->value('consecutive_failures');
        $this->workflow->consecutive_failures = $failures;

        if ($limit <= 0 || $failures < $limit || ! $this->workflow->is_active) {
            return;
        }

        $this->workflow->update(['is_active' => false]);

        event(new WorkflowDeactivated($this->workflow, $this->run, $failures));

        $this->workflow->notifyAdmins(
            __('packstub-flow::flow.notifications.deactivated_title', ['name' => $this->workflow->name]),
            __('packstub-flow::flow.notifications.deactivated_body', ['count' => $failures, 'error' => (string) $this->run->error]),
            'danger',
        );
    }

    /**
     * @param  array<string, mixed>  $node
     * @param  array<int, string>  $path  ids of the nodes above this one on the current branch
     * @param  array<string, mixed>  $payload  the payload as seen by this branch (trigger data plus earlier outputs)
     */
    protected function visit(array $node, array $path, array $payload): void
    {
        $id = (string) $node['id'];

        if (in_array($id, $path, true)) {
            throw new WorkflowException("Cycle detected at node [{$id}] ({$this->label($node)}).");
        }

        if (isset($this->visited[$id])) {
            // A join: two branches lead here. It already ran for the first one.
            return;
        }

        if (++$this->steps > (int) config('packstub-flow.max_steps', 1000)) {
            throw new WorkflowException('Workflow exceeded the maximum number of steps.');
        }

        $this->visited[$id] = true;
        $path[] = $id;
        $type = $node['type'] ?? null;
        $startedAt = microtime(true);

        try {
            [$next, $payload] = match ($type) {
                NodeType::Trigger->value => [$this->visitTrigger($node, $startedAt), $payload],
                NodeType::Condition->value => [$this->visitCondition($node, $payload, $startedAt), $payload],
                NodeType::Action->value => $this->visitAction($node, $payload, $startedAt),
                default => throw new WorkflowException("Unknown node type [{$type}] at node [{$id}]."),
            };
        } catch (Throwable $exception) {
            $this->record($node, $exception->getMessage(), 'failed', $startedAt);

            throw $exception;
        }

        foreach ($next as $child) {
            $this->visit($child, $path, $payload);
        }
    }

    /** @return array<int, array<string, mixed>> */
    protected function visitTrigger(array $node, float $startedAt): array
    {
        $this->record($node, __('packstub-flow::flow.steps.triggered'), startedAt: $startedAt);

        return $this->graph->next($node['id']);
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<int, array<string, mixed>>
     */
    protected function visitCondition(array $node, array $payload, float $startedAt): array
    {
        $identifier = $node['data']['identifier'] ?? null;
        $condition = $identifier ? $this->registry->condition($identifier) : null;

        if (! $condition) {
            throw new WorkflowException("Condition [{$identifier}] is not registered.");
        }

        $result = $condition->evaluate($node['data']['config'] ?? [], $payload);

        $this->record($node, __($result ? 'packstub-flow::flow.steps.condition_true' : 'packstub-flow::flow.steps.condition_false'), startedAt: $startedAt);

        return $this->graph->next($node['id'], $result ? 'true' : 'false');
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array{0: array<int, array<string, mixed>>, 1: array<string, mixed>}
     */
    protected function visitAction(array $node, array $payload, float $startedAt): array
    {
        $identifier = $node['data']['identifier'] ?? null;
        $action = $identifier ? $this->registry->action($identifier) : null;

        if (! $action) {
            throw new WorkflowException("Action [{$identifier}] is not registered.");
        }

        $config = $node['data']['config'] ?? [];

        if ($action instanceof Delayable) {
            $seconds = $action->getDelaySeconds($config, $payload);

            if ($seconds !== null && $seconds > 0) {
                return [$this->pause($node, $seconds, $payload), $payload];
            }
        }

        if (! $this->handleWithRetries($node, $action, $config, $payload)) {
            return [$this->graph->next($node['id']), $payload];
        }

        $output = $action->pullOutput();

        if ($output !== null) {
            $payload['outputs'][(string) $node['id']] = $output;
            $payload['last'] = $output;
        }

        $this->record($node, __('packstub-flow::flow.steps.action_done'), startedAt: $startedAt, output: $output);

        return [$this->graph->next($node['id']), $payload];
    }

    /**
     * Run an action, retrying it the number of times set on the node. When the
     * node is set to continue on error the failure is logged as a step and the
     * branch goes on (false is returned so no "Done" step follows); otherwise
     * the exception fails the run.
     *
     * @param  array<string, mixed>  $node
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    protected function handleWithRetries(array $node, Action $action, array $config, array $payload): bool
    {
        $retries = max(0, min((int) ($config[self::RETRIES] ?? 0), 10));
        $retryAfter = max(0, (int) ($config[self::RETRY_AFTER] ?? 0));
        $onError = (string) ($config[self::ON_ERROR] ?? 'fail');

        $config = array_diff_key($config, array_flip([self::RETRIES, self::RETRY_AFTER, self::ON_ERROR]));

        for ($attempt = 1; ; $attempt++) {
            try {
                Placeholders::allowSecrets(fn () => $action->handle($config, $payload));

                return true;
            } catch (Throwable $exception) {
                if ($attempt <= $retries) {
                    $this->record($node, __('packstub-flow::flow.steps.retrying', ['attempt' => $attempt, 'max' => $retries + 1, 'error' => $exception->getMessage()]), 'retry');

                    if ($retryAfter > 0) {
                        sleep($retryAfter);
                    }

                    continue;
                }

                if ($onError === 'continue') {
                    report($exception);
                    $this->record($node, __('packstub-flow::flow.steps.continued', ['error' => $exception->getMessage()]), 'failed');

                    return false;
                }

                throw $exception;
            }
        }
    }

    /**
     * Schedule the nodes after a Delayable action and stop this branch.
     *
     * @param  array<string, mixed>  $node
     * @param  array<string, mixed>  $payload
     * @return array<int, array<string, mixed>>
     */
    protected function pause(array $node, int $seconds, array $payload): array
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
            PayloadSerializer::serialize($payload),
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
     * Append a step to the run. Steps are re-read under a lock so two
     * resumed branches finishing at the same time do not overwrite each other.
     *
     * @param  array<string, mixed>  $node
     * @param  array<string, mixed>|null  $output
     */
    protected function record(array $node, string $message, string $status = 'ok', ?float $startedAt = null, ?array $output = null): void
    {
        $step = array_filter([
            'at' => Date::now()->toIso8601String(),
            'node_id' => (string) $node['id'],
            'type' => $node['type'] ?? null,
            'label' => $this->label($node),
            'message' => Placeholders::mask($message),
            'status' => $status,
            'duration_ms' => $startedAt !== null ? (int) round((microtime(true) - $startedAt) * 1000) : null,
            'output' => $output !== null ? $this->truncateOutput(Placeholders::mask($output)) : null,
        ], fn ($value): bool => $value !== null);

        $this->run->getConnection()->transaction(function () use ($step): void {
            $fresh = $this->run->newQuery()->lockForUpdate()->find($this->run->getKey());

            $steps = $fresh?->steps ?? $this->run->steps ?? [];
            $steps[] = $step;

            $this->run->steps = $steps;
            $this->run->save();
        });
    }

    /**
     * @param  array<string, mixed>  $output
     * @return array<string, mixed>
     */
    protected function truncateOutput(array $output): array
    {
        $max = (int) config('packstub-flow.max_output_bytes', 16384);
        $encoded = json_encode($output);

        if ($encoded === false || strlen($encoded) <= $max) {
            return $output;
        }

        return ['truncated' => true, 'preview' => mb_strcut($encoded, 0, $max)];
    }

    /** @param array<string, mixed> $node */
    protected function label(array $node): string
    {
        return (string) ($node['data']['label'] ?? $node['id']);
    }
}
