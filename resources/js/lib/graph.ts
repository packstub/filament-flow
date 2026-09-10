// Pure helpers for the canvas: ids, connection rules, copy / paste and
// duplication of a selection. Nothing here touches the DOM or Svelte, so
// vitest covers it directly (tests/js/graph.test.ts).

export type GraphNode = {
    id: string;
    type?: string;
    position: { x: number; y: number };
    data?: any;
    selected?: boolean;
    [key: string]: any;
};

export type GraphEdge = {
    id: string;
    source: string;
    target: string;
    sourceHandle?: string | null;
    targetHandle?: string | null;
    selected?: boolean;
    [key: string]: any;
};

export type ConnectionLike = {
    source: string | null;
    target: string | null;
    sourceHandle?: string | null;
    targetHandle?: string | null;
};

export type Clipboard<N extends GraphNode = GraphNode, E extends GraphEdge = GraphEdge> = { nodes: N[]; edges: E[] };

export const newId = (type: string): string => `${type}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** Node types that accept an incoming edge. Triggers only start a flow. */
const TARGET_TYPES = new Set(["action", "condition"]);

/** Whether `target` can already reach `source`, so an edge source→target would close a loop. */
export function wouldCreateCycle(source: string, target: string, edges: GraphEdge[]): boolean {
    if (source === target) return true;

    const seen = new Set<string>();
    const stack = [target];

    while (stack.length) {
        const current = stack.pop()!;
        if (current === source) return true;
        if (seen.has(current)) continue;
        seen.add(current);

        for (const edge of edges) {
            if (edge.source === current) stack.push(edge.target);
        }
    }

    return false;
}

/**
 * The rules a new edge must pass: both ends exist, the target takes input
 * (no edge into a trigger), no self-loop, no duplicate of an existing edge
 * between the same handles, and no cycle (the runner refuses those anyway).
 */
export function isValidConnection(connection: ConnectionLike, nodes: GraphNode[], edges: GraphEdge[]): boolean {
    const { source, target } = connection;
    if (!source || !target || source === target) return false;

    const targetNode = nodes.find((n) => n.id === target);
    if (!targetNode || !nodes.some((n) => n.id === source)) return false;
    if (!TARGET_TYPES.has(targetNode.type ?? "")) return false;

    const sourceHandle = connection.sourceHandle ?? null;
    const targetHandle = connection.targetHandle ?? null;
    const duplicate = edges.some(
        (e) => e.source === source && e.target === target && (e.sourceHandle ?? null) === sourceHandle && (e.targetHandle ?? null) === targetHandle,
    );
    if (duplicate) return false;

    return !wouldCreateCycle(source, target, edges);
}

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

/** The selected nodes and the edges between them, ready to paste. */
export function copySelection<N extends GraphNode, E extends GraphEdge>(nodes: N[], edges: E[]): Clipboard<N, E> {
    const selected = nodes.filter((n) => n.selected);
    const ids = new Set(selected.map((n) => n.id));

    return {
        nodes: selected.map((n) => clone({ ...n, selected: false })),
        edges: edges.filter((e) => ids.has(e.source) && ids.has(e.target)).map((e) => clone({ ...e, selected: false })),
    };
}

/**
 * Re-create the clipboard's nodes with fresh ids (and the edges between
 * them, re-pointed), offset from the originals and selected; everything
 * already on the canvas is deselected.
 */
export function pasteClipboard<N extends GraphNode, E extends GraphEdge>(
    clipboard: Clipboard<N, E>,
    nodes: N[],
    edges: E[],
    offset: { x: number; y: number } = { x: 40, y: 40 },
    idFor: (type: string) => string = newId,
): { nodes: N[]; edges: E[]; pasted: string[] } {
    if (clipboard.nodes.length === 0) return { nodes, edges, pasted: [] };

    const ids = new Map<string, string>();
    const pastedNodes = clipboard.nodes.map((node) => {
        const id = idFor(node.type ?? "node");
        ids.set(node.id, id);

        return { ...clone(node), id, position: { x: node.position.x + offset.x, y: node.position.y + offset.y }, selected: true };
    });

    const pastedEdges = clipboard.edges
        .filter((e) => ids.has(e.source) && ids.has(e.target))
        .map((edge) => ({ ...clone(edge), id: idFor("edge"), source: ids.get(edge.source)!, target: ids.get(edge.target)!, selected: false }));

    return {
        nodes: [...nodes.map((n) => ({ ...n, selected: false })), ...pastedNodes],
        edges: [...edges.map((e) => ({ ...e, selected: false })), ...pastedEdges],
        pasted: pastedNodes.map((n) => n.id),
    };
}

/** Copy and paste the given nodes in one step. */
export function duplicateNodes<N extends GraphNode, E extends GraphEdge>(ids: string[], nodes: N[], edges: E[], idFor: (type: string) => string = newId) {
    const wanted = new Set(ids);
    const marked = nodes.map((n) => ({ ...n, selected: wanted.has(n.id) }));

    return pasteClipboard(copySelection(marked, edges), nodes, edges, { x: 40, y: 40 }, idFor);
}

/** Remove nodes and every edge touching them. */
export function removeNodes<N extends GraphNode, E extends GraphEdge>(ids: string[], nodes: N[], edges: E[]): { nodes: N[]; edges: E[] } {
    const gone = new Set(ids);

    return {
        nodes: nodes.filter((n) => !gone.has(n.id)),
        edges: edges.filter((e) => !gone.has(e.source) && !gone.has(e.target)),
    };
}

export const selectedIds = (nodes: GraphNode[]): string[] => nodes.filter((n) => n.selected).map((n) => n.id);
