import { mount } from 'svelte';
import '../css/plugin.css';
import FlowBuilder from './components/FlowBuilder.svelte';

const init = () => {
    window.Alpine.data('flowBuilder', ({ state }) => ({
        state,
        init() {
            const nodes = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [];
            const edges = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];

            mount(FlowBuilder, {
                target: this.$refs.canvas,
                props: {
                    nodes: nodes,
                    edges: edges
                }
            });
        }
    }));
};

if (window.Alpine) {
    init();
} else {
    document.addEventListener('alpine:init', init);
}
