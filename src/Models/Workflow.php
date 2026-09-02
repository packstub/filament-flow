<?php

namespace Packstub\Flow\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Flow;

/**
 * @property string $id
 * @property string $name
 * @property string|null $description
 * @property array{nodes?: array<int, array<string, mixed>>, edges?: array<int, array<string, mixed>>}|null $definition
 * @property bool $is_active
 */
class Workflow extends Model
{
    use HasUuids;

    protected $guarded = [];

    protected $casts = [
        'definition' => 'array',
        'is_active' => 'boolean',
    ];

    public function getTable(): string
    {
        return config('packstub-flow.tables.workflows', 'flow_workflows');
    }

    public function triggers(): HasMany
    {
        return $this->hasMany(Flow::triggerModel(), 'workflow_id');
    }

    public function runs(): HasMany
    {
        return $this->hasMany(Flow::runModel(), 'workflow_id');
    }

    public function latestRun(): HasOne
    {
        return $this->hasOne(Flow::runModel(), 'workflow_id')->latestOfMany('started_at');
    }

    /** @return array<int, array<string, mixed>> */
    public function nodes(): array
    {
        return $this->definition['nodes'] ?? [];
    }

    /** @return array<int, array<string, mixed>> */
    public function edges(): array
    {
        return $this->definition['edges'] ?? [];
    }

    /** @return array<int, array<string, mixed>> */
    public function triggerNodes(): array
    {
        return array_values(array_filter(
            $this->nodes(),
            fn (array $node): bool => ($node['type'] ?? null) === NodeType::Trigger->value,
        ));
    }

    /**
     * The trigger node whose component is the given class, if any.
     *
     * @return array<string, mixed>|null
     */
    public function triggerNode(string $triggerClass): ?array
    {
        foreach ($this->triggerNodes() as $node) {
            if (($node['data']['identifier'] ?? null) === $triggerClass) {
                return $node;
            }
        }

        return null;
    }
}
