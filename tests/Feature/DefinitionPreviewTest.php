<?php

use Packstub\Flow\Nodes\Actions\AskAi;
use Packstub\Flow\Nodes\Actions\WriteLog;
use Packstub\Flow\Nodes\Conditions\CompareValues;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Support\DefinitionPreview;

function placed(array $node, float $x, float $y, string $label): array
{
    $node['position'] = ['x' => $x, 'y' => $y];
    $node['data']['label'] = $label;

    return $node;
}

it('lays a definition out where its nodes sit, coloured by kind, with the branches on the edges', function (): void {
    $preview = DefinitionPreview::make([
        'nodes' => [
            placed(triggerNode('t', Manual::class), -100, 50, 'Started by hand'),
            placed(conditionNode('c', CompareValues::class), 200, 50, 'Big enough?'),
            placed(actionNode('yes', AskAi::class), 500, 0, 'Ask a model about something rather long'),
            placed(actionNode('no', WriteLog::class), 500, 150, 'Log it'),
        ],
        'edges' => [edge('t', 'c'), edge('c', 'yes', 'true'), edge('c', 'no', 'false'), edge('c', 'ghost', 'true')],
    ]);

    $nodes = collect($preview['nodes'])->keyBy('id');

    // Shifted so the leftmost and topmost nodes sit one padding in; the picture ends one padding past the last node.
    expect($nodes['t']['x'])->toEqual(DefinitionPreview::PADDING)
        ->and($nodes['yes']['y'])->toEqual(DefinitionPreview::PADDING)
        ->and($preview['width'])->toEqual(600 + DefinitionPreview::NODE_WIDTH + 2 * DefinitionPreview::PADDING)
        ->and($preview['height'])->toEqual(150 + DefinitionPreview::NODE_HEIGHT + 2 * DefinitionPreview::PADDING);

    expect($nodes->map(fn (array $node): string => $node['theme'])->all())->toBe(['t' => 'trigger', 'c' => 'condition', 'yes' => 'ai', 'no' => 'action'])
        ->and($nodes['c']['kind'])->toBe('Condition')
        ->and($nodes['yes']['label'])->toBe('Ask a model about somethin...');

    // An edge to a node that is not there is left out; a plain edge has no label, a branch its name.
    expect($preview['edges'])->toHaveCount(3)
        ->and(array_column($preview['edges'], 'label'))->toBe([null, 'True', 'False']);

    // The condition grows with its two outputs, which share its right edge below the header, a third and two thirds of the way down.
    $slot = fn (int $index): float => (float) explode(' ', $preview['edges'][$index]['path'])[2];
    $body = $nodes['c']['height'] - DefinitionPreview::BAND;

    expect($nodes['c']['height'])->toBeGreaterThan(DefinitionPreview::NODE_HEIGHT)
        ->and($nodes['t']['height'])->toEqual(DefinitionPreview::NODE_HEIGHT)
        ->and($slot(1))->toEqualWithDelta($nodes['c']['y'] + DefinitionPreview::BAND + $body / 3, 0.1)
        ->and($slot(2))->toEqualWithDelta($nodes['c']['y'] + DefinitionPreview::BAND + $body * 2 / 3, 0.1);

    expect(DefinitionPreview::make(['nodes' => [], 'edges' => []]))->toBe(['width' => 0, 'height' => 0, 'nodes' => [], 'edges' => []])
        ->and(DefinitionPreview::make(null)['nodes'])->toBe([]);
});

it('draws the diagram as an SVG, without the text for a thumbnail', function (): void {
    $preview = DefinitionPreview::make([
        'nodes' => [placed(triggerNode('t', Manual::class), 0, 0, 'Started <by> hand'), placed(conditionNode('c', CompareValues::class), 300, 0, 'Check')],
        'edges' => [edge('t', 'c'), edge('c', 't', 'false')],
    ]);

    $full = view('packstub-flow::components.definition-preview', ['preview' => $preview, 'class' => 'w-full'])->render();
    $compact = view('packstub-flow::components.definition-preview', ['preview' => $preview, 'compact' => true])->render();

    expect($full)->toContain('<svg', 'viewBox="0 0 '.$preview['width'].' '.$preview['height'].'"', 'class="w-full"', 'Started &lt;by&gt; hand', '>Trigger<', '>False<', 'aria-label="Diagram of the workflow, 2 steps"')
        ->and(substr_count($full, ' C '))->toBe(2)
        ->and($compact)->toContain('<svg')->not->toContain('Started', '>False<')
        ->and(view('packstub-flow::components.definition-preview', ['preview' => DefinitionPreview::make(null)])->render())->not->toContain('<svg');
});
