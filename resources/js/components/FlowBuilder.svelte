<script>
    import { SvelteFlowProvider } from "@xyflow/svelte";
    import FlowCanvas from "./FlowCanvas.svelte";
    import TriggerNode from "./nodes/TriggerNode.svelte";
    import ActionNode from "./nodes/ActionNode.svelte";
    import ConditionNode from "./nodes/ConditionNode.svelte";

    const nodeTypes = {
        trigger: TriggerNode,
        action: ActionNode,
        condition: ConditionNode,
    };

    let {
        nodes: incomingNodes = [],
        edges: incomingEdges = [],
        availableComponents = {},
        updateState,
    } = $props();

    let nodes = $state.raw([]);
    let edges = $state.raw([]);
    let selectedNodeId = $state(null);

    let selectedNode = $derived(nodes.find((n) => n.id === selectedNodeId));

    function onNodeClick(event, node) {
        selectedNodeId = node.id;
        window.dispatchEvent(
            new CustomEvent("open-node-settings", {
                detail: {
                    id: node.id,
                    identifier: node.data.identifier,
                    config: node.data.config || {},
                },
            }),
        );
    }

    let updateTimeout;

    $effect(() => {
        // Track dependencies by reading them
        const currentNodes = nodes;
        const currentEdges = edges;

        if (updateState) {
            clearTimeout(updateTimeout);
            updateTimeout = setTimeout(() => {
                updateState({
                    nodes: JSON.parse(JSON.stringify(currentNodes)),
                    edges: JSON.parse(JSON.stringify(currentEdges)),
                });
            }, 500); // 500ms debounce
        }

        return () => clearTimeout(updateTimeout);
    });

    $effect(() => {
        const handleUpdate = (e) => {
            const { id, config } = e.detail;
            const index = nodes.findIndex((n) => n.id === id);
            if (index !== -1) {
                // Create a new object to trigger reactivity
                const updatedNode = { ...nodes[index] };
                updatedNode.data = {
                    ...updatedNode.data,
                    config: { ...config },
                };

                // Update the nodes array
                const newNodes = [...nodes];
                newNodes[index] = updatedNode;
                nodes = newNodes;
            }
        };

        window.addEventListener("update-node-config", handleUpdate);

        return () => {
            window.removeEventListener("update-node-config", handleUpdate);
        };
    });

    // $effect.pre(() => {
    //     if (nodes.length === 0) {
    //         nodes =
    //             incomingNodes.length > 0
    //                 ? incomingNodes
    //                 : [
    //                       {
    //                           id: "trigger-1",
    //                           type: "trigger",
    //                           position: { x: 50, y: 50 },
    //                           data: {
    //                               label: "User Registered",
    //                               identifier:
    //                                   "Xlited\\LaravelFlow\\Nodes\\Triggers\\UserRegistered",
    //                               description:
    //                                   "Triggers when a new user signs up.",
    //                           },
    //                       },
    //                       // ... (rest of default nodes can stay, but ensuring they have identifiers is good practice if possible, though not strictly required for this refactor unless defaults are used)
    //                   ];
    //     }
    //     if (edges.length === 0) {
    //         edges = incomingEdges.length > 0 ? incomingEdges : [];
    //     }
    // });
</script>

<SvelteFlowProvider>
    <div class="flex h-full w-full overflow-hidden">
        <FlowCanvas bind:nodes bind:edges {nodeTypes} {onNodeClick} />
    </div>
</SvelteFlowProvider>
