<?php

namespace Packstub\Flow\Observers;

use Packstub\Flow\Engine\Dispatcher;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Listeners\DispatchEventTriggers;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Support\Audit;
use Packstub\Flow\Support\DefinitionDiff;

/**
 * Mirrors the trigger nodes of a saved workflow into the triggers table.
 */
class WorkflowObserver
{
    public function creating(Workflow $workflow): void
    {
        $workflow->created_by ??= Audit::actor();
        $workflow->updated_by ??= $workflow->created_by;
    }

    public function updating(Workflow $workflow): void
    {
        if ($workflow->isDirty() && ! $workflow->isDirty('updated_by')) {
            $workflow->updated_by = Audit::actor() ?? $workflow->updated_by;
        }
    }

    public function saved(Workflow $workflow): void
    {
        $workflow->getConnection()->transaction(function () use ($workflow): void {
            $this->syncTriggers($workflow);

            if ($workflow->wasChanged('definition') || ! $workflow->versions()->exists()) {
                $workflow->snapshotVersion(Audit::actor());
            }
        });

        DispatchEventTriggers::flush();
        Dispatcher::flushCache();
    }

    public function created(Workflow $workflow): void
    {
        Audit::record($workflow, 'created', ['name' => $workflow->name, 'is_active' => $workflow->is_active]);
    }

    /**
     * updated (with the changed attributes and a definition summary), then
     * activated / deactivated, for the activity log.
     */
    public function updated(Workflow $workflow): void
    {
        if (! Audit::enabled()) {
            return;
        }

        $changed = array_values(array_diff(array_keys($workflow->getChanges()), ['updated_at', 'updated_by', 'consecutive_failures']));

        if ($changed === []) {
            return;
        }

        $properties = ['changed' => $changed];

        if (in_array('definition', $changed, true)) {
            $properties['definition'] = DefinitionDiff::summary(DefinitionDiff::between($workflow->getOriginal('definition'), $workflow->definition));
        }

        Audit::record($workflow, 'updated', $properties);

        if ($workflow->wasChanged('is_active')) {
            Audit::record($workflow, $workflow->is_active ? 'activated' : 'deactivated');
        }
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
        $workflow->versions()->delete();
        $workflow->waits()->delete();
        $workflow->steps()->delete();
        $workflow->runs()->delete();
    }

    public function deleted(Workflow $workflow): void
    {
        DispatchEventTriggers::flush();
        Dispatcher::flushCache();

        Audit::record($workflow, 'deleted', ['name' => $workflow->name]);
    }
}
