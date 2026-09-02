# Testing

Workflows are data, so testing them in your application is mostly a matter of creating a definition, triggering it, and asserting on the `WorkflowRun` rows and on the side effects — with Laravel's fakes keeping mail, HTTP and the queue out of the way. The examples use Pest; they translate one-to-one to PHPUnit.

## A helper for definitions

A small helper keeps tests readable. Node ids only need to be unique within the workflow.

```php
// tests/Pest.php
use Packstub\Flow\Models\Workflow;

function flowNode(string $id, string $type, string $identifier, array $config = []): array
{
    return [
        'id' => $id,
        'type' => $type,
        'position' => ['x' => 0, 'y' => 0],
        'data' => ['identifier' => $identifier, 'label' => $id, 'description' => null, 'config' => $config],
    ];
}

function flowEdge(string $source, string $target, ?string $sourceHandle = null): array
{
    return array_filter(['id' => "{$source}-{$target}", 'source' => $source, 'sourceHandle' => $sourceHandle, 'target' => $target]);
}

function createWorkflow(array $nodes, array $edges = [], array $attributes = []): Workflow
{
    return Workflow::create([
        'name' => 'Test workflow',
        'is_active' => true,
        'definition' => ['nodes' => $nodes, 'edges' => $edges],
        ...$attributes,
    ]);
}
```

Saving the workflow mirrors its trigger nodes into the triggers table, so the dispatcher finds it immediately.

## Triggering through a model

With `HasWorkflows` on the model, creating or updating a record starts the workflow inside the test:

```php
use App\Models\Order;
use Illuminate\Support\Facades\Mail;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Mail\WorkflowMail;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Conditions\RecordAttribute;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;

it('emails the customer when an order ships', function (): void {
    Mail::fake();

    createWorkflow([
        flowNode('t', 'trigger', RecordUpdated::class, ['model_class' => Order::class]),
        flowNode('c', 'condition', RecordAttribute::class, ['attribute' => 'status', 'operator' => '=', 'value' => 'shipped']),
        flowNode('a', 'action', SendEmail::class, ['recipient' => '{{ model.customer.email }}', 'subject' => 'Order {{ model.reference }} shipped', 'body' => 'On its way.']),
    ], [flowEdge('t', 'c'), flowEdge('c', 'a', 'true')]);

    $order = Order::factory()->create(['status' => 'paid']);
    $order->update(['status' => 'shipped']);

    Mail::assertSent(WorkflowMail::class, fn (WorkflowMail $mail) => $mail->hasTo($order->customer->email)
        && $mail->mailSubject === "Order {$order->reference} shipped");

    $run = WorkflowRun::query()->sole();

    expect($run->status)->toBe(RunStatus::Success)
        ->and($run->trigger_type)->toBe(RecordUpdated::class)
        ->and(collect($run->steps)->pluck('node_id')->all())->toBe(['t', 'c', 'a']);
});
```

`Order::factory()->create()` in that test also fires **Record created**, which no workflow listens to here. Keep that in mind when a test creates records and counts runs.

## Running directly

`Flow::run()` starts a workflow with any payload, without going through a trigger — handy for testing conditions and actions in isolation:

```php
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\Manual;

$workflow = createWorkflow([
    flowNode('t', 'trigger', Manual::class),
    flowNode('a', 'action', App\Flow\Actions\AssignToTeam::class, ['team_id' => $team->id]),
], [flowEdge('t', 'a')]);

$run = Flow::run($workflow, ['model' => $order]);

expect($run->status)->toBe(RunStatus::Success)
    ->and($order->fresh()->team_id)->toBe($team->id);
```

A failing run does not throw; assert on `$run->status` and `$run->error`:

```php
expect($run->status)->toBe(RunStatus::Failed)
    ->and($run->error)->toContain('needs a record');
```

Custom nodes can be unit-tested without a workflow at all — call `handle()`, `evaluate()` or `matches()` with a config and a payload:

```php
expect((new IsVip)->evaluate(['minimum_orders' => 3], ['model' => $order]))->toBeTrue();
```

## Faking the outside world

| Node | Fake | Assert |
| --- | --- | --- |
| Send email | `Mail::fake()` | `Mail::assertSent(WorkflowMail::class, ...)` — `$mail->mailSubject`, `$mail->body`, `$mail->hasTo()` |
| HTTP request, Send Slack message | `Http::fake([...])` | `Http::assertSent(fn ($request) => $request->url() === '...' && $request['total'] === '12.5')` |
| Send notification | nothing needed | `$user->notifications()->count()`, `->first()->data['title']` |
| Write to log | `Log::shouldReceive('log')->once()->with('warning', '[flow] ...')` | |
| Queued runs and Wait | `Queue::fake()` | `Queue::assertPushed(RunWorkflowJob::class, ...)`, `Queue::assertPushed(ResumeWorkflowJob::class, ...)` |

