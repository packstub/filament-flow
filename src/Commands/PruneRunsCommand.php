<?php

namespace Packstub\Flow\Commands;

use Illuminate\Console\Command;
use Packstub\Flow\Facades\Flow;

class PruneRunsCommand extends Command
{
    protected $signature = 'packstub-flow:prune {--days= : Delete finished runs older than this many days}';

    protected $description = 'Delete old finished workflow runs.';

    public function handle(): int
    {
        $days = (int) ($this->option('days') ?: config('packstub-flow.prune_runs_after_days', 30));

        // Workflows with their own retention first, then everything else.
        $custom = Flow::workflowModel()::query()->whereNotNull('prune_after_days')->get(['id', 'prune_after_days']);
        $deleted = 0;

        foreach ($custom as $workflow) {
            $deleted += Flow::runModel()::query()
                ->finished()
                ->where('workflow_id', $workflow->getKey())
                ->where('started_at', '<', now()->subDays((int) $workflow->prune_after_days))
                ->delete();
        }

        $deleted += Flow::runModel()::query()
            ->finished()
            ->when($custom->isNotEmpty(), fn ($query) => $query->whereNotIn('workflow_id', $custom->modelKeys()))
            ->where('started_at', '<', now()->subDays($days))
            ->delete();

        $this->components->info("Deleted {$deleted} run(s) older than {$days} days (per-workflow retention applied to {$custom->count()} workflow(s)).");

        return self::SUCCESS;
    }
}
