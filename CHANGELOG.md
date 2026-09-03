# Changelog

All notable changes to `packstub/filament-flow` are documented here.

## Unreleased

### Added

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
- The *Error handling* fields open with their defaults (0 retries, *Fail the run*) on nodes saved before they existed, instead of empty.

### Changed

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
