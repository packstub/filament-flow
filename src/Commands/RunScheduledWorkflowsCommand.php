<?php

namespace Packstub\Flow\Commands;

use Illuminate\Console\Command;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\Schedule;

class RunScheduledWorkflowsCommand extends Command
{
    protected $signature = 'packstub-flow:cron';

    protected $description = 'Start every active workflow whose Schedule trigger is due right now.';

    public function handle(): int
    {
        $runs = Flow::dispatch(Schedule::class, ['now' => now()]);

        $this->components->info(sprintf('%d scheduled workflow run(s) started.', count($runs)));

        return self::SUCCESS;
    }
}
