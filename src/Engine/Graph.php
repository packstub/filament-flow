<?php

namespace Packstub\Flow\Engine;

/**
 * Read-only view of a workflow definition (the nodes and edges drawn on the
 * canvas) with the lookups the runner needs.
 */
class Graph
{
    /** @var array<string, array<string, mixed>> */
    protected array $nodes = [];

    /** @var array<int, array<string, mixed>> */
    protected array $edges;

    /**
     * @param  array<int, array<string, mixed>>  $nodes
     * @param  array<int, array<string, mixed>>  $edges
     */
    public function __construct(array $nodes, array $edges)
    {
        foreach ($nodes as $node) {
            if (isset($node['id'])) {
                $this->nodes[(string) $node['id']] = $node;
            }
        }

        $this->edges = array_values($edges);
    }

    /**
     * @param  array{nodes?: array<int, array<string, mixed>>, edges?: array<int, array<string, mixed>>}|null  $definition
     */
    public static function fromDefinition(?array $definition): self
    {
        return new self($definition['nodes'] ?? [], $definition['edges'] ?? []);
    }

    /** @return array<string, mixed>|null */
    public function node(string $id): ?array
    {
        return $this->nodes[$id] ?? null;
    }

    /** @return array<int, array<string, mixed>> */
    public function nodes(): array
    {
        return array_values($this->nodes);
    }

    /** @return array<int, array<string, mixed>> */
    public function edges(): array
    {
        return $this->edges;
    }

    /** @return array<int, array<string, mixed>> */
    public function nodesOfType(string $type): array
    {
        return array_values(array_filter($this->nodes, fn (array $node): bool => ($node['type'] ?? null) === $type));
    }

    /**
     * Nodes reachable from $nodeId, optionally only through edges leaving a
     * given handle ("true" / "false" on a condition).
     *
     * @return array<int, array<string, mixed>>
     */
    public function next(string $nodeId, ?string $sourceHandle = null): array
    {
        $targets = [];

        foreach ($this->edges as $edge) {
            if (($edge['source'] ?? null) !== $nodeId) {
                continue;
            }

            if ($sourceHandle !== null && ($edge['sourceHandle'] ?? null) !== $sourceHandle) {
                continue;
            }

            $target = $this->node((string) ($edge['target'] ?? ''));

            if ($target && ! isset($targets[$target['id']])) {
                $targets[$target['id']] = $target;
            }
        }

        return array_values($targets);
    }

    /** @return array<int, string> */
    public function nextIds(string $nodeId, ?string $sourceHandle = null): array
    {
        return array_map(fn (array $node): string => (string) $node['id'], $this->next($nodeId, $sourceHandle));
    }

    /**
     * @return array{nodes: array<int, array<string, mixed>>, edges: array<int, array<string, mixed>>}
     */
    public function toArray(): array
    {
        return ['nodes' => $this->nodes(), 'edges' => $this->edges()];
    }
}
