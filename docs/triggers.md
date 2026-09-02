# Triggers

A trigger starts a run. Each trigger class decides, per workflow, whether an incoming payload should start that workflow (`matches()`), and defines what the payload contains — which is what [placeholders](placeholders.md) and conditions read.

## How dispatching works

```php
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;

$runs = Flow::dispatch(RecordUpdated::class, ['model' => $order]);
```

`Flow::dispatch()` looks up every **active** workflow that has a trigger node of that class (from the `flow_workflow_triggers` table, kept in sync when a workflow is saved), asks the trigger whether the node's settings match the payload, and starts a run from that node for each match. It returns the runs that finished synchronously — an empty array when runs were pushed onto the queue or nothing matched. An unregistered trigger class matches nothing.

A workflow may have several trigger nodes; the run starts from the one that fired and follows only the edges leaving it. When a run is started without a specific trigger — **Run now**, `packstub-flow:run`, `Flow::run($workflow)` — it starts from the first trigger node in the definition.

Every trigger's payload is also available to your own code through the `WorkflowStarted` / `WorkflowCompleted` / `WorkflowFailed` events (see [Runs](runs.md#events)).

## Manual

Starts from the **Run now** button (table row and edit page header), from a **Run workflow** action on any resource, from the console with `packstub-flow:run`, or from code with `Flow::run()`.

| Setting | |
| --- | --- |
| Record type | Optional. When set, the workflow is offered by the **Run workflow** resource action only for records of that type, and its nodes can rely on `{{ model.* }}` |

| Payload | From |
| --- | --- |
| `manual` | `true` when started with **Run now** or a resource action |
| `model` | The record, when started from a resource action (alias `record`) |
| anything else | Whatever you pass to `Flow::run()` or `--payload` |

**Run now** passes `['manual' => true]` and nothing else, so nodes that need a record (record conditions, **Update record**) fail on such a run. Use it to try schedules, webhooks, notifications and logging.

```php
Flow::run($workflow, ['answer' => 42]);
```

### From a resource action

`RunWorkflowAction` turns any Filament resource into an entry point: a **Run workflow** button on a row (or a bulk action on a selection) that lists the active workflows whose Manual trigger accepts the record type, and starts the chosen one with the record as `{{ model }}`.

```php
use Packstub\Flow\Filament\Actions\RunWorkflowAction;
use Packstub\Flow\Filament\Actions\RunWorkflowBulkAction;

public static function table(Table $table): Table
{
    return $table
        ->recordActions([RunWorkflowAction::make()])
        ->toolbarActions([RunWorkflowBulkAction::make()]);
}
```

Both actions are hidden when no workflow qualifies. `->workflows([$id, ...])` (or a closure) restricts the list; `->payload(fn (Model $record) => ['source' => 'orders-table'])` adds keys to the payload. The result is reported as a notification: how many records ran, were queued, or failed (with the errors).

## Schedule

Runs on a cron expression. `packstub-flow:cron` — registered with Laravel's scheduler every minute, see [Queue & scheduling](queue-and-scheduling.md#schedules) — dispatches this trigger with the current time, and every workflow whose expression is due at that minute starts.

| Setting | |
| --- | --- |
| Cron expression | Five fields: minute, hour, day of month, month, day of week. Validated when you apply the settings. `0 9 * * 1-5` is weekdays at 09:00 |
| Timezone | The timezone the expression is evaluated in; empty means the application timezone (`app.timezone`) |

A node with an invalid expression never matches.

| Payload | |
| --- | --- |
| `now` | The `Carbon` instance the command ran with; `{{ now }}` renders it as an ISO 8601 date |

## Webhook

Starts when a `POST` request hits the workflow's webhook URL. Each webhook node has its own secret token; the URL is:

```text
POST {app url}/flow/webhooks/{workflow id}/{token}
```

| Setting | |
| --- | --- |
| Secret token | Generated for you (40 random characters); 16–120 letters, digits, dashes and underscores. The settings panel shows the full URL prefix |
| Signing secret | Optional. When set, every request must carry an HMAC-SHA256 signature (hex, with or without a `sha256=` prefix) of the raw body, computed with this secret |
| Signature header | The header that carries the signature; `X-Signature` by default |

The endpoint:

