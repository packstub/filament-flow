<?php

namespace Packstub\Flow\Models;

use Carbon\CarbonInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Flow;
use Packstub\Flow\NodeRegistry;

/**
 * @property string $id
 * @property string $workflow_id
 * @property string|null $trigger_type
 * @property class-string<Model>|null $subject_type
 * @property string|null $subject_id
 * @property RunStatus $status
 * @property bool $is_test
 * @property array<string, mixed>|null $context
 * @property-read array<int, array<string, mixed>> $steps
 * @property string|null $error
 * @property int $pending_resumes
 * @property CarbonInterface|null $started_at
 * @property CarbonInterface|null $finished_at
 */
class WorkflowRun extends Model
{
    use HasUuids;

    protected $guarded = [];

    protected $casts = [
        'status' => RunStatus::class,
        'is_test' => 'boolean',
        'context' => 'array',
        'pending_resumes' => 'integer',
        'started_at' => 'datetime',
        'finished_at' => 'datetime',
    ];

    public function getTable(): string
    {
        return config('packstub-flow.tables.runs', 'flow_workflow_runs');
    }

    public function workflow(): BelongsTo
    {
        return $this->belongsTo(Flow::workflowModel(), 'workflow_id');
    }

    public function steps(): HasMany
    {
        return $this->hasMany(Flow::stepModel(), 'run_id')->orderBy('sequence');
    }

    public function waits(): HasMany
    {
        return $this->hasMany(Flow::waitModel(), 'run_id');
    }

    /**
     * The step log as plain arrays (at, node_id, type, label, message,
     * status, duration_ms, output), in execution order.
     *
     * @return array<int, array<string, mixed>>
     */
    public function getStepsAttribute(): array
    {
        $steps = $this->relationLoaded('steps') ? $this->getRelation('steps') : $this->steps()->get();

        return $steps->map(fn (WorkflowStep $step): array => $step->toStep())->all();
    }

    public function scopeReal(Builder $query): Builder
    {
        return $query->where('is_test', false);
    }

    /**
     * The record that started the run, if it still exists.
     */
    public function subject(): ?Model
    {
        if (! $this->subject_type || $this->subject_id === null || ! is_a($this->subject_type, Model::class, true)) {
            return null;
        }

        return $this->subject_type::query()->find($this->subject_id);
    }

    /**
     * Rebuild a payload from the stored context so the run can be started
     * again: records are re-fetched by key, everything else is kept as is.
     *
     * @return array<string, mixed>
     */
    public function rebuildPayload(): array
    {
        return $this->rebuild($this->context ?? []);
    }

    /**
     * @param  array<string, mixed>  $context
     * @return array<string, mixed>
     */
    protected function rebuild(array $context): array
    {
        $payload = [];

        foreach ($context as $key => $value) {
            if (is_array($value) && isset($value['type']) && is_string($value['type']) && array_key_exists('key', $value) && count($value) === 2 && is_a($value['type'], Model::class, true)) {
                $payload[$key] = $value['type']::query()->find($value['key']);

                continue;
            }

            $payload[$key] = is_array($value) ? $this->rebuild($value) : $value;
        }

        return $payload;
    }

    public function scopeFinished(Builder $query): Builder
    {
        return $query->whereIn('status', [RunStatus::Success, RunStatus::Failed]);
    }

    public function getDurationInSeconds(): ?float
    {
        if (! $this->started_at || ! $this->finished_at) {
            return null;
        }

        return round($this->started_at->diffInMilliseconds($this->finished_at) / 1000, 2);
    }

    public function triggerName(): ?string
    {
        $trigger = $this->trigger_type ? app(NodeRegistry::class)->trigger($this->trigger_type) : null;

        return $trigger?->getName() ?? ($this->trigger_type ? class_basename($this->trigger_type) : null);
    }
}
