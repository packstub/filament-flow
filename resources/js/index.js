import { mount, unmount } from 'svelte';
import '../css/flow.css';
import FlowBuilder from './components/FlowBuilder.svelte';

const register = () => {
    window.Alpine.data('packstubFlowBuilder', ({ state, nodes, labels }) => ({
        state,
        nodes,
        labels,
        app: null,

        init() {
            const initial = this.state && typeof this.state === 'object' ? this.state : {};

            this.app = mount(FlowBuilder, {
                target: this.$refs.canvas,
                props: {
                    nodes: Array.isArray(initial.nodes) ? JSON.parse(JSON.stringify(initial.nodes)) : [],
                    edges: Array.isArray(initial.edges) ? JSON.parse(JSON.stringify(initial.edges)) : [],
                    availableNodes: this.nodes,
                    labels: this.labels,
                    updateState: (next) => {
                        this.state = next;
                    },
                },
            });
        },

        destroy() {
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
