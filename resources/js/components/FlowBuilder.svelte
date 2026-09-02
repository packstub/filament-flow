<script lang="ts">
    import { SvelteFlowProvider, type Node, type Edge } from "@xyflow/svelte";
    import { untrack } from "svelte";
    import FlowCanvas from "./FlowCanvas.svelte";
    import TriggerNode from "./nodes/TriggerNode.svelte";
    import ActionNode from "./nodes/ActionNode.svelte";
    import ConditionNode from "./nodes/ConditionNode.svelte";
    import { setLabels } from "./labels";

    const nodeTypes = {
        trigger: TriggerNode,
        action: ActionNode,
        condition: ConditionNode,
    };

    let {
        nodes: incomingNodes = [],
        edges: incomingEdges = [],
        availableNodes = {},
        labels = {},
        updateState,
    } = $props();

    setLabels(untrack(() => labels));

    let nodes = $state.raw<Node[]>(untrack(() => incomingNodes));
    let edges = $state.raw<Edge[]>(untrack(() => incomingEdges));

    let updateTimeout: ReturnType<typeof setTimeout> | undefined;

    // Push the graph back to Livewire, debounced so dragging a node does not
    // fire a request per pixel.
    $effect(() => {
        const currentNodes = nodes;
        const currentEdges = edges;

        if (!updateState) return;

        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => {
            updateState({
                nodes: JSON.parse(JSON.stringify(currentNodes)),
                edges: JSON.parse(JSON.stringify(currentEdges)),
            });
        }, 400);

        return () => clearTimeout(updateTimeout);
    });

    // The settings slide-over (a Livewire component) applies a node's new
    // label / description / config through this browser event.
    $effect(() => {
        const handleUpdate = (e: CustomEvent) => {
            const { id, config } = e.detail;
            const index = nodes.findIndex((n) => n.id === id);
            if (index === -1) return;

            const { label, description, ...restConfig } = config;
            const updated = {
                ...nodes[index],
                data: { ...nodes[index].data, label, description, config: restConfig },
            };

            const next = [...nodes];
            next[index] = updated;
            nodes = next;
        };

        window.addEventListener("packstub-flow-apply-node", handleUpdate as EventListener);
        return () => window.removeEventListener("packstub-flow-apply-node", handleUpdate as EventListener);
    });
</script>

<SvelteFlowProvider>
    <div class="flex h-full w-full overflow-hidden">
        <FlowCanvas bind:nodes bind:edges {nodeTypes} {availableNodes} />
    </div>
</SvelteFlowProvider>
