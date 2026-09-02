<?php

namespace Packstub\Flow;

use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Engine\Dispatcher;
use Packstub\Flow\Models\Secret;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Models\WorkflowTrigger;

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

    /** @return class-string<Model> */
    public static function userModel(): string
    {
        return config('auth.providers.users.model');
    }
}
