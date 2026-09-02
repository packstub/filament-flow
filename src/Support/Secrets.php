<?php

namespace Packstub\Flow\Support;

use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Flow;
use Throwable;

/**
 * Reads the secrets store for placeholder resolution. Global secrets apply
 * everywhere; a tenant's secret with the same key shadows the global one
 * while that tenant's workflow runs. Values are cached per process and
 * forgotten when a secret is saved.
 */
class Secrets
{
    /** @var array<string, array<string, string|null>> keyed by tenant ("" for global) */
    protected static array $values = [];

    public static function get(string $key, ?Model $tenant = null): ?string
    {
        $tenant ??= Tenancy::current();

        if ($tenant !== null) {
            $value = static::load(static::tenantKey($tenant), $tenant)[$key] ?? null;

            if ($value !== null) {
                return $value;
            }
        }

        return static::load('', null)[$key] ?? null;
    }

    public static function has(string $key, ?Model $tenant = null): bool
    {
        return static::get($key, $tenant) !== null;
    }

    /** @return array<int, string> */
    public static function keys(?Model $tenant = null): array
    {
        $tenant ??= Tenancy::current();
        $keys = array_keys(static::load('', null));

        if ($tenant !== null) {
            $keys = [...$keys, ...array_keys(static::load(static::tenantKey($tenant), $tenant))];
        }

        return array_values(array_unique($keys));
    }

    public static function flush(): void
    {
        static::$values = [];
    }

    /** @return array<string, string|null> */
    protected static function load(string $cacheKey, ?Model $tenant): array
    {
        if (isset(static::$values[$cacheKey])) {
            return static::$values[$cacheKey];
        }

        try {
            return static::$values[$cacheKey] = Flow::secretModel()::query()
                ->withoutGlobalScopes()
                ->ofTenant($tenant)
                ->get()
                ->mapWithKeys(fn ($secret): array => [(string) $secret->key => $secret->value === null ? null : (string) $secret->value])
                ->all();
        } catch (Throwable) {
            // Table not migrated yet.
            return [];
        }
    }

    protected static function tenantKey(Model $tenant): string
    {
        return $tenant->getMorphClass().':'.$tenant->getKey();
    }
}
