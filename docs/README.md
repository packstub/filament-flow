# Filament Flow

![Filament Flow](https://raw.githubusercontent.com/packstub/filament-flow/main/art/banner.jpg)

Visual workflow automations for Filament panels: triggers, conditions and actions drawn on a canvas, executed by a runner, optionally through your queue. Free and open source (MIT).

- Repository: [github.com/packstub/filament-flow](https://github.com/packstub/filament-flow)
- Packagist: [packstub/filament-flow](https://packagist.org/packages/packstub/filament-flow)
- Support: [GitHub issues](https://github.com/packstub/filament-flow/issues)

## What you get

| Feature | What it means for you |
| --- | --- |
| **Visual builder** | A Workflows resource with a drag-and-drop canvas. Add triggers, conditions and actions from a sidebar, connect them, branch on true / false, and edit each node's settings in a slide-over built from Filament form components. |
| **Triggers** | Record created / updated / deleted (via the `HasWorkflows` trait, with "changed from / to" and dedup windows), a date on a record ("3 days before due_at"), spatie model-state transitions, user registered, any Laravel event, cron schedules (with catch-up), webhooks, a manual **Run now** or a **Run workflow** action on any resource, and calls from other workflows. |
| **Conditions** | Record attribute (including "changed from / to"), compare values (placeholders on both sides), multiple conditions (AND / OR) and time of day, with twenty operators. |
| **Actions** | Send email, Filament database notification, Slack, Discord, Teams, Telegram, SMS / WhatsApp (Twilio), HTTP request, create / update record, assign owner, add tag, transition state, find records + for each, wait, ask for approval, wait for signal, call workflow, write to log. Per-node retries, continue-on-error or an error branch; an on-failure workflow. |
| **Placeholders** | `{{ model.name }}`, `{{ webhook.order.id }}`, `{{ event.carrier }}`, `{{ original.status }}`, `{{ changes.status }}`, `{{ model.url }}`, `{{ secrets.api_key }}` — resolved from the payload in every text field. |
| **Secrets** | An encrypted store for tokens and webhook URLs, resolved only inside actions and masked in run logs; per tenant when you need it. |
| **Multi-tenancy** | In a panel with tenancy each team manages its own workflows, secrets, runs and approvals; global workflows run for everyone; a plan limit hook caps workflows per tenant. |
| **Versions** | Every change to a workflow is kept, with who saved it and what changed; compare and restore from the panel; runs pin the version they ran. |
| **Runs** | Every run is stored with status, trigger, record, payload summary, a step log (one row per step) and the error, shown in a Runs tab and on a cross-workflow Runs page with stats; a **Test** button for dry runs; `packstub-flow:run` and `packstub-flow:prune` commands; `WorkflowStarted` / `WorkflowCompleted` / `WorkflowFailed` / `WorkflowDeactivated` events. |
| **Queue & scheduling** | Inline or queued runs, Wait steps served by delayed jobs, and a `packstub-flow:cron` command registered with the scheduler for you. |
| **Extensible** | Subclass `Trigger`, `Action` or `Condition`, give it a form schema, and register it on the plugin, in the config or with `Flow::register()`. |

## Guides

| Guide | What it covers |
| --- | --- |
| [Installation](installation.md) | Requirements, the install command, the `HasWorkflows` trait, registering the plugin, queue and scheduler |
| [Building workflows](building-workflows.md) | The canvas: adding and connecting nodes, condition outputs, node settings, saving, and how a definition is stored |
| [Triggers](triggers.md) | Every built-in trigger, its settings, the payload it provides and how it fires |
| [Actions](actions.md) | Every built-in action and its settings |
| [Conditions](conditions.md) | Every built-in condition and all operators |
| [Placeholders](placeholders.md) | Syntax, resolution, aliases, how values become text, what each trigger exposes |
| [Secrets](secrets.md) | The encrypted secrets store, `{{ secrets.* }}` in actions, masking in run logs |
| [Approvals & signals](approvals.md) | Pausing a run for a human decision or an external signal, the Approvals page, `Flow::signal()` |
| [Multi-tenancy](tenancy.md) | Tenant-scoped workflows, runs and secrets; global workflows; tenant resolution; plan limits |
| [Runs](runs.md) | Statuses, the step log, Run now, console commands, retention, failure limits, events and the safety guards |
| [Queue & scheduling](queue-and-scheduling.md) | Sync versus queued runs, Wait steps, the cron command and scheduler registration |
| [Extending](extending.md) | Writing and registering your own triggers, actions and conditions; dispatching from code |
| [Configuration](configuration.md) | Every config key, the fluent `FlowPlugin` API, custom models, tables, navigation and webhooks |
| [Testing](testing.md) | Testing workflows in your application with Pest or PHPUnit |

## At a glance

```bash
composer require packstub/filament-flow
php artisan packstub-flow:install
```

```php
use Packstub\Flow\Concerns\HasWorkflows;

class Order extends Model
{
    use HasWorkflows;
}
```

```php
use Packstub\Flow\FlowPlugin;

$panel->plugin(
    FlowPlugin::make()
        ->navigationGroup('Automation'),
);
```

## Requirements

PHP 8.3+, Laravel 12 or 13, Filament 4 or 5.

---

These pages are published at [packstub.dev/docs/filament-flow](https://packstub.dev/docs/filament-flow) from the package's `docs/` directory. Spotted a mistake? [Open a pull request](https://github.com/packstub/filament-flow).
