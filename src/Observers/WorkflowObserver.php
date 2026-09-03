<?php

namespace Packstub\Flow\Observers;

use Packstub\Flow\Engine\Dispatcher;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Listeners\DispatchEventTriggers;
use Packstub\Flow\Models\Workflow;

/**
 * Mirrors the trigger nodes of a saved workflow into the triggers table.
 */
class WorkflowObserver
{
    public function saved(Workflow $workflow): void
    {
        $workflow->getConnection()->transaction(function () use ($workflow): void {
            $this->syncTriggers($workflow);
        });

        DispatchEventTriggers::flush();
        Dispatcher::flushCache();
    }

    protected function syncTriggers(Workflow $workflow): void
    {
        $workflow->triggers()->delete();

        foreach ($workflow->nodes() as $node) {
            if (($node['type'] ?? null) !== NodeType::Trigger->value) {
                continue;
            }

            $identifier = $node['data']['identifier'] ?? null;

            if (! $identifier || ! isset($node['id'])) {
                continue;
            }

            $workflow->triggers()->create([
                'node_id' => (string) $node['id'],
                'type' => $identifier,
                'config' => $node['data']['config'] ?? [],
            ]);
        }
    }

    public function deleting(Workflow $workflow): void
    {
        // Not every database enforces the cascade (SQLite without foreign
        // keys on), so clean up explicitly.
        $workflow->triggers()->delete();
        $workflow->waits()->delete();
        $workflow->steps()->delete();
        $workflow->runs()->delete();
    }

    public function deleted(Workflow $workflow): void
    {
        DispatchEventTriggers::flush();
        Dispatcher::flushCache();
    }
}
