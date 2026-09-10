import { describe, expect, it } from "vitest";
import { categoryFor, outputsFor, setNodeDefinitions } from "../../resources/js/components/nodeDefinitions";

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

    it("resolves a node's sidebar group by identifier", () => {
        setNodeDefinitions({
            actions: [
                { identifier: "App\\AskAi", category: "ai" },
                { identifier: "App\\Plain" },
            ],
        });

        expect(categoryFor("App\\AskAi", "actions")).toBe("ai");
        expect(categoryFor("App\\Plain", "actions")).toBe("actions");
        expect(categoryFor("App\\Missing", "actions")).toBe("actions");
        expect(categoryFor(undefined, "actions")).toBe("actions");
    });

    it("ignores malformed definitions", () => {
        setNodeDefinitions({ actions: [null as any, {} as any], triggers: undefined as any });
        expect(outputsFor("x", [])).toEqual([]);
    });
});
