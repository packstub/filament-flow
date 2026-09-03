<?php

use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Actions\TransitionState;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\StateTransitioned;
use Packstub\Flow\Nodes\Triggers\StatusChanged;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;
use Packstub\Flow\Tests\Fixtures\States\Paid;
use Packstub\Flow\Tests\Fixtures\States\Pending;
use Packstub\Flow\Tests\Fixtures\States\Shipped;
use Packstub\Flow\Tests\Fixtures\Ticket;

it('registers the spatie triggers only when the packages are installed', function (): void {
    $registry = app(NodeRegistry::class);

    expect(StateTransitioned::isAvailable())->toBeTrue()
        ->and($registry->has(StateTransitioned::class))->toBeTrue()
        ->and($registry->has(StatusChanged::class))->toBeTrue()
        ->and($registry->has(TransitionState::class))->toBeTrue();
});

it('starts a workflow when a model state transitions to the configured state', function (): void {
    createWorkflow(
        [triggerNode('t', StateTransitioned::class, ['model_class' => Order::class, 'to' => 'paid']), actionNode('a', EchoAction::class, ['template' => '{{ from }} -> {{ to }} on {{ field }}'])],
        [edge('t', 'a')],
    );

    $order = createOrder();

    expect($order->state)->toBeInstanceOf(Pending::class);

    $order->state->transitionTo(Paid::class);

    expect(WorkflowRun::query()->count())->toBe(1)
        ->and(EchoAction::$last)->toBe('pending -> paid on state');

    // Shipped is not "paid": no second run.
    $order->state->transitionTo(Shipped::class);

    expect(WorkflowRun::query()->count())->toBe(1);
});

it('matches states by class name too and filters on "from"', function (): void {
    expect(StateTransitioned::stateIs(new Paid(new Order), Paid::class))->toBeTrue()
        ->and(StateTransitioned::stateIs(new Paid(new Order), 'Paid'))->toBeTrue()
        ->and(StateTransitioned::stateIs(new Paid(new Order), 'pending'))->toBeFalse()
        ->and(StateTransitioned::stateIs(null, ''))->toBeTrue()
        ->and(StateTransitioned::stateIs(null, 'paid'))->toBeFalse();

    $trigger = new StateTransitioned;
    $order = createOrder();
    $payload = ['model' => $order, 'field' => 'state', 'from_state' => new Pending($order), 'to_state' => new Paid($order)];

    expect($trigger->matches(['model_class' => Order::class, 'from' => 'pending'], $payload))->toBeTrue()
        ->and($trigger->matches(['model_class' => Order::class, 'from' => 'paid'], $payload))->toBeFalse()
        ->and($trigger->matches(['model_class' => Order::class, 'field' => 'other'], $payload))->toBeFalse()
        ->and($trigger->matches(['model_class' => Ticket::class], $payload))->toBeFalse();
});

it('transitions a state from an action and fails on a forbidden transition', function (): void {
    $workflow = createWorkflow(
        [triggerNode('t', Manual::class), actionNode('a', TransitionState::class, ['field' => 'state', 'to' => '{{ target }}'])],
        [edge('t', 'a')],
    );

    $order = createOrder();
    $run = Flow::run($workflow, ['model' => $order, 'target' => 'paid']);

    expect($run->status)->toBe(RunStatus::Success)
        ->and($order->fresh()->state)->toBeInstanceOf(Paid::class)
        ->and(collect($run->steps)->firstWhere('node_id', 'a')['output'])->toBe(['from' => 'pending', 'to' => 'paid']);

    $run = Flow::run($workflow, ['model' => $order->fresh(), 'target' => 'pending']);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('Cannot transition [state] from [paid] to [pending]');

    expect(Flow::run($workflow, ['target' => 'paid'])->error)->toContain('needs a record');
});

it('starts a workflow when a spatie model-status status is set', function (): void {
    createWorkflow(
        [triggerNode('t', StatusChanged::class, ['model_class' => Ticket::class, 'to' => 'approved']), actionNode('a', EchoAction::class, ['template' => '{{ from }}>{{ to }}:{{ reason }}'])],
        [edge('t', 'a')],
    );

    $ticket = Ticket::query()->create(['title' => 'Refund']);
    $ticket->setStatus('open');

    expect(WorkflowRun::query()->count())->toBe(0);

    $ticket->setStatus('approved', 'Looks fine');

    expect(WorkflowRun::query()->count())->toBe(1)
        ->and(EchoAction::$last)->toBe('open>approved:Looks fine')
        ->and(SetStatusAction::$calls)->toBe([]);
});
