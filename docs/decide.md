# Decisions with Jev

The **Decide** action is a branch that reads. It hands [Jev](https://docs.typesafe.ai/concepts/system-one), TypeSafe's System One model, the material of the run and one typed question — *is this urgent?*, *which team takes it?*, *how upset is the customer?* — and the run continues along the answer: **Yes / No**, one branch per **option**, one per **level**, and a **Not sure** branch for the close calls.

Jev is built for this step. It does not write text; it returns a typed decision with the probability of every outcome and a confidence, typically in well under a second, and it is priced per input token at a small fraction of a cent per decision. That makes it a comfortable fit for the judgement calls a workflow makes on every record: triage, routing, flagging, escalation. For an answer in words — a summary, a reply draft, several named fields at once — [Ask AI](actions.md#ask-ai) is the node; the two work well together, with Decide routing the clear cases and Ask AI (or a person) taking the ones Jev is not sure about.

## Setup

Create an API key in your [TypeSafe](https://typesafe.ai) account and add it to `.env`:

```dotenv
TYPESAFE_API_KEY=ts-...
```

That is all: the node appears in the **AI** group of the sidebar, drawn in teal on the canvas like Ask AI. It is plain HTTP, so it needs no other package and runs on every PHP version Flow supports. Without a key the node is not offered and everything else works as before. See [Configuration](configuration.md#decide-jev) for the model, the timeout and offering the node when every workspace brings its own key.

## The three decisions

| Decision | You give | Branches | Jev's question type |
| --- | --- | --- | --- |
| **Yes / no** | A question; optionally what a yes and a no mean | **Yes**, **No**, and **Not sure** when you leave a gap between the two thresholds | [`noul`](https://docs.typesafe.ai/primitives/noul) |
| **One of my options** | A question and 2 to 30 options, each with an optional line on what it covers | One per option, and **Not sure** under the minimum confidence | [`choice`](https://docs.typesafe.ai/primitives/choice) |
| **A score on my levels** | A question and 2 to 10 levels, lowest first | One per level (the score lands between levels, the run follows the nearest), and **Not sure** under the minimum confidence | [`score`](https://docs.typesafe.ai/primitives/score) |

The branches are drawn from the node's settings: apply the settings and the handles on the canvas follow. Renaming or removing an option removes its branch, and the edges that left it, so reconnect those before saving. An answer whose branch has no edge simply ends that path of the run, the way an unconnected *False* does on a condition.

## Settings

| Setting | |
| --- | --- |
| What to look at | The material for the decision — Jev calls it the *state* — with placeholders filled in: `Subject: {{ model.subject }}` and the message under it. When the text is a JSON object or array it is sent as structure, which suits a decision that compares several things: `{"ticket": "{{ model.body }}", "refund_policy": "Duplicate charges are refunded."}`. Keep the question out of it |
| Decision | Yes / no, One of my options, A score on my levels |
| Question | One judgement, asked plainly: *Does the customer need an answer today?* Placeholders allowed. Two judgements are two nodes |
| Yes means / No means | Yes / no only, optional. What counts as each, in a line: *Says or implies a deadline, or something is blocked* |
| Yes from | Yes / no only. The probability of yes, 0 to 1, from which the run follows **Yes**; 0.5 by default. Raise it when acting on a wrong yes is expensive (paging someone, issuing a refund), lower it when missing a yes is |
| No up to | Yes / no only, optional. Lower than *Yes from*, the answers between the two follow **Not sure**: yes from 0.7 and no up to 0.3 sends 0.31 to 0.69 to a person. Empty, everything under *Yes from* is a no |
| Options | Choice only. The name is the branch and the value of `{{ last.decision }}`, and Jev reads it, so name options after what they mean (`billing`, not `queue_2`): letters, digits, dashes and underscores. `unsure`, `error` and `output` are taken |
| Levels | Score only. In order, lowest first: *Calm*, *Frustrated*, *Very angry* |
| Minimum confidence | Choice and score, optional, 0 to 1. An answer Jev is less sure of follows **Not sure** instead of the branch it would have picked |
| Model | Optional. `jev-latest` by default (`TYPESAFE_MODEL`), which moves with TypeSafe's releases; pin a version such as `jev-1.13.0` once your thresholds are tuned against it. `{{ last.model }}` always reports the version that answered |
| API key | Optional. Empty, the app's `TYPESAFE_API_KEY`. A workspace with a key of its own keeps it in a [secret](secrets.md): `{{ secrets.typesafe }}` |
| Timeout (seconds) | Default from `jev.timeout` in the config (15) |

## What the next nodes see

| Placeholder | |
| --- | --- |
| `{{ last.decision }}` | `yes` or `no`; the option; or the level's number, `0` for the lowest |
| `{{ last.label }}` | The decision as text: *Yes*, the option, the level's description |
| `{{ last.branch }}` | The branch the run took: the decision, or `unsure` |
| `{{ last.sure }}` | Whether the decision passed the thresholds |
| `{{ last.confidence }}` | How sure Jev is, 0 to 1 |
| `{{ last.probability }}` | Yes / no: the probability of yes |
| `{{ last.score }}` | Score: where the answer lands between the levels, e.g. `1.4` |
| `{{ last.probabilities.billing }}` | The probability of one option; `.0`, `.1`… for levels; `.yes` / `.no` |
| `{{ last.model }}`, `{{ last.usage.input }}` | The model version that answered and the tokens it read |

On the **Not sure** branch `{{ last.decision }}` still holds what Jev leaned towards, so the notification to the person who takes over can say *"probably billing (confidence 0.41)"*. Later in the branch the same values stay available as `{{ outputs.<node id>.decision }}`.

For choices and scores the confidence is the one TypeSafe returns, [derived from how the probability spreads](https://docs.typesafe.ai/confidence) over your options. A yes / no answer is a single probability, so Flow reports the two-outcome form of the same measure: 0 at an even split, 1 at a certain yes or no. The branch of a yes / no decision is decided by *Yes from* and *No up to*, not by that number.

## Choosing the thresholds

TypeSafe's guidance, which the node follows: [let the stakes set the threshold](https://docs.typesafe.ai/confidence#thresholds-scale-with-risk).

- **Start with a Not sure branch** on anything that is hard to undo, and send it somewhere safe: an [approval](approvals.md), a notification to the team, or an Ask AI step with more context.
- **Start conservative** — a minimum confidence around 0.6 to 0.8, or yes from 0.7 / no up to 0.3 — then read the [runs](runs.md): every step log has the decision, the confidence and the probabilities. Lower the bar where Not sure turns out to agree with Jev's lean; raise it where a wrong branch got through.
- **Different branches, different stakes.** A low-stakes option can act on the decision directly while a high-stakes one goes through an approval first; that is two nodes after the Decide node, not a setting on it.
- **Pin the model** once tuned, since thresholds are tuned against a version.

English is Jev's primary language, with more languages supported and improving; for content in another language, test on your own records and let the Not sure branch take what it is unsure of.

## Example: triage a support ticket

`Ticket created` → **Decide** *Which team should handle this?* with a minimum confidence of 0.6:

| Branch | Then |
| --- | --- |
| `billing` | Assign owner (round robin over the billing team) → Send notification |
| `technical` | **Decide** *Does the customer need an answer today?* (yes from 0.7) → Yes: Send Slack message to #incidents; No: Add tag `backlog` |
| `sales` | Send to your CRM's automation |
| Not sure | Send notification to the support lead: *"{{ model.subject }} — probably {{ last.decision }} ({{ last.confidence }})"* |

Settings of the first node:

```text
What to look at   Subject: {{ model.subject }}
                  Message: {{ model.body }}
Decision          One of my options
Question          Which team should handle this?
Options           billing     Payments, invoices, refunds
                  technical   Bugs, outages, integrations
                  sales       Pricing, upgrades, new accounts
Minimum confidence  0.6
```

## Errors, retries and test runs

- A refusal by TypeSafe (a wrong key, a malformed question — the message names the field), an outage or a timeout is an ordinary failure of the node, and the node's **Error handling** decides: fail the run, retry, follow the **Error** branch with `{{ error.message }}`, or *log it and continue* — which continues along **Not sure** when the node has that branch, and ends the path otherwise, because no decision was made.
- Busy answers (HTTP 429 and 529) and dropped connections are retried inside the node first, with a short backoff (`jev.attempts`, 3 tries in all), as TypeSafe asks.
- A [test run](runs.md#test-runs) never calls TypeSafe: the step is logged as simulated with the state and the question as they would be sent, and the test continues along the node's first branch.
- The step log stores the decision and the usage, never the key; a secret used in the node is masked there as everywhere.

## From code and in tests

`Packstub\Flow\Support\Jev::ask()` is the small client the node uses, for a decision of your own in a [custom node](extending.md#actions-that-pick-the-branch) or anywhere else — one state, any number of typed questions answered in one request:

```php
use Packstub\Flow\Support\Jev;

$response = Jev::ask(
    ['ticket' => $ticket->body, 'plan' => $ticket->customer->plan],
    [
        'urgent' => ['type' => 'noul', 'instructions' => 'Does the customer need an answer today?'],
        'team' => ['type' => 'choice', 'instructions' => 'Which team should handle this?', 'criteria' => ['billing' => 'Payments, refunds', 'technical' => null]],
    ],
);

$response['answers']['urgent']['noul'];      // 0.95
$response['answers']['team']['choice'];      // "billing"
$response['answers']['team']['confidence'];  // 0.81
```

In a test, fake the endpoint; the node's question travels under the id `decision`:

```php
use Illuminate\Support\Facades\Http;

Http::fake(['api.typesafe.ai/*' => Http::response([
    'model' => 'jev-1.13.0',
    'answers' => ['decision' => ['type' => 'choice', 'choice' => 'billing', 'probabilities' => ['billing' => 0.88, 'technical' => 0.12], 'confidence' => 0.81]],
    'usage' => ['input_tokens' => 296, 'output_tokens' => 20],
])]);

$run = Flow::run($workflow, ['model' => $ticket]);

Http::assertSent(fn ($request) => $request['questions']['decision']['instructions'] === 'Which team should handle this?');
```

Give the test environment a key (`<env name="TYPESAFE_API_KEY" value="test"/>` in `phpunit.xml`) so the node is registered when the app boots.
