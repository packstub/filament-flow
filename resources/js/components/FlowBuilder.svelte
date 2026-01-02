<script>
    import { SvelteFlowProvider } from "@xyflow/svelte";
    import FlowCanvas from "./FlowCanvas.svelte";
    import NodeSettings from "./NodeSettings.svelte";
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
    }

    function closeSettings() {
        selectedNodeId = null;
    }

    $effect(() => {
        if (updateState) {
            updateState({
                nodes: JSON.parse(JSON.stringify(nodes)),
                edges: JSON.parse(JSON.stringify(edges)),
            });
        }
    });

    $effect.pre(() => {
        if (nodes.length === 0) {
            nodes =
                incomingNodes.length > 0
                    ? incomingNodes
                    : [
                          {
                              id: "trigger-1",
                              type: "trigger",
                              position: { x: 50, y: 50 },
                              data: {
                                  label: "User Registered",
                                  event: "App\\Events\\UserRegistered",
                                  description:
                                      "Triggers when a new user signs up.",
                              },
                          },
                          {
                              id: "condition-1",
                              type: "condition",
                              position: { x: 300, y: 50 },
                              data: {
                                  label: "Check Email",
                                  condition: "user.email_verified_at != null",
                                  description: "Check if email is verified.",
                              },
                          },
                          {
                              id: "action-1",
                              type: "action",
                              position: { x: 550, y: 0 },
                              data: {
                                  label: "Send Welcome Email",
                                  action: "SendMail",
                                  description:
                                      "Send the official welcome package.",
                              },
                          },
                          {
                              id: "action-2",
                              type: "action",
                              position: { x: 550, y: 150 },
                              data: {
                                  label: "Log Unverified",
                                  action: "LogMessage",
                                  description:
                                      "Log a warning about unverified user.",
                              },
                          },
                      ];
        }
        if (edges.length === 0) {
            edges =
                incomingEdges.length > 0
                    ? incomingEdges
                    : [
                          {
                              id: "e1-2",
                              source: "trigger-1",
                              target: "condition-1",
                          },
                          {
                              id: "e2-3",
                              source: "condition-1",
                              sourceHandle: "true",
                              target: "action-1",
                          },
                          {
                              id: "e2-4",
                              source: "condition-1",
                              sourceHandle: "false",
                              target: "action-2",
                          },
                      ];
        }
    });
</script>

<SvelteFlowProvider>
    <div class="flex h-full w-full overflow-hidden">
        <FlowCanvas bind:nodes bind:edges {nodeTypes} {onNodeClick} />

        {#if selectedNode}
            <NodeSettings
                bind:node={
                    nodes[nodes.findIndex((n) => n.id === selectedNodeId)]
                }
                {availableComponents}
                onClose={closeSettings}
            />
        {/if}
    </div>
</SvelteFlowProvider>
