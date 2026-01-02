<script>
    import {
        SvelteFlow,
        Controls,
        Background,
        MiniMap,
        useSvelteFlow,
        SvelteFlowProvider,
    } from "@xyflow/svelte";
    import "@xyflow/svelte/dist/style.css";

    import TriggerNode from "./nodes/TriggerNode.svelte";
    import ActionNode from "./nodes/ActionNode.svelte";
    import ConditionNode from "./nodes/ConditionNode.svelte";
    import NodeSidebar from "./NodeSidebar.svelte";

    const nodeTypes = {
        trigger: TriggerNode,
        action: ActionNode,
        condition: ConditionNode,
    };

    const { screenToFlowPosition } = useSvelteFlow();

    let { nodes: incomingNodes = [], edges: incomingEdges = [] } = $props();

    let nodes = $state.raw([]);
    let edges = $state.raw([]);

    function onDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    function onDrop(event) {
        event.preventDefault();

        const rawData = event.dataTransfer.getData("application/svelteflow");
        if (!rawData) return;

        const { type, data } = JSON.parse(rawData);

        // Get position relative to canvas
        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });

        const newNode = {
            id: `${type}-${Date.now()}`,
            type,
            position,
            data,
        };

        nodes = [...nodes, newNode];
    }

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
                    : [{ id: "e1-2", source: "1", target: "2" }];
        }
    });
</script>

<SvelteFlowProvider>
    <div
        class="flex h-[600px] w-full border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xl"
    >
        <NodeSidebar />

        <div
            class="flex-grow relative h-full"
            role="presentation"
            ondragover={onDragOver}
            ondrop={onDrop}
        >
            <SvelteFlow {nodeTypes} bind:nodes bind:edges fitView>
                <Controls />
                <Background variant="lines" gap={20} size={1} color="#f1f5f9" />
                <MiniMap />
            </SvelteFlow>
        </div>
    </div>
</SvelteFlowProvider>
