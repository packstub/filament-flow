<?php

use Packstub\Flow\Support\PayloadSerializer;
use Packstub\Flow\Tests\Fixtures\Order;

it('round-trips models through a queue-safe array', function (): void {
    $order = createOrder(['status' => 'paid']);

    $serialized = PayloadSerializer::serialize(['model' => $order, 'nested' => ['again' => $order], 'plain' => 'x']);

    expect($serialized['model'])->toHaveKeys(['__flow_model', 'key', 'attributes'])
        ->and(json_encode($serialized))->toBeString();

    $restored = PayloadSerializer::unserialize($serialized);

    expect($restored['model'])->toBeInstanceOf(Order::class)
        ->and($restored['model']->is($order))->toBeTrue()
        ->and($restored['nested']['again']->is($order))->toBeTrue()
        ->and($restored['plain'])->toBe('x');
});

it('rebuilds a deleted record from its attributes', function (): void {
    $order = createOrder(['reference' => 'GONE-1']);
    $serialized = PayloadSerializer::serialize(['model' => $order]);
    $order->delete();

    $restored = PayloadSerializer::unserialize($serialized);

    expect($restored['model'])->toBeInstanceOf(Order::class)
        ->and($restored['model']->exists)->toBeFalse()
        ->and($restored['model']->reference)->toBe('GONE-1');
});

it('summarizes a payload for the run context', function (): void {
    $order = createOrder();

    expect(PayloadSerializer::summarize(['model' => $order, 'event' => new stdClass, 'n' => 1]))
        ->toBe(['model' => ['type' => Order::class, 'key' => $order->id], 'event' => ['type' => 'stdClass'], 'n' => 1]);
});
