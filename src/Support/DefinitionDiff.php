<?php

namespace Packstub\Flow\Support;

/**
 * A human summary of what changed between two definitions: nodes added,
 * removed or changed (by label), and the edge count difference.
 */
class DefinitionDiff
{
    /**
     * @param  array{nodes?: array<int, array<string, mixed>>, edges?: array<int, array<string, mixed>>}|null  $before
     * @param  array{nodes?: array<int, array<string, mixed>>, edges?: array<int, array<string, mixed>>}|null  $after
     * @return array{added: array<int, string>, removed: array<int, string>, changed: array<int, string>, edges: int}
     */
    public static function between(?array $before, ?array $after): array
    {
        $old = self::index($before);
        $new = self::index($after);

        $added = $removed = $changed = [];

        foreach ($new as $id => $node) {
            if (! isset($old[$id])) {
                $added[] = self::label($node);
            } elseif (self::fingerprint($old[$id]) !== self::fingerprint($node)) {
                $changed[] = self::label($node);
            }
        }

        foreach ($old as $id => $node) {
            if (! isset($new[$id])) {
                $removed[] = self::label($node);
            }
        }

        return [
            'added' => $added,
            'removed' => $removed,
            'changed' => $changed,
            'edges' => count($after['edges'] ?? []) - count($before['edges'] ?? []),
        ];
    }

    /**
     * @param  array{added: array<int, string>, removed: array<int, string>, changed: array<int, string>, edges: int}  $diff
     */
    public static function summary(array $diff): string
    {
        $parts = [];

        if ($diff['added'] !== []) {
            $parts[] = __('packstub-flow::flow.versions.added', ['count' => count($diff['added']), 'nodes' => implode(', ', $diff['added'])]);
        }

        if ($diff['removed'] !== []) {
            $parts[] = __('packstub-flow::flow.versions.removed', ['count' => count($diff['removed']), 'nodes' => implode(', ', $diff['removed'])]);
        }

        if ($diff['changed'] !== []) {
            $parts[] = __('packstub-flow::flow.versions.changed', ['count' => count($diff['changed']), 'nodes' => implode(', ', $diff['changed'])]);
        }

        if ($diff['edges'] !== 0) {
            $parts[] = __('packstub-flow::flow.versions.edges', ['delta' => ($diff['edges'] > 0 ? '+' : '').$diff['edges']]);
        }

        return $parts === [] ? __('packstub-flow::flow.versions.no_changes') : implode('; ', $parts);
    }

    /**
     * @param  array{nodes?: array<int, array<string, mixed>>}|null  $definition
     * @return array<string, array<string, mixed>>
     */
    protected static function index(?array $definition): array
    {
        $nodes = [];

        foreach ((array) ($definition['nodes'] ?? []) as $node) {
            if (is_array($node) && isset($node['id'])) {
                $nodes[(string) $node['id']] = $node;
            }
        }

        return $nodes;
    }

    /** @param array<string, mixed> $node */
    protected static function fingerprint(array $node): string
    {
        // Position changes are not "changes".
        return (string) json_encode([$node['type'] ?? null, $node['data'] ?? []]);
    }

    /** @param array<string, mixed> $node */
    protected static function label(array $node): string
    {
        return (string) ($node['data']['label'] ?? $node['id'] ?? '?');
    }
}
