# Changelog

All notable changes to `packstub/filament-flow` are documented here.

## Unreleased

### Added

- **Find records** (`FindRecords`, read-only) and **For each** (`ForEachLoop`, the `Iterates` contract): query records with a condition builder, loop over them — or any list — with `{{ item.* }}` and `{{ loop.* }}`, a body branch per item and a done branch; a maximum-iterations guard (`max_records`).
- **Date on a record** trigger (`DateReached`, the `Pollable` contract): "N days/hours before / at / after `{{ model.due_at }}`", polled every minute by `packstub-flow:cron` (`Flow::poll()`), once per record.
- **Error branch**: the *After the last failure* setting gained **Follow the error branch**, which adds an Error output to the node; the branch runs with `{{ error.message }}` / `{{ error.node }}`. A per-workflow **On failure, run** setting (`on_failure_workflow_id`) starts another workflow (with a Called-by-another-workflow trigger) whenever a run fails, with `{{ error.* }}` and `{{ failed_run.* }}`.
- **Ask for approval** (`RequestApproval`) and **Wait for signal** (`WaitForEvent`), the `Waitable` contract and the `flow_workflow_waits` table (`WorkflowWait`): a run pauses until `Flow::resolveWait()` / `Flow::signal()` or the timeout (`Flow::expireWaits()`, run by the cron command); Approved / Rejected / Timed out and Received / Timed out outputs; an **Approvals** page with a navigation badge, Approve / Reject with a comment, cancel; notification buttons and email links as signed URLs (`packstub-flow.approval` route, `approvals` config); `{{ approval.* }}` / `{{ wait.* }}` on the continuing branch.
- **Test runs**: a **Test** button on the edit page (trigger, record, extra JSON payload) and `Flow::test()`: conditions evaluated, `ReadOnlyAction` actions executed, everything else simulated with a preview (`Action::preview()`), waits skipped; runs flagged `is_test`, excluded from once / dedup / failure counting and from the events.
- **Steps table**: one `flow_workflow_steps` row per step (`WorkflowStep`), `$run->steps` unchanged as an array; `WorkflowRun::steps()` relationship; the run tables count steps in SQL.
- **Runs page** (`WorkflowRuns`, `withoutRunsPage()`): every run across workflows with status / workflow / date / test filters, details, Run again, **Open on the canvas** (`?node=<id>` selects and centres the node) and a `RunsOverview` stats widget; step labels in the details modal link to their node.
- **Create record**, **Assign owner** (fixed or round robin) and **Add tag** (`spatie/laravel-tags`) actions; `Action::setPayloadValue()` lets an action replace `{{ model }}` for the rest of the branch; `Action::output($data, $summary)` stores a summary on the step log.
- Node output handles on the canvas come from `Node::getOutputs()`; `approvals` and `max_records` config; `WorkflowWait` / `WorkflowStep` models and `tables` / `models` config entries.

- **Secrets store**: a `Secrets` page (`SecretResource`, `flow_secrets` table, `Secret` model with an `encrypted` cast) for tokens and webhook URLs. Actions read them as `{{ secrets.<key> }}`; the placeholder resolves only while an action runs (`Placeholders::allowSecrets()`), and every resolved value is masked (`••••••`) in step messages, outputs and the run error. `FlowPlugin::withoutSecrets()` / `secretResource()`.
- **Dedup windows**: "Not more than once per record every N days" on the record triggers (`dedup_days`), next to "Run once per record"; `Flow::suppress(fn () => ...)` disables every trigger inside a callback (imports, seeders).
- **Record updated → Changed from / Changed to**: with attributes to watch, the trigger can require the old and / or new value ("status from pending to paid").
- **State transitioned** trigger and **Transition state** action for `spatie/laravel-model-states`, **Status changed** trigger for `spatie/laravel-model-status`; offered only when the package is installed (`Node::isAvailable()`).
- **Deep links**: `{{ model.url }}` resolves to the record's page in the panel (view or edit page of the Filament resource registered for its model, or its list for a simple resource, `ResourceUrl`); **Send notification** and **Send email** gained an optional button (label + URL, defaulting to `{{ model.url }}`).
- **Run workflow from any resource**: `RunWorkflowAction` (record action) and `RunWorkflowBulkAction` list the active workflows whose Manual trigger accepts the record type and start them with the record as `{{ model }}`; the Manual trigger has an optional "Record type" setting.
- **Per-workflow run settings**: "Keep runs for (days)" (`prune_after_days`, honoured by `packstub-flow:prune`) and "Deactivate after consecutive failures" (`max_consecutive_failures`, `consecutive_failures`), which switches the workflow off, fires `WorkflowDeactivated` and notifies the panel users in `notifications.recipients`.
- **Conditions**: `is null`, `is not null`, `matches regular expression`, `is a date before / after` operators; `changed`, `changed from`, `changed to` on Record attribute; a **Multiple conditions** node (AND / OR over several rules).
- **Schedule catch-up**: `packstub-flow:cron` remembers its last run and, with `schedule_catch_up_minutes` (or `--catch-up=N`), evaluates the missed minutes; `schedule_on_one_server` adds `onOneServer()` to the scheduled command.
- **More channels**: Send Discord message, Send Teams message (Workflows Adaptive Card or classic connector), Send Telegram message, Send SMS (Twilio, with a WhatsApp switch). Slack's webhook URL accepts placeholders (`{{ secrets.slack_webhook }}`).
- `Node::getOutputs()` describes a node's output handles (`toArray()` exposes them to the canvas); `Placeholders::actionDocumentation()`; `max_nesting` config.

