<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Packstub\Flow\Listeners\DispatchEventTriggers;
use Packstub\Flow\Nodes\Triggers\EventFired;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Tests\Fixtures\OrderShipped;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('starts a workflow when the configured event is dispatched', function (): void {
    createWorkflow([
        triggerNode('t', EventFired::class, ['event_class' => OrderShipped::class]),
        actionNode('a', SetStatusAction::class, ['status' => 'shipped by {{ event.carrier }}']),
    ], [edge('t', 'a')]);

    $order = createOrder();

    event(new OrderShipped($order, 'UPS'));

    expect(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload']['event'])->toBeInstanceOf(OrderShipped::class)
        ->and(SetStatusAction::$calls[0]['payload']['event']->carrier)->toBe('UPS')
        ->and(Placeholders::render('shipped by {{ event.carrier }}', SetStatusAction::$calls[0]['payload']))->toBe('shipped by UPS');
});

it('ignores events that no workflow watches', function (): void {
    createWorkflow([
        triggerNode('t', EventFired::class, ['event_class' => OrderShipped::class]),
        actionNode('a', SetStatusAction::class, ['status' => 'x']),
    ], [edge('t', 'a')]);

    event(new stdClass);
    event('a.string.event', ['payload']);

    expect(SetStatusAction::$calls)->toBe([]);
});

it('fires for subclasses of the configured event', function (): void {
    createWorkflow([
        triggerNode('t', EventFired::class, ['event_class' => OrderShipped::class]),
        actionNode('a', SetStatusAction::class, ['status' => 'x']),
    ], [edge('t', 'a')]);

    event(new class(createOrder()) extends OrderShipped {});

    expect(SetStatusAction::$calls)->toHaveCount(1);
});

it('matches subclasses and tolerates a leading backslash', function (): void {
    $trigger = new EventFired;
    $event = new OrderShipped(createOrder());

    expect($trigger->matches(['event_class' => '\\'.OrderShipped::class], ['event' => $event]))->toBeTrue()
        ->and($trigger->matches(['event_class' => stdClass::class], ['event' => $event]))->toBeFalse()
        ->and($trigger->matches([], ['event' => $event]))->toBeFalse();
});

it('does not query the trigger table before it exists', function (): void {
    // a failed query would abort the surrounding transaction on PostgreSQL (a migration's)
    Schema::drop(config('packstub-flow.tables.triggers', 'flow_workflow_triggers'));
    DispatchEventTriggers::flush();
    $selects = [];
    DB::connection()->beforeExecuting(function (string $sql) use (&$selects): void {
        if (str_starts_with($sql, 'select * from')) {
            $selects[] = $sql;
        }
    });

    event(new stdClass);

    expect($selects)->toBe([]);
});
