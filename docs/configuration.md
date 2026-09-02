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
],
```

`enabled` pushes every triggered run onto the queue; `connection` and `queue` apply to run jobs and to the resume jobs of **Wait** steps (which use the queue regardless). See [Queue & scheduling](queue-and-scheduling.md).

### Execution limits

```php
'max_steps' => 1000,
```

A run fails once it has visited more than this many nodes. Cycles fail on their own, whatever the limit — see [Runs](runs.md#safety-guards).

### Schedule

```php
'register_schedule' => true,
```

Adds `packstub-flow:cron` to Laravel's scheduler every minute (`withoutOverlapping()`). Set to `false` to register the command yourself.

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
| `middleware` | Applied to the route. Keep a throttle; add your own middleware (an IP allow-list, a signature check) here |

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

How old a finished run must be before `packstub-flow:prune` deletes it. See [Runs](runs.md#packstub-flowprune).

## The canvas field

`Packstub\Flow\Filament\Forms\Components\FlowBuilder` is the form field behind the canvas. Use it in your own resource (with `withoutResource()`) or a custom page:

```php
use Packstub\Flow\Filament\Forms\Components\FlowBuilder;

FlowBuilder::make('definition')
    ->hiddenLabel()
    ->minHeight(600)        // pixels, or a CSS length such as '70vh'
    ->columnSpanFull()
```

The field's state is the `{nodes, edges}` structure described in [Building workflows](building-workflows.md#how-a-definition-is-stored); the model attribute should be cast to `array`.

## Translations and views

```bash
php artisan vendor:publish --tag="packstub-flow-translations"
php artisan vendor:publish --tag="packstub-flow-views"
```

Strings — including every node name, description, field label and step message — live under `lang/vendor/packstub-flow/{locale}/flow.php`; views under `resources/views/vendor/packstub-flow/` (`forms/components/flow-builder`, `forms/placeholders`, `livewire/manage-node`, `mail/workflow`, `runs/detail`).

Next: [Testing](testing.md).
