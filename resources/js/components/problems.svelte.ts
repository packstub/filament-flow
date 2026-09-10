// Validation problems per node id, pushed by the server when a save is
// refused (the "packstub-flow-problems" browser event) and shown as a badge
// on the node. A node's problems clear when it is edited or connected;
// everything clears when the next save passes.
let problems = $state<Record<string, string[]>>({});

export function setProblems(next: Record<string, string[]> | null | undefined) {
    const cleaned: Record<string, string[]> = {};

    for (const [id, list] of Object.entries(next ?? {})) {
        if (id !== "" && Array.isArray(list) && list.length > 0) cleaned[id] = list.map(String);
    }

    problems = cleaned;
}

export function clearProblems(id: string) {
    if (!(id in problems)) return;

    const { [id]: _, ...rest } = problems;
    problems = rest;
}

export function problemsFor(id: string): string[] {
    return problems[id] ?? [];
}

export function hasProblems(): boolean {
    return Object.keys(problems).length > 0;
}