- answers `202 Accepted` with `{"accepted": true, "run": "<run id>", "status": "success"}` — with queued runs (see [Queue & scheduling](queue-and-scheduling.md)) `run` is `null` and `status` is `"queued"`;
- answers `404` when the workflow does not exist, is inactive, or the token does not match any webhook node of that workflow (tokens are compared in constant time);
- answers `401` when the node has a signing secret and the signature is missing or wrong;
- reads a JSON body when the request is JSON, and form fields otherwise.

```bash
curl -X POST https://example.com/flow/webhooks/9d2f4a1e-.../your-secret-token \
  -H 'Content-Type: application/json' \
  -d '{"order": {"id": 42, "status": "shipped"}}'
```

| Payload | |
| --- | --- |
| `webhook` | The request body: `{{ webhook.order.status }}` |
| `headers` | Request headers, first value each, lower-cased names: `{{ headers.x-request-id }}`. Credential headers (`Authorization`, `Cookie`, `X-Api-Key`, the signature header, …) are dropped before the payload is stored — the list is `webhooks.redacted_headers` in the config |
| `webhook_token` | The token from the URL (used for matching) |

The route is named `packstub-flow.webhook`, runs under the `api` and `throttle:60,1` middleware by default, and can be disabled or moved to another prefix in the config — see [Configuration](configuration.md#webhooks).

> [!NOTE]
> Treat the URL as a secret and keep the throttle middleware. When the sender can sign requests (most services can), set a signing secret so a leaked URL is not enough to start the workflow.

## Record created / updated / deleted

Fire from the Eloquent `created`, `updated` and `deleted` events of models that use the `HasWorkflows` trait:

```php
use Packstub\Flow\Concerns\HasWorkflows;

class Order extends Model
{
    use HasWorkflows;
}
```

| Setting | |
| --- | --- |
| Record type | The model class. The list contains every non-abstract model in `app/Models` that uses `HasWorkflows`, plus the classes in `models_for_triggers` (config) and `FlowPlugin::make()->models([...])` |
| Run once per record | Skips a record the workflow has already run for (any status). Welcome series, surveys and reminders should not fire twice |
| Not more than once per record every N days | A dedup window: skips a record the workflow ran for in the last N days (abandoned-cart nudges, payment reminders). Shown when **Run once per record** is off |
| Only when these attributes change | **Record updated** only: attribute names; the trigger fires only when at least one of them is in `changes`. Empty fires on every update |
| Changed from / Changed to | **Record updated** only, with attributes to watch: the old and / or new value one of them must have. `status` from `pending` to `paid` fires once, when that exact change happens (case-insensitive) |

A node matches when the payload's model is an instance of the chosen class (subclasses included). "Status becomes *paid*" is **Record updated** watching `status` with **Changed to** `paid` — or, for a condition further down the graph, a **Record attribute** condition with the *changed to* operator; `{{ original.status }}` still holds the previous value. Runs remember the record they started for (`subject_type` / `subject_id`), which the Runs tab shows and searches.

| Payload | Provided by |
| --- | --- |
| `model` | The record (`{{ model.status }}`, `{{ model.customer.name }}`); `record` is an alias |
| `original` | Updated only: the attributes before the update (`{{ original.status }}`) |
| `changes` | Updated only: just the attributes that changed (`{{ changes.status }}`) |

Some details worth knowing:

- Mass updates (`Order::query()->update()`), `saveQuietly()` / `updateQuietly()` and soft-delete restores fire no `created` / `updated` / `deleted` event and therefore no trigger; a soft delete fires **Record deleted**.
- A trigger fired inside a database transaction starts the run right away in sync mode; with the queue enabled the job is dispatched after the transaction commits.
- Saves made with `saveQuietly()` / `updateQuietly()` fire no Eloquent events and therefore no trigger. The **Update record** action saves quietly by default for exactly this reason: a workflow that updates the record that started it would otherwise start itself again.
- A model listed in the config or the plugin without the trait appears in the select but never fires on its own — dispatch the trigger yourself, or add the trait.
- A **Record deleted** run that continues through the queue (after a **Wait**) gets the deleted record rebuilt from the attributes it had, so placeholders keep working.

You can dispatch the same triggers from code, e.g. from an observer, a job or a console command:

```php
Flow::dispatch(RecordCreated::class, ['model' => $order]);
Flow::dispatch(RecordUpdated::class, ['model' => $order, 'original' => $before, 'changes' => $order->getChanges()]);
Flow::dispatch(RecordDeleted::class, ['model' => $order]);
```

And you can switch every trigger off for a block of code — imports, seeders, backfills — with `Flow::suppress()`; explicit `Flow::run()` calls still work inside it:

```php
Flow::suppress(fn () => Order::factory()->count(1000)->create());
```

## User registered

Fires on Laravel's `Illuminate\Auth\Events\Registered` event, which the framework's registration flows (Fortify, Breeze, Jetstream, your own controller calling `event(new Registered($user))`) dispatch. No settings.

| Payload | |
| --- | --- |
| `model` | The registered user (`{{ model.email }}`) |
| `user` | The same user, so `{{ user.name }}` reads naturally too |

## Event

Fires when a Laravel event of the chosen class is dispatched. The plugin registers one wildcard listener; the set of watched event classes is loaded once per process and cached for an hour, so the cost per unrelated event is a hash lookup.

| Setting | |
| --- | --- |
| Event class | Fully qualified class name, e.g. `App\Events\OrderShipped`. Must exist; a leading backslash is fine |

| Payload | |
| --- | --- |
| `event` | The event object. Its public properties are placeholders: `{{ event.carrier }}`, `{{ event.order.total }}` |

Details:

- The listener keys on the class name the event was dispatched under, so configure the concrete class you dispatch. String events (`event('order.shipped', [...])`) and events without an object are ignored.
- Events dispatched while a workflow run is executing (for example by an action) do not start further **Event**-triggered workflows; that guard keeps a workflow from feeding itself.
- The cached list is refreshed whenever a workflow is saved or deleted. Long-running processes (queue workers, Octane) keep the list they loaded until they restart or the hour passes.

```php
// App\Events\OrderShipped
class OrderShipped
{
    public function __construct(public Order $order, public string $carrier) {}
}
```

## Called by another workflow

Starts when another workflow reaches a **Call workflow** action pointing at this workflow. The calling workflow's payload is passed along, plus `flow_depth`, the number of nested calls so far. No settings.

A workflow can have both this trigger and others; the caller always enters through this node. See the [Call workflow action](actions.md#call-workflow) for the depth limit and failure handling.

## Date on a record

"Three days before the due date", "one hour after the appointment starts", "when the trial ends": fires for every record whose date column, shifted by the offset, falls in the current minute. Evaluated by `packstub-flow:cron` — a running scheduler is all it needs, and [catch-up](queue-and-scheduling.md#missed-minutes) covers minutes the scheduler missed.

| Setting | |
| --- | --- |
| Record type | The model class |
| Date attribute | A datetime column: `due_at`, `trial_ends_at`, `starts_at` |
| Offset / unit / When | `3` `days` **before** the date, `1` `hour` **after** it, or `0` **at** it |
| Run once per record | On by default: a record starts this workflow once, whatever happens to the cron schedule |

| Payload | |
| --- | --- |
| `model` | The record |
| `date` | The value of the date column |
| `now` | The minute being evaluated |

Records are read in batches of at most `max_records` (config, 1000) per minute. Combine with **Find records** + **For each** when one run should handle a whole batch instead.

## State transitioned

Available when [spatie/laravel-model-states](https://github.com/spatie/laravel-model-states) is installed. Fires on the package's `StateChanged` event, i.e. every `$order->status->transitionTo(Paid::class)`.

| Setting | |
| --- | --- |
| Record type | The model class |
| State field | Optional: only transitions of this state attribute (`status`). Empty matches any state field of the model |
| From state / To state | Optional: the state's name (as stored in the column, `paid`), its class (`App\States\Paid`) or short class name (`Paid`), case-insensitive. Empty matches any |

| Payload | |
| --- | --- |
| `model` | The record |
| `field` | The state attribute |
| `from`, `to` | The state names (`{{ from }} → {{ to }}`) |
| `from_state`, `to_state` | The state objects |

The **Transition state** [action](actions.md#transition-state) moves a record to another state from a workflow.

## Status changed

Available when [spatie/laravel-model-status](https://github.com/spatie/laravel-model-status) is installed. Fires on the package's `StatusUpdated` event, i.e. every `$ticket->setStatus('approved', 'Looks fine')`.

| Setting | |
| --- | --- |
| Record type | The model class |
| From status / To status | Optional status names, case-insensitive |

| Payload | |
| --- | --- |
| `model` | The record |
| `from`, `to` | The previous and new status names |
| `reason` | The reason given with the new status |

## Writing your own trigger

See [Extending](extending.md#triggers).

Next: [Actions](actions.md).
