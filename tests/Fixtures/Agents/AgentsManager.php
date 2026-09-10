<?php

namespace Packstub\Agents;

use Closure;
use Illuminate\Database\Eloquent\Model;
use Packstub\Agents\Contracts\AgentContext;
use Packstub\Agents\Support\Context\LaravelContext;

/** Stub of the engine's manager: the workspace parts only (see tests/Fixtures/Agents/stubs.php). */
class AgentsManager
{
    protected ?Closure $tenantResolver = null;

    protected ?Closure $tenantEnter = null;

    /** @var class-string<Model>|null */
    protected ?string $tenantModel = null;

    protected ?string $tenantSlugAttribute = null;

    public function name(): string
    {
        return (string) config('packstub-agents.name', 'Assistant');
    }

    public function context(): AgentContext
    {
        if (! app()->bound(AgentContext::class)) {
            app()->singleton(AgentContext::class, LaravelContext::class);
        }

        return app(AgentContext::class);
    }

    public function tenant(): ?Model
    {
        return $this->context()->tenant();
    }

    public function tenantUsing(Closure $resolve): void
    {
        $this->tenantResolver = $resolve;
    }

    public function tenantResolver(): ?Closure
    {
        return $this->tenantResolver;
    }

    public function enteringTenant(Closure $enter): void
    {
        $this->tenantEnter = $enter;
    }

    public function tenantEnterHook(): ?Closure
    {
        return $this->tenantEnter;
    }

    /** @param  class-string<Model>  $model */
    public function tenantModel(string $model, ?string $slugAttribute = null): void
    {
        $this->tenantModel = $model;
        $this->tenantSlugAttribute = $slugAttribute;
    }

    /** @return class-string<Model>|null */
    public function tenantModelClass(): ?string
    {
        return $this->tenantModel;
    }

    public function tenantSlugAttribute(): ?string
    {
        return $this->tenantSlugAttribute;
    }
}
