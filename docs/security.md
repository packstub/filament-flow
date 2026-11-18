# Security

A workflow runs with your application's permissions: it reads and writes records, sends mail, calls URLs. Whoever can build workflows can do what those nodes do. This page covers the guards Flow puts around the record actions (**Find records**, **Create record**, **Update record**, **For each** and **Call workflow**), and what to decide for your app.

## Who may build workflows

Decide this first, with a policy, the plugin's `authorize()` callback or the `gate` config key ([Authorization](configuration.md#authorization)). In a multi-tenant app where every member of every team may build workflows, the guards below keep a team's workflows inside the team; they cannot make a node harmless that you would not hand to those members. Hide the nodes they should not have with `FlowPlugin::make()->without([...])`.

## Which models the record actions may use

**Find records**, **Create record** and **Update record** only work on models your app allows:

- by default, the models offered to the record triggers: every model in `app/Models` that uses `HasWorkflows`, the config's `models_for_triggers` and the plugin's `->models([...])`;
- once you list models for the record actions, exactly those:

```php
// config/packstub-flow.php
'records' => [
    'models' => [App\Models\Order::class, App\Models\Note::class],
],
```

```php
FlowPlugin::make()->recordModels([App\Models\Order::class, App\Models\Note::class]);
// or, outside a panel
Flow::recordModels([App\Models\Order::class]);
```

The record type list in the node settings shows these models only. A workflow that names any other model, whether drawn on the canvas, imported from JSON, started from a template or created in code, is refused when it is saved or imported, and fails when the run reaches the node. **Update record** checks the record it is handed too, and **Create record** checks the model a **Through relationship** creates.

Allow a model only when workflow authors may read every column of it and write every fillable one. Your `User` model is rarely one of them. With `use HasWorkflows` on `User` (to trigger on users), list the record actions' models explicitly so `User` is not among them.

## Mass assignment

The record actions write only attributes in the model's `$fillable` (or not in its `$guarded`); any other attribute fails the run with a message that names it.

**Bypass mass-assignment protection** is hidden and ignored unless you turn it on, and it never applies to a run that belongs to a tenant:

```php
'records' => [
    'force_fill' => true, // PACKSTUB_FLOW_FORCE_FILL=true
],
```

Turn it on only in an app where everyone who can edit workflows may change any column.

## Through relationship

**Create record**'s **Through relationship** calls a method on the run's record only when the method declares a relationship return type (`public function notes(): HasMany`). Any other method name is refused, so a typed name can never run `delete()` or any other method. Add the return type to relationships you want to create through.

## Tenants

In a run that belongs to a tenant (a tenant's workflow, or a global one running for a tenant's record, see [Multi-tenancy](tenancy.md)), the record actions are confined to that tenant:

| Action | In a tenant's run |
| --- | --- |
| Find records | Finds the tenant's records only |
| Create record | Creates the record for the tenant, whatever the attributes say about the tenant |
| Update record | Refuses a record of another tenant, and a change that would move the record to another tenant |
| Create through a relationship | The parent record must be the tenant's; a child with no tenant link of its own (a note on an order) is the tenant's through its parent |
| For each | The item name cannot replace the run's own keys (`tenant`, `last`, `outputs`, `loop`, `secrets`, `flow_depth`) |
| Call workflow | Calls the tenant's own workflows and the global ones only |

Flow finds a model's link to the tenant through a relationship named in `tenancy.relationship` (`PACKSTUB_FLOW_TENANT_RELATIONSHIP=team`), or named after the tenant model (`team()` for a `Team`, Filament's convention). `BelongsTo` and `MorphTo` relationships scope the query and set the tenant on a new record; other relationships (a `BelongsToMany` of teams) scope the query, and a new record must end up linked to the tenant or it is rolled back.

A model without such a relationship cannot be used by a tenant's run: the node fails with a message that says so. When the link is something else, or a model is shared by every tenant on purpose (a product catalogue), scope it yourself:

```php
use Illuminate\Database\Eloquent\Builder;
use Packstub\Flow\Facades\Flow;

Flow::scopeRecordsUsing(function (Builder $query, Model $tenant): bool {
    if ($query->getModel() instanceof Project) {
        $query->where('workspace_ulid', $tenant->ulid);

        return true;
    }

    // Shared: every tenant's workflows read and write the same products.
    // Anything else: false lets Flow use the relationship.
    return $query->getModel() instanceof Product;
});
```

Return `true` when you scoped the query (or the model is shared), `false` to let Flow use the relationship. The same callback limits what **Update record** may change, and a record created or updated in a tenant's run must still match it after saving, or the change is rolled back.

A run without a tenant (a global workflow for a payload with no tenant, a single-tenant app) sees every record of an allowed model. A tenant's workflow whose tenant was deleted cannot use records at all.

## Outgoing requests and messages

**HTTP request** and the chat actions refuse private and reserved addresses by default, and `http.allowed_hosts` restricts them to your list ([Outgoing HTTP](configuration.md#outgoing-http)). **Send email** and **Send SMS** send from your account; in an app where customers build workflows, consider hiding them or tying them to a plan.

## Reporting a vulnerability

Please e-mail [support@packstub.dev](mailto:support@packstub.dev) rather than opening a public issue.

Next: [Configuration](configuration.md).
