# Configuration

Panel-specific choices (nodes, models, navigation, the resource) live on the plugin; everything app-wide (tables, models, queue, limits, webhooks, retention) lives in `config/packstub-flow.php`.

## The plugin API

```php
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Nodes\Actions\SendSlackMessage;

FlowPlugin::make()
    // Nodes: add your own (appended to the config lists)
    ->triggers([App\Flow\Triggers\OrderPaid::class])
    ->actions([App\Flow\Actions\AssignToTeam::class])
    ->conditions([App\Flow\Conditions\IsVip::class])

    // Hide built-in nodes from the builder; runs that still use them fail
    ->without([SendSlackMessage::class])

    // Models offered by the record triggers, in addition to app/Models
    // classes using HasWorkflows and the config's models_for_triggers
    ->models([App\Models\Order::class, App\Models\Invoice::class])

    // Navigation of the Workflows resource (defaults come from the config)
    ->navigationGroup('Automation')
    ->navigationIcon('heroicon-o-bolt')
    ->navigationSort(10)

    // Replace the resource with your own subclass, or register none
    ->resource(App\Filament\Resources\WorkflowResource::class)
    ->withoutResource()

    // Same for the Secrets page
    ->secretResource(App\Filament\Resources\SecretResource::class)
    ->withoutSecrets()

    // The cross-workflow Runs page and the Approvals page
    ->withoutRunsPage()
    ->withoutApprovalsPage()

    // Multi-tenancy: which tenant a payload belongs to, and a plan limit
    ->resolveTenantUsing(fn (array $payload) => $payload['model']?->team)
    ->maxWorkflows(fn (?Team $team) => $team?->plan->workflows)
```

