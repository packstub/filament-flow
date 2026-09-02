# Building workflows

A workflow is a graph drawn on a canvas: **trigger** nodes start a run, **action** nodes do something, **condition** nodes branch on a true / false check. Edges connect an output handle to an input handle. The canvas lives on the create and edit pages of the Workflows resource, under the name, description and **Active** toggle.

![A finished workflow on the canvas](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/canvas.png)

## Adding nodes

An empty canvas shows a **Start with a trigger** card; **Add a trigger** opens the sidebar on the triggers list. Afterwards there are three ways to add a node:

- the **+** button in the top-right corner of the canvas;
- **right-click** on an empty spot of the canvas and choose **Add node** — the node is placed where you clicked;
- the **plus** next to an unconnected output handle — the new node is placed beside it and connected to that handle in one go.

The sidebar lists **Triggers**, **Actions** and **Conditions**; open a category or type in the search box to filter every node by name. Click a node to place it, or drag it onto the canvas to drop it exactly where you want. A node added through the **+** button lands in the centre of the visible area, nudged aside if something is already there.

![The add-node sidebar](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/node-sidebar.png)

## Connecting nodes

Drag from a node's output handle (on its right) to another node's input handle (on its left). Triggers have one output and no input; actions have one input and one output; conditions have one input and two outputs, **True** (green) and **False** (red).

- Every node connected to the same output runs, in the order the edges were drawn, one branch after the other.
- A condition follows only the edges leaving the output that matches its result. Leave an output unconnected when nothing should happen on that branch.
- A node cannot lead back to itself along the same path: the runner stops the run with a "Cycle detected" error rather than loop. A node reachable through two different branches runs once per branch.

Select an edge or a node and press **Backspace** or **Delete** to remove it; deleting a node also removes its edges.

## Node settings

Every node has a **label** (shown in the node header and in the run log), an optional **description**, and the settings specific to its type. Open the slide-over with the **gear icon** in the node header, by **double-clicking** the node, or from the right-click menu's **Settings**.

![The node settings slide-over](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/node-settings.png)

The slide-over is a Filament form:

- **General** — label (required, up to 80 characters) and description (up to 255).
- **Settings** — the node's own fields, e.g. the record type of a trigger or the recipient and subject of an email. Fields are validated when you press **Apply**; a cron expression, a JSON body or an event class that does not exist is rejected right there.
- **Error handling** — action nodes only: retries, the pause between them, and whether the last failure fails the run or is logged and skipped. See [Runs](runs.md#failures).
- **Placeholders** — a collapsed section listing the `{{ placeholders }}` that node understands. See [Placeholders](placeholders.md).

**Apply** writes the values back to the node on the canvas. They are stored when you save the workflow.

## Duplicate and delete

Right-click a node for **Settings**, **Duplicate** and **Delete**. A duplicate keeps the label, description and settings and is placed slightly offset from the original, unconnected.

## Saving

The canvas is a form field; the usual **Save** (or **Create**) button of the page stores the graph together with the name, description and **Active** toggle. After creating a workflow you land on its edit page.

Only active workflows run. New workflows start inactive, and a copy made with the table's **Replicate** action is inactive too, so you can finish a draft safely before switching it on.

Saving an **active** workflow checks the definition first and refuses it with a message per problem: no trigger node, a node nothing leads to, or a required setting left empty (a node dropped on the canvas whose settings were never opened). Inactive drafts are only checked for nodes whose class is no longer registered.

When a workflow is saved, its trigger nodes are mirrored into the `flow_workflow_triggers` table. That is how the dispatcher finds candidate workflows for an incoming event with one indexed query — you never edit that table yourself.

## Canvas controls

- Scroll to zoom, drag the background to pan; the controls in the bottom-left corner zoom and fit the view, and a minimap in the bottom-right corner shows where you are.
- **Escape** closes the sidebar and any open menu.
- The canvas follows Filament's light and dark mode.

## How a definition is stored

The `definition` column of a workflow is JSON with two lists, `nodes` and `edges`, in the shape the canvas uses. The runner reads the same structure, so a workflow can be created from code, seeded or asserted in a test without the UI:

```php
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Conditions\RecordAttribute;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;

Workflow::create([
    'name' => 'Shipping notice',
    'is_active' => true,
    'definition' => [
        'nodes' => [
            [
                'id' => 'trigger-1',
                'type' => 'trigger',
                'position' => ['x' => 0, 'y' => 0],
                'data' => [
                    'identifier' => RecordUpdated::class,
                    'label' => 'Order updated',
                    'description' => null,
                    'config' => ['model_class' => App\Models\Order::class],
                ],
            ],
            [
                'id' => 'condition-1',
                'type' => 'condition',
                'position' => ['x' => 300, 'y' => 0],
                'data' => [
                    'identifier' => RecordAttribute::class,
                    'label' => 'Shipped?',
                    'description' => null,
                    'config' => ['attribute' => 'status', 'operator' => '=', 'value' => 'shipped'],
                ],
            ],
            [
                'id' => 'action-1',
                'type' => 'action',
                'position' => ['x' => 600, 'y' => 0],
                'data' => [
                    'identifier' => SendEmail::class,
                    'label' => 'Notify the customer',
                    'description' => null,
                    'config' => [
                        'recipient' => '{{ model.customer.email }}',
                        'subject' => 'Order {{ model.reference }} is on its way',
                        'body' => 'Hi {{ model.customer.name }}, your order has shipped.',
                    ],
                ],
            ],
        ],
        'edges' => [
            ['id' => 'e1', 'source' => 'trigger-1', 'sourceHandle' => 'output', 'target' => 'condition-1', 'targetHandle' => 'input'],
            ['id' => 'e2', 'source' => 'condition-1', 'sourceHandle' => 'true', 'target' => 'action-1', 'targetHandle' => 'input'],
        ],
    ],
]);
```

| Key | Meaning |
| --- | --- |
| `nodes[].id` | Unique within the workflow; the canvas generates `trigger-…`, `action-…`, `condition-…` ids |
| `nodes[].type` | `trigger`, `action` or `condition` |
| `nodes[].position` | `x` / `y` on the canvas |
| `nodes[].data.identifier` | The node class. Only classes registered with the plugin are ever instantiated |
| `nodes[].data.label`, `description` | What the node shows |
| `nodes[].data.config` | The values of the node's settings form, passed to `matches()` / `evaluate()` / `handle()` |
| `edges[].source`, `target` | Node ids |
| `edges[].sourceHandle` | `output` on triggers and actions, `true` or `false` on conditions |
| `edges[].targetHandle` | `input` |

When the form is saved, transient canvas state (selection, measured sizes) is stripped and only the keys above are kept.

Next: [Triggers](triggers.md).
