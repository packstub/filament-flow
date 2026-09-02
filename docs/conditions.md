# Conditions

A condition evaluates to true or false and the run continues along the matching output: **True** (green handle) or **False** (red handle). An output with nothing connected simply ends that branch. Conditions are recorded in the run's step log as "Condition met" or "Condition not met".

## Record attribute

Checks an attribute of the record that started the run (the `model` in the payload).

| Setting | |
| --- | --- |
| Attribute | A column, accessor or dotted relationship path: `status`, `total`, `customer.country` |
| Operator | See [operators](#operators) |
| Value | The value to compare with; placeholders allowed (`{{ original.status }}`). Hidden for operators that need no value |

The attribute is read with `data_get()` on the model, so relationships and accessors work. The condition is **false** when the run has no record — for example a run started with **Run now**.

## Compare values

Compares any two values, so it works with webhook and event payloads as well as records.

| Setting | |
| --- | --- |
| Value to check | Usually a placeholder: `{{ webhook.order.total }}`, `{{ event.carrier }}`, `{{ model.status }}`; any text with placeholders works |
| Operator | See [operators](#operators) |
| Value | The value to compare with; placeholders allowed. Hidden for operators that need no value |

When **Value to check** is a single bare placeholder (`{{ webhook.total }}` and nothing else), the raw value is used, so numbers stay numbers, booleans stay booleans and arrays stay arrays. Anything else is rendered to text first (`Order {{ webhook.id }}` becomes `Order 7`).

## Time of day

True while the current time is inside a daily window. Useful in front of a notification you only want during office hours.

| Setting | |
| --- | --- |
| From | Start of the window (default 09:00) |
| Until | End of the window (default 17:00); both ends are inclusive |
| Timezone | Defaults to the application timezone |

A window that ends before it starts (22:00 to 05:00) crosses midnight and works as you would expect.

## Operators

| Operator | True when |
| --- | --- |
| equals | The two values are equal, after the [normalisation](#how-values-are-compared) below (`150` equals `"150"`; `paid` does not equal `PAID`) |
| does not equal | The opposite |
| is greater than | Left is greater than right |
| is greater than or equal to | |
| is less than | |
| is less than or equal to | |
| contains | The text of the left value contains the text of the right value, case-insensitive |
| does not contain | The opposite |
| starts with | Case-sensitive |
| ends with | Case-sensitive |
| is one of (comma separated) | The left value, as text, equals one of the comma-separated entries (`draft, paid`) |
| is empty | The left value is `null`, an empty string, or an empty array (Laravel's `blank()`) |
| is not empty | The opposite (`filled()`) |
| is true | `true`, `1`, `"1"`, `"yes"`, `"on"`, `"true"`; other values fall back to their boolean cast |
| is false | The opposite |

The last four operators need no **Value**; the field disappears when you pick one. An unknown operator evaluates to false.

## How values are compared

Before an equality or ordering comparison, both sides are normalised:

- The **Value** you typed: numeric text becomes a number, `true` / `false` become booleans, `null` becomes null.
- The value being checked: a backed enum becomes its value, a date becomes a timestamp, a `Stringable` becomes text, numeric text becomes a number.
- Equality is loose (`==`), so `"150"` and `150.0` are equal, while `paid` and `PAID` are not.

Text operators (contains, starts with, ends with, is one of) turn both sides into text with the same rules as [placeholders](placeholders.md#how-values-become-text): a model becomes its key, a date its ISO 8601 form, an array its JSON — so `{{ webhook.tags }}` **contains** `vip` is true for `["vip", "new"]`.

## Writing your own condition

See [Extending](extending.md#conditions).

Next: [Placeholders](placeholders.md).
