# Changelog

All notable changes to `packstub/filament-flow` are documented here.

## Unreleased

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
