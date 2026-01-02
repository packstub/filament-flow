import { mount } from 'svelte';
import FlowBuilder from './components/FlowBuilder.svelte';

document.addEventListener('alpine:init', () => {
    window.Alpine.data('flowBuilder', ({ state }) => ({
        state,
        init() {
            mount(FlowBuilder, {
                target: this.$refs.canvas,
                props: {
                    nodes: this.state?.nodes || [],
                    edges: this.state?.edges || []
                }
            });
        }
    }));
});
