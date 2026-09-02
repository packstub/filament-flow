<?php

use Packstub\Flow\Filament\Forms\Components\FlowBuilder;
use Packstub\Flow\Nodes\Triggers\Manual;

it('normalizes the canvas state down to what the runner needs', function (): void {
    $state = [
        'nodes' => [
            ['id' => 'n1', 'type' => 'trigger', 'position' => ['x' => '10.5', 'y' => 20], 'selected' => true, 'measured' => ['width' => 1], 'data' => ['identifier' => Manual::class, 'label' => 'Start', 'config' => ['a' => 1], 'extra' => 'drop']],
            ['id' => 'n2'],
            'garbage',
        ],
        'edges' => [
            ['id' => 'e1', 'source' => 'n1', 'target' => 'n2', 'sourceHandle' => 'output', 'selected' => true],
            ['id' => 'e2', 'source' => 'n1'],
        ],
    ];

    expect(FlowBuilder::normalizeState($state))->toBe([
        'nodes' => [
            ['id' => 'n1', 'type' => 'trigger', 'position' => ['x' => 10.5, 'y' => 20.0], 'data' => ['identifier' => Manual::class, 'label' => 'Start', 'description' => null, 'config' => ['a' => 1]]],
        ],
        'edges' => [
            ['id' => 'e1', 'source' => 'n1', 'sourceHandle' => 'output', 'target' => 'n2'],
        ],
    ]);

    expect(FlowBuilder::normalizeState(null))->toBe(['nodes' => [], 'edges' => []]);
});

it('exposes the registered nodes and translations to the canvas', function (): void {
    $field = FlowBuilder::make('definition');

    expect($field->getAvailableNodes())->toHaveKeys(['triggers', 'actions', 'conditions'])
        ->and($field->getTranslations())->toHaveKey('add_node')
        ->and($field->getMinHeight())->toBe('600px')
        ->and($field->minHeight('70vh')->getMinHeight())->toBe('70vh');
});
