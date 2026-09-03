<?php

namespace Packstub\Flow\Support;

use Closure;
use Filament\Facades\Filament;
use Illuminate\Database\Eloquent\Model;
use Throwable;

/**
 * Which tenant a payload belongs to, and the tenant of the run in progress
 * (used by the secrets store).
 */
class Tenancy
{
    /** @var (Closure(array<string, mixed>): ?Model)|null */
    protected static ?Closure $resolver = null;

    protected static ?Model $current = null;

    /**
     * @param  (Closure(array<string, mixed>): ?Model)|null  $resolver
     */
    public static function resolveUsing(?Closure $resolver): void
    {
        static::$resolver = $resolver;
    }

    /**
     * The tenant a payload belongs to: the custom resolver, then the
     * payload's "tenant" key, then the record's tenant relationship
     * (packstub-flow.tenancy.relationship), then Filament's current tenant.
     *
     * @param  array<string, mixed>  $payload
     */
    public static function resolve(array $payload): ?Model
    {
        if (static::$resolver !== null) {
            $tenant = (static::$resolver)($payload);

            if ($tenant instanceof Model) {
                return $tenant;
            }
        }

        if (($payload['tenant'] ?? null) instanceof Model) {
            return $payload['tenant'];
        }

        $model = $payload['model'] ?? null;
        $relationship = (string) config('packstub-flow.tenancy.relationship', '');

        if ($model instanceof Model && $relationship !== '' && method_exists($model, $relationship)) {
            try {
                $tenant = $model->{$relationship};

                if ($tenant instanceof Model) {
                    return $tenant;
                }
            } catch (Throwable) {
                // Not a relationship after all.
            }
        }

        try {
            return Filament::getTenant();
        } catch (Throwable) {
            return null;
        }
    }

    /**
     * The tenant of the run being executed (set by the runner).
     */
    public static function current(): ?Model
    {
        return static::$current;
    }

    /**
     * @template T
     *
     * @param  callable(): T  $callback
     * @return T
     */
    public static function using(?Model $tenant, callable $callback): mixed
    {
        $previous = static::$current;
        static::$current = $tenant;

        try {
            return $callback();
        } finally {
            static::$current = $previous;
        }
    }

    /**
     * Filament's current tenant when the current panel has tenancy, else null.
     */
    public static function panelTenant(): ?Model
    {
        try {
            return Filament::getCurrentPanel()?->hasTenancy() ? Filament::getTenant() : null;
        } catch (Throwable) {
            return null;
        }
    }
}
