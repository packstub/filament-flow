import { describe, expect, it } from "vitest";
import { setLabels, t } from "../../resources/js/components/labels";

describe("labels", () => {
    it("falls back to the built-in English strings", () => {
        setLabels(null);
        expect(t("add_node")).toBe("Add node");
        expect(t("unknown_key")).toBe("unknown_key");
    });

    it("prefers the translations passed from PHP and fills placeholders", () => {
        setLabels({ add_node: "Nœud", no_results: 'Rien pour ":query"' });
        expect(t("add_node")).toBe("Nœud");
        expect(t("no_results", { query: "mail" })).toBe('Rien pour "mail"');
        expect(t("delete")).toBe("Delete");
    });
});
