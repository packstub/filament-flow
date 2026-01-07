<script>
    import {
        SvelteFlow,
        Controls,
        Background,
        MiniMap,
        useSvelteFlow,
    } from "@xyflow/svelte";
    import NodeSidebar from "./NodeSidebar.svelte";
    import ContextMenu from "./ContextMenu.svelte";

    let {
        nodes = $bindable([]),
        edges = $bindable([]),
        nodeTypes,
        onNodeClick,
        availableComponents = {},
    } = $props();

    const { screenToFlowPosition, setNodes } = useSvelteFlow();

    let menu = $state(null);
    let isSidebarOpen = $state(false);
    let clientWidth = $state(0);
    let clientHeight = $state(0);

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

    function handleContextMenu({ event, node }) {
        event.preventDefault();
        menu = {
            id: node.id,
            type: "node",
            top: event.clientY < clientHeight - 200 ? event.clientY : undefined,
            left: event.clientX < clientWidth - 200 ? event.clientX : undefined,
            right:
                event.clientX >= clientWidth - 200
                    ? clientWidth - event.clientX
                    : undefined,
            bottom:
                event.clientY >= clientHeight - 200
                    ? clientHeight - event.clientY
                    : undefined,
        };
    }

    function handlePaneContextMenu(event) {
        event.preventDefault();
        menu = {
            id: "canvas",
            type: "pane",
            top: event.clientY < clientHeight - 200 ? event.clientY : undefined,
            left: event.clientX < clientWidth - 200 ? event.clientX : undefined,
            right:
                event.clientX >= clientWidth - 200
                    ? clientWidth - event.clientX
                    : undefined,
            bottom:
                event.clientY >= clientHeight - 200
                    ? clientHeight - event.clientY
                    : undefined,
        };
    }

    function closeMenu() {
        menu = null;
    }

    function handleAddNode() {
        isSidebarOpen = true;
    }

    function handleRenameNode(id) {
        const node = nodes.find((n) => n.id === id);
        if (node) {
            const newLabel = window.prompt(
                "Enter new node name:",
                node.data.label,
            );
            if (newLabel !== null) {
                setNodes(
                    nodes.map((n) => {
                        if (n.id === id) {
                            return {
                                ...n,
                                data: { ...n.data, label: newLabel },
                            };
                        }
                        return n;
                    }),
                );
            }
        }
    }
</script>

<div
    class="relative h-[600px] w-full border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xl"
    bind:clientWidth
    bind:clientHeight
>
    <div
        class="absolute inset-0"
        role="presentation"
        ondragover={onDragOver}
        ondrop={onDrop}
    >
        <SvelteFlow
            {nodeTypes}
            bind:nodes
            bind:edges
            fitView
            onnodeclick={({ event, node }) => {
                onNodeClick && onNodeClick(event, node);
                closeMenu();
            }}
            onnodecontextmenu={handleContextMenu}
            onpanecontextmenu={handlePaneContextMenu}
            onpaneclick={closeMenu}
        >
            <Controls />
            <Background variant="lines" gap={20} size={1} color="#f1f5f9" />
            <MiniMap />

            {#if menu}
                <ContextMenu
                    {...menu}
                    onclick={closeMenu}
                    onAddNode={handleAddNode}
                    onRenameNode={handleRenameNode}
                />
            {/if}
        </SvelteFlow>
    </div>

    <NodeSidebar {availableComponents} bind:isOpen={isSidebarOpen} />
</div>
