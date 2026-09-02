<?php

use Illuminate\Support\Carbon;
use Packstub\Flow\Nodes\Conditions\CompareValues;
use Packstub\Flow\Nodes\Conditions\RecordAttribute;
use Packstub\Flow\Nodes\Conditions\TimeOfDay;

it('compares record attributes with every operator', function (string $operator, string $value, bool $expected): void {
    $order = createOrder(['status' => 'paid', 'total' => 150]);
    $attribute = in_array($operator, ['>', '>=', '<', '<='], true) ? 'total' : 'status';

    expect((new RecordAttribute)->evaluate(['attribute' => $attribute, 'operator' => $operator, 'value' => $value], ['model' => $order]))->toBe($expected);
})->with([
    ['=', 'paid', true],
    ['=', 'PAID', false],
    ['!=', 'paid', false],
    ['>', '100', true],
    ['>=', '150', true],
    ['<', '100', false],
    ['<=', '150', true],
    ['contains', 'AI', true],
    ['not_contains', 'zzz', true],
    ['starts_with', 'pa', true],
    ['ends_with', 'id', true],
    ['in', 'draft, paid', true],
    ['in', 'draft', false],
    ['empty', '', false],
    ['not_empty', '', true],
]);

it('reads attributes through relationships and placeholders in the value', function (): void {
    $user = createUser(['name' => 'Jane']);
    $order = createOrder(['user_id' => $user->id, 'reference' => 'Jane']);

    expect((new RecordAttribute)->evaluate(['attribute' => 'user.name', 'operator' => '=', 'value' => '{{ model.reference }}'], ['model' => $order]))->toBeTrue()
        ->and((new RecordAttribute)->evaluate(['attribute' => 'status', 'operator' => '='], []))->toBeFalse();
});

it('compares arbitrary values keeping the raw type of a bare placeholder', function (): void {
    $condition = new CompareValues;

    expect($condition->evaluate(['left' => '{{ webhook.total }}', 'operator' => '>', 'value' => '99.5'], ['webhook' => ['total' => 100]]))->toBeTrue()
        ->and($condition->evaluate(['left' => '{{ webhook.flag }}', 'operator' => 'truthy'], ['webhook' => ['flag' => false]]))->toBeFalse()
        ->and($condition->evaluate(['left' => '{{ webhook.flag }}', 'operator' => 'falsy'], ['webhook' => ['flag' => 'no']]))->toBeTrue()
        ->and($condition->evaluate(['left' => 'Order {{ webhook.id }}', 'operator' => '=', 'value' => 'Order 7'], ['webhook' => ['id' => 7]]))->toBeTrue()
        ->and($condition->evaluate(['left' => '{{ webhook.tags }}', 'operator' => 'contains', 'value' => 'vip'], ['webhook' => ['tags' => ['vip', 'new']]]))->toBeTrue()
        ->and($condition->evaluate(['left' => '{{ webhook.missing }}', 'operator' => 'empty'], ['webhook' => []]))->toBeTrue()
        ->and($condition->evaluate(['left' => 'x', 'operator' => 'unknown', 'value' => 'x'], []))->toBeFalse();
});

it('checks the time of day including windows across midnight', function (): void {
    $condition = new TimeOfDay;
    $window = ['start_time' => '09:00', 'end_time' => '17:00', 'timezone' => 'UTC'];

    Carbon::setTestNow('2026-01-01 10:00:00');
    expect($condition->evaluate($window, []))->toBeTrue();

    Carbon::setTestNow('2026-01-01 20:00:00');
    expect($condition->evaluate($window, []))->toBeFalse();

    Carbon::setTestNow('2026-01-01 23:30:00');
    expect($condition->evaluate(['start_time' => '22:00', 'end_time' => '05:00', 'timezone' => 'UTC'], []))->toBeTrue();

    Carbon::setTestNow('2026-01-01 12:00:00');
    expect($condition->evaluate(['start_time' => '22:00', 'end_time' => '05:00', 'timezone' => 'UTC'], []))->toBeFalse();

    Carbon::setTestNow();
});
