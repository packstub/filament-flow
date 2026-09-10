<?php

namespace Packstub\Agents\Facades;

use Illuminate\Support\Facades\Facade;
use Packstub\Agents\AgentsManager;

/**
 * Stub of the engine's facade (see tests/Fixtures/Agents/stubs.php).
 *
 * @method static string name()
 * @method static \Packstub\Agents\Contracts\AgentContext context()
 * @method static \Illuminate\Database\Eloquent\Model|null tenant()
 * @method static void tenantUsing(\Closure $resolve)
 * @method static \Closure|null tenantResolver()
 * @method static void enteringTenant(\Closure $enter)
 * @method static \Closure|null tenantEnterHook()
 * @method static void tenantModel(string $model, ?string $slugAttribute = null)
 * @method static class-string<\Illuminate\Database\Eloquent\Model>|null tenantModelClass()
 * @method static string|null tenantSlugAttribute()
 *
 * @see AgentsManager
 */
class Agents extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        if (! app()->bound(AgentsManager::class)) {
            app()->singleton(AgentsManager::class);
        }

        return AgentsManager::class;
    }
}
