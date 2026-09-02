# Extending

Every trigger, action and condition is a small PHP class. The built-in ones in `Packstub\Flow\Nodes\Triggers`, `Actions` and `Conditions` are written exactly the way yours will be, so they are the best examples to read.

## Anatomy of a node

All nodes extend `Packstub\Flow\Nodes\Node` through one of three base classes and share these methods:

| Method | Required | Purpose |
| --- | --- | --- |
| `getName(): string` | yes | Shown in the sidebar, as the default node label, and as the slide-over heading |
| `getDescription(): string` | no | One line under the name in the sidebar and slide-over |
| `getIcon(): ?string` | no | A Heroicon name (`heroicon-o-bolt`) or raw `<svg>` markup, shown in the sidebar |
| `getFormSchema(): array` | no | Filament form components for the node's settings. The values are stored on the node as `config` and passed to `matches()` / `handle()` / `evaluate()` |
| `getPlaceholders(): array` | no | `['{{ model.name }}' => 'The record name', ...]`, listed in the slide-over's Placeholders section |
| `isAvailable(): bool` (static) | no | Return `false` when a package the node needs is missing; the node is then never registered nor offered (the spatie state triggers work this way) |
| `getOutputs(): array` | no | The output handles drawn on the canvas, `['output' => 'Next']` by default; the runner follows the edges leaving the handle a node picks (`['body' => 'Each item', 'done' => 'Done']`) |

Nodes are resolved from the container (`Node::make()` is `app(static::class)`), so constructor injection works. Names and descriptions are usually translation strings, but plain text is fine.

