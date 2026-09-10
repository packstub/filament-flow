<?php

namespace Packstub\Agents\Contracts;

use Closure;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;

/** Stub of the engine's context contract: who is acting and where (see tests/Fixtures/Agents/stubs.php). */
interface AgentContext
{
    public function user(): ?Authenticatable;

    public function guard(): string;

    public function tenant(): ?Model;

    public function locale(): string;

    /** @return array{panel: ?string, tenant: int|string|null, user: int|string|null, locale: string, guard: string} */
    public function capture(): array;

    /** @param  array{panel?: ?string, tenant?: int|string|null, user?: int|string|Authenticatable|null, locale?: ?string, guard?: ?string}  $context */
    public function enter(array $context): Closure;

    /** @return class-string<Model>|null */
    public function tenantModel(): ?string;

    public function findTenant(int|string $key): ?Model;

    public function findTenantBySlug(string $slug): ?Model;

    public function canAccessTenant(Authenticatable $user, Model $tenant): bool;

    /** @return list<class-string> */
    public function resourceClasses(): array;

    public function inPanel(): bool;
}
