<?php

namespace Packstub\Flow\Engine;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Str;
use Packstub\Flow\Contracts\Delayable;
use Packstub\Flow\Contracts\Iterates;
use Packstub\Flow\Contracts\ReadOnlyAction;
use Packstub\Flow\Contracts\Waitable;
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
use Packstub\Flow\Models\WorkflowWait;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Triggers\WorkflowCalled;
use Packstub\Flow\Support\PayloadSerializer;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\Tenancy;
use Throwable;

/**
 * Walks a workflow graph from a start node, recording every step on a
 * WorkflowRun. Conditions branch on their true/false handles, Delayable
 * actions hand the remainder of the branch to the queue, Waitable actions
 * park it until an approval or a signal, Iterates actions run their "body"
 * branch once per item, and an action's output travels down its branch as
 * {{ last.* }} / {{ outputs.<id>.* }}.
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

    protected int $sequence = 0;

    protected bool $paused = false;

    /** @var array<string, true> */
    protected array $visited = [];

    /**
     * @param  array<string, mixed>  $payload
     * @param  bool  $dryRun  simulate side-effecting actions and flag the run as a test
     */
    public function __construct(
        protected Workflow $workflow,
        protected array $payload = [],
        ?Graph $graph = null,
        protected bool $dryRun = false,
    ) {
        $this->graph = $graph ?? Graph::fromDefinition($workflow->definition);
        $this->registry = app(NodeRegistry::class);
    }

    public function start(string $startNodeId): WorkflowRun
    {
        $startNode = $this->graph->node($startNodeId);

        $runModel = Flow::runModel();

        $subject = $this->payload['model'] ?? null;
        $tenant = $this->tenant();

        $this->run = $runModel::query()->create([
            'workflow_id' => $this->workflow->getKey(),
            'version_id' => $this->workflow->latestVersion?->getKey(),
            'tenant_type' => $tenant?->getMorphClass(),
            'tenant_id' => $tenant === null ? null : (string) $tenant->getKey(),
            'trigger_type' => $startNode['data']['identifier'] ?? null,
            'subject_type' => $subject instanceof Model ? $subject::class : null,
            'subject_id' => $subject instanceof Model ? $subject->getKey() : null,
            'status' => RunStatus::Running,
            'is_test' => $this->dryRun,
            'context' => PayloadSerializer::summarize($this->payload),
            'started_at' => Date::now(),
        ]);

        if (! $this->dryRun) {
            event(new WorkflowStarted($this->workflow, $this->run, $this->payload));
        }

        $this->execute(function () use ($startNode, $startNodeId): void {
            if (! $startNode) {
                throw new WorkflowException("Start node [{$startNodeId}] not found in workflow.");
            }

            $this->visit($startNode, [], $this->payload);
        });

        return $this->run;
    }

    /**
     * Continue a delayed or waiting run at the given nodes.
     *
     * @param  array<int, string>  $nodeIds
     * @param  string|null  $message  what to log on the node the run was waiting at
     */
    public function resume(WorkflowRun $run, array $nodeIds, ?string $message = null, ?string $originNodeId = null): WorkflowRun
    {
        $this->run = $run;
        $this->run->decrement('pending_resumes');
        $this->run->refresh();
        $this->sequence = (int) $this->run->steps()->max('sequence');

        // Another branch failed the run while this one was waiting: leave the
        // failure as it is instead of running the rest and reporting success.
        if ($this->run->status === RunStatus::Failed) {
            return $this->run;
        }

        $this->run->status = RunStatus::Running;

        $this->execute(function () use ($nodeIds, $message, $originNodeId): void {
            if ($originNodeId !== null && ($origin = $this->graph->node($originNodeId))) {
                $this->record($origin, $message ?? __('packstub-flow::flow.steps.resumed'));
            }

            foreach ($nodeIds as $nodeId) {
                $node = $this->graph->node($nodeId);

                if (! $node) {
                    throw new WorkflowException("Cannot resume: node [{$nodeId}] no longer exists.");
                }

                if ($originNodeId === null) {
                    $this->record($node, $message ?? __('packstub-flow::flow.steps.resumed'));
                }

                $this->visit($node, [], $this->payload);
            }
        });

        return $this->run;
    }

    public function getRun(): WorkflowRun
    {
        return $this->run;
    }

    public function isDryRun(): bool
    {
        return $this->dryRun;
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

    /**
     * The tenant this run belongs to: the workflow's own, or the one the
     * payload was resolved to for a global workflow.
     */
    protected function tenant(): ?Model
    {
        if (! $this->workflow->isGlobal()) {
            return $this->workflow->tenant;
        }

        $tenant = $this->payload['tenant'] ?? null;

        return $tenant instanceof Model ? $tenant : Tenancy::resolve($this->payload);
    }

    protected function execute(callable $callback): void
    {
        static::$depth++;

        try {
            Tenancy::using($this->tenant(), $callback);

            $this->run->refresh();

            // A branch parked on a wait or a delay keeps the run "waiting"
            // until its resume runs (on a sync queue that already happened).
            $this->finish($this->run->pending_resumes > 0 ? RunStatus::Delayed : RunStatus::Success);
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

        if ($status === RunStatus::Success && ! $this->dryRun) {
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

        if ($this->dryRun) {
            return;
        }

        report($exception);

        event(new WorkflowFailed($this->workflow, $this->run, $this->payload, $exception));

        $this->countFailure();
        $this->runOnFailureWorkflow($exception);
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
     * The workflow's "on failure" workflow, started from its "Called by
     * another workflow" trigger with the failing run's payload plus the error.
     */
    protected function runOnFailureWorkflow(Throwable $exception): void
    {
        $id = $this->workflow->on_failure_workflow_id;

        if (! $id || $id === $this->workflow->getKey() || static::$depth > (int) config('packstub-flow.max_nesting', 5)) {
            return;
        }

        $handler = Flow::workflowModel()::query()->withoutGlobalScopes()->find($id);
        $node = $handler?->is_active ? $handler->triggerNode(WorkflowCalled::class) : null;

        if (! $handler || ! $node) {
            return;
        }

        try {
            app(Dispatcher::class)->run($handler, [
                ...$this->payload,
                'error' => $this->errorPayload($exception, null),
                'failed_run' => [
                    'id' => $this->run->getKey(),
                    'workflow_id' => $this->workflow->getKey(),
                    'workflow' => $this->workflow->name,
                    'error' => (string) $this->run->error,
                ],
                'flow_depth' => (int) ($this->payload['flow_depth'] ?? 0) + 1,
            ], (string) $node['id']);
        } catch (Throwable $nested) {
            report($nested);
        }
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

        if (++$this->steps > (int) config('packstub-flow.max_steps', 10000)) {
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
                NodeType::Action->value => $this->visitAction($node, $path, $payload, $startedAt),
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
     * @param  array<int, string>  $path
     * @param  array<string, mixed>  $payload
     * @return array{0: array<int, array<string, mixed>>, 1: array<string, mixed>}
     */
    protected function visitAction(array $node, array $path, array $payload, float $startedAt): array
    {
        $identifier = $node['data']['identifier'] ?? null;
        $action = $identifier ? $this->registry->action($identifier) : null;

        if (! $action) {
            throw new WorkflowException("Action [{$identifier}] is not registered.");
        }

        $config = $node['data']['config'] ?? [];
        $settings = array_diff_key($config, array_flip([self::RETRIES, self::RETRY_AFTER, self::ON_ERROR]));

        if ($action instanceof Delayable) {
            $seconds = $action->getDelaySeconds($settings, $payload);

            if ($seconds !== null && $seconds > 0) {
                if ($this->dryRun) {
                    $this->record($node, __('packstub-flow::flow.steps.would_wait', ['seconds' => $seconds]), 'simulated', $startedAt);

                    return [$this->graph->next($node['id']), $payload];
                }

                return [$this->pause($node, $seconds, $payload), $payload];
            }
        }

        if ($action instanceof Waitable) {
            return [$this->wait($node, $action, $settings, $payload, $startedAt), $payload];
        }

        if ($action instanceof Iterates) {
            return $this->loop($node, $action, $settings, $path, $payload, $startedAt);
        }

        if ($this->dryRun && ! $action instanceof ReadOnlyAction) {
            $this->record($node, __('packstub-flow::flow.steps.simulated'), 'simulated', $startedAt, $this->preview($action, $settings, $payload));

            return [$this->graph->next($node['id']), $payload];
        }

        $result = $this->handleWithRetries($node, $action, $config, $payload);

        if ($result instanceof Throwable) {
            return $this->errorBranch($node, $result, $payload);
        }

        if ($result === false) {
            // Failed and set to "Log it and continue": the failure is already
            // on the step log, so no "Done" step follows.
            return [$this->graph->next($node['id']), $payload];
        }

        [$output, $summary, $changes] = $action->pullResult();

        foreach ($changes as $key => $value) {
            $payload[$key] = $value;
        }

        if ($output !== null) {
            $payload['outputs'][(string) $node['id']] = $output;
            $payload['last'] = $output;
        }

        $this->record($node, __('packstub-flow::flow.steps.action_done'), startedAt: $startedAt, output: $summary ?? $output);

        return [$this->graph->next($node['id']), $payload];
    }

    /**
     * Run an action, retrying it the number of times set on the node. Returns
     * true on success; false when the node is set to continue on error (the
     * failure is logged as a step and the branch goes on); the final exception
     * when the node follows its error branch; throws when the node fails the run.
     *
     * @param  array<string, mixed>  $node
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    protected function handleWithRetries(array $node, Action $action, array $config, array $payload): Throwable|bool
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

                if ($onError === 'branch' && $this->graph->nextIds($node['id'], 'error') !== []) {
                    report($exception);

                    return $exception;
                }

                throw $exception;
            }
        }
    }

    /**
     * "Follow the error branch": log the failure on the node, expose it as
     * {{ error.* }} and continue along the "error" handle.
     *
     * @param  array<string, mixed>  $node
     * @param  array<string, mixed>  $payload
     * @return array{0: array<int, array<string, mixed>>, 1: array<string, mixed>}
     */
    protected function errorBranch(array $node, Throwable $exception, array $payload): array
    {
        $this->record($node, __('packstub-flow::flow.steps.error_branch', ['error' => $exception->getMessage()]), 'failed');

        $payload['error'] = $this->errorPayload($exception, $node);

        return [$this->graph->next($node['id'], 'error'), $payload];
    }

    /**
     * @param  array<string, mixed>|null  $node
     * @return array<string, mixed>
     */
    protected function errorPayload(Throwable $exception, ?array $node): array
    {
        return [
            'message' => Placeholders::mask($exception->getMessage()),
            'class' => $exception::class,
            'node_id' => $node ? (string) $node['id'] : null,
            'node' => $node ? $this->label($node) : null,
        ];
    }

    /**
     * Visit the "body" branch once per item, then continue along "done".
     *
     * @param  array<string, mixed>  $node
     * @param  array<string, mixed>  $config
     * @param  array<int, string>  $path
     * @param  array<string, mixed>  $payload
     * @return array{0: array<int, array<string, mixed>>, 1: array<string, mixed>}
     */
    protected function loop(array $node, Action&Iterates $action, array $config, array $path, array $payload, float $startedAt): array
    {
        $items = collect($action->getItems($config, $payload))->values();
        $key = $action->getItemKey($config) ?: 'item';
        $max = max(1, min($action->getMaxIterations($config), (int) config('packstub-flow.max_records', 1000)));
        $count = $items->count();

        if ($count > $max) {
            throw new WorkflowException("For each: {$count} items exceed the limit of {$max} iterations.");
        }

        $body = $this->graph->next($node['id'], 'body');
        $outerVisited = $this->visited;

        foreach ($items as $index => $item) {
            $iteration = [
                ...$payload,
                $key => $item,
                'loop' => ['index' => $index, 'number' => $index + 1, 'count' => $count, 'first' => $index === 0, 'last' => $index === $count - 1],
            ];

            // Body nodes run once per item: reset the join bookkeeping each time.
            $this->visited = $outerVisited;

            foreach ($body as $child) {
                $this->visit($child, $path, $iteration);
            }
        }

        $this->visited = $outerVisited;

        $output = ['count' => $count];
        $payload['outputs'][(string) $node['id']] = $output;
        $payload['last'] = $output;

        $this->record($node, __('packstub-flow::flow.steps.looped', ['count' => $count]), startedAt: $startedAt, output: $output);

        return [$this->graph->next($node['id'], 'done'), $payload];
    }

    /**
     * Park the branch on an approval / signal and stop it; Flow::resolveWait()
     * continues it along the outcome's handle.
     *
     * @param  array<string, mixed>  $node
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     * @return array<int, array<string, mixed>>
     */
    protected function wait(array $node, Action&Waitable $action, array $config, array $payload, float $startedAt): array
    {
        $request = Placeholders::allowSecrets(fn () => $action->createWait($config, $payload));

        if ($request === null) {
            $this->record($node, __('packstub-flow::flow.steps.action_done'), startedAt: $startedAt);

            return $this->graph->next($node['id']);
        }

        if ($this->dryRun) {
            $first = $request->outcomes[0] ?? 'output';
            $this->record($node, __('packstub-flow::flow.steps.would_wait_for', ['type' => $request->type, 'outcome' => $first]), 'simulated', $startedAt, $request->meta);

            return $this->graph->next($node['id'], $first);
        }

        $this->paused = true;
        $this->run->increment('pending_resumes');

        /** @var WorkflowWait $wait */
        $wait = Flow::waitModel()::query()->create([
            'workflow_id' => $this->workflow->getKey(),
            'run_id' => $this->run->getKey(),
            'tenant_type' => $this->run->tenant_type,
            'tenant_id' => $this->run->tenant_id,
            'node_id' => (string) $node['id'],
            'type' => $request->type,
            'key' => $request->key,
            'token' => Str::random(48),
            'status' => WorkflowWait::PENDING,
            'outcomes' => [...$request->outcomes, WorkflowWait::TIMED_OUT],
            'meta' => [...$request->meta, 'label' => $this->label($node), 'workflow' => $this->workflow->name],
            'payload' => PayloadSerializer::serialize($payload),
            'graph' => $this->graph->toArray(),
            'expires_at' => $request->timeoutSeconds ? Date::now()->addSeconds($request->timeoutSeconds) : null,
        ]);

        $this->record($node, __('packstub-flow::flow.steps.waiting_for', ['type' => $request->type]), 'waiting', $startedAt, array_filter(['key' => $request->key, 'expires_at' => $wait->expires_at?->toIso8601String()]));

        Placeholders::allowSecrets(fn () => $action->afterWaitCreated($wait, $config, $payload));

        return [];
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
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    protected function preview(Action $action, array $config, array $payload): array
    {
        try {
            return $action->preview($config, $payload);
        } catch (Throwable $exception) {
            return ['error' => $exception->getMessage()];
        }
    }

    /**
     * Append a step to the run's step log (one row per step).
     *
     * @param  array<string, mixed>  $node
     * @param  array<string, mixed>|null  $output
     */
    protected function record(array $node, string $message, string $status = 'ok', ?float $startedAt = null, ?array $output = null): void
    {
        Flow::stepModel()::query()->create([
            'run_id' => $this->run->getKey(),
            'workflow_id' => $this->workflow->getKey(),
            'sequence' => ++$this->sequence,
            'node_id' => (string) $node['id'],
            'node_type' => $node['type'] ?? null,
            'label' => $this->label($node),
            'message' => Placeholders::mask($message),
            'status' => $status,
            'duration_ms' => $startedAt !== null ? (int) round((microtime(true) - $startedAt) * 1000) : null,
            'output' => $output !== null ? $this->truncateOutput(Placeholders::mask($this->jsonable($output))) : null,
            'created_at' => Date::now(),
        ]);
    }

    /**
     * @param  array<string, mixed>  $output
     * @return array<string, mixed>
     */
    protected function jsonable(array $output): array
    {
        return json_decode((string) json_encode($output, JSON_PARTIAL_OUTPUT_ON_ERROR), true) ?? [];
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