The `config` array is exactly what the form produced; the `payload` array is what the trigger provided (see [Placeholders](placeholders.md#what-each-trigger-exposes)).

## Actions

Extend `Packstub\Flow\Nodes\Action` and implement `handle(array $config, array $payload): void`. Throw to fail the run (or let the node's retry / continue-on-error settings deal with it); return to continue. Call `$this->output([...])` before returning to expose values to the nodes after it as `{{ last.* }}` and `{{ outputs.<node id>.* }}` — see [Placeholders](placeholders.md#outputs-of-earlier-actions).

```php
namespace App\Flow\Actions;

use Filament\Forms\Components\Select;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;

class AssignToTeam extends Action
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return 'Assign to team';
    }

    public function getDescription(): string
    {
        return 'Moves the record to a team.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-user-group';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('team_id')
                ->label('Team')
                ->options(fn (): array => Team::query()->pluck('name', 'id')->all())
                ->searchable()
                ->required(),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $record = $payload['model'] ?? null;

        if (! $record) {
            throw new \RuntimeException('Assign to team needs a record; use it after a record trigger.');
        }

        $record->forceFill(['team_id' => $config['team_id']])->saveQuietly();

        $this->output(['team_id' => $config['team_id']]);
    }
}
```

Inside `handle()`, `$this->output([...])` exposes values to the rest of the branch as `{{ last.* }}`; pass a second array to store a shorter summary on the step log (`$this->output(['records' => $records], ['count' => $records->count()])`). `$this->setPayloadValue('model', $record)` replaces a top-level payload key for the nodes after this one. Override `preview(array $config, array $payload): array` to control what a [test run](runs.md#test-runs) shows instead of running the action, and implement `Packstub\Flow\Contracts\ReadOnlyAction` (a marker interface) when the action changes nothing, so a test run executes it for real.

### Delayable actions

An action that implements `Packstub\Flow\Contracts\Delayable` pauses the run instead of running: the runner calls `getDelaySeconds($config, $payload)` and, for a positive number, schedules the nodes after it through the queue exactly like the built-in **Wait** (see [Queue & scheduling](queue-and-scheduling.md#wait-steps)). `handle()` is never called in that case; `null` or `0` means "continue now", and then `handle()` runs as for any other action. Use it for a "wait until the record's due date" kind of step:

```php
use Packstub\Flow\Contracts\Delayable;

class WaitUntilDue extends Action implements Delayable
{
    public function getDelaySeconds(array $config, array $payload): ?int
    {
        $due = $payload['model']?->due_at;

        return $due?->isFuture() ? (int) now()->diffInSeconds($due) : null;
    }

    public function handle(array $config, array $payload): void
    {
        // never called when a delay was returned
    }
}
```

### Loops, waits and polled triggers

Three more contracts let an action or a trigger take part in the runner's control flow:

| Contract | Implement | The runner |
| --- | --- | --- |
| `Contracts\Iterates` | `getItems($config, $payload): iterable`, `getItemKey($config)`, `getMaxIterations($config)` | Visits the `body` output once per item with the item (and `loop`) in the payload, then follows `done`. Give the node `getOutputs()` returning `['body' => ..., 'done' => ...]` |
| `Contracts\Waitable` | `createWait($config, $payload): ?WaitRequest`, `afterWaitCreated(WorkflowWait $wait, $config, $payload)` | Stores a `WorkflowWait` with the branch payload and a graph snapshot, stops the branch, and continues along the outcome's handle when `Flow::resolveWait()` / `Flow::signal()` is called or the timeout passes. `WaitRequest` names the type (`approval` / `event`), the outcomes, a timeout, an optional key and metadata for the Approvals page |
| `Contracts\Pollable` (triggers) | `poll($config, DateTimeInterface $now): iterable` of payloads | Asks every active trigger of that type each minute from `packstub-flow:cron` and starts a run per payload, honouring `once` |

The built-in **For each**, **Ask for approval**, **Wait for signal** and **Date on a record** are the reference implementations.

## Conditions

Extend `Packstub\Flow\Nodes\Condition` and implement `evaluate(array $config, array $payload): bool`. `true` follows the **True** output, `false` the **False** output.

```php
namespace App\Flow\Conditions;

use Filament\Forms\Components\TextInput;
use Packstub\Flow\Nodes\Condition;

class IsVip extends Condition
{
    public function getName(): string
    {
        return 'Customer is VIP';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-star';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('minimum_orders')->numeric()->default(10)->required(),
        ];
    }

    public function evaluate(array $config, array $payload): bool
    {
        $customer = $payload['model']?->customer;

        return $customer && $customer->orders()->count() >= (int) $config['minimum_orders'];
    }
}
```

The `Packstub\Flow\Nodes\Conditions\Concerns\ComparesValues` trait used by the built-in conditions gives you the operator select (`$this->operatorSelect()`), the comparison (`$this->compare($actual, $operator, $expected)`) and `static::needsValue($operator)` for hiding the value field, if your condition compares things.

## Triggers

Extend `Packstub\Flow\Nodes\Trigger`. Override `matches(array $config, array $payload): bool` to decide whether a dispatched payload should start the workflow this node belongs to — it is called once per active workflow that has the trigger, with that node's settings. The default returns `true`.

```php
namespace App\Flow\Triggers;

use Filament\Forms\Components\Select;
use Packstub\Flow\Nodes\Trigger;

class OrderPaid extends Trigger
{
    public function getName(): string
    {
        return 'Order paid';
    }

    public function getDescription(): string
    {
        return 'Fires when a payment for an order succeeds.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-banknotes';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('gateway')
                ->options(['any' => 'Any', 'stripe' => 'Stripe', 'paddle' => 'Paddle'])
                ->default('any'),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        $gateway = $config['gateway'] ?? 'any';

        return $gateway === 'any' || ($payload['gateway'] ?? null) === $gateway;
    }

    public function getPlaceholders(): array
    {
        return [
            '{{ model.reference }}' => 'The paid order',
            '{{ gateway }}' => 'The payment gateway',
        ];
    }
}
```

Then fire it from wherever the thing happens — a listener, a controller, a job:

```php
use Packstub\Flow\Facades\Flow;

Flow::dispatch(OrderPaid::class, ['model' => $order, 'gateway' => 'stripe']);
```

Put the record under `model` so **Update record**, **Record attribute** and `{{ model.* }}` / `{{ record.* }}` work as with the built-in record triggers. `Flow::dispatch()` returns the runs that finished synchronously.

## Placeholders in your own nodes

Add the `Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders` trait for two helpers and a default placeholder list:

```php
$this->interpolate($config['subject'] ?? '', $payload);          // string with {{ }} filled in
$this->interpolateArray($config['headers'] ?? [], $payload);     // every string in a nested array
```

The trait's `getPlaceholders()` returns the generic examples (`{{ model.name }}`, `{{ model.team.name }}`, `{{ webhook.order.id }}`, `{{ event.order.total }}`); override it to document what your node reads. `Packstub\Flow\Support\Placeholders` has the static equivalents (`render`, `renderArray`, `resolve`, `stringify`).

## Registering nodes

Three ways, all ending up in the same `Packstub\Flow\NodeRegistry` singleton — only registered classes are ever instantiated from a stored workflow:

```php
// 1. On the plugin
FlowPlugin::make()
    ->triggers([OrderPaid::class])
    ->actions([AssignToTeam::class])
    ->conditions([IsVip::class])

// 2. In config/packstub-flow.php, next to the built-in ones
'actions' => [
    Nodes\Actions\SendEmail::class,
    // ...
    App\Flow\Actions\AssignToTeam::class,
],

// 3. Anywhere, e.g. a service provider's boot()
use Packstub\Flow\Facades\Flow;

Flow::register(AssignToTeam::class);   // sorted into triggers / actions / conditions by base class
```

Hide built-in nodes with `FlowPlugin::make()->without([...])` or by removing them from the config lists. A node that is no longer registered disappears from the sidebar, and a saved workflow that still uses it fails its runs with "is not registered" — so clean up workflows before removing a node they depend on. The registry is application-wide: nodes registered for one panel are available in every panel.

## Running workflows from code

```php
use Packstub\Flow\Facades\Flow;

// Start every active workflow whose trigger of this type matches
$runs = Flow::dispatch(OrderPaid::class, ['model' => $order]);

// Run one workflow: from its first trigger, or from a given node, sync or queued
$run = Flow::run($workflow, ['model' => $order]);
$run = Flow::run($workflow, ['model' => $order], startNodeId: 'trigger-xyz', queue: false);

// Reach the registry
Flow::registry()->actions();
Flow::registry()->has(AssignToTeam::class);

// Run code without any trigger starting a workflow (imports, seeders)
Flow::suppress(fn () => Order::query()->update([...]));

// Dry run: side effects simulated, conditions evaluated
$run = Flow::test($workflow, ['model' => $order]);

// Continue runs parked on a "Wait for signal" / an approval
Flow::signal("payment.{$order->id}", ['amount' => 99]);
Flow::resolveWait($wait, 'approved', ['comment' => 'ok'], 'boss@example.com');
Flow::expireWaits();

// What packstub-flow:cron does for "Date on a record" triggers
Flow::poll(now());

// Multi-tenancy: which tenant a payload belongs to
Flow::resolveTenantUsing(fn (array $payload) => $payload['model']?->team);
```

`Flow::run()` returns `null` when the workflow is inactive, has no trigger node, or the run was queued; otherwise the finished `WorkflowRun`.

Next: [Configuration](configuration.md).