| Method | Default | Notes |
| --- | --- | --- |
| `triggers()`, `actions()`, `conditions()` | `[]` | Class names; duplicates are ignored |
| `without()` | `[]` | Removes classes from the registry, whatever list they came from |
| `models()` | `[]` | Class names of Eloquent models |
| `navigationGroup()` | `navigation.group` (`null`) | |
| `navigationIcon()` | `navigation.icon` (`heroicon-o-bolt`) | |
| `navigationSort()` | `navigation.sort` (`null`) | |
| `resource()` | `Packstub\Flow\Filament\Resources\WorkflowResource` | Extend the built-in resource to change the table, the form or the pages |
| `withoutResource()` | resource registered | Use `FlowBuilder::make('definition')` in a resource of your own |
| `secretResource()` | `Packstub\Flow\Filament\Resources\SecretResource` | The [Secrets](secrets.md) page |
| `withoutSecrets()` | page registered | Hide the Secrets page (placeholders keep working for secrets created in code) |
| `withoutRunsPage()` | page registered | Hide the [Runs page](runs.md#the-runs-page) |
| `withoutApprovalsPage()` | page registered | Hide the [Approvals page](approvals.md) (notification and email links keep working) |
| `resolveTenantUsing()` | `null` | See [Multi-tenancy](tenancy.md) |
| `maxWorkflows()` | `null` | Workflows a tenant (or the app) may have; the Create button is disabled beyond it |

`FlowPlugin::get()` returns the plugin instance of the current panel. Nodes and models are registered in application-wide singletons, so a class added on one panel is known to all panels.

## The config file

```bash
php artisan vendor:publish --tag="packstub-flow-config"
```

### Tables and models

```php
'tables' => [
    'workflows' => 'flow_workflows',
    'triggers' => 'flow_workflow_triggers',
    'runs' => 'flow_workflow_runs',
],

'models' => [
    'workflow' => Packstub\Flow\Models\Workflow::class,
    'trigger' => Packstub\Flow\Models\WorkflowTrigger::class,
    'run' => Packstub\Flow\Models\WorkflowRun::class,
],
```

Table names are prefixed so they never collide with a `workflows` table your application may already have. Change them **before** running the migration; the models read them from the config at runtime.

Swap any model for a subclass when you need extra columns, scopes or relationships — a `team_id` for multi-tenancy, for example. The plugin resolves them through `Flow::workflowModel()`, `Flow::triggerModel()` and `Flow::runModel()` everywhere, including the resource.

```php
'models' => [
    'workflow' => App\Models\Workflow::class,   // extends Packstub\Flow\Models\Workflow
    // ...
],
```

The user model used by **Send notification** is `auth.providers.users.model`.

### Queue

```php
'queue' => [
    'enabled' => (bool) env('PACKSTUB_FLOW_QUEUE', false),
    'connection' => env('PACKSTUB_FLOW_QUEUE_CONNECTION'),
    'queue' => env('PACKSTUB_FLOW_QUEUE_NAME'),
    'timeout' => (int) env('PACKSTUB_FLOW_QUEUE_TIMEOUT', 300),
],
```

`enabled` pushes every triggered run onto the queue; `connection` and `queue` apply to run jobs and to the resume jobs of **Wait** steps (which use the queue regardless); `timeout` is the job timeout in seconds. See [Queue & scheduling](queue-and-scheduling.md).

### Execution limits

```php
'max_steps' => 10000,
'max_nesting' => 5,
'max_records' => 1000,
'max_output_bytes' => 16384,
```

`max_nesting` caps how deep runs may start other runs; `max_records` caps what **Find records** reads, **For each** iterates and **Date on a record** starts per minute (see [Runs](runs.md#safety-guards)).

### Tenancy and versions

```php
'tenancy' => [
    'relationship' => env('PACKSTUB_FLOW_TENANT_RELATIONSHIP'),
],
'versions' => [
    'keep' => 50,
],
```

The relationship of a triggering record that leads to its tenant (`team`), used when no resolver is set — see [Multi-tenancy](tenancy.md). `versions.keep` is how many definition [versions](runs.md#versions) are kept per workflow.

### Approvals

```php
'approvals' => [
    'prefix' => 'flow/approvals',
    'middleware' => ['web', 'auth'],
    'link_lifetime_hours' => 72,
],
```

The signed Approve / Reject links in notifications and emails hit `{prefix}/{wait}/{outcome}`; the middleware must authenticate the user so the approver can be checked. See [Approvals & signals](approvals.md).

```php
'max_steps' => 1000,
'max_output_bytes' => 16384,
```

A run fails once it has visited more than `max_steps` nodes. Cycles fail on their own, whatever the limit — see [Runs](runs.md#safety-guards). An action's output (an HTTP response, say) is kept on the step log up to `max_output_bytes`; larger outputs are stored as a truncated preview, though the nodes after it still receive the whole value.

### Outgoing HTTP

```php
'http' => [
    'timeout' => (int) env('PACKSTUB_FLOW_HTTP_TIMEOUT', 15),
    'retry_after_ms' => 500,
    'block_private_networks' => (bool) env('PACKSTUB_FLOW_HTTP_BLOCK_PRIVATE', true),
    'allowed_hosts' => [],
],
```

Applies to the **HTTP request** and **Send Slack message** actions.

| Key | |
| --- | --- |
| `timeout` | Default request timeout in seconds; a node can set its own |
| `retry_after_ms` | Pause between the retries a node asks for |
| `block_private_networks` | Refuses URLs whose host is, or resolves to, a loopback, private, link-local or otherwise reserved address (`localhost`, `127.0.0.1`, `10.0.0.0/8`, `192.168.0.0/16`, `169.254.169.254`, `::1`, …). Only `http` and `https` are ever allowed. Turn off when workflows must reach services on your private network — and make sure only trusted users can edit workflows |
| `allowed_hosts` | When not empty, requests may only go to these hosts: exact names or `*.example.com` wildcards. Everything else is refused, whatever `block_private_networks` says |

### Schedule

```php
'register_schedule' => true,
'schedule_catch_up_minutes' => (int) env('PACKSTUB_FLOW_SCHEDULE_CATCH_UP', 0),
'schedule_on_one_server' => (bool) env('PACKSTUB_FLOW_SCHEDULE_ONE_SERVER', false),
```

`register_schedule` adds `packstub-flow:cron` to Laravel's scheduler every minute (`withoutOverlapping()`). Set to `false` to register the command yourself.

`schedule_catch_up_minutes` makes the command evaluate the minutes that were missed since its last run (a deploy, a crash, a paused scheduler), up to that many; `0` evaluates the current minute only. `schedule_on_one_server` adds `onOneServer()` to the scheduled command for setups where the scheduler runs on several servers (needs a cache driver with locks). See [Queue & scheduling](queue-and-scheduling.md#schedules).

### Webhooks

```php
'webhooks' => [
    'enabled' => true,
    'prefix' => 'flow/webhooks',
    'middleware' => ['api', 'throttle:60,1'],
],
```

| Key | |
| --- | --- |
| `enabled` | `false` removes the route entirely; webhook nodes then never fire |
| `prefix` | The route is `POST {prefix}/{workflow}/{token}`, named `packstub-flow.webhook`. The **Webhook** trigger's settings show the resulting URL |
| `middleware` | Applied to the route. Keep a throttle; add your own middleware (an IP allow-list) here |
| `redacted_headers` | Request headers removed before the payload is stored on the run: `authorization`, `cookie`, `x-api-key`, the signature headers, … |

The route is registered by the package service provider, outside any panel, so it is not affected by the panel's middleware or authentication.

### Model discovery

```php
'models_for_triggers' => [],
```

Models offered by the **Record created / updated / deleted** triggers, in addition to every model in `app/Models` that uses `HasWorkflows` and the plugin's `models([...])`. List models that live elsewhere here. Remember that only models with the trait fire on their own.

### Nodes

```php
'triggers' => [
    Nodes\Triggers\Manual::class,
    Nodes\Triggers\Schedule::class,
    Nodes\Triggers\Webhook::class,
    Nodes\Triggers\RecordCreated::class,
    Nodes\Triggers\RecordUpdated::class,
    Nodes\Triggers\RecordDeleted::class,
    Nodes\Triggers\UserRegistered::class,
    Nodes\Triggers\EventFired::class,
    Nodes\Triggers\WorkflowCalled::class,
],

'actions' => [
    Nodes\Actions\SendEmail::class,
    Nodes\Actions\SendNotification::class,
    Nodes\Actions\SendSlackMessage::class,
    Nodes\Actions\HttpRequest::class,
    Nodes\Actions\UpdateRecord::class,
    Nodes\Actions\Wait::class,
    Nodes\Actions\CallWorkflow::class,
    Nodes\Actions\WriteLog::class,
],

'conditions' => [
    Nodes\Conditions\RecordAttribute::class,
    Nodes\Conditions\CompareValues::class,
    Nodes\Conditions\TimeOfDay::class,
],
```

The nodes offered in the builder (`Nodes` is `Packstub\Flow\Nodes`). Remove a class to hide it everywhere; add your own classes here or through the plugin — see [Extending](extending.md#registering-nodes).

### Navigation

```php
'navigation' => [
    'group' => null,
    'icon' => 'heroicon-o-bolt',
    'sort' => null,
],
```

Defaults for the Workflows resource, overridden per panel by `navigationGroup()`, `navigationIcon()` and `navigationSort()`.

### Runs retention

```php
'prune_runs_after_days' => 30,
```

How old a finished run must be before `packstub-flow:prune` deletes it; a workflow's own **Keep runs for (days)** setting overrides it. With `register_schedule` on, the command is scheduled daily; set the value to `null` to keep runs forever (and not schedule the command). See [Runs](runs.md#packstub-flowprune).

### Notifications

```php
'notifications' => [
    'recipients' => [...explode(',', env('PACKSTUB_FLOW_NOTIFY', ''))],
],
```

Panel users, by email, who receive a database notification when a workflow is deactivated after failing too many times in a row (`PACKSTUB_FLOW_NOTIFY=ops@example.com,cto@example.com`). See [Runs](runs.md#retention-and-failure-limits).

### Authorization

```php
'gate' => env('PACKSTUB_FLOW_GATE'),
```

Workflows can call URLs, send mail and update records, so decide who may manage them. Three layers, all optional and combined:

- a **policy** on the `Workflow` model (`WorkflowPolicy`, or `Gate::policy(Workflow::class, ...)`) — Filament applies it to the resource pages and actions as usual;
- the plugin's `authorize()` callback — `FlowPlugin::make()->authorize(fn () => auth()->user()->isAdmin())` hides the resource when it returns `false`;
- a **Gate ability** named here — every panel user must pass it to see the resource.

Without any of them, every user who can access the panel can manage every workflow.

## The canvas field

`Packstub\Flow\Filament\Forms\Components\FlowBuilder` is the form field behind the canvas. Use it in your own resource (with `withoutResource()`) or a custom page:

```php
use Packstub\Flow\Filament\Forms\Components\FlowBuilder;

FlowBuilder::make('definition')
    ->hiddenLabel()
    ->minHeight(600)        // pixels, or a CSS length such as '70vh'
    ->columnSpanFull()
```

The field's state is the `{nodes, edges}` structure described in [Building workflows](building-workflows.md#how-a-definition-is-stored); the model attribute should be cast to `array`. The field validates the definition before it is saved — a trigger must exist, every other node must be connected, required settings must be filled — when the form has an `is_active` field that is on. `->withoutValidation()` skips those checks.

## Translations and views

```bash
php artisan vendor:publish --tag="packstub-flow-translations"
php artisan vendor:publish --tag="packstub-flow-views"
```

Strings — including every node name, description, field label and step message — live under `lang/vendor/packstub-flow/{locale}/flow.php`; views under `resources/views/vendor/packstub-flow/` (`forms/components/flow-builder`, `forms/placeholders`, `livewire/manage-node`, `mail/workflow`, `runs/detail`).

Next: [Testing](testing.md).
