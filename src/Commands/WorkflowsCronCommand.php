<?php

namespace Packstub\Flow\Commands;

use Illuminate\Console\Command;
use Packstub\Flow\Engines\WorkflowDispatcher;

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
        $dispatcher = app('packstub-flow');

        $dispatcher->dispatch(\Packstub\Flow\Nodes\Triggers\Cron::class);

        $this->info('Cron workflows dispatched.');
    }
}
