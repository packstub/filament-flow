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

it('applies filters to placeholder values', function (): void {
    $order = createOrder(['created_at' => '2026-09-02 08:30:00', 'total' => 1234.5]);
    $payload = ['model' => $order, 'tags' => ['a', 'b'], 'empty' => null];

    expect(Placeholders::render('{{ model.created_at | date:Y-m-d }}', $payload))->toBe('2026-09-02')
        ->and(Placeholders::render('{{ model.created_at | date:H\\:i }}', $payload))->toBe('08:30')
        ->and(Placeholders::render('{{ model.status | upper }}', $payload))->toBe('PENDING')
        ->and(Placeholders::render('{{ model.status | title }}', $payload))->toBe('Pending')
        ->and(Placeholders::render('{{ model.total | number:2 }}', $payload))->toBe('1,234.50')
        ->and(Placeholders::render('{{ empty | default:none }}', $payload))->toBe('none')
        ->and(Placeholders::render('{{ model.status | default:none }}', $payload))->toBe('pending')
        ->and(Placeholders::render('{{ tags | count }}', $payload))->toBe('2')
        ->and(Placeholders::render('{{ tags | join:-- }}', $payload))->toBe('a--b')
        ->and(Placeholders::render('{{ tags | first | upper }}', $payload))->toBe('A')
        ->and(Placeholders::render('{{ tags | json }}', $payload))->toBe('["a","b"]')
        ->and(Placeholders::render('{{ model.reference | truncate:5 }}', $payload))->toBe('ORD-0...')
        ->and(Placeholders::render('{{ model.status | unknown }}', $payload))->toBe('pending');
});

it('never exposes hidden model attributes', function (): void {
    $user = createUser();
    $order = createOrder(['user_id' => $user->id]);

    expect(Placeholders::render('[{{ model.password }}][{{ model.remember_token }}][{{ model.name }}]', ['model' => $user]))->toBe("[][][{$user->name}]")
        ->and(Placeholders::render('{{ model.user.password }}', ['model' => $order]))->toBe('')
        ->and(Placeholders::raw('{{ model.password }}', ['model' => $user]))->toBeNull();
});

it('resolves a single placeholder to its raw value', function (): void {
    expect(Placeholders::raw('{{ a.b }}', ['a' => ['b' => [1, 2]]]))->toBe([1, 2])
        ->and(Placeholders::raw(' {{ n }} ', ['n' => 5]))->toBe(5)
        ->and(Placeholders::raw('x {{ n }}', ['n' => 5]))->toBeNull()
        ->and(Placeholders::isSingle('{{ n | upper }}'))->toBeTrue();
});
