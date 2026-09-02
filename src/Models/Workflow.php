<?php

namespace Packstub\Flow\Models;

use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Log;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Flow;
use Packstub\Flow\Models\Concerns\BelongsToTenant;
use Throwable;

/**
 * @property string $id
 * @property string $name
 * @property string|null $description
 * @property array{nodes?: array<int, array<string, mixed>>, edges?: array<int, array<string, mixed>>}|null $definition
 * @property bool $is_active
 * @property int|null $prune_after_days
 * @property int|null $max_consecutive_failures
 * @property int $consecutive_failures
 * @property string|null $on_failure_workflow_id
 * @property string|null $tenant_type
 * @property string|null $tenant_id
 */
class Workflow extends Model
{
    use BelongsToTenant;
    use HasUuids;

    protected $guarded = [];

    protected $casts = [
        'definition' => 'array',
        'is_active' => 'boolean',
        'prune_after_days' => 'integer',
        'max_consecutive_failures' => 'integer',
        'consecutive_failures' => 'integer',
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

    public function steps(): HasMany
    {
        return $this->hasMany(Flow::stepModel(), 'workflow_id');
    }

    public function waits(): HasMany
    {
        return $this->hasMany(Flow::waitModel(), 'workflow_id');
    }

    public function onFailureWorkflow(): BelongsTo
    {
        return $this->belongsTo(Flow::workflowModel(), 'on_failure_workflow_id');
    }

    public function versions(): HasMany
    {
        return $this->hasMany(Flow::versionModel(), 'workflow_id')->orderByDesc('number');
    }

    public function latestVersion(): HasOne
    {
        return $this->hasOne(Flow::versionModel(), 'workflow_id')->ofMany('number', 'max');
    }

    /**
     * Store the current definition as a new version (called by the observer
     * whenever the definition changes) and prune the oldest ones.
     */
    public function snapshotVersion(?string $by = null): WorkflowVersion
    {
        $number = (int) $this->versions()->max('number') + 1;

        /** @var WorkflowVersion $version */
        $version = $this->versions()->create([
            'number' => $number,
            'definition' => $this->definition,
            'created_by' => $by,
            'created_at' => now(),
        ]);

        $keep = (int) config('packstub-flow.versions.keep', 50);

        if ($keep > 0 && $number > $keep) {
            $this->versions()->where('number', '<=', $number - $keep)->delete();
        }

        $this->setRelation('latestVersion', $version);

        return $version;
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
     * Send a Filament database notification to the panel users listed in
     * packstub-flow.notifications.recipients (and log it either way).
     */
    public function notifyAdmins(string $title, string $body, string $status = 'warning'): void
    {
        Log::warning("[flow] {$title} {$body}");

        $emails = array_values(array_filter(array_map('trim', (array) config('packstub-flow.notifications.recipients', []))));

        if ($emails === []) {
            return;
        }

        try {
            $users = Flow::userModel()::query()->whereIn('email', $emails)->get();

            if ($users->isEmpty()) {
                return;
            }

            $notification = Notification::make()->title($title)->body($body);

            match ($status) {
                'danger' => $notification->danger(),
                'success' => $notification->success(),
                'info' => $notification->info(),
                default => $notification->warning(),
            };

            $notification->sendToDatabase($users);
        } catch (Throwable $exception) {
            report($exception);
        }
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
