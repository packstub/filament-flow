# Filament Flow

<div class="filament-hidden">

![Filament Flow — visual workflow automation for Filament panels](https://raw.githubusercontent.com/packstub/filament-flow/main/art/banner.jpg)

[![Latest Version on Packagist](https://img.shields.io/packagist/v/packstub/filament-flow.svg?style=flat-square)](https://packagist.org/packages/packstub/filament-flow)
[![Tests](https://img.shields.io/github/actions/workflow/status/packstub/filament-flow/tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/packstub/filament-flow/actions/workflows/tests.yml)
[![Total Downloads](https://img.shields.io/packagist/dt/packstub/filament-flow.svg?style=flat-square)](https://packagist.org/packages/packstub/filament-flow)
[![License](https://img.shields.io/packagist/l/packstub/filament-flow.svg?style=flat-square)](https://github.com/packstub/filament-flow/blob/main/LICENSE.md)

</div>

Visual workflow automations for your Filament panel: draw triggers, conditions and actions on a canvas, and let the runner — or your queue — do the rest.

## Features

- **[Visual builder](#the-builder)** — a drag-and-drop canvas inside a Filament resource: add nodes from a sidebar, connect them, branch on true / false, and edit each node's settings in a slide-over built from Filament form components.
- **[Triggers](#triggers)** — record created / updated / deleted, user registered, any Laravel event, a cron schedule, a webhook, a manual run, or a call from another workflow.
- **[Conditions](#conditions)** — compare a record attribute or any two values with fifteen operators, or check the time of day.
- **[Actions](#actions)** — send an email, a Filament database notification or a Slack message, call an HTTP endpoint, update the record, wait, call another workflow, or write to the log.
- **[Placeholders](#placeholders)** — `{{ model.name }}`, `{{ webhook.order.id }}`, `{{ event.carrier }}` and friends, resolved from the run's payload wherever you type text.
- **[Run history](#runs)** — every run is stored with its status, trigger, payload summary, a step-by-step log and any error, browsable from a Runs tab; a **Run now** button for quick checks.
- **[Queue & scheduling](#queue--scheduling)** — run workflows inline or on your queue, pause them for minutes or days with a Wait step, and start them from cron expressions with one scheduler entry.
- **[Webhooks](#webhooks)** — a tokenised POST endpoint per workflow that answers `202 Accepted` and exposes the request body to your nodes.
- **[Extensible](#extending)** — write your own trigger, action or condition class with a Filament form schema and register it on the plugin, in the config, or with `Flow::register()`.
- **Dark mode ready** and **translatable** — the canvas follows Filament's theme, and every string, node name and description lives in a language file.

## Compatibility

| Plugin | Filament | Laravel | PHP |
| --- | --- | --- | --- |
| 1.x | 4.x, 5.x | 12.x, 13.x | 8.3+ |

## Installation

```bash
composer require packstub/filament-flow
php artisan packstub-flow:install
```

Add the trait to the models you want to automate, and the plugin to your panel:

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

A **Workflows** resource appears in the panel navigation.

![The Workflows table with triggers, run counts and the last run's status](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/workflows-list.png)

Full walkthrough: [Installation](https://packstub.dev/docs/filament-flow/installation).

## The builder

A workflow is a graph: one or more trigger nodes, followed by actions and conditions connected by edges. Draw it on the canvas — add nodes with the **+** button, the right-click menu or the plus on an unconnected output handle, drag handles together to connect them, and use a condition's **True** and **False** outputs to branch.

![A finished workflow on the canvas](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/canvas.png)

Every node has a label, a description and its own settings, edited in a slide-over you open with the gear icon or a double-click. The graph is saved with the workflow as plain JSON (`nodes` and `edges`), so it is easy to seed, export and test.

```php
use Packstub\Flow\Filament\Forms\Components\FlowBuilder;

// The canvas is a form field — use it in your own resource if you like
FlowBuilder::make('definition')->minHeight('70vh')
```

Read more: [Building workflows](https://packstub.dev/docs/filament-flow/building-workflows).

## Triggers

A trigger starts a run and decides what the payload contains. Pick one from the sidebar and configure it in its settings — the model for a record trigger, a cron expression for a schedule, the event class for an event trigger.

![The add-node sidebar listing the available triggers](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/node-sidebar.png)

| Trigger | Fires when |
| --- | --- |
| Manual | You press **Run now**, run `packstub-flow:run`, or call `Flow::run()` |
| Schedule | A cron expression is due (checked every minute by `packstub-flow:cron`) |
| Webhook | A `POST` hits `/flow/webhooks/{workflow}/{token}` |
| Record created / updated / deleted | A model using `HasWorkflows` is created, updated or deleted |
| User registered | Laravel's `Illuminate\Auth\Events\Registered` event is dispatched |
| Event | Any Laravel event of the configured class is dispatched |
| Called by another workflow | Another workflow runs a **Call workflow** action pointing at this one |

A workflow can have several triggers; the run starts from the one that fired. Fire your own from code:

```php
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;

Flow::dispatch(RecordUpdated::class, ['model' => $order]);
```

Read more: [Triggers](https://packstub.dev/docs/filament-flow/triggers).

## Conditions

A condition has a **True** and a **False** output; the run follows the branch that matches. **Record attribute** checks a column, accessor or dotted relationship path (`customer.country`) on the record that started the run; **Compare values** compares any two values, placeholders allowed on both sides; **Time of day** is true inside a daily window in a timezone of your choice.

Operators: equals, does not equal, greater / less than (or equal), contains, does not contain, starts with, ends with, is one of, is empty, is not empty, is true, is false.

Read more: [Conditions](https://packstub.dev/docs/filament-flow/conditions).

## Actions

Actions do the work. Each one's settings are a small Filament form; text fields accept placeholders.

![The settings slide-over for a Send email action](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/node-settings.png)

| Action | What it does |
| --- | --- |
| Send email | A plain Markdown email to one or more addresses |
| Send notification | A Filament database notification to panel users, picked by email |
| Send Slack message | Posts to a Slack incoming webhook |
| HTTP request | Calls any URL with headers and a JSON body; can fail the run on a 4xx / 5xx response |
| Update record | Sets attributes on the record that started the run, quietly by default |
| Wait | Pauses the run for seconds, minutes, hours or days; the rest continues through the queue |
| Call workflow | Runs another workflow with the current payload |
| Write to log | Writes a line to the application log at the chosen level |

Read more: [Actions](https://packstub.dev/docs/filament-flow/actions).

## Placeholders

Any text a node sends or compares can reference the run's payload with `{{ path }}`. Paths are resolved with `data_get()`, so relationships and nested arrays just work:

```text
Order {{ model.reference }} for {{ model.customer.name }} is now {{ model.status }}
Previously {{ original.status }} — changed: {{ changes.status }}
Webhook said {{ webhook.order.total }}; the event carrier is {{ event.carrier }}
```

`{{ record.x }}` is an alias of `{{ model.x }}`. Each node's settings panel lists the placeholders its trigger provides.

Read more: [Placeholders](https://packstub.dev/docs/filament-flow/placeholders).

## Runs

Every run is recorded: status (Running, Waiting, Succeeded, Failed), the trigger that started it, a summary of the payload, when it started and how long it took, a step-by-step log, and the error message if something threw. The **Runs** tab under a workflow lists them and refreshes on its own.

![The Runs tab under a workflow](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/runs.png)

Open a run to see each step in order.

![A run's steps and payload in the details modal](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/run-detail.png)

**Run now** (in the table and on the edit page) starts an active workflow from its first trigger, and `packstub-flow:run` does the same from the console. `packstub-flow:prune` deletes finished runs older than the configured retention.

```bash
php artisan packstub-flow:run "Welcome sequence" --payload='{"answer": 42}'
php artisan packstub-flow:prune --days=30
```

Read more: [Runs](https://packstub.dev/docs/filament-flow/runs).

## Queue & scheduling

By default a workflow runs inside the request or model event that triggered it. Set `PACKSTUB_FLOW_QUEUE=true` to push every run onto the queue instead — optionally on its own connection and queue name. **Wait** steps always continue through the queue, so run a worker whenever you use them.

```dotenv
PACKSTUB_FLOW_QUEUE=true
PACKSTUB_FLOW_QUEUE_NAME=flows
```

Schedule triggers are evaluated by `packstub-flow:cron`, which the plugin registers with Laravel's scheduler every minute. A running `schedule:work` (or a cron entry for `schedule:run`) is all you need.

Read more: [Queue & scheduling](https://packstub.dev/docs/filament-flow/queue-and-scheduling).

## Webhooks

A **Webhook** trigger gives the workflow a secret token. Send a `POST` to `/flow/webhooks/{workflow id}/{token}` and the JSON body is available to every node as `{{ webhook.* }}`. The endpoint answers `202 Accepted` with the run id and status, and `404` for an unknown workflow, an inactive one or a wrong token.

```bash
curl -X POST https://example.com/flow/webhooks/9d2f.../your-secret-token \
  -H 'Content-Type: application/json' \
  -d '{"order": {"id": 42, "status": "shipped"}}'
```

The prefix, middleware (`api` and `throttle:60,1` by default) and an on/off switch live in the config.

Read more: [Webhooks](https://packstub.dev/docs/filament-flow/triggers#webhook).

## Extending

A node is a class with a name, an icon, a Filament form schema and one method: `matches()` for a trigger, `evaluate()` for a condition, `handle()` for an action.

```php
use Filament\Forms\Components\TextInput;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;

class AssignToTeam extends Action
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return 'Assign to team';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-user-group';
    }

    public function getFormSchema(): array
    {
        return [TextInput::make('team')->required()];
    }

    public function handle(array $config, array $payload): void
    {
        $payload['model']->update(['team' => $this->interpolate($config['team'], $payload)]);
    }
}
```

```php
FlowPlugin::make()->actions([AssignToTeam::class])
```

Read more: [Extending](https://packstub.dev/docs/filament-flow/extending).

## Configuration

```php
use Packstub\Flow\FlowPlugin;

FlowPlugin::make()
    ->triggers([OrderPaid::class])                 // add your own nodes
    ->actions([AssignToTeam::class])
    ->conditions([IsVip::class])
    ->without([SendSlackMessage::class])           // hide built-in nodes
    ->models([Order::class, Invoice::class])       // offered by the record triggers
    ->navigationGroup('Automation')
    ->navigationIcon('heroicon-o-bolt')
    ->navigationSort(10)
    ->resource(App\Filament\Resources\WorkflowResource::class)   // or ->withoutResource()
```

Read more: [Configuration](https://packstub.dev/docs/filament-flow/configuration) — the config file, tables and models, queue, webhooks, execution limits and retention.

## Documentation

- [Installation](https://packstub.dev/docs/filament-flow/installation)
- [Building workflows](https://packstub.dev/docs/filament-flow/building-workflows)
- [Triggers](https://packstub.dev/docs/filament-flow/triggers)
- [Actions](https://packstub.dev/docs/filament-flow/actions)
- [Conditions](https://packstub.dev/docs/filament-flow/conditions)
- [Placeholders](https://packstub.dev/docs/filament-flow/placeholders)
- [Runs](https://packstub.dev/docs/filament-flow/runs)
- [Queue & scheduling](https://packstub.dev/docs/filament-flow/queue-and-scheduling)
- [Extending](https://packstub.dev/docs/filament-flow/extending)
- [Configuration](https://packstub.dev/docs/filament-flow/configuration)
- [Testing](https://packstub.dev/docs/filament-flow/testing)

The same pages live in the [`docs/`](https://github.com/packstub/filament-flow/tree/main/docs) directory of this repository.

## Testing

```bash
composer test
```

## Changelog

See the [changelog](https://github.com/packstub/filament-flow/blob/main/CHANGELOG.md).

## Security vulnerabilities

Please e-mail [support@packstub.dev](mailto:support@packstub.dev) rather than opening a public issue.

## Credits

- [Ion Caliman](https://github.com/icaliman)
- [All contributors](https://github.com/packstub/filament-flow/contributors)

## License

MIT. See the [license file](https://github.com/packstub/filament-flow/blob/main/LICENSE.md).
