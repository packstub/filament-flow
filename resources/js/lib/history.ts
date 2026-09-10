// Undo / redo over graph snapshots. Snapshots are compared without the
// transient fields (selection, drag state, measured size), so selecting a
// node never creates an entry and a drag creates one when it ends.

export type Snapshot = { nodes: any[]; edges: any[] };

const TRANSIENT = new Set(["selected", "dragging", "measured", "internals", "width", "height", "resizing", "zIndex"]);

export function fingerprint(snapshot: Snapshot): string {
    return JSON.stringify(snapshot, (key, value) => (TRANSIENT.has(key) ? undefined : value));
}

export class History {
    private past: string[] = [];
    private future: string[] = [];
    private present: string | null = null;

    constructor(private readonly limit = 100) {}

    /** Record a state; returns true when it differed from the current one. */
    push(snapshot: Snapshot): boolean {
        const next = fingerprint(snapshot);
        if (next === this.present) return false;

        if (this.present !== null) {
            this.past.push(this.present);
            if (this.past.length > this.limit) this.past.shift();
        }

        this.present = next;
        this.future = [];

        return true;
    }

    undo(): Snapshot | null {
        const previous = this.past.pop();
        if (previous === undefined || this.present === null) return null;

        this.future.push(this.present);
        this.present = previous;

        return JSON.parse(previous);
    }

    redo(): Snapshot | null {
        const next = this.future.pop();
        if (next === undefined || this.present === null) return null;

        this.past.push(this.present);
        this.present = next;

        return JSON.parse(next);
    }

    get canUndo(): boolean {
        return this.past.length > 0;
    }

    get canRedo(): boolean {
        return this.future.length > 0;
    }
}
