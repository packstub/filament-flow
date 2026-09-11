# Templates, import and export

A workflow is data, so it can travel: start one from a template, download one as a file, load that file into another install, or seed it from code. Everything on this page produces an **inactive** workflow, so nothing runs before you have looked at it.

## Templates

![The template picker on the Workflows page](https://raw.githubusercontent.com/packstub/art/main/filament-flow/docs/templates.png)

**New from template** on the Workflows page lists ready-made workflows by area. Pick one, give it a name, and it opens on the canvas. Nodes that need a choice from you carry a note in their description — the record type of a trigger, the agents of a round-robin assignment — and the workflow cannot be switched on until they are filled, exactly like any other incomplete draft (see [Building workflows](building-workflows.md#saving)).

Built in:

| Template | Area | What it does |
| --- | --- | --- |
| **Welcome series** | Onboarding | User registered → welcome email → wait 2 days → follow-up email |
| **High-value order alert** | Sales | Record created → total ≥ 500? → Slack message (`{{ secrets.slack_webhook }}`) and a panel notification |
| **Dunning: unpaid invoice reminders** | Finance | 3 days after `due_at` → still unpaid? → reminder → wait 7 days → still unpaid? → flag for the finance team |
| **SLA escalation** | Support | 4 hours after `created_at` → still open? → assign round robin → alert the assignee |
| **Ticket triage with AI** | Support | Record created → [Ask AI](actions.md#ask-ai) answers with urgency, category and a summary → urgent? → assign round robin → alert the assignee. Offered when `packstub/agents` is installed |
| **Approval before a record goes live** | Operations | Record created → ask a manager (1 day) → approved: publish; rejected: tell the author; timed out: nudge the manager |

Templates use only what the package ships; a template is offered only when every node it uses is registered, so hiding a node with `without()` hides the templates that need it.

### Your own templates

A template is an [export document](#the-export-format) with a `category` (and an optional `key`; the file name is the default). Point the plugin or the config at files, directories of `*.json` files, or the documents themselves:

```php
FlowPlugin::make()
    ->templates([
        resource_path('flow-templates'),                 // every *.json in the directory
        resource_path('flow-templates/onboarding.json'), // one file
        ['key' => 'ping', 'name' => 'Ping', 'category' => 'Ops', 'definition' => [...]],
    ])
    ->withoutBuiltInTemplates() // only yours
```

```php
// config/packstub-flow.php
'templates' => [resource_path('flow-templates')],
```

The quickest way to write one: build the workflow on the canvas, **Export** it, drop the file in the directory and add `"category"`. `Packstub\Flow\Support\Templates::all()` returns what the picker shows, `Templates::create($key, $attributes)` creates a workflow from one.

## Export

**Export** on a workflow's edit page downloads `<name>.flow.json`. From code, `$workflow->export()` returns the same document as an array and `Flow::export($workflow)` is an alias.

An export carries what is needed to rebuild the workflow somewhere else and nothing tied to this install: no id, no tenant, no runs or versions, not whether it was active, and no webhook token or signing secret — those are per install and are regenerated on import. Secrets are referenced by name (`{{ secrets.slack_webhook }}`), never by value.

### The export format

```json
{
    "format": "packstub-flow/1",
    "name": "High-value order alert",
    "description": "Tell the team when an order over 500 comes in.",
    "settings": { "prune_after_days": 30, "max_consecutive_failures": 5 },
    "definition": { "nodes": [ ... ], "edges": [ ... ] }
}
```

`definition` is the canvas structure described in [Building workflows](building-workflows.md#how-a-definition-is-stored); `settings` holds the per-workflow run settings that are set. Keep the files in version control if you want a history of your automations outside the database.

## Import

**Import** on the Workflows page takes an export file or its pasted JSON, creates the workflow inactive (owned by the current tenant in a panel with [tenancy](tenancy.md)), and opens it. A document is refused with a message when it is not JSON, has no nodes, or uses a trigger, action or condition that is not registered in this install.

From code, for seeders, tests and deployments:

```php
use Packstub\Flow\Models\Workflow;

// An export file, a template document, or a bare {nodes, edges} definition
Workflow::import(file_get_contents(resource_path('flow/dunning.flow.json')));

// Attributes override the document: activate it, rename it, attach a tenant
Workflow::import($document, ['name' => 'Dunning (EU)', 'is_active' => true, 'tenant_type' => Team::class, 'tenant_id' => $team->id]);

// The built-in templates are files too
Workflow::import(file_get_contents(base_path('vendor/packstub/filament-flow/resources/templates/welcome-series.json')));
```

`Flow::import($data, $attributes)` and `Packstub\Flow\Support\WorkflowTransfer::import()` are the same call. Importing throws `Packstub\Flow\Exceptions\WorkflowException` for a document it cannot read or run; the workflow's trigger nodes are mirrored into the triggers table on save, as always, so an imported workflow that is activated runs at once.

Importing inside a seeder that also creates records? Wrap the record creation in `Flow::suppress()` so the freshly imported workflows do not fire for the seed data (see [Triggers](triggers.md#suppressing-triggers)).
