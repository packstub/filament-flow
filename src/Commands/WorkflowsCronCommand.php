<?php

namespace Xlited\LaravelFlow\Commands;

use Illuminate\Console\Command;
use Xlited\LaravelFlow\Engines\WorkflowDispatcher;

class WorkflowsCronCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'flow:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Dispatch cron-based workflows';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $this->info('Checking cron workflows...');

        /** @var WorkflowDispatcher $dispatcher */
        $dispatcher = app('laravel-flow');

        $dispatcher->dispatch(\Xlited\LaravelFlow\Nodes\Triggers\Cron::class);

        $this->info('Cron workflows dispatched.');
    }
}
