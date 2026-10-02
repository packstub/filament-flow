# Filament Flow

![Filament Flow](https://raw.githubusercontent.com/packstub/art/main/filament-flow/banner.jpg)

Visual workflow automations for Filament panels: triggers, conditions and actions drawn on a canvas, executed by a runner, optionally through your queue. Free and open source (MIT).

- Repository: [github.com/packstub/filament-flow](https://github.com/packstub/filament-flow)
- Packagist: [packstub/filament-flow](https://packagist.org/packages/packstub/filament-flow)
- Support: [GitHub issues](https://github.com/packstub/filament-flow/issues)

## Features

- **[Visual builder](building-workflows.md)**: a drag-and-drop canvas in a Filament resource, each node's settings in a slide-over.
- **[Triggers](triggers.md)**: record changes, dates on a record, schedules, webhooks, any Laravel event, or a button on any resource.
- **[Conditions](conditions.md)**: branch on a record attribute, any two values or the time of day, with twenty operators.
- **[Actions](actions.md)**: emails, notifications, Slack, Teams, SMS, HTTP calls, record updates, loops and waits, with retries.
- **[AI steps](decide.md)**: Ask AI for named fields to branch on, or Decide for a typed answer with a Not sure branch.
- **[Placeholders and secrets](placeholders.md)**: `{{ model.name }}` in any text, API tokens encrypted and masked in run logs.
- **[Approvals and signals](approvals.md)**: pause a run until a person decides or your code calls `Flow::signal()`.
- **[Templates, import and export](templates.md)**: start from a template or a sentence, move workflows between panels as JSON.
- **[Runs and versions](runs.md)**: inline or queued, a step-by-step log of every run, dry-run tests, every change kept to restore.
- **[Multi-tenant](tenancy.md)**: each team keeps its own workflows, secrets, runs and approvals, with a plan limit hook.
- **[Extensible](extending.md)**: your own triggers, actions and conditions, registered on the plugin or with `Flow::register()`.

## Guides

| Guide | What it covers |
| --- | --- |
| [Installation](installation.md) | Requirements, the install command, the `HasWorkflows` trait, registering the plugin, queue and scheduler |
| [Building workflows](building-workflows.md) | The canvas: adding and connecting nodes, condition outputs, node settings, saving, and how a definition is stored |
| [Triggers](triggers.md) | Every built-in trigger, its settings, the payload it provides and how it fires |
| [Actions](actions.md) | Every built-in action and its settings |
| [Conditions](conditions.md) | Every built-in condition and all operators |
| [Decisions with Jev](decide.md) | The Decide action: a branch decided by TypeSafe's System One model — yes / no, one of your options, a score — with a Not sure branch under the confidence you ask for |
| [Placeholders](placeholders.md) | Syntax, resolution, aliases, how values become text, what each trigger exposes |
| [Secrets](secrets.md) | The encrypted secrets store, `{{ secrets.* }}` in actions, masking in run logs |
| [Approvals & signals](approvals.md) | Pausing a run for a human decision or an external signal, the Approvals page, `Flow::signal()` |
| [Templates, import and export](templates.md) | Starting from a template, describing a workflow in a sentence, the export file, importing in the panel or from a seeder, your own templates |
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
