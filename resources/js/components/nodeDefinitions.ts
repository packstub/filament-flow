// The triggers / actions / conditions the sidebar offers, indexed by
// identifier, so a node on the canvas can look up its output handles.
export type OutputHandle = { id: string; label: string };
type Definition = { identifier: string; outputs?: OutputHandle[] };

let definitions: Record<string, Definition> = {};

export function setNodeDefinitions(available: Record<string, Definition[]> | null | undefined) {
    definitions = {};
    for (const list of Object.values(available ?? {})) {
        for (const definition of list ?? []) {
            if (definition?.identifier) definitions[definition.identifier] = definition;
        }
    }
}

export function outputsFor(identifier: string | undefined, fallback: OutputHandle[]): OutputHandle[] {
    const outputs = identifier ? definitions[identifier]?.outputs : undefined;
    return outputs && outputs.length > 0 ? outputs : fallback;
}
