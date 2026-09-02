# Placeholders

Text fields in node settings accept `{{ placeholders }}` that are filled in from the run's payload when the node runs. They work in email subjects and bodies, notification titles, Slack messages, URLs, headers, JSON bodies, log messages, the attributes of **Update record**, and both sides of a **Compare values** condition.

## Syntax

```text
{{ model.name }}
{{model.name}}
{{ webhook.order.items.0.sku }}
```

A placeholder is a path of letters, digits, `_`, `-` and dots between double braces; spaces inside the braces are optional. The path is resolved against the payload with Laravel's `data_get()`, so it walks arrays, objects, Eloquent attributes, accessors and relationships:

| Placeholder | Reads |
| --- | --- |
| `{{ model.status }}` | An attribute (or accessor) of the record |
| `{{ model.customer.name }}` | Through a relationship |
| `{{ webhook.order.total }}` | A nested key of the webhook body |
| `{{ event.order.reference }}` | A public property of the event, then an attribute of the model inside it |
| `{{ headers.x-signature }}` | A request header of a webhook call |

A path that resolves to nothing renders as an empty string — the run does not fail. Text without `{{` is returned untouched. Attributes in a model's `$hidden` list (passwords, tokens) always resolve to nothing, even through a relationship.

## Filters

A value can be passed through filters with `|`, several in a row:

```text
{{ model.created_at | date:Y-m-d }}
{{ model.name | upper }}
{{ webhook.note | default:none }}
{{ model.total | number:2 }}
{{ tags | join:, | truncate:80 }}
```

| Filter | |
| --- | --- |
| `date:<format>` | Formats a date (`Carbon`, a `DateTime` or a parseable string) with a PHP date format |
| `upper`, `lower`, `title`, `trim` | Text transforms |
| `truncate:<n>` | Cuts to *n* characters and adds `...` |
| `number:<decimals>` | `number_format()` with that many decimals |
| `default:<value>` | Uses the value when the placeholder is empty |
| `json` | JSON of the value (a model becomes its attributes) |
| `count` | Number of items in an array or collection |
| `join:<glue>` | Joins an array or collection; spaces around the glue are trimmed |
| `first`, `last` | First or last item of an array or collection |

An unknown filter leaves the value unchanged; a filter that cannot be applied (a date that does not parse) does too.

## Outputs of earlier actions

Some actions expose a result to the nodes after them on the same branch:

| Placeholder | |
| --- | --- |
| `{{ last.status }}`, `{{ last.body.id }}` | The output of the most recent action that produced one — an **HTTP request**'s status, body and headers, or the `changes` of **Update record** |
| `{{ outputs.<node id>.body.id }}` | The output of a specific node, by its id (shown in the definition; see [Building workflows](building-workflows.md#how-a-definition-is-stored)) |

Outputs follow the branch: a node on another branch leaving the same trigger does not see them. They are stored on the run's step log (up to `max_output_bytes`) and shown in the run details. Your own actions expose values with `$this->output([...])` — see [Extending](extending.md#actions).

## Aliases

`record` is an alias of `model`: `{{ record.status }}` and `{{ model.status }}` read the same value. Use whichever reads better in the sentence.

## How values become text

When a placeholder is rendered inside text, the resolved value is converted like this:

| Value | Becomes |
| --- | --- |
| `null` | empty string |
| `true` / `false` | `1` / `0` |
| string, int, float | as is |
| Eloquent model | its primary key |
| `DateTimeInterface` (Carbon dates included) | ISO 8601, e.g. `2026-01-02T03:04:05+00:00` |
| `Stringable` | its string form |
| `Arrayable` (collections) | JSON of `toArray()` |
| array | JSON |
| any other object | empty string |

Two places keep the raw value instead of text: **Compare values** when the value to check is a single bare placeholder, and an unquoted placeholder used as a JSON value in an **HTTP request** body of a definition created from code — see [Conditions](conditions.md#compare-values) and [Actions](actions.md#http-request).

## What each trigger exposes

| Trigger | Payload keys |
| --- | --- |
| Manual (**Run now**) | `manual` |
| Manual (`Flow::run()`, `packstub-flow:run --payload`) | whatever you pass |
| Schedule | `now` |
| Webhook | `webhook`, `headers`, `webhook_token` |
| Record created | `model` (alias `record`) |
| Record updated | `model`, `original`, `changes` |
| Record deleted | `model` |
| User registered | `model`, `user` |
| Event | `event` |
| Called by another workflow | the caller's payload plus `flow_depth` |

`{{ original.status }}` is the attribute's value before the update; `{{ changes.status }}` is present only when that attribute changed. The **Placeholders** section in a node's settings slide-over lists examples for the node.

## In code

`Packstub\Flow\Support\Placeholders` does the rendering; your own nodes get it through the `InterpolatesPlaceholders` trait (see [Extending](extending.md#placeholders-in-your-own-nodes)):

```php
use Packstub\Flow\Support\Placeholders;

Placeholders::render('Order {{ model.reference }}', $payload);        // 'Order ORD-0042'
Placeholders::renderArray(['X-Ref' => '{{ model.reference }}'], $payload);
Placeholders::resolve('webhook.total', $payload);                     // raw value, e.g. 12.5
Placeholders::stringify($value);                                      // the text rules above
Placeholders::hasPlaceholders('{{ a.b }}');                           // true
```

Next: [Runs](runs.md).
