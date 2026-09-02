<?php

use Packstub\Flow\Facades\Flow;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Conditions\TimeOfDay;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\Schedule;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('registers the built-in nodes from config and the plugin', function (): void {
    $registry = app(NodeRegistry::class);

    expect($registry->triggers())->toContain(Manual::class, Schedule::class)
        ->and($registry->actions())->toContain(SendEmail::class, SetStatusAction::class)
        ->and($registry->conditions())->toContain(TimeOfDay::class)
        ->and($registry->has(SetStatusAction::class))->toBeTrue()
        ->and($registry->action(SetStatusAction::class))->toBeInstanceOf(SetStatusAction::class)
        ->and($registry->trigger(SetStatusAction::class))->toBeNull();
});

it('never instantiates classes that are not registered', function (): void {
    $registry = app(NodeRegistry::class);

    expect($registry->node(stdClass::class))->toBeNull()
        ->and($registry->node('Nope\\Missing'))->toBeNull()
        ->and($registry->has(stdClass::class))->toBeFalse();
});

it('describes nodes for the builder sidebar', function (): void {
    $described = Flow::registry()->toArray();

    expect($described)->toHaveKeys(['triggers', 'actions', 'conditions'])
        ->and(collect($described['triggers'])->pluck('identifier'))->toContain(Manual::class)
        ->and(collect($described['actions'])->firstWhere('identifier', SendEmail::class))
        ->toMatchArray(['type' => 'action', 'name' => 'Send email'])
        ->and(collect($described['actions'])->firstWhere('identifier', SendEmail::class)['icon'])->toContain('<svg');
});

it('can forget nodes and rejects unknown classes', function (): void {
    $registry = (new NodeRegistry)->registerActions([SendEmail::class])->forget([SendEmail::class]);

    expect($registry->actions())->toBe([]);

    expect(fn () => $registry->register(stdClass::class))->toThrow(InvalidArgumentException::class);
});
