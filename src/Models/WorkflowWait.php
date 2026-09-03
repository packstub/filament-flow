<?php

namespace Packstub\Flow\Models;

use Carbon\CarbonInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\URL;
use Packstub\Flow\Flow;

/**
 * A run paused on an "Ask for approval" or "Wait for signal" node. Holds
 * everything needed to continue: the branch payload, a graph snapshot and
 * the outcomes the node offers.
 *
 * @property string $id
 * @property string $workflow_id
 * @property string $run_id
 * @property string $node_id
 * @property string $type approval | event
 * @property string|null $key
 * @property string $token
 * @property string $status pending | resolved | expired | cancelled
 * @property string|null $outcome
 * @property array<int, string>|null $outcomes
 * @property array<string, mixed>|null $meta
 * @property array<string, mixed>|null $payload
 * @property array{nodes: array<int, array<string, mixed>>, edges: array<int, array<string, mixed>>}|null $graph
 * @property array<string, mixed>|null $result
 * @property string|null $resolved_by
 * @property CarbonInterface|null $expires_at
 * @property CarbonInterface|null $resolved_at
 */
class WorkflowWait extends Model
{
    use HasUuids;

    public const PENDING = 'pending';

    public const RESOLVED = 'resolved';

    public const EXPIRED = 'expired';

    public const CANCELLED = 'cancelled';

    public const TIMED_OUT = 'timed_out';

    protected $guarded = [];

    protected $hidden = ['token', 'payload', 'graph'];

    protected $casts = [
        'outcomes' => 'array',
        'meta' => 'array',
        'payload' => 'array',
        'graph' => 'array',
        'result' => 'array',
        'expires_at' => 'datetime',
        'resolved_at' => 'datetime',
    ];

    public function getTable(): string
    {
        return config('packstub-flow.tables.waits', 'flow_workflow_waits');
    }

    public function workflow(): BelongsTo
    {
        return $this->belongsTo(Flow::workflowModel(), 'workflow_id');
    }

    public function run(): BelongsTo
    {
        return $this->belongsTo(Flow::runModel(), 'run_id');
    }

    public function scopePending(Builder $query): Builder
    {
        return $query->where('status', self::PENDING);
    }

    public function scopeApprovals(Builder $query): Builder
    {
        return $query->where('type', 'approval');
    }

    /**
     * Pending approvals this user may decide: listed as an approver, or
     * anyone when the node has no approver list.
     */
    public function scopeForApprover(Builder $query, ?string $email): Builder
    {
        return $query->where(function (Builder $query) use ($email): void {
            $query->whereNull('meta->approvers')->orWhereJsonLength('meta->approvers', 0);

            if ($email) {
                $query->orWhereJsonContains('meta->approvers', strtolower($email));
            }
        });
    }

    public function isPending(): bool
    {
        return $this->status === self::PENDING;
    }

    /** @return array<int, string> */
    public function approvers(): array
    {
        return array_values(array_filter((array) ($this->meta['approvers'] ?? [])));
    }

    public function canBeDecidedBy(?string $email): bool
    {
        $approvers = $this->approvers();

        return $approvers === [] || ($email !== null && in_array(strtolower($email), $approvers, true));
    }

    /**
     * A signed URL that resolves the wait with the given outcome.
     */
    public function decisionUrl(string $outcome): string
    {
        return URL::temporarySignedRoute(
            'packstub-flow.approval',
            now()->addHours((int) config('packstub-flow.approvals.link_lifetime_hours', 72)),
            ['wait' => $this->getKey(), 'outcome' => $outcome, 'token' => $this->token],
        );
    }
}