- **Action outputs**: an action can call `$this->output([...])`; the nodes after it on the same branch read it as `{{ last.* }}` and `{{ outputs.<node id>.* }}`. `HttpRequest` exposes `status`, `ok`, `body` (decoded JSON) and `headers`; `UpdateRecord` exposes `changes`. Outputs are stored on the step log (up to `max_output_bytes`) and shown in the run details.
- **Per-node error handling**: every action node has an *Error handling* section — retries (with a pause between them) and *Fail the run* / *Log it and continue* after the last failure. Stored as `_retries`, `_retry_after` and `_on_error` in the node config; the runner strips them before calling the action.
- **Placeholder filters**: `{{ value | date:Y-m-d }}`, `upper`, `lower`, `title`, `trim`, `truncate:<n>`, `number:<decimals>`, `default:<value>`, `json`, `count`, `join:<glue>`, `first`, `last`; `Placeholders::raw()` / `isSingle()` for nodes that need a typed value.
- **Record updated → "Only when these attributes change"**: the trigger fires only when one of the listed attributes is in `changes`.
- **"Run once per record"** on the record triggers; runs store `subject_type` / `subject_id` (the record they started for), searchable in the Runs tab.
- **Wait until a date**: the Wait action has a *Until a date from the payload* mode with an offset before / after (`1 day before {{ model.starts_at }}`).
- **Webhook signatures**: optional HMAC-SHA256 signing secret and signature header per webhook node; unsigned or mis-signed requests get `401`.
- **Schedule timezone** per Schedule trigger.
- **Run again** action on finished runs (`WorkflowRun::rebuildPayload()` re-fetches the records from the stored context).
- **Definition validation** before saving an active workflow: a trigger must exist, every node must be connected, required settings must be filled (`DefinitionValidator`; `FlowBuilder::withoutValidation()` to opt out).
- **Authorization**: `FlowPlugin::make()->authorize(fn () => ...)` and the `packstub-flow.gate` config key gate the Workflows resource, on top of any `Workflow` policy.
- `http` config section (`timeout`, `retry_after_ms`, `block_private_networks`, `allowed_hosts`), `queue.timeout`, `max_output_bytes`, `webhooks.redacted_headers`, `gate`.
- `packstub-flow:prune` is scheduled daily when `register_schedule` is on and `prune_runs_after_days` is set.
- Step log entries carry `status` (`ok` / `retry` / `failed`), `duration_ms` and `output`; the step that fails a run carries its error message; the run details modal shows all three.

### Fixed

- **Node settings never reached the canvas**: the slide-over's *Apply* dispatched `packstub-flow.node-updated`, but the canvas listened with Alpine's `x-on:packstub-flow.node-updated.window`, which reads `node-updated` as a modifier. Label, description and settings edits were silently dropped and *Save changes* stored the old definition. The event is now `packstub-flow-node-updated`.
- A retry step now reads "Attempt 1 of 2" (attempts, not extra retries), and an action that failed and was set to *Log it and continue* no longer gets a "Done" step after its failure entry.
- Definition validation no longer reports a required setting that has a default (a node dropped from the palette and never opened, such as `HTTP request` with its `POST` method) as missing.
- Opening an Approve / Reject link while signed out sent the approver to a `login` route most panels do not have (a 500); the link now uses Filament's authentication middleware, which shows the panel's login page and returns to the link afterwards.
- *Assign owner* in round-robin mode failed with "no matching user was found" on the database cache store, whose `increment()` returns false for a key that does not exist yet.
- *Multiple conditions* opens with its first rule's operator set to *equals* instead of an empty select.
- The node slide-over opens with the schema defaults filled in (`HTTP request` → `POST`, *Fail the run on a 4xx / 5xx response* on, `Wait` → 1 minute, error handling → 0 retries / *Fail the run*) instead of empty selects that fail validation on Apply.

### Changed

