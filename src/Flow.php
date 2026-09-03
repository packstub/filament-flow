<?php

namespace Packstub\Flow;

use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Engine\Dispatcher;
use Packstub\Flow\Engine\Graph;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Jobs\ResumeWorkflowJob;
use Packstub\Flow\Models\Secret;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Models\WorkflowStep;
use Packstub\Flow\Models\WorkflowTrigger;
use Packstub\Flow\Models\WorkflowWait;

/**
 * Entry point: dispatch a trigger, run a workflow, reach the registry.
 */
class Flow
{
    protected static int $suppressed = 0;

    public function __construct(
        protected NodeRegistry $registry,
        protected Dispatcher $dispatcher,
    ) {}

    /**
     * Start every active workflow whose trigger of this type matches the payload.
     *
     * @param  class-string<Nodes\Trigger>  $trigger
     * @param  array<string, mixed>  $payload
     * @return array<int, WorkflowRun> the runs started synchronously (empty when queued)
     */
    public function dispatch(string $trigger, array $payload = []): array
    {
        return $this->dispatcher->dispatch($trigger, $payload);
    }

    /**
     * Run one workflow now, from its first trigger node (or the given one).
     *
     * @param  array<string, mixed>  $payload
     */
    public function run(Workflow $workflow, array $payload = [], ?string $startNodeId = null, ?bool $queue = null): ?WorkflowRun
    {
        return $this->dispatcher->run($workflow, $payload, $startNodeId, $queue);
    }

    /**
     * Dry run: conditions are evaluated and read-only actions executed, but
     * every other action is simulated and logged as "would run". Always
     * synchronous; the run is flagged is_test.
     *
     * @param  array<string, mixed>  $payload
     */
    public function test(Workflow $workflow, array $payload = [], ?string $startNodeId = null): ?WorkflowRun
    {
        $startNodeId ??= collect(Graph::fromDefinition($workflow->definition)->nodesOfType(NodeType::Trigger->value))->first()['id'] ?? null;

        if ($startNodeId === null) {
            return null;
        }

        return (new Runner($workflow, $payload, dryRun: true))->start((string) $startNodeId);
    }

    /**
     * Ask packstub-flow:cron's Pollable triggers for due payloads and start
     * the matching workflows (see Dispatcher::poll()).
     *
     * @return array<int, WorkflowRun>
     */
    public function poll(?\DateTimeInterface $now = null): array
    {
        return $this->dispatcher->poll($now ?? now());
    }

    /**
     * Resolve a pending wait (an approval, a signal) and continue the run
     * along the output handle named by the outcome.
     *
     * @param  array<string, mixed>  $data  exposed to the next nodes as {{ wait.* }} ({{ approval.* }} for approvals)
     */
    public function resolveWait(WorkflowWait $wait, string $outcome, array $data = [], ?string $resolvedBy = null): bool
    {
        $updated = static::waitModel()::query()
            ->whereKey($wait->getKey())
            ->where('status', WorkflowWait::PENDING)
            ->update([
                'status' => $outcome === WorkflowWait::TIMED_OUT ? WorkflowWait::EXPIRED : WorkflowWait::RESOLVED,
                'outcome' => $outcome,
                'result' => json_encode($data),
                'resolved_by' => $resolvedBy,
                'resolved_at' => now(),
            ]);

        if ($updated === 0) {
            return false;
        }

        $wait->refresh();

        $graph = new Graph($wait->graph['nodes'] ?? [], $wait->graph['edges'] ?? []);
        $key = $wait->type === 'approval' ? 'approval' : 'wait';

        $result = [...$data, 'outcome' => $outcome, 'by' => $resolvedBy, 'at' => now()->toIso8601String()];
        $payload = [...($wait->payload ?? []), $key => $result];

        $job = new ResumeWorkflowJob(
            $wait->run_id,
            $payload,
            $graph->nextIds($wait->node_id, $outcome),
            $graph->toArray(),
            __('packstub-flow::flow.steps.wait_resolved', ['outcome' => $outcome, 'by' => $resolvedBy ?: __('packstub-flow::flow.steps.system')]),
            $wait->node_id,
        );

        if ($connection = config('packstub-flow.queue.connection')) {
            $job->onConnection($connection);
        }

        if ($queue = config('packstub-flow.queue.queue')) {
            $job->onQueue($queue);
        }

        dispatch($job);

        return true;
    }

    /**
     * Resolve every pending "Wait for signal" node waiting on this key.
     *
     * @param  array<string, mixed>  $data
     * @return int how many runs were continued
     */
    public function signal(string $key, array $data = []): int
    {
        $count = 0;

        static::waitModel()::query()->pending()->where('type', 'event')->where('key', $key)->get()
            ->each(function (WorkflowWait $wait) use ($data, &$count): void {
                if ($this->resolveWait($wait, 'received', $data)) {
                    $count++;
                }
            });

        return $count;
    }

    /**
     * Time out every pending wait past its deadline. Called by packstub-flow:cron.
     */
    public function expireWaits(?\DateTimeInterface $now = null): int
    {
        $count = 0;

        static::waitModel()::query()->pending()->whereNotNull('expires_at')->where('expires_at', '<=', $now ?? now())->get()
            ->each(function (WorkflowWait $wait) use (&$count): void {
                if ($this->resolveWait($wait, WorkflowWait::TIMED_OUT)) {
                    $count++;
                }
            });

        return $count;
    }

    /**
     * Run a callback without any trigger starting a workflow — imports,
     * seeders, bulk fixes. Flow::run() still works inside it.
     *
     * @template T
     *
     * @param  callable(): T  $callback
     * @return T
     */
    public function suppress(callable $callback): mixed
    {
        static::$suppressed++;

        try {
            return $callback();
        } finally {
            static::$suppressed--;
        }
    }

    public function isSuppressed(): bool
    {
        return static::$suppressed > 0;
    }

    public function registry(): NodeRegistry
    {
        return $this->registry;
    }

    /** @param class-string<Nodes\Node> $class */
    public function register(string $class): static
    {
        $this->registry->register($class);

        return $this;
    }

    /** @return class-string<Workflow> */
    public static function workflowModel(): string
    {
        return config('packstub-flow.models.workflow', Workflow::class);
    }

    /** @return class-string<WorkflowTrigger> */
    public static function triggerModel(): string
    {
        return config('packstub-flow.models.trigger', WorkflowTrigger::class);
    }

    /** @return class-string<WorkflowRun> */
    public static function runModel(): string
    {
        return config('packstub-flow.models.run', WorkflowRun::class);
    }

    /** @return class-string<Secret> */
    public static function secretModel(): string
    {
        return config('packstub-flow.models.secret', Secret::class);
    }

    /** @return class-string<WorkflowStep> */
    public static function stepModel(): string
    {
        return config('packstub-flow.models.step', WorkflowStep::class);
    }

    /** @return class-string<WorkflowWait> */
    public static function waitModel(): string
    {
        return config('packstub-flow.models.wait', WorkflowWait::class);
    }

    /** @return class-string<Model> */
    public static function userModel(): string
    {
        return config('auth.providers.users.model');
    }
}
