import { describe, expect, it } from "vitest";
import {
    copySelection,
    duplicateNodes,
    isValidConnection,
    pasteClipboard,
    removeNodes,
    selectedIds,
    wouldCreateCycle,
    type GraphEdge,
    type GraphNode,
} from "../../resources/js/lib/graph";

const node = (id: string, type = "action", extra: Partial<GraphNode> = {}): GraphNode => ({
    id,
    type,
    position: { x: 0, y: 0 },
    data: { label: id, config: {} },
    ...extra,
});
const edge = (source: string, target: string, sourceHandle = "output"): GraphEdge => ({ id: `${source}-${target}`, source, target, sourceHandle, targetHandle: "input" });

describe("isValidConnection", () => {
    const nodes = [node("t", "trigger"), node("a"), node("c", "condition"), node("b")];
    const edges = [edge("t", "a"), edge("a", "c"), edge("c", "b", "true")];

    it("accepts a new edge into an action or condition", () => {
        expect(isValidConnection({ source: "t", target: "c" }, nodes, edges)).toBe(true);
        expect(isValidConnection({ source: "c", target: "a", sourceHandle: "false" }, nodes, [edge("t", "a")])).toBe(true);
    });

    it("refuses self-loops, edges into triggers, unknown nodes and duplicates", () => {
        expect(isValidConnection({ source: "a", target: "a" }, nodes, edges)).toBe(false);
        expect(isValidConnection({ source: "a", target: "t" }, nodes, edges)).toBe(false);
        expect(isValidConnection({ source: "a", target: "zzz" }, nodes, edges)).toBe(false);
        expect(isValidConnection({ source: null, target: "a" }, nodes, edges)).toBe(false);
        expect(isValidConnection({ source: "t", target: "a", sourceHandle: "output", targetHandle: "input" }, nodes, edges)).toBe(false);
    });

    it("refuses an edge that would close a loop", () => {
        expect(wouldCreateCycle("b", "a", edges)).toBe(true);
        expect(isValidConnection({ source: "b", target: "a" }, nodes, edges)).toBe(false);
        expect(isValidConnection({ source: "c", target: "a", sourceHandle: "false" }, nodes, edges)).toBe(false);
        expect(wouldCreateCycle("t", "b", edges)).toBe(false);
    });
});

describe("copy, paste, duplicate, remove", () => {
    const nodes = [node("t", "trigger"), node("a", "action", { selected: true, position: { x: 100, y: 50 } }), node("b", "action", { selected: true })];
    const edges = [edge("t", "a"), edge("a", "b")];

    it("copies the selection and the edges between selected nodes only", () => {
        const clip = copySelection(nodes, edges);

        expect(clip.nodes.map((n) => n.id)).toEqual(["a", "b"]);
        expect(clip.nodes.every((n) => n.selected === false)).toBe(true);
        expect(clip.edges.map((e) => e.id)).toEqual(["a-b"]);
    });

    it("pastes with fresh ids, an offset and the pasted nodes selected", () => {
        let counter = 0;
        const idFor = (type: string) => `${type}-${++counter}`;
        const result = pasteClipboard(copySelection(nodes, edges), nodes, edges, { x: 40, y: 40 }, idFor);

        expect(result.pasted).toEqual(["action-1", "action-2"]);
        expect(result.nodes).toHaveLength(5);
        expect(result.nodes.filter((n) => n.selected).map((n) => n.id)).toEqual(["action-1", "action-2"]);
        expect(result.nodes.find((n) => n.id === "action-1")?.position).toEqual({ x: 140, y: 90 });
        expect(result.edges).toHaveLength(3);
        expect(result.edges[2]).toMatchObject({ id: "edge-3", source: "action-1", target: "action-2" });
        // The originals are untouched.
        expect(nodes[1].selected).toBe(true);
    });

    it("pastes nothing from an empty clipboard", () => {
        expect(pasteClipboard({ nodes: [], edges: [] }, nodes, edges)).toEqual({ nodes, edges, pasted: [] });
    });

    it("duplicates given nodes regardless of the selection", () => {
        let counter = 0;
        const result = duplicateNodes(["t"], nodes, edges, (type) => `${type}-${++counter}`);

        expect(result.pasted).toEqual(["trigger-1"]);
        expect(result.edges).toHaveLength(2);
    });

    it("removes nodes with their edges", () => {
        const result = removeNodes(["a"], nodes, edges);

        expect(result.nodes.map((n) => n.id)).toEqual(["t", "b"]);
        expect(result.edges).toEqual([]);
        expect(selectedIds(nodes)).toEqual(["a", "b"]);
    });
});
