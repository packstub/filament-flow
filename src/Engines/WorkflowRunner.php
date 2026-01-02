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
                $this->performAction($nodeData);
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
        // Simple PHP evaluation for now - THIS IS DANGEROUS IN PROD
        // In a real app, use a proper expression language (e.g. symfony/expression-language)
        $condition = $data['condition'] ?? 'true';

        $this->recordStep('condition_eval', "Evaluating condition: {$condition}");

        // Placeholder for real logic
        return true;
    }

    protected function performAction(array $data): void
    {
        $action = $data['action'] ?? 'None';
        $this->recordStep('action_exec', "Performing action: {$action}");

        // Placeholder for actual action dispatching
        Log::info("Workflow Action Executed: " . json_encode($data));
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
