<?php

namespace Packstub\Flow\Support;

use Closure;
use Illuminate\Database\Eloquent\Model;
use Packstub\Agents\Facades\Agents;
use Packstub\Agents\Support\AgentRuntime;

/**
 * Runs a callback as a workspace of packstub/agents (Agents for Laravel),
 * the way a queued turn runs: the engine's context enters the tenant, so
 * budgets, limits and credentials are that workspace's, and leaves it
 * afterwards. Shared by the Ask AI action (the run's tenant) and the
 * "Describe a workflow" builder (the panel's tenant).
 */
class AgentTenant
{
    /**
     * Nothing happens when there is no tenant, when the engine is already
     * on it, or when the engine's workspace model is not the one Flow
     * scopes by (the keys would not be comparable).
     *
     * @template T
     *
     * @param  Closure(): T  $callback
     * @return T
     */
    public static function within(?Model $tenant, Closure $callback): mixed
    {
        $model = Agents::context()->tenantModel();

        if (! $tenant instanceof Model || $model === null || ! $tenant instanceof $model || Agents::tenant()?->is($tenant)) {
            return $callback();
        }

        $leave = AgentRuntime::enter(['tenant' => $tenant->getKey()]);

        try {
            return $callback();
        } finally {
            $leave();
        }
    }
}
