import { describe, expect, it } from "vitest";
import { outputsFor, setNodeDefinitions } from "../../resources/js/components/nodeDefinitions";

describe("node definitions", () => {
    it("resolves a node's output handles by identifier", () => {
        setNodeDefinitions({
            actions: [
                { identifier: "App\\Loop", outputs: [{ id: "body", label: "Each item" }, { id: "done", label: "Done" }] },
                { identifier: "App\\Plain", outputs: [] },
            ],
            triggers: [],
        });

        const fallback = [{ id: "output", label: "Next" }];

        expect(outputsFor("App\\Loop", fallback).map((o) => o.id)).toEqual(["body", "done"]);
        expect(outputsFor("App\\Plain", fallback)).toBe(fallback);
        expect(outputsFor("App\\Missing", fallback)).toBe(fallback);
        expect(outputsFor(undefined, fallback)).toBe(fallback);
    });

    it("ignores malformed definitions", () => {
        setNodeDefinitions({ actions: [null as any, {} as any], triggers: undefined as any });
        expect(outputsFor("x", [])).toEqual([]);
    });
});
