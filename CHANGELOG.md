# Changelog

All notable changes to `packstub/filament-flow` are documented here.

## 1.6.2 — 2026-10-28

Three small fixes in the editor. Run `php artisan filament:assets` after updating.

- A condition's True and False labels sit on the card again, each handle beside its label
- A test run shows a secret as `••••••` instead of an empty value (it still never reaches the log)
- Switching a workflow on no longer shifts the editor header; Run now stays, disabled while it's off
- A shorter Features list in the README and the docs

## 1.6.1 — 2026-09-28

Small fixes for the template picker and the editor. Run `php artisan filament:assets` after updating.

- The template list's All filter works again after you pick an area
- Full screen on a template preview no longer makes the page jump
- Right after a save the editor says "just now" instead of "0 seconds ago"

## 1.6.0 — 2026-09-28

A full-page workflow editor and one place to start a new workflow. Run `php artisan filament:assets` after updating.

- The canvas fills the edit page, with Canvas, Runs and Versions tabs and an Active switch by the name
- One New workflow button: blank canvas, template, describe it or import, all on the create page
- Templates you can preview before you pick, with the settings you still need to fill in
- A canvas toolbar and nodes that look like the rest of the panel
- Easier to read Workflows, Runs, Secrets and Approvals tables
- Fixed: Cmd / Ctrl + D no longer opens the delete dialog, and the plugin's styles stay out of the rest of the panel (thanks @grafst)

**Upgrading:** a resource that extends `WorkflowResource` and overrides `form()` keeps its own layout; name, description, Active and the run settings now live in `WorkflowResource::detailsSchema()`.

## 1.5.0 — 2026-09-21

A new **Decide** node: let TypeSafe's Jev model answer a question about the run, and follow the answer.

- Yes / no, one of your options, or a score on your levels, each with its own branch
- A Not sure branch for close calls, so a person or an Ask AI step can take them
- Shows up once `TYPESAFE_API_KEY` is set; installs without a key see no change
- Your own actions can now pick the branch a run continues along
- Guide: https://packstub.dev/docs/filament-flow/decide

**Upgrading:** if your published config lists the built-in `actions`, add `Nodes\Actions\Decide::class` there to offer the node.

## 1.4.1 — 2026-09-18

A smaller download: `composer require` now fetches only what an install runs. Nothing to do when upgrading.

## 1.4.0 — 2026-09-17

- **Describe a workflow**: type what should happen, pick a model, and get a draft workflow to review
- The draft opens inactive, with the nodes still to fill in marked on the canvas (same for templates and imports)
- New workflow is the one primary button; New from template and Import moved to the ⋯ menu
- Needs `packstub/agents` (PHP 8.4); without it nothing changes

## 1.3.1 — 2026-09-16

- The template picker shows plain names when only one category is offered

## 1.3.0 — 2026-09-10

- **Ask AI** action: ask a model a question built from the run's data and get named fields back as `{{ last.* }}`
- Runs on `packstub/agents` (free, PHP 8.4), now a suggested dependency, with the workspace's key, budgets and limits
- A new Ticket triage with AI template
- The sidebar groups nodes, with an AI group; your own nodes can declare a group too
- Installs without `packstub/agents` see no change

## 1.2.0 — 2026-09-10

- Canvas: undo / redo, copy / paste / duplicate, select all, a keyboard-friendly right-click menu, a taller canvas on drag
- Connections that can't work are refused while you drag, and nodes with problems get a red badge on save
- Workflow templates, plus import and export as JSON
- A Runs per day chart and the slowest workflows on the Runs page
- Who created and last saved a workflow, and a Send to Zapier, Make or n8n action
- Fixed: saving right after a change on the canvas no longer loses that change

**Upgrading:** publish the migrations again and migrate (`php artisan vendor:publish --tag="packstub-flow-migrations"`, then `php artisan migrate`) to add `created_by` / `updated_by` to workflows.

## 1.1.0 — 2026-09-03

A big one: multi-tenancy, versions, approvals, test runs, secrets and safer outgoing requests.

- Workflows, runs and secrets scoped to the panel's tenant, with an optional cap on workflows per tenant
- Versions you can compare and restore, test runs that simulate actions, and a Runs page across workflows
- Approvals, waits for a signal, loops over records, a date-on-a-record trigger and an error branch
- A secrets store for tokens and webhook URLs, masked everywhere in the run log
- New actions: create record, assign owner, add tag, Discord, Teams, Telegram and SMS
- Placeholder filters, action outputs (`{{ last.* }}`), per-node retries and signed webhooks
- Safer by default: outgoing requests refuse private networks, and credential headers aren't stored with webhook runs
- Fixed: node settings edits never reached the canvas, so Save stored the old definition

**Upgrading:** new tables and columns, so run the migrations. Update record now respects `$fillable` / `$guarded`; switch on *Bypass mass-assignment protection* on the node to keep the old behaviour.

## 1.0.0 — 2026-09-02

First public release of Filament Flow: build workflows on a canvas in your Filament panel and let them run.

- A drag-and-drop canvas with triggers, conditions and actions, each with its own settings
- Triggers: manual, schedule, webhook, record created / updated / deleted, user registered, any Laravel event
- Actions: email, notification, Slack, HTTP request, update record, wait, call another workflow, log
- Placeholders like `{{ model.email }}` in any setting
- Every run logged step by step, on the queue if you like
- Add your own triggers, actions and conditions

Docs: https://packstub.dev/docs/filament-flow
