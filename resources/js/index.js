import { mount, unmount } from 'svelte';
import '../css/flow.css';
import FlowBuilder from './components/FlowBuilder.svelte';
import { fingerprint } from './lib/history';

const register = () => {
    // Whether the canvas has changes a save has not stored yet: the edit
    // page shows Saved or Save changes (and, on a phone, the unsaved bar).
    window.Alpine.store('packstubFlowEditor', { dirty: false });

    window.Alpine.data('packstubFlowBuilder', ({ state, nodes, labels, minHeight, fillViewport, problems, outputs }) => ({
        state,
        nodes,
        labels,
        minHeight,
        fillViewport,
        problems,
        outputs,
        app: null,
        saved: null,

        init() {
            const initial = this.state && typeof this.state === 'object' ? this.state : {};

            this.app = mount(FlowBuilder, {
                target: this.$refs.canvas,
                props: {
                    nodes: Array.isArray(initial.nodes) ? JSON.parse(JSON.stringify(initial.nodes)) : [],
                    edges: Array.isArray(initial.edges) ? JSON.parse(JSON.stringify(initial.edges)) : [],
                    availableNodes: this.nodes,
                    labels: this.labels,
                    minHeight: this.minHeight || '600px',
                    fillViewport: Boolean(this.fillViewport),
                    problems: this.problems && typeof this.problems === 'object' ? this.problems : {},
                    outputs: this.outputs && typeof this.outputs === 'object' ? this.outputs : {},
                    updateState: (next) => {
                        this.state = next;

                        // The canvas pushes its graph once when it opens (with the
                        // branches the server works out); that is the saved state.
                        this.saved ??= fingerprint(next);
                        window.Alpine.store('packstubFlowEditor').dirty = fingerprint(next) !== this.saved;
                    },
                },
            });

            this.onSaved = () => {
                this.saved = fingerprint(this.state);
                window.Alpine.store('packstubFlowEditor').dirty = false;
            };
            window.addEventListener('packstub-flow-workflow-saved', this.onSaved);
        },

        destroy() {
            window.removeEventListener('packstub-flow-workflow-saved', this.onSaved);
            window.Alpine.store('packstubFlowEditor').dirty = false;

            if (this.app) {
                unmount(this.app);
                this.app = null;
            }
        },
    }));
};

if (window.Alpine) {
    register();
} else {
    document.addEventListener('alpine:init', register);
}
