# Actions

An action does the work of a workflow. Its settings are a Filament form in the node's slide-over; every text field accepts [placeholders](placeholders.md), which are filled in from the run's payload when the action runs. An action that throws marks the run as **Failed** with the exception message and stops that branch.

![The settings slide-over for an action](https://raw.githubusercontent.com/packstub/filament-flow/main/docs/images/node-settings.png)

## Send email

Sends a plain Markdown email through your default mailer, using the `Packstub\Flow\Mail\WorkflowMail` mailable.

| Setting | |
| --- | --- |
| To | One or more addresses separated by commas; placeholders allowed. Defaults to `{{ model.email }}` |
| Subject | Placeholders allowed |
| Message | Plain text; line breaks are kept. Placeholders allowed |

When the recipient list is empty after placeholders are filled in (for example `{{ model.email }}` on a run without a record), the action does nothing and the run continues. The mail is sent immediately from the run; put the workflow on the queue to keep it out of the request (see [Queue & scheduling](queue-and-scheduling.md)).

## Send notification

Sends a Filament **database notification** — the bell in the topbar — to panel users.

| Setting | |
| --- | --- |
| Title | Placeholders allowed |
| Body | Optional; placeholders allowed |
| Style | Info (default), Success, Warning or Danger |
| Recipients | Email addresses separated by commas; placeholders allowed, e.g. `admin@example.com, {{ model.owner.email }}` |

Recipients are looked up by `email` on the model configured in `auth.providers.users.model`; addresses that match no user are skipped, and nothing is sent when none match. Your panel needs `->databaseNotifications()` and the `notifications` table for users to see them.

## Send Slack message

Posts a message to a Slack [incoming webhook](https://api.slack.com/messaging/webhooks).

| Setting | |
| --- | --- |
| Webhook URL | The `https://hooks.slack.com/services/...` URL; placeholders allowed |
| Message | The text to post; placeholders allowed |

The action sends `{"text": "<message>"}` and fails the run if Slack answers with an error status. An empty URL skips the action.

## HTTP request

Calls any URL.

| Setting | |
| --- | --- |
| Method | `GET`, `POST` (default), `PUT`, `PATCH` or `DELETE` |
| URL | Placeholders allowed: `https://api.example.com/hooks/{{ model.id }}` |
| Headers | Key / value pairs; placeholders allowed in values |
| JSON body | Sent as JSON for every method except `GET`. Must be valid JSON once placeholders are masked, which the form checks; placeholders allowed in values and as bare values |
| Timeout | Seconds before the request is abandoned; empty uses `http.timeout` from the config (15 s) |
| Retries on connection errors | Extra attempts (0–5) when the request cannot be sent or times out, half a second apart |
| Fail the run on a 4xx / 5xx response | On by default. Turn off to continue whatever the response |

Placeholders inside a quoted JSON string stay strings and are escaped, so a value containing quotes cannot add keys to the body (`"note": "{{ model.note }}"` is always one string). A bare placeholder (`"total": {{ model.total }}`, `"customer": {{ model }}`) becomes the raw value — number, boolean, array, or a model's attributes — so types survive. Placeholder values in the URL are URL-encoded. A body that is not valid JSON at run time fails the run.

The response is available to the nodes after the request:

| Placeholder | |
| --- | --- |
| `{{ last.status }}` | The HTTP status code |
| `{{ last.ok }}` | `1` for 2xx, `0` otherwise |
| `{{ last.body.id }}` | The decoded JSON body (or the raw text when it is not JSON) |
| `{{ last.headers.content-type }}` | Response headers |

`last` is replaced by the output of the next action that produces one; `{{ outputs.<node id>.body.id }}` reaches a specific request. See [Placeholders](placeholders.md#outputs-of-earlier-actions).

Destinations are checked before the request is sent: private and reserved addresses (`localhost`, `10.x`, `192.168.x`, `169.254.x`, …) are refused, and `http.allowed_hosts` in the config can restrict requests to a list of hosts. See [Configuration](configuration.md#outgoing-http).

## Update record

Sets attributes on the record that started the run — the `model` in the payload of a record trigger, the user of **User registered**, or whatever you passed as `model` to `Flow::run()`.

| Setting | |
| --- | --- |
| Attributes | Attribute / value pairs; placeholders allowed in values. A value that is exactly one placeholder keeps its type (`{{ webhook.total }}` writes a number, `{{ missing }}` writes `null`) |
| Save without firing events | On by default |
| Bypass mass-assignment protection | Off by default |

Attributes go through the model's `$fillable` / `$guarded` rules: writing a guarded attribute fails the run with a message naming it. Turn on **Bypass mass-assignment protection** to use `forceFill()` instead — only when everyone who can edit workflows may write any column. The action exposes the saved changes as `{{ last.changes.status }}`. With **Save without firing events** on, the record is saved with `saveQuietly()`: no Eloquent events, no observers, and no **Record updated** trigger — which keeps a workflow that reacts to updates from starting itself again. Turn it off when you want observers and other workflows to see the change.

The action fails the run when the payload has no record, and does nothing when no attributes are configured.

## Wait

Pauses the run and continues the nodes after it later, through the queue.

| Setting | |
| --- | --- |
| Wait | **For a duration** (default) or **Until a date from the payload** |
| Duration / Unit | The length of the wait, or the offset from the date: Seconds, Minutes (default), Hours or Days |
| Date | Until mode only: a placeholder or a date, e.g. `{{ model.starts_at }}` or `{{ model.due_at }}` |
| Offset | Until mode only: continue that duration **before** or **after** the date |

"1 day before `{{ model.starts_at }}`" sends an appointment reminder; "3 days after `{{ model.due_at }}`" is a dunning step. A date already in the past (after the offset) continues immediately, and a date that cannot be read from the payload does too.

When the runner reaches a Wait, it records the nodes connected to the Wait's output, marks the run **Waiting**, and dispatches a delayed job that resumes them once the time has passed. A Wait with nothing connected after it finishes the run immediately. Everything about how this interacts with your queue — the graph snapshot, several Waits in one run, the `sync` driver — is in [Queue & scheduling](queue-and-scheduling.md#wait-steps).

## Call workflow

Runs another workflow with the current payload.

| Setting | |
| --- | --- |
| Workflow | The workflow to call. It must contain a **Called by another workflow** trigger; the call enters through that node |

The called workflow receives the caller's payload plus `flow_depth`, which grows by one per nested call. When workflows call each other more than 10 levels deep, the run fails with a clear message instead of looping.

When runs execute synchronously (the default), the called workflow runs to completion inside the calling action; if it fails, the caller fails too with the same error. With queued runs, the called workflow is pushed onto the queue as its own job and the caller continues right away. The action fails when the target workflow no longer exists or has no matching trigger; a target that is inactive is skipped silently.

## Write to log

Writes a line to the application log.

| Setting | |
| --- | --- |
| Level | `debug`, `info` (default), `notice`, `warning` or `error` |
| Message | Placeholders allowed |

Lines are prefixed with `[flow] `, e.g. `[flow] Order ORD-0042 changed to shipped`.

## Writing your own action

See [Extending](extending.md#actions).

Next: [Conditions](conditions.md).
