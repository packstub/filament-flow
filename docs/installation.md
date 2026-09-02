# Installation

## Requirements

- PHP 8.3 or newer
- Laravel 12 or 13
- Filament 4 or 5
- A queue worker if you use **Wait** steps or queued runs (see [Queue & scheduling](queue-and-scheduling.md))

## 1. Require the package

```bash
composer require packstub/filament-flow
php artisan packstub-flow:install
```

The install command publishes the config file and the migration (`create_flow_tables`) and offers to run it. You can run the pieces yourself instead:

```bash
php artisan vendor:publish --tag="packstub-flow-config"
php artisan vendor:publish --tag="packstub-flow-migrations"
php artisan migrate
```

The migration creates three tables: `flow_workflows`, `flow_workflow_triggers` and `flow_workflow_runs`.

> [!NOTE]
> The table names come from `tables` in the config file. If you want different names, change them **before** migrating — see [Configuration](configuration.md#tables-and-models).

## 2. Prepare your models

Add the `HasWorkflows` trait to every model that should be able to start a workflow. It fires the **Record created**, **Record updated** and **Record deleted** triggers from the model's own events, and the model is listed under "Record type" in those triggers' settings.

```php
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Concerns\HasWorkflows;

class Order extends Model
{
    use HasWorkflows;
}
```

Models in `app/Models` that use the trait are discovered automatically. Models elsewhere can be added through `models_for_triggers` in the config or `FlowPlugin::make()->models([...])` — see [Triggers](triggers.md#record-created--updated--deleted).

## 3. Register the plugin

```php
use Packstub\Flow\FlowPlugin;

public function panel(Panel $panel): Panel
{
    return $panel
        // ...
        ->plugin(
            FlowPlugin::make()
                ->navigationGroup('Automation'),
        );
}
```

This registers the **Workflows** resource (`/workflows` under the panel path). Every option is described in [Configuration](configuration.md#the-plugin-api).

> [!NOTE]
> The **Send notification** action delivers Filament database notifications. For them to show in the panel, your users table needs Laravel's `notifications` table (`php artisan make:notifications-table`) and the panel needs `->databaseNotifications()`.

## 4. Queue and scheduler

Two optional pieces of infrastructure, depending on what your workflows use:

- **Wait** steps always continue through the queue, and setting `PACKSTUB_FLOW_QUEUE=true` moves every run onto the queue. Run a worker: `php artisan queue:work`.
- **Schedule** triggers are evaluated every minute by `packstub-flow:cron`, which the plugin adds to Laravel's scheduler for you. Run the scheduler: `php artisan schedule:work` locally, or a cron entry for `schedule:run` in production.

Details in [Queue & scheduling](queue-and-scheduling.md).

## 5. Try it

1. Open **Workflows** in the panel navigation and click **New workflow**. Give it a name, and note the **Active** toggle — inactive workflows never run.
2. On the canvas, click **Add a trigger** and pick **Manual**.
3. Click the plus next to the trigger's output handle and pick **Write to log**. Open its settings (gear icon or double-click), type a message, and **Apply**.
4. Save the workflow, switch **Active** on, and press **Run now** in the page header.
5. Open the **Runs** tab below the canvas: the run shows as Succeeded with two steps, and your message is in `storage/logs/laravel.log`.

![The Workflows table](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/workflows-list.png)

Continue with [Building workflows](building-workflows.md).
