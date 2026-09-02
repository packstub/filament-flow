// Translations passed from PHP (resources/lang/*/flow.php, "builder" key).
let labels: Record<string, string> = {};

const defaults: Record<string, string> = {
    add_node: "Add node",
    components: "Components",
    search: "Search nodes…",
    search_results: "Search results",
    no_results: 'No nodes match ":query"',
    triggers: "Triggers",
    triggers_description: "Events that start the workflow",
    actions: "Actions",
    actions_description: "What the workflow does",
    conditions: "Conditions",
    conditions_description: "Branch on a true / false check",
    close: "Close",
    back: "Back",
    settings: "Settings",
    duplicate: "Duplicate",
    delete: "Delete",
    true: "True",
    false: "False",
    next: "Next",
    error: "Error",
    empty_title: "Start with a trigger",
    empty_description: "Add the event that starts this workflow, then connect actions and conditions to it.",
    add_trigger: "Add a trigger",
};

export function setLabels(next: Record<string, string> | null | undefined) {
    labels = { ...defaults, ...(next ?? {}) };
}

export function t(key: string, replacements: Record<string, string> = {}): string {
    let value = labels[key] ?? defaults[key] ?? key;
    for (const [name, replacement] of Object.entries(replacements)) {
        value = value.replaceAll(`:${name}`, replacement);
    }
    return value;
}
