<?php

namespace Packstub\Flow\Support;

use Illuminate\Support\Str;
use Packstub\Flow\NodeRegistry;

/**
 * A definition laid out for a static picture of it (the template cards and
 * their preview): every node where it sits on the canvas, coloured by kind,
 * and every edge as a curve from its output to the next node, with the
 * branch it follows. Geometry only; the Blade view draws it as an SVG.
 */
class DefinitionPreview
{
    public const NODE_WIDTH = 220;

    public const NODE_HEIGHT = 64;

    public const PADDING = 24;

    /** The tinted header of a node, with its kind. */
    public const BAND = 24;

    /** The room each output takes on a node with several, so their labels do not touch. */
    public const OUTPUT_HEIGHT = 22;

    /** Outputs that are the plain way on and need no label on their edge. */
    protected const UNLABELLED = ['output', 'next', 'default', 'out', 'source'];

    /**
     * @param  array<string, mixed>|null  $definition
     * @param  array<int, string>  $marked  Node ids drawn with a badge, like the canvas marks a node still to fill in.
     * @return array{width: float, height: float, nodes: array<int, array{id: string, x: float, y: float, height: float, label: string, theme: string, kind: string, marked: bool}>, edges: array<int, array{path: string, label: ?string, x: float, y: float}>}
     */
    public static function make(?array $definition, ?NodeRegistry $registry = null, array $marked = []): array
    {
        $registry ??= app(NodeRegistry::class);
        $nodes = array_values(array_filter((array) ($definition['nodes'] ?? []), fn ($node): bool => is_array($node) && isset($node['id'])));
        $edges = array_values(array_filter((array) ($definition['edges'] ?? []), fn ($edge): bool => is_array($edge) && isset($edge['source'], $edge['target'])));

        if ($nodes === []) {
            return ['width' => 0, 'height' => 0, 'nodes' => [], 'edges' => []];
        }

        $xs = array_map(fn (array $node): float => (float) ($node['position']['x'] ?? 0), $nodes);
        $ys = array_map(fn (array $node): float => (float) ($node['position']['y'] ?? 0), $nodes);
        $left = min($xs) - self::PADDING;
        $top = min($ys) - self::PADDING;

        // A node's outputs share its right edge, spread in the order they are first used.
        $outputs = [];

        foreach ($edges as $edge) {
            $handle = (string) ($edge['sourceHandle'] ?? '');
            $outputs[$edge['source']] ??= [];

            if (! in_array($handle, $outputs[$edge['source']], true)) {
                $outputs[$edge['source']][] = $handle;
            }
        }

        $placed = [];

        foreach ($nodes as $node) {
            $identifier = $node['data']['identifier'] ?? null;
            $registered = is_string($identifier) ? $registry->node($identifier) : null;
            $theme = $registered === null
                ? (in_array($node['type'] ?? null, ['trigger', 'condition', 'action'], true) ? $node['type'] : 'default')
                : ($registered->getCategory() === 'ai' ? 'ai' : $registered->getType()->value);

            $placed[(string) $node['id']] = [
                'id' => (string) $node['id'],
                'x' => (float) ($node['position']['x'] ?? 0) - $left,
                'y' => (float) ($node['position']['y'] ?? 0) - $top,
                'height' => static::height(count($outputs[(string) $node['id']] ?? [])),
                'label' => Str::limit((string) ($node['data']['label'] ?? $registered?->getName() ?? ''), 26),
                'theme' => $theme,
                'kind' => __('packstub-flow::flow.preview.'.$theme),
                'marked' => in_array((string) $node['id'], $marked, true),
            ];
        }

        $drawn = [];

        foreach ($edges as $edge) {
            $source = $placed[$edge['source']] ?? null;
            $target = $placed[$edge['target']] ?? null;

            if ($source === null || $target === null) {
                continue;
            }

            $handle = (string) ($edge['sourceHandle'] ?? '');
            $slots = $outputs[$edge['source']];
            $sx = $source['x'] + self::NODE_WIDTH;
            // Below the header band, like the handles on the canvas.
            $sy = $source['y'] + self::BAND + ($source['height'] - self::BAND) * (array_search($handle, $slots, true) + 1) / (count($slots) + 1);
            $tx = $target['x'];
            $ty = $target['y'] + $target['height'] / 2;
            $bend = max(40, abs($tx - $sx) / 2);

            $drawn[] = [
                'path' => sprintf('M %.1f %.1f C %.1f %.1f, %.1f %.1f, %.1f %.1f', $sx, $sy, $sx + $bend, $sy, $tx - $bend, $ty, $tx, $ty),
                'label' => $handle === '' || in_array($handle, self::UNLABELLED, true) ? null : Str::headline($handle),
                'x' => $sx + 10,
                'y' => $sy - 6,
            ];
        }

        return [
            'width' => max(array_map(fn (array $node): float => $node['x'], $placed)) + self::NODE_WIDTH + self::PADDING,
            'height' => max(array_map(fn (array $node): float => $node['y'] + $node['height'], $placed)) + self::PADDING,
            'nodes' => array_values($placed),
            'edges' => $drawn,
        ];
    }

    /** A node grows with its outputs, as on the canvas. */
    protected static function height(int $outputs): float
    {
        return (float) max(self::NODE_HEIGHT, self::BAND + 8 + $outputs * self::OUTPUT_HEIGHT);
    }
}
