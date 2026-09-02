<?php

use Packstub\Flow\Support\Placeholders;

it('fills placeholders from models, relations and arrays', function (): void {
    $user = createUser(['name' => 'Jane Doe']);
    $order = createOrder(['user_id' => $user->id, 'total' => 42.5, 'status' => 'paid']);

    $payload = ['model' => $order, 'webhook' => ['order' => ['id' => 'w-1']]];

    expect(Placeholders::render('Order {{ model.reference }} by {{ model.user.name }} = {{model.total}}', $payload))
        ->toBe("Order {$order->reference} by Jane Doe = 42.5")
        ->and(Placeholders::render('{{ webhook.order.id }} / {{ record.status }}', $payload))
        ->toBe('w-1 / paid')
        ->and(Placeholders::render('{{ missing.path }}!', $payload))
        ->toBe('!')
        ->and(Placeholders::render('no placeholders', $payload))
        ->toBe('no placeholders');
});

it('renders nested arrays and keeps non-string values', function (): void {
    $order = createOrder();

    $rendered = Placeholders::renderArray([
        'headers' => ['X-Ref' => '{{ model.reference }}'],
        'count' => 3,
        'flag' => true,
    ], ['model' => $order]);

    expect($rendered)->toBe(['headers' => ['X-Ref' => $order->reference], 'count' => 3, 'flag' => true]);
});

it('stringifies models, booleans, dates and arrays', function (): void {
    $order = createOrder();

    expect(Placeholders::stringify($order))->toBe((string) $order->id)
        ->and(Placeholders::stringify(true))->toBe('1')
        ->and(Placeholders::stringify(null))->toBe('')
        ->and(Placeholders::stringify(['a' => 1]))->toBe('{"a":1}')
        ->and(Placeholders::stringify(new DateTimeImmutable('2026-01-02T03:04:05+00:00')))->toBe('2026-01-02T03:04:05+00:00');
});

it('resolves a bare path to its raw value', function (): void {
    expect(Placeholders::resolve('event.total', ['event' => ['total' => 12.5]]))->toBe(12.5)
        ->and(Placeholders::hasPlaceholders('{{ a.b }}'))->toBeTrue()
        ->and(Placeholders::hasPlaceholders('plain'))->toBeFalse();
});
