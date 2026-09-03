<?php

use Packstub\Flow\Nodes\Conditions\CompareValues;
use Packstub\Flow\Nodes\Conditions\MultipleConditions;
use Packstub\Flow\Nodes\Conditions\RecordAttribute;

it('supports null, regex and date operators', function (): void {
    $condition = new CompareValues;
    $evaluate = fn (array $config, array $payload = []): bool => $condition->evaluate($config, $payload);

    expect($evaluate(['left' => '{{ a }}', 'operator' => 'is_null'], ['a' => null]))->toBeTrue()
        ->and($evaluate(['left' => '{{ a }}', 'operator' => 'is_null'], ['a' => '']))->toBeFalse()
        ->and($evaluate(['left' => '{{ a }}', 'operator' => 'is_not_null'], ['a' => 0]))->toBeTrue()
        ->and($evaluate(['left' => '{{ ref }}', 'operator' => 'regex', 'value' => '^ORD-\d+$'], ['ref' => 'ORD-12']))->toBeTrue()
        ->and($evaluate(['left' => '{{ ref }}', 'operator' => 'regex', 'value' => '/^ord/i'], ['ref' => 'ORD-12']))->toBeTrue()
        ->and($evaluate(['left' => '{{ ref }}', 'operator' => 'regex', 'value' => '^X'], ['ref' => 'ORD-12']))->toBeFalse()
        ->and($evaluate(['left' => '{{ ref }}', 'operator' => 'regex', 'value' => '('], ['ref' => 'ORD-12']))->toBeFalse()
        ->and($evaluate(['left' => '{{ due }}', 'operator' => 'before', 'value' => 'now'], ['due' => now()->subDay()]))->toBeTrue()
        ->and($evaluate(['left' => '{{ due }}', 'operator' => 'before', 'value' => '-3 days'], ['due' => now()->subDay()->toDateString()]))->toBeFalse()
        ->and($evaluate(['left' => '{{ due }}', 'operator' => 'after', 'value' => '2020-01-01'], ['due' => '2024-05-05']))->toBeTrue()
        ->and($evaluate(['left' => '{{ due }}', 'operator' => 'after', 'value' => 'not a date'], ['due' => '2024-05-05']))->toBeFalse();
});

it('combines several rules with all / any', function (): void {
    $condition = new MultipleConditions;
    $payload = ['total' => 500, 'status' => 'paid'];

    $rules = [
        ['left' => '{{ total }}', 'operator' => '>', 'value' => '100'],
        ['left' => '{{ status }}', 'operator' => '=', 'value' => 'pending'],
    ];

    expect($condition->evaluate(['match' => 'all', 'rules' => $rules], $payload))->toBeFalse()
        ->and($condition->evaluate(['match' => 'any', 'rules' => $rules], $payload))->toBeTrue()
        ->and($condition->evaluate(['match' => 'all', 'rules' => [$rules[0]]], $payload))->toBeTrue()
        ->and($condition->evaluate(['match' => 'any', 'rules' => [$rules[1]]], $payload))->toBeFalse()
        ->and($condition->evaluate(['match' => 'all', 'rules' => []], $payload))->toBeFalse();
});

it('checks what changed on a record update', function (): void {
    $condition = new RecordAttribute;
    $order = createOrder(['status' => 'paid']);
    $payload = ['model' => $order, 'original' => ['status' => 'pending', 'total' => 100], 'changes' => ['status' => 'paid']];

    expect($condition->evaluate(['attribute' => 'status', 'operator' => 'changed'], $payload))->toBeTrue()
        ->and($condition->evaluate(['attribute' => 'total', 'operator' => 'changed'], $payload))->toBeFalse()
        ->and($condition->evaluate(['attribute' => 'status', 'operator' => 'changed_from', 'value' => 'pending'], $payload))->toBeTrue()
        ->and($condition->evaluate(['attribute' => 'status', 'operator' => 'changed_from', 'value' => 'review'], $payload))->toBeFalse()
        ->and($condition->evaluate(['attribute' => 'status', 'operator' => 'changed_to', 'value' => 'paid'], $payload))->toBeTrue()
        ->and($condition->evaluate(['attribute' => 'status', 'operator' => 'changed_to', 'value' => 'shipped'], $payload))->toBeFalse()
        ->and($condition->evaluate(['attribute' => 'status', 'operator' => 'changed'], ['model' => $order]))->toBeFalse();
});
