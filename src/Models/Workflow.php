<?php

namespace Packstub\Flow\Models;

use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Log;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Flow;
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
 */
class Workflow extends Model
{
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
