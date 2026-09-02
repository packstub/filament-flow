<?php

namespace Packstub\Flow\Commands;

use Illuminate\Console\Command;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Facades\Flow;

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

        $trigger = $workflow->triggers()->first();

        if (!$trigger) {
            $this->error("Workflow has no triggers configured.");
            return;
        }

        $this->info("Testing workflow: {$workflow->name} ({$workflow->id}) with trigger: {$trigger->type}");

        Flow::dispatch($trigger->type, ['debug' => true]);

        $this->info("Workflow dispatched. Check workflow_logs for results.");
    }
}
