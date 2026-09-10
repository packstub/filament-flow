// The sidebar's groups. The registry hands the nodes over grouped by type
// (triggers / actions / conditions, which is also what the canvas needs to
// draw them); each node carries the category it is offered under, which is
// the type's group unless the node picked one of its own ("ai", "crm").
export const GROUP_TYPES: Record<string, string> = { triggers: "trigger", actions: "action", conditions: "condition" };

export const BUILT_IN_CATEGORIES = Object.keys(GROUP_TYPES);

export type SidebarNode = {
    category: string;
    type: string;
    label: string;
    icon?: string | null;
    description?: string;
    data: { label: string; description?: string; identifier: string; config: Record<string, unknown> };
};

export function sidebarNodes(available: Record<string, any[]> | null | undefined): SidebarNode[] {
    const nodes: SidebarNode[] = [];
    for (const [group, type] of Object.entries(GROUP_TYPES)) {
        for (const node of available?.[group] ?? []) {
            if (!node?.identifier) continue;
            nodes.push({
                category: typeof node.category === "string" && node.category ? node.category : group,
                type,
                label: node.name,
                icon: node.icon,
                description: node.description,
                data: { label: node.name, description: node.description, identifier: node.identifier, config: {} },
            });
        }
    }
    return nodes;
}

// The built-in groups always, then every group a node asked for, in the
// order they first appear — so "AI" only shows when an AI node is offered.
export function sidebarCategories(nodes: SidebarNode[]): string[] {
    const categories = [...BUILT_IN_CATEGORIES];
    for (const node of nodes) {
        if (!categories.includes(node.category)) categories.push(node.category);
    }
    return categories;
}

// A label for a group without a translation ("crm" → "Crm"); apps translate
// theirs under the builder strings, next to the built-in ones.
export function fallbackCategoryLabel(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1);
}
