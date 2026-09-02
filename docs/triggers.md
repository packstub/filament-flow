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

Starts from the **Run now** button (table row and edit page header), from the console with `packstub-flow:run`, or from code with `Flow::run()`. No settings.

| Payload | From |
| --- | --- |
| `manual` | `true` when started with **Run now** |
| anything else | Whatever you pass to `Flow::run()` or `--payload` |

**Run now** passes `['manual' => true]` and nothing else, so nodes that need a record (record conditions, **Update record**) fail on such a run. Use it to try schedules, webhooks, notifications and logging.

```php
Flow::run($workflow, ['answer' => 42]);
```

## Schedule

Runs on a cron expression. `packstub-flow:cron` — registered with Laravel's scheduler every minute, see [Queue & scheduling](queue-and-scheduling.md#schedules) — dispatches this trigger with the current time, and every workflow whose expression is due at that minute starts.

| Setting | |
| --- | --- |
| Cron expression | Five fields: minute, hour, day of month, month, day of week. Validated when you apply the settings. `0 9 * * 1-5` is weekdays at 09:00 |

The expression is evaluated in the application timezone (`app.timezone`). A node with an invalid expression never matches.

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

The endpoint:

- answers `202 Accepted` with `{"accepted": true, "run": "<run id>", "status": "success"}` — with queued runs (see [Queue & scheduling](queue-and-scheduling.md)) `run` is `null` and `status` is `"queued"`;
- answers `404` when the workflow does not exist, is inactive, or the token does not match any webhook node of that workflow (tokens are compared in constant time);
- reads a JSON body when the request is JSON, and form fields otherwise.

```bash
curl -X POST https://example.com/flow/webhooks/9d2f4a1e-.../your-secret-token \
  -H 'Content-Type: application/json' \
  -d '{"order": {"id": 42, "status": "shipped"}}'
```

| Payload | |
| --- | --- |
| `webhook` | The request body: `{{ webhook.order.status }}` |
| `headers` | Request headers, first value each, lower-cased names: `{{ headers.x-signature }}` |
| `webhook_token` | The token from the URL (used for matching) |

The route is named `packstub-flow.webhook`, runs under the `api` and `throttle:60,1` middleware by default, and can be disabled or moved to another prefix in the config — see [Configuration](configuration.md#webhooks).

> [!NOTE]
> The token is the only authentication. Treat the URL as a secret, keep the throttle middleware, and validate anything you act on inside the workflow (a **Compare values** condition on `{{ headers.x-signature }}` or a body field is a good first step).

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

A node matches when the payload's model is an instance of the chosen class (subclasses included).

| Payload | Provided by |
| --- | --- |
| `model` | The record (`{{ model.status }}`, `{{ model.customer.name }}`); `record` is an alias |
| `original` | Updated only: the attributes before the update (`{{ original.status }}`) |
| `changes` | Updated only: just the attributes that changed (`{{ changes.status }}`) |

Some details worth knowing:

- Saves made with `saveQuietly()` / `updateQuietly()` fire no Eloquent events and therefore no trigger. The **Update record** action saves quietly by default for exactly this reason: a workflow that updates the record that started it would otherwise start itself again.
- A model listed in the config or the plugin without the trait appears in the select but never fires on its own — dispatch the trigger yourself, or add the trait.
- A **Record deleted** run that continues through the queue (after a **Wait**) gets the deleted record rebuilt from the attributes it had, so placeholders keep working.

You can dispatch the same triggers from code, e.g. from an observer, a job or a console command:

```php
Flow::dispatch(RecordCreated::class, ['model' => $order]);
Flow::dispatch(RecordUpdated::class, ['model' => $order, 'original' => $before, 'changes' => $order->getChanges()]);
Flow::dispatch(RecordDeleted::class, ['model' => $order]);
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

## Writing your own trigger

See [Extending](extending.md#triggers).

Next: [Actions](actions.md).
