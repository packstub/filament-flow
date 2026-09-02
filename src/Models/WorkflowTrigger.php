<?php

namespace Packstub\Flow\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Packstub\Flow\Flow;
use Packstub\Flow\Nodes\Trigger;

/**
 * One row per trigger node of a workflow, kept in sync by WorkflowObserver so
 * the dispatcher can find candidate workflows with a single indexed query.
 *
 * @property string $id
 * @property string $workflow_id
 * @property string $node_id
 * @property class-string<Trigger> $type
 * @property array<string, mixed>|null $config
 */
class WorkflowTrigger extends Model
{
    use HasUuids;

    protected $guarded = [];

    protected $casts = [
        'config' => 'array',
    ];

    public function getTable(): string
    {
        return config('packstub-flow.tables.triggers', 'flow_workflow_triggers');
    }

    public function workflow(): BelongsTo
    {
        return $this->belongsTo(Flow::workflowModel(), 'workflow_id');
    }
}
