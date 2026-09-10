import { describe, expect, it } from "vitest";
import { fingerprint, History } from "../../resources/js/lib/history";

const state = (ids: string[], extra: Record<string, unknown> = {}) => ({
    nodes: ids.map((id) => ({ id, position: { x: 0, y: 0 }, ...extra })),
    edges: [],
});

describe("history", () => {
    it("ignores selection and drag state", () => {
        expect(fingerprint(state(["a"], { selected: true, dragging: true, measured: { width: 1 } }))).toBe(fingerprint(state(["a"])));
        expect(fingerprint(state(["a"], { position: { x: 1, y: 0 } }))).not.toBe(fingerprint(state(["a"])));
    });

    it("walks back and forth through distinct states", () => {
        const history = new History();

        expect(history.push(state([]))).toBe(true);
        expect(history.push(state(["a"]))).toBe(true);
        expect(history.push(state(["a"], { selected: true }))).toBe(false);
        expect(history.push(state(["a", "b"]))).toBe(true);
        expect(history.canUndo).toBe(true);
        expect(history.canRedo).toBe(false);

        expect(history.undo()?.nodes.map((n: any) => n.id)).toEqual(["a"]);
        expect(history.canRedo).toBe(true);
        expect(history.undo()?.nodes).toEqual([]);
        expect(history.undo()).toBeNull();
        expect(history.redo()?.nodes.map((n: any) => n.id)).toEqual(["a"]);

        // A new change after an undo drops the redo branch.
        history.push(state(["a", "c"]));
        expect(history.canRedo).toBe(false);
        expect(history.redo()).toBeNull();
    });

    it("keeps at most the configured number of steps", () => {
        const history = new History(2);
        for (const n of [0, 1, 2, 3]) history.push(state([`n${n}`]));

        expect(history.undo()).not.toBeNull();
        expect(history.undo()).not.toBeNull();
        expect(history.undo()).toBeNull();
    });
});
