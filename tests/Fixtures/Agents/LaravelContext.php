<?php

namespace Packstub\Agents\Support\Context;

use Closure;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Packstub\Agents\Contracts\AgentContext;
use Packstub\Agents\Facades\Agents;

/**
 * Stub of the engine's plain-Laravel context: the workspace comes from the
 * resolver registered with Agents::tenantUsing() until enter() puts the
 * worker into one; entering runs the enteringTenant() hook and records the
 * context it was given, so a test can see what the Ask AI action asked for.
 */
class LaravelContext implements AgentContext
{
    /** @var list<array<string, mixed>> */
    public static array $entered = [];

    public static int $left = 0;

    protected ?Model $current = null;

    protected bool $isEntered = false;

    public function user(): ?Authenticatable
    {
        return Auth::user();
    }

    public function guard(): string
    {
        return (string) Auth::getDefaultDriver();
    }

    public function tenant(): ?Model
    {
        if ($this->isEntered) {
            return $this->current;
        }

        $resolver = Agents::tenantResolver();
        $tenant = $resolver ? $resolver() : null;

        return $tenant instanceof Model ? $tenant : null;
    }

    public function locale(): string
    {
        return app()->getLocale();
    }

    public function capture(): array
    {
        return ['panel' => null, 'tenant' => $this->tenant()?->getKey(), 'user' => $this->user()?->getAuthIdentifier(), 'locale' => $this->locale(), 'guard' => $this->guard()];
    }

    public function enter(array $context): Closure
    {
        static::$entered[] = $context;
        $previous = [$this->isEntered, $this->current];
        $key = $context['tenant'] ?? null;
        $tenant = $key !== null ? $this->findTenant($key) : null;
        $leaveTenant = null;

        if ($tenant) {
            $this->isEntered = true;
            $this->current = $tenant;

            if ($hook = Agents::tenantEnterHook()) {
                $left = $hook($tenant);
                $leaveTenant = $left instanceof Closure ? $left : null;
            }
        }

        return function () use ($previous, $leaveTenant): void {
            static::$left++;
            [$this->isEntered, $this->current] = $previous;

            if ($leaveTenant) {
                $leaveTenant();
            }
        };
    }

    public function tenantModel(): ?string
    {
        return Agents::tenantModelClass();
    }

    public function findTenant(int|string $key): ?Model
    {
        $model = $this->tenantModel();

        return $model ? $model::query()->find($key) : null;
    }

    public function findTenantBySlug(string $slug): ?Model
    {
        $model = $this->tenantModel();

        return $model ? $model::query()->where(Agents::tenantSlugAttribute() ?? (new $model)->getKeyName(), $slug)->first() : null;
    }

    public function canAccessTenant(Authenticatable $user, Model $tenant): bool
    {
        return true;
    }

    public function resourceClasses(): array
    {
        return [];
    }

    public function inPanel(): bool
    {
        return false;
    }
}