- **Nested runs are capped instead of blocked**: an event fired inside a run (a record saved with events on, a mail) can start another workflow up to `max_nesting` levels deep (5); the wildcard event listener no longer ignores every event dispatched during a run.
- Migration: `flow_secrets`, `flow_workflow_steps` and `flow_workflow_waits` tables; `prune_after_days`, `max_consecutive_failures`, `consecutive_failures` and `on_failure_workflow_id` on the workflows table; `is_test` on the runs table, whose `steps` JSON column is gone.
- A run's final status now depends on its pending resumes only (a resume that already ran on a sync queue no longer leaves the run "Waiting"); `max_steps` default raised to 10 000 to leave room for loops.
- **Outgoing requests are guarded**: `HttpRequest` and `SendSlackMessage` refuse URLs that are not `http(s)` or whose host resolves to a private / reserved address (`UrlGuard`), unless `http.block_private_networks` is off or the host is in `http.allowed_hosts`. The host is resolved through the system resolver as well as DNS (so `/etc/hosts` and macOS `/etc/resolver` rules count), and a host that cannot be resolved is refused rather than let through. Requests have a timeout (15 s default) and per-node retries; placeholder values in the URL are URL-encoded.
- **HTTP JSON bodies are built safely**: placeholders inside JSON strings are escaped, bare placeholders become the raw value; a value can no longer add keys to the body.
- **`UpdateRecord` respects `$fillable` / `$guarded`** and fails the run naming a guarded attribute; the new *Bypass mass-assignment protection* toggle restores `forceFill()`. A value that is exactly one placeholder keeps its type.
- **Webhook payloads drop credential headers** (`authorization`, `cookie`, `x-api-key`, signature headers, …) before they are stored on the run.
- **Hidden model attributes** (`$hidden`) resolve to nothing in placeholders.
- **Record-trigger dispatch is cached**: model events no longer query the triggers table unless an active workflow has a trigger of that type (cache flushed on every workflow save / delete, refreshed per process every 60 s).
- **Jobs** implement `ShouldQueueAfterCommit`, have `tries = 1` and a configurable `timeout`; a resume job for a run another branch has failed does nothing; step appends are re-read under a lock so concurrent resumes do not overwrite each other.
- A join node reached by two branches runs once (it used to run once per branch); the payload — and with it the outputs — now travels per branch.
- The trigger rows are re-synced inside a transaction when a workflow is saved.
- Migration: `subject_type` / `subject_id` on the runs table and indexes on `started_at`, `(workflow_id, started_at)` and the subject.

## 1.0.0 — 2026-09-02

First public release. The plugin started life as the private `xlited/laravel-flow` prototype and was rebuilt as a Packstub Filament plugin.

### Added

- **Visual builder**: a `Workflows` resource with a Svelte Flow canvas (`FlowBuilder` form field) — add nodes from a searchable sidebar, the right-click menu or the plus on a handle; connect handles; condition nodes with True / False outputs; per-node settings slide-over (`ManageNode`) built from each node's Filament form schema, with a Placeholders reference; duplicate, delete, minimap, dark mode.
- **Triggers**: `Manual`, `Schedule` (cron), `Webhook`, `RecordCreated` / `RecordUpdated` / `RecordDeleted` (via the `HasWorkflows` model trait, with `original` and `changes` on update), `UserRegistered` (`Illuminate\Auth\Events\Registered`), `EventFired` (any Laravel event, wildcard listener with a cached watch list), `WorkflowCalled`.
- **Actions**: `SendEmail` (Markdown `WorkflowMail`), `SendNotification` (Filament database notifications to panel users by email), `SendSlackMessage`, `HttpRequest` (method, headers, JSON body, optional failure on 4xx / 5xx), `UpdateRecord` (quiet save by default), `Wait` (seconds to days, resumed through the queue), `CallWorkflow` (depth limit of 10), `WriteLog`.
- **Conditions**: `RecordAttribute`, `CompareValues` and `TimeOfDay`, with fifteen operators.
- **Placeholders**: `{{ path }}` syntax resolved with `data_get()`, `record` alias of `model`, consistent stringification of models, booleans, dates and arrays; `InterpolatesPlaceholders` trait for custom nodes.
- **Engine**: `Dispatcher`, `Graph` and `Runner`; runs start from the trigger that fired, fan out to every connected node, and stop on cycles or after `max_steps`; `WorkflowStarted`, `WorkflowCompleted` and `WorkflowFailed` events; failures reported through `report()`.
- **Runs**: `WorkflowRun` model with status, trigger, payload summary, step log, error and timing; `RunsRelationManager` with a details modal; **Run now** action in the table and on the edit page.
- **Queue**: optional queued runs (`RunWorkflowJob`) with connection and queue name settings; `ResumeWorkflowJob` carries a graph snapshot so edits during a wait do not affect runs in flight; `PayloadSerializer` makes models queue-safe and rebuilds deleted records.
- **Webhooks**: `POST {prefix}/{workflow}/{token}` route (`packstub-flow.webhook`) with configurable prefix and middleware, answering `202 Accepted`.
- **Commands**: `packstub-flow:install`, `packstub-flow:run`, `packstub-flow:cron` (registered with the scheduler every minute) and `packstub-flow:prune`.
- **Extensibility**: `Trigger`, `Action` and `Condition` base classes, the `Delayable` contract, `NodeRegistry`, and registration through `FlowPlugin::make()->triggers() / actions() / conditions() / without()`, the config file or `Flow::register()`.
- **Configuration**: table names, swappable models, queue, execution limits, schedule registration, webhooks, `models_for_triggers`, navigation and run retention; `FlowPlugin` fluent API with `models()`, `navigationGroup()`, `navigationIcon()`, `navigationSort()`, `resource()` and `withoutResource()`.
- Pest test suite covering the engine, every built-in node, the panel, the commands, webhooks, schedules and the queue.
