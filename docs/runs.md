# Runs

Every time a workflow starts, a `WorkflowRun` row is created and updated step by step. The **Runs** tab under a workflow's edit page lists them, newest first, and refreshes every ten seconds.

![The Runs tab under a workflow](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/runs.png)

## Statuses

| Status | Stored as | Meaning |
| --- | --- | --- |
| Running | `running` | The runner is walking the graph right now |
| Waiting | `delayed` | A **Wait** step paused the run; a delayed job will resume it |
| Succeeded | `success` | Every branch finished without an exception |
| Failed | `failed` | A node threw; the message is in the run's error |

`Packstub\Flow\Enums\RunStatus` is the enum behind the column; `isFinished()` is true for Succeeded and Failed.

## What a run records

| Column | |
| --- | --- |
| `trigger_type` | The class of the trigger node the run started from |
| `context` | A JSON summary of the payload: models become `{"type": "App\\Models\\Order", "key": 42}`, other objects `{"type": "App\\Events\\OrderShipped"}`, scalars and arrays as they are |
| `steps` | The step log, one entry per visited node: `at`, `node_id`, `type`, `label`, `message` |
| `error` | The exception message when the run failed |
| `pending_resumes` | How many delayed resumes are still due |
| `started_at`, `finished_at` | Timestamps; the Runs table shows the duration between them |

Step messages are, in order of appearance: "Triggered", "Condition met, following the "true" branch" / "Condition not met, following the "false" branch", "Done" after an action, "Waiting *n* seconds before continuing" at a Wait, "Nothing to run after the wait; finished", and "Resumed after waiting" when a delayed job picks the run back up.

The **Details** action on a run opens a modal with the status, trigger, start time, duration, the error (if any), the numbered steps with their time, and the payload summary.

![A run's details modal](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/run-detail.png)

Runs can be deleted in bulk from the tab.

## Run now

**Run now** is available in the Workflows table and in the header of the edit page for every active workflow that has at least one trigger node. It starts the workflow from its first trigger with the payload `['manual' => true]` and shows a notification with the result — the status, or the error message when the run failed. When runs are queued, the notification says the run was queued and the result appears in the Runs tab.

Because there is no record in that payload, nodes that need one (a **Record attribute** condition, **Update record**) fail on such a run. It is the quickest way to try schedules, webhooks, notifications, Slack messages and logging.

## Console commands

### `packstub-flow:run`

```bash
php artisan packstub-flow:run "Welcome sequence"
php artisan packstub-flow:run 9d2f4a1e-... --payload='{"answer": 42}'
```

Runs a workflow by id or name from its first trigger node, **synchronously** even when queued runs are enabled, prints each step, and exits with a non-zero code when the workflow is missing, inactive, has no trigger node, or the run failed. `--payload` is a JSON object passed as the payload.

### `packstub-flow:prune`

```bash
php artisan packstub-flow:prune
php artisan packstub-flow:prune --days=7
```

Deletes **finished** runs (Succeeded or Failed) that started more than the given number of days ago — `prune_runs_after_days` from the config (30) when `--days` is omitted. Waiting runs are kept. Schedule it as you would any cleanup:

```php
Schedule::command('packstub-flow:prune')->daily();
```

### `packstub-flow:cron`

Starts every active workflow whose **Schedule** trigger is due at the current minute. The plugin registers it with Laravel's scheduler for you; see [Queue & scheduling](queue-and-scheduling.md#schedules).

## Events

Three events let your application react to runs:

| Event | When | Properties |
| --- | --- | --- |
| `Packstub\Flow\Events\WorkflowStarted` | The run row exists, before the first node | `Workflow $workflow`, `WorkflowRun $run`, `array $payload` |
| `Packstub\Flow\Events\WorkflowCompleted` | The run finished with status Succeeded (a run that pauses at a Wait fires it when the last resume completes) | same |
| `Packstub\Flow\Events\WorkflowFailed` | A node threw | same, plus `Throwable $exception` |

```php
use Illuminate\Support\Facades\Event;
use Packstub\Flow\Events\WorkflowFailed;

Event::listen(WorkflowFailed::class, function (WorkflowFailed $event): void {
    Log::warning("Workflow {$event->workflow->name} failed: {$event->exception->getMessage()}");
});
```

## Failures

When a node throws, the run is marked Failed with the exception message and `finished_at`, the exception is passed to Laravel's `report()` — so it reaches your log and error tracker as usual — and `WorkflowFailed` is dispatched. The exception is not rethrown: the request, model event or job that triggered the workflow carries on. Other branches of the same run that had not been visited yet do not run.

Typical failure messages:

| Message | Cause |
| --- | --- |
| `Cycle detected at node [...]` | An edge leads back to a node already visited on the same path |
| `Workflow exceeded the maximum number of steps.` | More than `max_steps` nodes were visited in one run |
| `Action [...] is not registered.` / `Condition [...] is not registered.` | The node's class is not registered (removed from the config or hidden with `without()`) |
| `Start node [...] not found in workflow.` | `Flow::run()` was given a node id that is not in the definition |
| `Cannot resume: node [...] no longer exists.` | A resume job refers to a node missing from its graph snapshot |
| `Update record needs a record in the payload; use it after a record trigger.` | **Update record** on a run without a `model` |
| `HTTP POST https://... returned 500.` | **HTTP request** with "Fail the run on a 4xx / 5xx response" on |
| `Workflows are calling each other more than 10 levels deep.` | **Call workflow** recursion |

## Safety guards

- **Cycle guard** — the runner remembers the path from the trigger to the current node; reaching a node that is already on that path fails the run instead of looping. A node reachable through two separate branches (a diamond) is allowed and runs once per branch.
- **Maximum steps** — a run stops after visiting more than `max_steps` nodes (1000 by default). Set it in the config.
- **Registered nodes only** — a definition can only instantiate classes registered with the plugin; anything else fails the run with "is not registered".
- **Call depth** — nested **Call workflow** actions stop at 10 levels.

Next: [Queue & scheduling](queue-and-scheduling.md).
