<?php

namespace Xlited\LaravelFlow\Engines;

use Xlited\LaravelFlow\Models\Workflow;
use Xlited\LaravelFlow\Models\WorkflowTrigger;
use Illuminate\Support\Facades\Log;

class WorkflowDispatcher
{
    /**
     * Dispatch workflows associated with a specific trigger and payload.
     */
    public function dispatch(string $triggerType, array $payload = []): void
    {
        Log::info("Dispatching workflows for trigger: {$triggerType}");

        // Find workflows associated with this trigger type
        $triggers = WorkflowTrigger::where('type', $triggerType)
            ->with([
                'workflow' => function ($query) {
                    $query->where('is_active', true);
                }
            ])
            ->get();

        foreach ($triggers as $trigger) {
            $workflow = $trigger->workflow;
            if (!$workflow) {
                continue;
            }

            if ($this->shouldRun($trigger, $payload)) {
                $this->runWorkflow($workflow, $payload);
            }
        }
    }

    /**
     * Check if the workflow should run based on its trigger configuration.
     */
    protected function shouldRun(WorkflowTrigger $trigger, array $payload): bool
    {
        // Check filtering logic (e.g. model_class for ModelCreated/Updated)
        // trigger->config contains the configuration specific to this trigger instance
        $config = $trigger->config ?? [];
        $triggerType = $trigger->type;
        // ... filtering logic ...

        // Specific logic for Model triggers
        if (
            in_array($triggerType, [
                \Xlited\LaravelFlow\Nodes\Triggers\ModelCreated::class,
                \Xlited\LaravelFlow\Nodes\Triggers\ModelUpdated::class,
                \Xlited\LaravelFlow\Nodes\Triggers\ModelDeleted::class,
            ])
        ) {
            if (isset($config['model_class']) && isset($payload['model'])) {
                $modelClass = $config['model_class'];
                $model = $payload['model'];

                if (!is_a($model, $modelClass)) {
                    return false;
                }
            }
        }

        if ($triggerType === \Xlited\LaravelFlow\Nodes\Triggers\Cron::class) {
            $expression = $config['expression'] ?? null;
            if (!$expression) {
                return false;
            }

            try {
                $cron = new \Cron\CronExpression($expression);
                return $cron->isDue();
            } catch (\Exception $e) {
                Log::error("Invalid cron expression: {$expression}");
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
