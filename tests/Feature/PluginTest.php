<?php

use Filament\Facades\Filament;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Actions\WriteLog;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Support\ModelFinder;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;
use Packstub\Flow\Tests\Fixtures\User;

it('exposes the plugin through the panel', function (): void {
    $plugin = FlowPlugin::get();

    expect($plugin)->toBeInstanceOf(FlowPlugin::class)
        ->and($plugin->getId())->toBe('packstub-flow')
        ->and($plugin->getNavigationGroup())->toBe('Automation')
        ->and($plugin->getNavigationIcon())->toBe('heroicon-o-bolt');
});

it('registers and removes nodes through the fluent API', function (): void {
    $registry = app(NodeRegistry::class);
    $panel = Filament::getPanel('admin');

    FlowPlugin::make()->without([WriteLog::class])->models([User::class])->register($panel);

    expect($registry->has(WriteLog::class))->toBeFalse()
        ->and($registry->has(SetStatusAction::class))->toBeTrue()
        ->and($registry->has(Manual::class))->toBeTrue()
        ->and(ModelFinder::options())->toMatchArray([Order::class => 'Order', User::class => 'User']);
});

it('reads navigation defaults from the config', function (): void {
    config()->set('packstub-flow.navigation.group', 'Ops');

    expect(FlowPlugin::make()->getNavigationGroup())->toBe('Ops')
        ->and(FlowPlugin::make()->navigationGroup('Custom')->navigationSort(3)->getNavigationSort())->toBe(3);
});
