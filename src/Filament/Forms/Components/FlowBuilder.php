<?php

namespace Packstub\Flow\Filament\Forms\Components;

use Filament\Forms\Components\Field;
use Packstub\Flow\NodeRegistry;

/**
 * The canvas. State is {nodes: [...], edges: [...]} in the shape used by
 * Svelte Flow; the runner reads the same structure.
 */
class FlowBuilder extends Field
{
    protected string $view = 'packstub-flow::forms.components.flow-builder';

    protected int|string $minHeight = 600;

    protected function setUp(): void
    {
        parent::setUp();

        $this->default(['nodes' => [], 'edges' => []]);
        $this->dehydrateStateUsing(fn (mixed $state): array => static::normalizeState($state));
        $this->columnSpanFull();
    }

    public function minHeight(int|string $height): static
    {
        $this->minHeight = $height;

        return $this;
    }

    public function getMinHeight(): string
    {
        return is_int($this->minHeight) ? "{$this->minHeight}px" : $this->minHeight;
    }

    /**
     * @return array{triggers: array<int, array<string, mixed>>, actions: array<int, array<string, mixed>>, conditions: array<int, array<string, mixed>>}
     */
    public function getAvailableNodes(): array
    {
        return app(NodeRegistry::class)->toArray();
    }

    /**
     * @return array<string, string>
     */
    public function getTranslations(): array
    {
        return (array) __('packstub-flow::flow.builder');
    }

    /**
     * @return array{nodes: array<int, array<string, mixed>>, edges: array<int, array<string, mixed>>}
     */
    public static function normalizeState(mixed $state): array
    {
        $state = is_array($state) ? $state : [];

        $nodes = array_values(array_filter(
            (array) ($state['nodes'] ?? []),
            fn ($node): bool => is_array($node) && isset($node['id'], $node['type']),
        ));

        $edges = array_values(array_filter(
            (array) ($state['edges'] ?? []),
            fn ($edge): bool => is_array($edge) && isset($edge['id'], $edge['source'], $edge['target']),
        ));

        // Only keep what the canvas and the runner need; drop transient UI
        // state (selected, dragging, measured sizes).
        $nodes = array_map(fn (array $node): array => [
            'id' => (string) $node['id'],
            'type' => (string) $node['type'],
            'position' => [
                'x' => (float) ($node['position']['x'] ?? 0),
                'y' => (float) ($node['position']['y'] ?? 0),
            ],
            'data' => [
                'identifier' => $node['data']['identifier'] ?? null,
                'label' => $node['data']['label'] ?? null,
                'description' => $node['data']['description'] ?? null,
                'config' => is_array($node['data']['config'] ?? null) ? $node['data']['config'] : [],
            ],
        ], $nodes);

        $edges = array_map(fn (array $edge): array => array_filter([
            'id' => (string) $edge['id'],
            'source' => (string) $edge['source'],
            'sourceHandle' => isset($edge['sourceHandle']) ? (string) $edge['sourceHandle'] : null,
            'target' => (string) $edge['target'],
            'targetHandle' => isset($edge['targetHandle']) ? (string) $edge['targetHandle'] : null,
        ], fn ($value): bool => $value !== null), $edges);

        return ['nodes' => $nodes, 'edges' => $edges];
    }
}
