import { describe, expect, it } from "vitest";
import { fallbackCategoryLabel, sidebarCategories, sidebarNodes } from "../../resources/js/components/categories";

const available = {
    triggers: [{ identifier: "App\\Manual", name: "Manual" }],
    actions: [
        { identifier: "App\\Email", name: "Send email", category: "actions" },
        { identifier: "App\\AskAi", name: "Ask AI", category: "ai" },
        { identifier: "App\\Crm", name: "Create deal", category: "crm" },
        { identifier: "App\\Legacy", name: "No category key" },
    ],
    conditions: [{ identifier: "App\\Compare", name: "Compare values", category: "conditions" }],
};

describe("sidebar categories", () => {
    it("keeps the type for the canvas and the category for the sidebar", () => {
        const nodes = sidebarNodes(available);

        expect(nodes.map((n) => [n.label, n.type, n.category])).toEqual([
            ["Manual", "trigger", "triggers"],
            ["Send email", "action", "actions"],
            ["Ask AI", "action", "ai"],
            ["Create deal", "action", "crm"],
            ["No category key", "action", "actions"],
            ["Compare values", "condition", "conditions"],
        ]);
        expect(nodes[2].data).toEqual({ label: "Ask AI", description: undefined, identifier: "App\\AskAi", config: {} });
    });

    it("lists the built-in groups first, then the extra ones in order of appearance", () => {
        expect(sidebarCategories(sidebarNodes(available))).toEqual(["triggers", "actions", "conditions", "ai", "crm"]);
    });

    it("shows only the built-in groups when no node asks for another", () => {
        expect(sidebarCategories(sidebarNodes({ triggers: [], actions: [{ identifier: "A", name: "A" }] }))).toEqual(["triggers", "actions", "conditions"]);
        expect(sidebarCategories(sidebarNodes(null))).toEqual(["triggers", "actions", "conditions"]);
    });

    it("ignores malformed definitions", () => {
        expect(sidebarNodes({ actions: [null as any, {} as any], triggers: undefined as any })).toEqual([]);
    });

    it("capitalises a group without a translation", () => {
        expect(fallbackCategoryLabel("crm")).toBe("Crm");
    });
});
