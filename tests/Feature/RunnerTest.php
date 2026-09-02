<?php

use Illuminate\Support\Facades\Event;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Events\WorkflowCompleted;
use Packstub\Flow\Events\WorkflowFailed;
use Packstub\Flow\Events\WorkflowStarted;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Conditions\CompareValues;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\RecordCreated;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('runs a linear workflow and records every step', function (): void {
    Event::fake([WorkflowStarted::class, WorkflowCompleted::class]);

    $workflow = manualWorkflow();

    $run = Flow::run($workflow, ['answer' => 42]);

    expect($run)->toBeInstanceOf(WorkflowRun::class)
        ->and($run->status)->toBe(RunStatus::Success)
        ->and($run->trigger_type)->toBe(Manual::class)
        ->and($run->context)->toBe(['answer' => 42])
        ->and($run->finished_at)->not->toBeNull()
        ->and(collect($run->steps)->pluck('node_id')->all())->toBe(['t', 'a'])
        ->and(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload'])->toBe(['answer' => 42]);

    Event::assertDispatched(WorkflowStarted::class);
    Event::assertDispatched(WorkflowCompleted::class, fn (WorkflowCompleted $event) => $event->run->is($run));
});

it('follows the true and false branches of a condition', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        conditionNode('c', CompareValues::class, ['left' => '{{ amount }}', 'operator' => '>', 'value' => '100']),
        actionNode('big', SetStatusAction::class, ['status' => 'big']),
        actionNode('small', SetStatusAction::class, ['status' => 'small']),
    ], [edge('t', 'c'), edge('c', 'big', 'true'), edge('c', 'small', 'false')]);

    Flow::run($workflow, ['amount' => 500]);
    Flow::run($workflow, ['amount' => 5]);

    expect(collect(SetStatusAction::$calls)->pluck('config.status')->all())->toBe(['big', 'small']);

    $runs = WorkflowRun::query()->orderBy('created_at')->get();

    expect(collect($runs[0]->steps)->pluck('node_id')->all())->toBe(['t', 'c', 'big'])
        ->and(collect($runs[1]->steps)->pluck('node_id')->all())->toBe(['t', 'c', 'small']);
});

it('starts from the trigger that fired when a workflow has several', function (): void {
    $workflow = createWorkflow([
        triggerNode('created', RecordCreated::class, ['model_class' => Order::class]),
        triggerNode('updated', RecordUpdated::class, ['model_class' => Order::class]),
        actionNode('on-create', SetStatusAction::class, ['status' => 'from-create']),
        actionNode('on-update', SetStatusAction::class, ['status' => 'from-update']),
    ], [edge('created', 'on-create'), edge('updated', 'on-update')]);

    $order = createOrder();
    $order->update(['total' => 10]);

    expect(collect(SetStatusAction::$calls)->pluck('config.status')->all())->toBe(['from-create', 'from-update'])
        ->and(WorkflowRun::query()->pluck('trigger_type')->all())->toBe([RecordCreated::class, RecordUpdated::class]);
});

it('marks the run failed when an action throws and reports the exception', function (): void {
    Event::fake([WorkflowFailed::class]);

    $run = Flow::run(manualWorkflow(['status' => 'boom']));

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toBe('Boom from the action')
        ->and($run->finished_at)->not->toBeNull();

    Event::assertDispatched(WorkflowFailed::class, fn (WorkflowFailed $event) => $event->exception->getMessage() === 'Boom from the action');
});

it('stops on a cycle instead of looping forever', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('a', SetStatusAction::class, ['status' => 'a']),
        actionNode('b', SetStatusAction::class, ['status' => 'b']),
    ], [edge('t', 'a'), edge('a', 'b'), edge('b', 'a')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('Cycle detected')
        ->and(SetStatusAction::$calls)->toHaveCount(2);
});

it('enforces the maximum number of steps', function (): void {
    config()->set('packstub-flow.max_steps', 2);

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('a', SetStatusAction::class, ['status' => 'a']),
        actionNode('b', SetStatusAction::class, ['status' => 'b']),
    ], [edge('t', 'a'), edge('a', 'b')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('maximum number of steps');
});

it('fails clearly when a node references an unregistered class', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('a', 'App\\Nope\\Missing', []),
    ], [edge('t', 'a')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('is not registered');
});

it('does not run inactive workflows', function (): void {
    $workflow = manualWorkflow(attributes: ['is_active' => false]);

    expect(Flow::run($workflow))->toBeNull()
        ->and(SetStatusAction::$calls)->toBe([]);
});

it('fans out to every node connected to the same output', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('a', SetStatusAction::class, ['status' => 'a']),
        actionNode('b', SetStatusAction::class, ['status' => 'b']),
    ], [edge('t', 'a'), edge('t', 'b')]);

    Flow::run($workflow);

    expect(collect(SetStatusAction::$calls)->pluck('config.status')->all())->toBe(['a', 'b']);
});
