<?php

namespace Packstub\Flow\Models;

use Carbon\CarbonInterface;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Packstub\Flow\Flow;
use Packstub\Flow\Support\DefinitionDiff;

/**
 * A snapshot of a workflow's definition, taken every time it changes.
 *
 * @property string $id
 * @property string $workflow_id
 * @property int $number
 * @property array{nodes?: array<int, array<string, mixed>>, edges?: array<int, array<string, mixed>>}|null $definition
 * @property string|null $created_by
 * @property CarbonInterface|null $created_at
 */
class WorkflowVersion extends Model
{
    use HasUuids;

    public const UPDATED_AT = null;

    protected $guarded = [];

    protected $casts = [
        'number' => 'integer',
        'definition' => 'array',
        'created_at' => 'datetime',
    ];

    public function getTable(): string
    {
        return config('packstub-flow.tables.versions', 'flow_workflow_versions');
    }

    public function workflow(): BelongsTo
    {
        return $this->belongsTo(Flow::workflowModel(), 'workflow_id');
    }

    public function previous(): ?self
    {
        return static::query()->where('workflow_id', $this->workflow_id)->where('number', '<', $this->number)->orderByDesc('number')->first();
    }

    /**
     * What changed compared to the previous version.
     *
     * @return array{added: array<int, string>, removed: array<int, string>, changed: array<int, string>, edges: int}
     */
    public function diff(): array
    {
        return DefinitionDiff::between($this->previous()?->definition, $this->definition);
    }
}
