<?php

namespace Packstub\Flow\Engine;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Flow;
use Packstub\Flow\Jobs\RunWorkflowJob;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Models\WorkflowTrigger;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Trigger;
use Packstub\Flow\Support\PayloadSerializer;
use Throwable;

class Dispatcher
{
    public const CACHE_KEY = 'packstub-flow.trigger-types';

    /** Seconds a process keeps its copy of the active trigger types before re-reading the cache. */
    public const REFRESH_AFTER = 60;

    /** @var array<string, true>|null */
    protected static ?array $activeTypes = null;

    protected static int $loadedAt = 0;

    public function __construct(protected NodeRegistry $registry) {}

    /**
     * @param  class-string<Trigger>  $triggerClass
     * @param  array<string, mixed>  $payload
     * @return array<int, WorkflowRun>
     */
    public function dispatch(string $triggerClass, array $payload = []): array
    {
        $trigger = $this->registry->trigger($triggerClass);

        if (! $trigger || app(Flow::class)->isSuppressed() || ! static::hasActiveTriggers($triggerClass)) {
            return [];
        }

        // A workflow that fires events (a non-quiet record update, a mail)
        // may start another one; stop when they nest too deep.
        if (Runner::depth() >= (int) config('packstub-flow.max_nesting', 5)) {
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

            if (($row->config['once'] ?? false) && $this->alreadyRanFor($row->workflow, $payload)) {
                continue;
            }

            if (($days = (int) ($row->config['dedup_days'] ?? 0)) > 0 && $this->alreadyRanFor($row->workflow, $payload, $days)) {
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

    /**
     * Forget the cached list of trigger types that have an active workflow.
     * Called whenever a workflow is saved or deleted.
     */
    public static function flushCache(): void
    {
        static::$activeTypes = null;
        Cache::forget(self::CACHE_KEY);
    }

    /**
     * Whether any active workflow has a trigger of this type. Model events
     * fire on every save, so this check is a cached hash lookup rather than
     * a query.
     */
    protected static function hasActiveTriggers(string $triggerClass): bool
    {
        if (static::$activeTypes === null || time() - static::$loadedAt >= self::REFRESH_AFTER) {
            try {
                $types = Cache::remember(self::CACHE_KEY, now()->addHour(), function (): array {
                    return Flow::triggerModel()::query()
                        ->whereHas('workflow', fn ($query) => $query->where('is_active', true))
                        ->distinct()
                        ->pluck('type')
                        ->all();
                });
            } catch (Throwable) {
                // Tables not migrated yet: nothing can match.
                return false;
            }

            static::$activeTypes = array_fill_keys($types, true);
            static::$loadedAt = time();
        }

        return isset(static::$activeTypes[$triggerClass]);
    }

    /**
     * "Run once per record" / "not more than once every N days": a run
     * already exists for this workflow and the record in the payload.
     *
     * @param  array<string, mixed>  $payload
     */
    public function alreadyRanFor(Workflow $workflow, array $payload, ?int $withinDays = null): bool
    {
        $model = $payload['model'] ?? null;

        if (! $model instanceof Model || $model->getKey() === null) {
            return false;
        }

        return Flow::runModel()::query()
            ->where('workflow_id', $workflow->getKey())
            ->where('subject_type', $model::class)
            ->where('subject_id', (string) $model->getKey())
            ->when($withinDays !== null, fn ($query) => $query->where('started_at', '>=', now()->subDays($withinDays)))
            ->exists();
    }

    protected function defaultStartNode(Workflow $workflow): ?string
    {
        $graph = Graph::fromDefinition($workflow->definition);
        $triggers = $graph->nodesOfType(NodeType::Trigger->value);

        return isset($triggers[0]['id']) ? (string) $triggers[0]['id'] : null;
    }
}
