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
    config()->set('packstub-flow.navigation.icon', 'heroicon-o-test-icon');

    $plugin = FlowPlugin::get();

    expect($plugin)->toBeInstanceOf(FlowPlugin::class)
        ->and($plugin->getId())->toBe('packstub-flow')
        ->and($plugin->getNavigationGroup())->toBe('Automation')
        ->and($plugin->getNavigationIcon())->toBe('heroicon-o-test-icon');
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
    config()->set('packstub-flow.navigation.icon', 'heroicon-o-test-icon');

    expect(FlowPlugin::make()->getNavigationGroup())->toBe('Ops')
        ->and(FlowPlugin::make()->getNavigationIcon())->toBe('heroicon-o-test-icon')
        ->and(FlowPlugin::make()->navigationIcon('heroicon-o-custom')->getNavigationIcon())->toBe('heroicon-o-custom')
        ->and(FlowPlugin::make()->navigationGroup('Custom')->navigationSort(3)->getNavigationSort())->toBe(3);
});
