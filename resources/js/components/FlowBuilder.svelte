<script lang="ts">
    import { SvelteFlowProvider, type Node, type Edge } from "@xyflow/svelte";
    import FlowCanvas from "./FlowCanvas.svelte";
    import TriggerNode from "./nodes/TriggerNode.svelte";
    import ActionNode from "./nodes/ActionNode.svelte";
    import ConditionNode from "./nodes/ConditionNode.svelte";

    const nodeTypes = {
        trigger: TriggerNode,
        action: ActionNode,
        condition: ConditionNode,
    };

    const defaultNodes = [
        {
            id: "trigger-1",
            type: "trigger",
            position: { x: 50, y: 50 },
            data: {
                label: "User Registered",
                identifier:
                    "Xlited\\LaravelFlow\\Nodes\\Triggers\\UserRegistered",
                description: "Triggers when a new user signs up.",
            },
        },
        {
            id: "action-1",
            type: "action",
            position: { x: 350, y: 50 },
            data: {
                label: "Send Welcome Email",
                identifier:
                    "Xlited\\LaravelFlow\\Nodes\\Actions\\SendWelcomeEmail",
                description: "Sends a welcome email to the user.",
            },
        },
    ];

    const defaultEdges = [
        {
            id: "edge-1",
            source: "trigger-1",
            target: "action-1",
        },
    ];

    let {
        nodes: incomingNodes,
        edges: incomingEdges,
        availableComponents = {},
        updateState,
    } = $props();

    if (incomingNodes.length === 0) {
        incomingNodes = defaultNodes;
    }

    if (incomingEdges.length === 0) {
        incomingEdges = defaultEdges;
    }

    console.log(defaultNodes, incomingNodes, incomingEdges);

    let nodes = $state.raw<Node[]>(incomingNodes);
    let edges = $state.raw<Edge[]>(incomingEdges);
    let selectedNodeId = $state(null);

    let selectedNode = $derived(nodes.find((n) => n.id === selectedNodeId));

    function onNodeClick(event, node) {
        selectedNodeId = node.id;
        console.log(node);
        window.dispatchEvent(
            new CustomEvent("open-node-settings", {
                detail: {
                    id: node.id,
                    identifier: node.data.identifier,
                    // Merge label/description with config for the form
                    config: {
                        label: node.data.label,
                        description: node.data.description,
                        ...(node.data.config || {}),
                    },
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
                // Extract label/description from the form result
                const { label, description, ...restConfig } = config;

                // Create a new object to trigger reactivity
                const updatedNode = { ...nodes[index] };
                updatedNode.data = {
                    ...updatedNode.data,
                    label: label,
                    description: description,
                    config: restConfig,
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
</script>

<SvelteFlowProvider>
    <div class="flex h-full w-full overflow-hidden">
        <FlowCanvas
            bind:nodes
            bind:edges
            {nodeTypes}
            {onNodeClick}
            {availableComponents}
        />
    </div>
</SvelteFlowProvider>