```php
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Nodes\Actions\HttpRequest;

Http::fake(['api.example.com/*' => Http::response(['ok' => true])]);

Flow::run(createWorkflow([
    flowNode('t', 'trigger', Manual::class),
    flowNode('a', 'action', HttpRequest::class, ['method' => 'POST', 'url' => 'https://api.example.com/orders/{{ model.id }}', 'body' => '{"total": "{{ model.total }}"}']),
], [flowEdge('t', 'a')]), ['model' => $order]);

Http::assertSent(fn ($request) => $request->url() === "https://api.example.com/orders/{$order->id}" && $request['total'] === (string) $order->total);
```

## Queue and Wait steps

With `Queue::fake()`, a **Wait** leaves the run in the Waiting state and pushes a `ResumeWorkflowJob`; run it by hand to test what happens after the wait:

```php
use Illuminate\Support\Facades\Queue;
use Packstub\Flow\Jobs\ResumeWorkflowJob;
use Packstub\Flow\Nodes\Actions\Wait;

Queue::fake();

$run = Flow::run(createWorkflow([
    flowNode('t', 'trigger', Manual::class),
    flowNode('w', 'action', Wait::class, ['duration' => 10, 'unit' => 'minutes']),
    flowNode('a', 'action', SendEmail::class, ['recipient' => 'ops@example.com', 'subject' => 'Later', 'body' => '...']),
], [flowEdge('t', 'w'), flowEdge('w', 'a')]));

expect($run->status)->toBe(RunStatus::Delayed)->and($run->pending_resumes)->toBe(1);

Queue::assertPushed(ResumeWorkflowJob::class, fn (ResumeWorkflowJob $job) => $job->runId === $run->id && $job->nodeIds === ['a']);

Queue::pushedJobs()[ResumeWorkflowJob::class][0]['job']->handle();

expect($run->fresh()->status)->toBe(RunStatus::Success);
```

To test queued runs, enable the queue in the test and assert on `RunWorkflowJob`:

```php
use Packstub\Flow\Jobs\RunWorkflowJob;

Queue::fake();
config()->set('packstub-flow.queue.enabled', true);

Order::factory()->create();

Queue::assertPushed(RunWorkflowJob::class, fn (RunWorkflowJob $job) => $job->startNodeId === 't');
```

Without `Queue::fake()` and with the `sync` driver (the usual test setup), jobs run immediately and delays are skipped, so a Wait resumes at once — convenient for end-to-end tests of what comes after it.

## Webhooks, schedules and events

```php
// Webhook: POST to the route and assert on the response and the run
$this->postJson("/flow/webhooks/{$workflow->id}/{$token}", ['order' => ['status' => 'shipped']])
    ->assertStatus(202)
    ->assertJson(['accepted' => true, 'status' => 'success']);

// Schedule: freeze time and run the cron command
Carbon::setTestNow('2026-03-02 09:00:00');
$this->artisan('packstub-flow:cron')->expectsOutputToContain('1 scheduled workflow run(s) started.');

// Event: dispatch the event
event(new OrderShipped($order, 'UPS'));
```

> [!NOTE]
> The **Event** trigger caches the list of watched event classes per process and in the cache store. Tests that create workflows with an Event trigger should call `Packstub\Flow\Listeners\DispatchEventTriggers::flush()` in `setUp()` (or `beforeEach`) so each test starts with a fresh list.

## Console commands

```php
$this->artisan('packstub-flow:run', ['workflow' => 'Welcome sequence', '--payload' => '{"answer": 42}'])
    ->expectsOutputToContain('finished with status success')
    ->assertSuccessful();

$this->artisan('packstub-flow:prune', ['--days' => 7])
    ->expectsOutputToContain('Deleted 1 run(s)');
```

`packstub-flow:run` always runs synchronously, prints each step, and fails for a missing or inactive workflow or a failed run.

## The panel

The resource pages and the node slide-over are Livewire components and can be tested with Filament's testing helpers:

```php
use Filament\Actions\Testing\TestAction;
use Livewire\Livewire;
use Packstub\Flow\Filament\Livewire\ManageNode;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\ListWorkflows;

Livewire::test(ListWorkflows::class)
    ->assertCanSeeTableRecords([$workflow])
    ->callAction(TestAction::make('run')->table($workflow))
    ->assertNotified();

Livewire::test(ManageNode::class)
    ->call('open', 'n1', SendEmail::class, ['label' => 'Send email', 'recipient' => 'a@b.c', 'subject' => 's', 'body' => 'b'])
    ->assertActionMounted('manageNode')
    ->setActionData(['subject' => 'Hello {{ model.name }}'])
    ->callMountedAction()
    ->assertHasNoActionErrors()
    ->assertDispatched('packstub-flow.node-updated', id: 'n1');
```

The plugin's own suite under `tests/Feature` in the [repository](https://github.com/packstub/filament-flow/tree/main/tests) covers every node and is a good source of further examples.
