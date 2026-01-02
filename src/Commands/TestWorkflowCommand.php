<?php

namespace Xlited\LaravelFlow\Commands;

use Illuminate\Console\Command;
use Xlited\LaravelFlow\Models\Workflow;
use Xlited\LaravelFlow\Facades\LaravelFlow;

class TestWorkflowCommand extends Command
{
    protected $signature = 'flow:test {workflow_id?}';
    protected $description = 'Test a workflow execution';

    public function handle()
    {
        $workflowId = $this->argument('workflow_id');

        if ($workflowId) {
            $workflow = Workflow::findOrFail($workflowId);
        } else {
            $workflow = Workflow::first();
        }

        if (!$workflow) {
            $this->error("No workflow found to test.");
            return;
        }

        $this->info("Testing workflow: {$workflow->name} ({$workflow->id})");

        LaravelFlow::dispatch($workflow->trigger_type, ['debug' => true]);

        $this->info("Workflow dispatched. Check workflow_logs for results.");
    }
}
