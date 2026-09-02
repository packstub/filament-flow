<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Queue;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Jobs\RunWorkflowJob;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\RecordCreated;
use Packstub\Flow\Nodes\Triggers\RecordDeleted;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;
use Packstub\Flow\Support\PayloadSerializer;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;
use Packstub\Flow\Tests\Fixtures\User;

it('starts workflows whose record trigger matches the model class', function (): void {
    createWorkflow([triggerNode('t', RecordCreated::class, ['model_class' => Order::class]), actionNode('a', SetStatusAction::class, ['status' => 'order'])], [edge('t', 'a')]);
    createWorkflow([triggerNode('t', RecordCreated::class, ['model_class' => User::class]), actionNode('a', SetStatusAction::class, ['status' => 'user'])], [edge('t', 'a')]);

    $order = createOrder();

    expect(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['config']['status'])->toBe('order')
        ->and(SetStatusAction::$calls[0]['payload']['model']->is($order))->toBeTrue()
        ->and($order->fresh()->status)->toBe('order');
});

it('passes the original attributes and the changes on update', function (): void {
    createWorkflow([triggerNode('t', RecordUpdated::class, ['model_class' => Order::class]), actionNode('a', SetStatusAction::class, ['status' => 'seen'])], [edge('t', 'a')]);

    $order = createOrder(['total' => 10]);
    $order->update(['total' => 99]);

    $payload = SetStatusAction::$calls[0]['payload'];

    expect($payload['original']['total'])->toEqual(10)
        ->and($payload['changes'])->toHaveKey('total');
});

it('fires the deleted trigger with the deleted record', function (): void {
    createWorkflow([triggerNode('t', RecordDeleted::class, ['model_class' => Order::class]), actionNode('a', SetStatusAction::class, ['status' => 'x'])], [edge('t', 'a')]);

    $order = createOrder();
    $order->delete();

    expect(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload']['model']->reference)->toBe($order->reference);
});

it('ignores inactive workflows and unknown triggers', function (): void {
    createWorkflow([triggerNode('t', RecordCreated::class, ['model_class' => Order::class]), actionNode('a', SetStatusAction::class, ['status' => 'x'])], [edge('t', 'a')], ['is_active' => false]);

    createOrder();

    expect(SetStatusAction::$calls)->toBe([])
        ->and(Flow::dispatch('Not\\A\\Trigger'))->toBe([]);
});

it('pushes runs onto the queue when configured', function (): void {
    Queue::fake();
    config()->set('packstub-flow.queue', ['enabled' => true, 'connection' => null, 'queue' => 'flows']);

    $workflow = createWorkflow([triggerNode('t', RecordCreated::class, ['model_class' => Order::class]), actionNode('a', SetStatusAction::class, ['status' => 'queued'])], [edge('t', 'a')]);
    $order = createOrder();

    expect(SetStatusAction::$calls)->toBe([])
        ->and(WorkflowRun::query()->count())->toBe(0);

    Queue::assertPushedOn('flows', RunWorkflowJob::class, function (RunWorkflowJob $job) use ($workflow, $order): bool {
        return $job->workflowId === $workflow->id
            && $job->startNodeId === 't'
            && $job->payload['model']['key'] === $order->id;
    });
});

it('the queued job restores the payload and runs the workflow', function (): void {
    $workflow = createWorkflow([triggerNode('t', RecordCreated::class, ['model_class' => Order::class]), actionNode('a', SetStatusAction::class, ['status' => 'from-job'])], [edge('t', 'a')], ['is_active' => false]);
    $order = createOrder();
    $workflow->update(['is_active' => true]);

    (new RunWorkflowJob($workflow->id, PayloadSerializer::serialize(['model' => $order]), 't'))->handle();

    expect($order->fresh()->status)->toBe('from-job')
        ->and(WorkflowRun::query()->first()->status)->toBe(RunStatus::Success);
});

it('runs synchronously on demand even when the queue is enabled', function (): void {
    Queue::fake();
    config()->set('packstub-flow.queue.enabled', true);

    $run = Flow::run(manualWorkflow(), queue: false);

    expect($run->status)->toBe(RunStatus::Success);
    Queue::assertNothingPushed();
});

it('returns null from run when the workflow has no trigger node', function (): void {
    $workflow = createWorkflow([actionNode('a', SetStatusAction::class, ['status' => 'x'])]);

    expect(Flow::run($workflow))->toBeNull();
    expect(Flow::run(manualWorkflow(), startNodeId: 't'))->not->toBeNull();
    expect(Flow::run(manualWorkflow(), startNodeId: 'zzz')->status)->toBe(RunStatus::Failed);

    expect(Manual::make()->matches([], []))->toBeTrue();
});

it('fires a record updated trigger only when a watched attribute changes', function (): void {
    createWorkflow([triggerNode('t', RecordUpdated::class, ['model_class' => Order::class, 'watch' => ['status']]), actionNode('a', SetStatusAction::class, ['status' => 'seen'])], [edge('t', 'a')]);

    $order = createOrder();

    $order->update(['total' => 250]);
    expect(SetStatusAction::$calls)->toBe([]);

    $order->update(['reference' => 'X', 'status' => 'paid']);
    expect(SetStatusAction::$calls)->toHaveCount(1);
});

it('runs a workflow once per record when the trigger says so', function (): void {
    createWorkflow([triggerNode('t', RecordUpdated::class, ['model_class' => Order::class, 'once' => true]), actionNode('a', SetStatusAction::class, ['status' => 'seen'])], [edge('t', 'a')]);

    $order = createOrder();
    $other = createOrder();

    $order->update(['total' => 1]);
    $order->update(['total' => 2]);
    $other->update(['total' => 3]);

    $runs = WorkflowRun::query()->get();

    expect(SetStatusAction::$calls)->toHaveCount(2)
        ->and($runs)->toHaveCount(2)
        ->and($runs->pluck('subject_id')->all())->toBe([(string) $order->id, (string) $other->id])
        ->and($runs->first()->subject_type)->toBe(Order::class)
        ->and($runs->first()->subject()->is($order))->toBeTrue();
});

it('does not query the triggers table when no active workflow uses the trigger', function (): void {
    createWorkflow([triggerNode('t', RecordCreated::class, ['model_class' => Order::class]), actionNode('a', SetStatusAction::class, ['status' => 'x'])], [edge('t', 'a')], ['is_active' => false]);

    DB::enableQueryLog();

    $order = createOrder();
    $order->update(['total' => 5]);
    $order->delete();

    $queries = collect(DB::getQueryLog())->pluck('query')->filter(fn (string $sql): bool => str_contains($sql, 'flow_workflow_triggers'));

    expect($queries)->toHaveCount(1);

    DB::disableQueryLog();
});

it('rebuilds a payload from a run so it can be started again', function (): void {
    $order = createOrder();
    $run = Flow::run(manualWorkflow(), ['model' => $order, 'webhook' => ['id' => 5], 'user' => createUser()]);

    $payload = $run->rebuildPayload();

    expect($payload['model']->is($order))->toBeTrue()
        ->and($payload['webhook'])->toBe(['id' => 5])
        ->and($payload['user'])->toBeInstanceOf(User::class);
});
