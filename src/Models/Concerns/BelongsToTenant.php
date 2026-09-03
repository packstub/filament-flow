<?php

namespace Packstub\Flow\Models\Concerns;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * tenant_type / tenant_id on workflows, runs, secrets and waits. A null
 * tenant means "global".
 *
 * @property string|null $tenant_type
 * @property string|null $tenant_id
 */
trait BelongsToTenant
{
    public function tenant(): MorphTo
    {
        return $this->morphTo('tenant');
    }

    public function isGlobal(): bool
    {
        return $this->tenant_type === null || $this->tenant_id === null;
    }

    /**
     * Rows of this tenant only.
     */
    public function scopeOfTenant(Builder $query, ?Model $tenant): Builder
    {
        if ($tenant === null) {
            return $query->whereNull('tenant_id');
        }

        return $query->where('tenant_type', $tenant->getMorphClass())->where('tenant_id', (string) $tenant->getKey());
    }

    /**
     * Rows of this tenant plus the global ones — what applies to a tenant.
     */
    public function scopeForTenant(Builder $query, ?Model $tenant): Builder
    {
        return $query->where(function (Builder $query) use ($tenant): void {
            $query->whereNull('tenant_id');

            if ($tenant) {
                $query->orWhere(fn (Builder $query) => $query->where('tenant_type', $tenant->getMorphClass())->where('tenant_id', (string) $tenant->getKey()));
            }
        });
    }

    public function scopeGlobal(Builder $query): Builder
    {
        return $query->whereNull('tenant_id');
    }
}
