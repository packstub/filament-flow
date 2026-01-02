<?php

namespace Xlited\LaravelFlow\Engines;

use Xlited\LaravelFlow\Models\Workflow;
use Illuminate\Support\Facades\Log;

class WorkflowDispatcher
{
    /**
     * Dispatch workflows associated with a specific trigger and payload.
     */
    public function dispatch(string $triggerType, array $payload = []): void
    {
        Log::info("Dispatching workflows for trigger: {$triggerType}");

        $workflows = Workflow::where('is_active', true)
            ->where('trigger_type', $triggerType)
            ->get();

        if ($workflows->isEmpty()) {
            Log::debug("No active workflows found for trigger: {$triggerType}");
            return;
        }

        foreach ($workflows as $workflow) {
            $this->runWorkflow($workflow, $payload);
        }
    }

    /**
     * Run a single workflow.
     */
    protected function runWorkflow(Workflow $workflow, array $payload): void
    {
        Log::info("Starting workflow: {$workflow->name} ({$workflow->id})");

        // In a real application, this should probably be queued
        // dispatch(new RunWorkflowJob($workflow, $payload));

        $runner = new WorkflowRunner($workflow, $payload);
        $runner->run();
    }
}
