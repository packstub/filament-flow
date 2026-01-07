<?php

namespace Xlited\LaravelFlow\Engines;

use Xlited\LaravelFlow\Models\Workflow;
use Xlited\LaravelFlow\Models\WorkflowLog;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class WorkflowRunner
{
    protected Workflow $workflow;
    protected array $payload;
    protected WorkflowLog $log;

    public function __construct(Workflow $workflow, array $initialPayload = [])
    {
        $this->workflow = $workflow;
        $this->payload = $initialPayload;
    }

    public function run(): void
    {
        if (!$this->workflow->is_active) {
            return;
        }

        $this->log = WorkflowLog::create([
            'workflow_id' => $this->workflow->id,
            'status' => 'running',
            'started_at' => now(),
            'output' => [],
        ]);

        try {
            $graph = $this->workflow->payload;
            $nodes = $graph['nodes'] ?? [];
            $edges = $graph['edges'] ?? [];

            // Find the trigger node
            $triggerNode = collect($nodes)->firstWhere('type', 'trigger');

            if (!$triggerNode) {
                throw new \Exception("No trigger node found in workflow.");
            }

            $this->executeNode($triggerNode, $nodes, $edges);

            $this->log->update([
                'status' => 'success',
                'finished_at' => now(),
            ]);

            // Dispatch workflows chained to this one
            app('laravel-flow')->dispatch(
                \Xlited\LaravelFlow\Nodes\Triggers\WorkflowChained::class,
                array_merge($this->payload, [
                    'parent_workflow_id' => $this->workflow->id,
                ])
            );
        } catch (\Exception $e) {
            Log::error("Workflow execution failed: " . $e->getMessage());

            $this->log->update([
                'status' => 'failed',
                'finished_at' => now(),
                'output' => array_merge($this->log->output ?? [], [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString(),
                ]),
            ]);
        }
    }

    protected function executeNode(array $node, array $nodes, array $edges): void
    {
        $nodeId = $node['id'];
        $nodeType = $node['type'] ?? 'default';
        $nodeData = $node['data'] ?? [];

        $this->recordStep($nodeId, "Executing node: {$nodeData['label']}");

        $nextNodes = [];

        switch ($nodeType) {
            case 'trigger':
                // Trigger already happened to get here
                $nextNodes = $this->getNextNodes($nodeId, $nodes, $edges);
                break;

            case 'condition':
                $result = $this->evaluateCondition($nodeData);
                $sourceHandle = $result ? 'true' : 'false';
                $nextNodes = $this->getNextNodes($nodeId, $nodes, $edges, $sourceHandle);
                break;

            case 'action':
                $shouldContinue = $this->performAction($nodeData, $nodeId, $nodes, $edges);
                if (!$shouldContinue) {
                    return; // Workflow paused for delay, job dispatched
                }
                $nextNodes = $this->getNextNodes($nodeId, $nodes, $edges);
                break;

            default:
                Log::warning("Unknown node type: {$nodeType}");
                break;
        }

        foreach ($nextNodes as $nextNode) {
            $this->executeNode($nextNode, $nodes, $edges);
        }
    }

    protected function getNextNodes(string $nodeId, array $nodes, array $edges, ?string $sourceHandle = null): array
    {
        return collect($edges)
            ->filter(function ($edge) use ($nodeId, $sourceHandle) {
                $match = $edge['source'] === $nodeId;
                if ($sourceHandle) {
                    $match = $match && ($edge['sourceHandle'] ?? null) === $sourceHandle;
                }
                return $match;
            })
            ->map(function ($edge) use ($nodes) {
                return collect($nodes)->firstWhere('id', $edge['target']);
            })
            ->filter()
            ->toArray();
    }

    protected function evaluateCondition(array $data): bool
    {
        $identifier = $data['identifier'] ?? null;
        $config = $data['config'] ?? [];

        if (!$identifier) {
            return true;
        }

        $condition = app('laravel-flow-manager')->getCondition($identifier);

        if (!$condition) {
            $this->recordStep('condition_error', "Condition component not found: {$identifier}");
            return true;
        }

        $this->recordStep('condition_eval', "Evaluating condition: {$condition->getName()}");

        return $condition->evaluate($config, $this->payload);
    }

    protected function performAction(array $data, string $nodeId, array $nodes, array $edges): bool
    {
        $identifier = $data['identifier'] ?? null;
        $config = $data['config'] ?? [];

        if (!$identifier) {
            return true;
        }

        $action = app('laravel-flow-manager')->getAction($identifier);

        if (!$action) {
            $this->recordStep('action_error', "Action component not found: {$identifier}");
            return true;
        }

        // Check if action is delayable and needs to pause
        if ($action instanceof \Xlited\LaravelFlow\Contracts\DelayableAction) {
            $delaySeconds = $action->getDelaySeconds($config, $this->payload);

            if ($delaySeconds !== null && $delaySeconds > 0) {
                $this->recordStep('delay', "Scheduling delay of {$delaySeconds} seconds");

                // Find the next nodes to resume from after delay
                $nextNodes = $this->getNextNodes($nodeId, $nodes, $edges);

                if (!empty($nextNodes)) {
                    $firstNextNode = reset($nextNodes);
                    $resumeNodeId = $firstNextNode['id'];

                    // Dispatch delayed job
                    \Xlited\LaravelFlow\Jobs\ResumeWorkflowJob::dispatch(
                        $this->workflow->id,
                        $this->log->id,
                        $this->payload,
                        $resumeNodeId,
                        $nodes,
                        $edges
                    )->delay(now()->addSeconds($delaySeconds));

                    $this->recordStep('delay_scheduled', "Workflow will resume from node {$resumeNodeId} in {$delaySeconds} seconds");

                    // Update log status to "delayed"
                    $this->log->update(['status' => 'delayed']);
                } else {
                    // No nodes after delay, workflow ends here
                    $this->log->update([
                        'status' => 'success',
                        'finished_at' => now(),
                    ]);
                }

                return false; // Signal to stop synchronous execution
            }
        }

        $this->recordStep('action_exec', "Performing action: {$action->getName()}");

        $action->handle($config, $this->payload);

        return true;
    }

    /**
     * Resume workflow execution from a specific node (used after delays).
     */
    public function resumeFrom(string $nodeId, array $nodes, array $edges, WorkflowLog $log): void
    {
        $this->log = $log;

        $node = collect($nodes)->firstWhere('id', $nodeId);

        if (!$node) {
            $this->recordStep('resume_error', "Could not find node to resume from: {$nodeId}");
            return;
        }

        $nodeLabel = $node['data']['label'] ?? $nodeId;
        $this->recordStep($nodeId, "Resuming workflow from node: {$nodeLabel}");

        try {
            $this->executeNode($node, $nodes, $edges);

            $this->log->update([
                'status' => 'success',
                'finished_at' => now(),
            ]);
        } catch (\Exception $e) {
            Log::error("Workflow resume failed: " . $e->getMessage());

            $this->log->update([
                'status' => 'failed',
                'finished_at' => now(),
                'output' => array_merge($this->log->output ?? [], [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString(),
                ]),
            ]);
        }
    }

    public function getPayload(): array
    {
        return $this->payload;
    }

    public function getLog(): WorkflowLog
    {
        return $this->log;
    }

    protected function recordStep(string $id, string $message): void
    {
        $output = $this->log->output ?? [];
        $output[] = [
            'timestamp' => now()->toDateTimeString(),
            'node_id' => $id,
            'message' => $message,
        ];
        $this->log->output = $output;
        $this->log->save();
    }
}
