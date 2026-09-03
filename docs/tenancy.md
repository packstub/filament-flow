# Multi-tenancy

Workflows, runs, secrets and waits carry a tenant — a team, a company, an organisation — or none, which makes them **global**. In a Filament panel with tenancy each tenant manages its own workflows and secrets and sees its own runs and approvals; when a trigger fires, the tenant of the record decides which workflows run: the tenant's own plus the global ones.

## Setting up

Nothing to configure for the panel side: when the panel has `->tenant(Team::class)`, the Workflows and Secrets resources are scoped to `Filament::getTenant()` through the polymorphic `tenant` relationship, new workflows and secrets are attached to the current tenant, and the Runs and Approvals pages show the tenant's rows. A panel without tenancy manages global workflows and sees every run.

The runtime side needs to know which tenant a payload belongs to. Three sources, tried in order:

1. **A resolver**: `Flow::resolveTenantUsing(fn (array $payload) => ...)` (or `FlowPlugin::make()->resolveTenantUsing(...)`), receiving the payload and returning a tenant model or `null` — for webhooks, events, or records with an indirect tenant.
2. **The record's relationship**: `PACKSTUB_FLOW_TENANT_RELATIONSHIP=team` (the `tenancy.relationship` config key) reads `$payload['model']->team`.
3. **Filament's current tenant**, when the trigger fires inside a tenant panel request.

```php
// config/packstub-flow.php
'tenancy' => [
    'relationship' => env('PACKSTUB_FLOW_TENANT_RELATIONSHIP'),   // "team"
],
```

```php
Flow::resolveTenantUsing(function (array $payload): ?Team {
    return match (true) {
        isset($payload['webhook']['team_id']) => Team::find($payload['webhook']['team_id']),
        isset($payload['model']) && method_exists($payload['model'], 'team') => $payload['model']->team,
        default => null,
    };
});
```

## What runs for whom

| Workflow | Runs when |
| --- | --- |
| Tenant A's | A trigger fires for a payload resolved to tenant A (record triggers, events, webhooks, schedules' `now` payload has no tenant, so a tenant's Schedule trigger never fires — use a global one, or a resolver that reads the workflow); a **Date on a record** trigger only for A's records |
| Global (no tenant) | Every payload, whatever its tenant |

`Flow::run()` and the **Run now** / **Run workflow** buttons start a workflow regardless of tenant checks. The run stores the tenant it ran for (`tenant_type` / `tenant_id` on the run; the workflow's own tenant, or the payload's tenant for a global workflow), and the payload carries it as `{{ tenant.name }}`.

## Secrets per tenant

A tenant's secret with the same key as a global one shadows it while that tenant's workflows run — one global `slack_webhook`, overridden by the tenants that have their own. The Secrets page in a tenant panel manages the tenant's secrets; global ones are managed from a panel without tenancy or in code.

## Plan limits

`FlowPlugin::make()->maxWorkflows(int|Closure)` caps how many workflows a tenant may have; the closure receives the current tenant, so a plan limit — from [Filament Features](https://packstub.dev/docs/filament-features) or your own billing — plugs straight in:

```php
FlowPlugin::make()->maxWorkflows(fn (?Team $team): ?int => $team?->plan->limit('workflows'));
```

Beyond the limit the **New workflow** button is disabled with a tooltip and creation is refused with a notification. `null` means no limit.

## In code

```php
Workflow::query()->ofTenant($team);       // the team's own
Workflow::query()->forTenant($team);      // the team's own plus the global ones
Workflow::query()->global();

$workflow->tenant;                          // MorphTo
$workflow->isGlobal();
```

Outside a panel request, Filament's tenant global scope is not active; the dispatcher and the runner use `withoutGlobalScopes()` and their own tenant filters, and so should any custom query that must see every tenant's workflows.

Next: [Configuration](configuration.md).
