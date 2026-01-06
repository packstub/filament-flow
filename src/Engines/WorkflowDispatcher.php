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
            if ($this->shouldRun($workflow, $triggerType, $payload)) {
                $this->runWorkflow($workflow, $payload);
            }
        }
    }

    /**
     * Check if the workflow should run based on its trigger configuration.
     */
    protected function shouldRun(Workflow $workflow, string $triggerType, array $payload): bool
    {
        // Decode payload to find trigger node
        $graph = $workflow->payload ?? [];
        $nodes = $graph['nodes'] ?? [];
        $triggerNode = collect($nodes)->firstWhere('type', 'trigger');

        if (!$triggerNode) {
            return false;
        }

        $config = $triggerNode['data']['config'] ?? [];

        // Specific logic for Model triggers
        if (
            in_array($triggerType, [
                \Xlited\LaravelFlow\Nodes\Triggers\ModelCreated::class,
                \Xlited\LaravelFlow\Nodes\Triggers\ModelUpdated::class,
                \Xlited\LaravelFlow\Nodes\Triggers\ModelDeleted::class,
            ])
        ) {
            $configuredModel = $config['model_class'] ?? null;
            $startModel = $payload['model'] ?? null;

            if ($configuredModel && $startModel && !($startModel instanceof $configuredModel)) {
                return false;
            }
        }

        return true;
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
