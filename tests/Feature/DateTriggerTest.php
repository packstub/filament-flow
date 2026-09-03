<?php

use Illuminate\Support\Carbon;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Triggers\DateReached;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\Order;

it('computes the minute window for before / at / after', function (): void {
    $now = Carbon::parse('2026-09-02 10:00:30');

    [$from, $to] = DateReached::window(['amount' => 3, 'unit' => 'days', 'direction' => 'before'], $now);
    expect($from->toDateTimeString())->toBe('2026-09-05 10:00:00')->and($to->toDateTimeString())->toBe('2026-09-05 10:00:59');

    [$from] = DateReached::window(['amount' => 2, 'unit' => 'hours', 'direction' => 'after'], $now);
    expect($from->toDateTimeString())->toBe('2026-09-02 08:00:00');

    [$from] = DateReached::window(['direction' => 'at'], $now);
    expect($from->toDateTimeString())->toBe('2026-09-02 10:00:00');
});

it('starts a run for each record whose date is reached, once per record', function (): void {
    Carbon::setTestNow('2026-09-02 09:00:20');

    createWorkflow(
        [triggerNode('t', DateReached::class, ['model_class' => Order::class, 'attribute' => 'due_at', 'amount' => 1, 'unit' => 'days', 'direction' => 'before']), actionNode('a', EchoAction::class, ['template' => '{{ model.reference }} due {{ date | date:Y-m-d }}'])],
        [edge('t', 'a')],
    );

    $due = createOrder(['due_at' => '2026-09-03 09:00:10']);
    createOrder(['due_at' => '2026-09-03 09:01:00']);
    createOrder(['due_at' => null]);

    $this->artisan('packstub-flow:cron')->assertSuccessful();

    expect(WorkflowRun::query()->count())->toBe(1)
        ->and(EchoAction::$last)->toBe('ORD-0001 due 2026-09-03')
        ->and(WorkflowRun::query()->sole()->subject_id)->toBe((string) $due->id);

    // The same minute again (a manual re-run of the command): no duplicate.
    $this->artisan('packstub-flow:cron')->assertSuccessful();
    expect(WorkflowRun::query()->count())->toBe(1);

    // Next minute: the second order.
    Carbon::setTestNow('2026-09-02 09:01:05');
    expect(Flow::poll(now()))->toHaveCount(1)
        ->and(WorkflowRun::query()->count())->toBe(2);

    Carbon::setTestNow();
});

it('is never started by a plain dispatch', function (): void {
    expect((new DateReached)->matches(['model_class' => Order::class], ['model' => createOrder()]))->toBeFalse()
        ->and(iterator_to_array((new DateReached)->poll(['model_class' => 'Nope', 'attribute' => 'due_at'], now())))->toBe([]);
});
