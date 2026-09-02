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

A path that resolves to nothing renders as an empty string — the run does not fail. Text without `{{` is returned untouched.

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
