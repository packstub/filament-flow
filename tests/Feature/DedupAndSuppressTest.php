<?php

use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Triggers\RecordCreated;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('does not run more than once per record inside the dedup window', function (): void {
    createWorkflow(
        [triggerNode('t', RecordUpdated::class, ['model_class' => Order::class, 'dedup_days' => 7]), actionNode('a', SetStatusAction::class, ['status' => 'reminded'])],
        [edge('t', 'a')],
    );

    $order = createOrder();
    $other = createOrder();

    $order->update(['total' => 1]);
    $order->update(['total' => 2]);
    $other->update(['total' => 3]);

    expect(WorkflowRun::query()->count())->toBe(2);

    $this->travel(8)->days();
    $order->update(['total' => 4]);

    expect(WorkflowRun::query()->count())->toBe(3);
});

it('fires "record updated" only for the configured from / to values', function (): void {
    createWorkflow(
        [triggerNode('t', RecordUpdated::class, ['model_class' => Order::class, 'watch' => ['status'], 'from' => 'pending', 'to' => 'paid']), actionNode('a', SetStatusAction::class, ['status' => 'seen'])],
        [edge('t', 'a')],
    );

    $order = createOrder();
    $order->update(['status' => 'review']);
    expect(WorkflowRun::query()->count())->toBe(0);

    $order->update(['status' => 'paid']);
    expect(WorkflowRun::query()->count())->toBe(0);

    createOrder()->update(['status' => 'paid']);
    expect(WorkflowRun::query()->count())->toBe(1);

    createOrder()->update(['status' => 'PAID', 'total' => 5]);
    expect(WorkflowRun::query()->count())->toBe(2);
});

it('suppresses triggers inside Flow::suppress()', function (): void {
    $workflow = createWorkflow(
        [triggerNode('t', RecordCreated::class, ['model_class' => Order::class]), actionNode('a', SetStatusAction::class, ['status' => 'welcomed'])],
        [edge('t', 'a')],
    );

    $order = Flow::suppress(function () use ($workflow): Order {
        $order = createOrder();

        // Explicit runs still work.
        Flow::run($workflow, ['model' => $order]);

        expect(Flow::isSuppressed())->toBeTrue();

        return $order;
    });

    expect(Flow::isSuppressed())->toBeFalse()
        ->and(WorkflowRun::query()->count())->toBe(1)
        ->and($order->fresh()->status)->toBe('welcomed');

    createOrder();

    expect(WorkflowRun::query()->count())->toBe(2);
});
