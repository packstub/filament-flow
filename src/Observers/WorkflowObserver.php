<?php

namespace Packstub\Flow\Observers;

use Packstub\Flow\Models\Workflow;

class WorkflowObserver
{
    /**
     * Handle the Workflow "saved" event.
     */
    public function saved(Workflow $workflow): void
    {
        $payload = $workflow->payload ?? [];
        $nodes = $payload['nodes'] ?? [];
        $triggers = collect($nodes)->where('type', 'trigger');

        // Delete existing triggers
        $workflow->triggers()->delete();

        foreach ($triggers as $triggerNode) {
            $identifier = $triggerNode['data']['identifier'] ?? null;
            $config = $triggerNode['data']['config'] ?? [];

            if ($identifier) {
                $workflow->triggers()->create([
                    'type' => $identifier,
                    'config' => $config,
                ]);
            }
        }
    }
}
