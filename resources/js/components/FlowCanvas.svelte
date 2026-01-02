<script>
    import {
        SvelteFlow,
        Controls,
        Background,
        MiniMap,
        useSvelteFlow,
    } from "@xyflow/svelte";
    import "@xyflow/svelte/dist/style.css";
    import NodeSidebar from "./NodeSidebar.svelte";

    let { nodes = $bindable([]), edges = $bindable([]), nodeTypes } = $props();

    const { screenToFlowPosition } = useSvelteFlow();

    function onDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    function onDrop(event) {
        event.preventDefault();

        const rawData = event.dataTransfer.getData("application/svelteflow");
        if (!rawData) return;

        const { type, data } = JSON.parse(rawData);

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
</script>

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
