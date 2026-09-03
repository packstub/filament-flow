<?php

namespace Packstub\Flow\Models;

use Carbon\CarbonInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Packstub\Flow\Flow;

/**
 * One executed node of a run: the step log, one row per step.
 *
 * @property int $id
 * @property string $run_id
 * @property string $workflow_id
 * @property int $sequence
 * @property string $node_id
 * @property string|null $node_type
 * @property string|null $label
 * @property string $status ok | retry | failed | simulated | waiting
 * @property string|null $message
 * @property int|null $duration_ms
 * @property array<string, mixed>|null $output
 * @property CarbonInterface|null $created_at
 */
class WorkflowStep extends Model
{
    public const UPDATED_AT = null;

    protected $guarded = [];

    protected $casts = [
        'sequence' => 'integer',
        'duration_ms' => 'integer',
        'output' => 'array',
        'created_at' => 'datetime',
    ];

    public function getTable(): string
    {
        return config('packstub-flow.tables.steps', 'flow_workflow_steps');
    }

    public function run(): BelongsTo
    {
        return $this->belongsTo(Flow::runModel(), 'run_id');
    }

    public function workflow(): BelongsTo
    {
        return $this->belongsTo(Flow::workflowModel(), 'workflow_id');
    }

    /**
     * The shape the step log had as a JSON column, still used by the views
     * and by WorkflowRun::$steps.
     *
     * @return array<string, mixed>
     */
    public function toStep(): array
    {
        return array_filter([
            'at' => $this->created_at?->toIso8601String(),
            'node_id' => $this->node_id,
            'type' => $this->node_type,
            'label' => $this->label,
            'message' => $this->message,
            'status' => $this->status,
            'duration_ms' => $this->duration_ms,
            'output' => $this->output,
        ], fn ($value): bool => $value !== null);
    }
}
