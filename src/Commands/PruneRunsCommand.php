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

        $deleted = Flow::runModel()::query()
            ->finished()
            ->where('started_at', '<', now()->subDays($days))
            ->delete();

        $this->components->info("Deleted {$deleted} run(s) older than {$days} days.");

        return self::SUCCESS;
    }
}
