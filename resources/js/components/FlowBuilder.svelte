<script lang="ts">
    import { SvelteFlowProvider, type Node, type Edge } from "@xyflow/svelte";
    import { untrack } from "svelte";
    import FlowCanvas from "./FlowCanvas.svelte";
    import TriggerNode from "./nodes/TriggerNode.svelte";
    import ActionNode from "./nodes/ActionNode.svelte";
    import ConditionNode from "./nodes/ConditionNode.svelte";
    import { setLabels } from "./labels";
    import { setNodeDefinitions } from "./nodeDefinitions";
    import { clearProblems, setProblems } from "./problems.svelte";

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
        minHeight = "600px",
        updateState,
    } = $props();

    setLabels(untrack(() => labels));
    setNodeDefinitions(untrack(() => availableNodes));

    let nodes = $state.raw<Node[]>(untrack(() => incomingNodes));
    let edges = $state.raw<Edge[]>(untrack(() => incomingEdges));

    let updateTimeout: ReturnType<typeof setTimeout> | undefined;
    let pending: (() => void) | null = null;

    // Push the graph back to Livewire, debounced so dragging a node does not
    // fire a request per pixel.
    $effect(() => {
        const currentNodes = nodes;
        const currentEdges = edges;

        if (!updateState) return;

        clearTimeout(updateTimeout);
        pending = () => {
            pending = null;
            updateState({
                nodes: JSON.parse(JSON.stringify(currentNodes)),
                edges: JSON.parse(JSON.stringify(currentEdges)),
            });
        };
        updateTimeout = setTimeout(pending, 400);

        return () => clearTimeout(updateTimeout);
    });

    // Saving right after a change must not lose it: when the page's form is
    // submitted (Save / Create, or Cmd+S), push whatever is still waiting
    // for the debounce before Livewire reads the field's state.
    $effect(() => {
        const flush = () => {
            clearTimeout(updateTimeout);
            pending?.();
        };

        document.addEventListener("submit", flush, true);
        return () => document.removeEventListener("submit", flush, true);
    });

    // The settings slide-over (a Livewire component) applies a node's new
    // label / description / config through this browser event; the server
    // reports validation problems per node through the other one.
    $effect(() => {
        const handleUpdate = (e: CustomEvent) => {
            const { id, label, description, config } = e.detail;
            const index = nodes.findIndex((n) => n.id === id);
            if (index === -1) return;

            const updated = {
                ...nodes[index],
                data: { ...nodes[index].data, label, description, config: { ...(config ?? {}) } },
            };

            const next = [...nodes];
            next[index] = updated;
            nodes = next;
            clearProblems(id);
        };

        const handleProblems = (e: CustomEvent) => setProblems(e.detail?.problems ?? e.detail);

        window.addEventListener("packstub-flow-apply-node", handleUpdate as EventListener);
        window.addEventListener("packstub-flow-problems", handleProblems as EventListener);
        return () => {
            window.removeEventListener("packstub-flow-apply-node", handleUpdate as EventListener);
            window.removeEventListener("packstub-flow-problems", handleProblems as EventListener);
        };
    });
</script>

<SvelteFlowProvider>
    <div class="flex h-full w-full overflow-hidden">
        <FlowCanvas bind:nodes bind:edges {nodeTypes} {availableNodes} {minHeight} />
    </div>
</SvelteFlowProvider>
