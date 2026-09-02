# Queue & scheduling

## Synchronous and queued runs

By default a triggered workflow runs **inside the request, model event or command that fired it**: `Flow::dispatch()` returns the finished runs, the webhook endpoint answers with the run's final status, and **Run now** shows the result in its notification. That is the simplest setup and fine for workflows that log, notify or update a record.

Set the queue on to push every run onto the queue instead:

```dotenv
PACKSTUB_FLOW_QUEUE=true
PACKSTUB_FLOW_QUEUE_CONNECTION=redis   # optional, defaults to your queue.default
PACKSTUB_FLOW_QUEUE_NAME=flows         # optional, defaults to the connection's default queue
```

```php
// config/packstub-flow.php
'queue' => [
    'enabled' => (bool) env('PACKSTUB_FLOW_QUEUE', false),
    'connection' => env('PACKSTUB_FLOW_QUEUE_CONNECTION'),
    'queue' => env('PACKSTUB_FLOW_QUEUE_NAME'),
],
```

With the queue enabled, a `Packstub\Flow\Jobs\RunWorkflowJob` is dispatched per matching workflow and:

- `Flow::dispatch()` returns an empty array and `Flow::run()` returns `null`;
- the webhook endpoint answers `202` with `"status": "queued"`;
- **Run now** shows "The run was queued" and the result appears in the Runs tab;
- `packstub-flow:run` still runs synchronously, so you can watch the steps in the console;
- a **Call workflow** action queues the called workflow as its own job and does not wait for it.

The choice can be made per call: `Flow::run($workflow, $payload, queue: false)` forces a synchronous run, `queue: true` forces a job.

Both jobs are dispatched **after the surrounding database transaction commits** (`ShouldQueueAfterCommit`), so a run never sees a record that is rolled back. They have `tries = 1` — a run that fails is recorded as failed rather than retried, since retrying would repeat the actions that already ran; use the per-node retries in a node's **Error handling** settings instead — and a `timeout` from `queue.timeout` (300 s by default).

The job re-checks that the workflow is still active when it runs. Eloquent models in the payload are stored as class + key (+ the attributes they had) and fetched fresh when the job runs; a record that has been deleted in the meantime is rebuilt from the stored attributes so placeholders keep working. Other objects in the payload (an event object, for instance) are serialised by the queue as usual, so they need to be serialisable — Laravel's `SerializesModels` on the event takes care of models inside it.

## Wait steps

A **Wait** action always uses the queue, whatever `queue.enabled` says. When the runner reaches one:

1. It records "Waiting *n* seconds before continuing" and marks the run **Waiting** (`delayed`).
2. It increments the run's `pending_resumes` and dispatches a `Packstub\Flow\Jobs\ResumeWorkflowJob` with a delay of *n* seconds, carrying the ids of the nodes connected after the Wait, the payload, and **a snapshot of the whole graph**.
3. Other branches of the run continue right away; the run stays Waiting until every pending resume has completed.

When the job runs, it decrements `pending_resumes`, records "Resumed after waiting", and continues from the saved nodes. If nothing else is pending, the run finishes with Succeeded (and `WorkflowCompleted` fires) or Failed.

Because the job carries a snapshot, **editing a workflow while a run is waiting does not change that run**: it finishes on the graph it started with, and the next run uses the new one. A Wait with nothing connected after it does not schedule anything; the run finishes immediately with "Nothing to run after the wait; finished".

Several Waits on different branches each schedule their own resume; the run is Succeeded only once all of them have come back.

The connection and queue name from the config apply to resume jobs too.

> [!NOTE]
> Laravel's `sync` queue driver runs jobs immediately and ignores delays. With `QUEUE_CONNECTION=sync` (the default in a fresh app) a Wait resumes at once, inside the same request. Use a real driver (`database`, `redis`, ...) and a worker for delays to take effect, and keep the worker's `--timeout` and `retry_after` in mind for long-running actions.

## Schedules

Workflows with a **Schedule** trigger are started by the `packstub-flow:cron` command, which dispatches the trigger with the current time; every active workflow whose cron expression is due at that minute starts, in the timezone set on the trigger (the application timezone by default). The same command polls the **Date on a record** triggers for the records due that minute, and times out [waits](approvals.md) past their deadline.

With `register_schedule` on (the default), the plugin adds the command to Laravel's scheduler:

```php
$schedule->command('packstub-flow:cron')->everyMinute()->withoutOverlapping();
```

So the only requirement is a running scheduler — `php artisan schedule:work` in development, and in production the usual cron entry:

```text
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

Set `register_schedule` to `false` if you would rather register the command yourself (for example on a specific server or with different options):

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('packstub-flow:cron')->everyMinute()->onOneServer();
```

With several servers running the scheduler, `schedule_on_one_server => true` adds `onOneServer()` for you (a cache driver with locks — Redis, database, Memcached — is required).

### Missed minutes

The command remembers when it last ran. With `schedule_catch_up_minutes` set (or `--catch-up=N` on the command), the minutes between that moment and now are evaluated too, so a `0 9 * * *` workflow still runs after a deploy that paused the scheduler over 09:00. The window is capped at the configured number of minutes; a workflow due in several of them runs once per minute it was due.

Scheduled runs follow the same sync / queued rule as every other run: with the queue enabled, the cron command only dispatches jobs and returns quickly. Without it, due workflows run inside the scheduler tick one after another, under `withoutOverlapping()` — fine for a few quick workflows, and a reason to enable the queue once schedules do real work.

With `register_schedule` on and a `prune_runs_after_days` value, `packstub-flow:prune` is scheduled daily too.

Next: [Extending](extending.md).
