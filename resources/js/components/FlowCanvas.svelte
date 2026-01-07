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

    let container = $state();
    let menu = $state(null);
    let isSidebarOpen = $state(false);
    let clientWidth = $state(0);
    let clientHeight = $state(0);
    let addNodePosition = $state(null);

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

        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        menu = {
            id: node.id,
            type: "node",
            top: y < clientHeight - 200 ? y : undefined,
            left: x < clientWidth - 200 ? x : undefined,
            right: x >= clientWidth - 200 ? clientWidth - x : undefined,
            bottom: y >= clientHeight - 200 ? clientHeight - y : undefined,
            clientX: event.clientX,
            clientY: event.clientY,
        };
    }

    function handlePaneContextMenu({ event }) {
        event.preventDefault();

        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        menu = {
            id: "canvas",
            type: "canvas",
            top: y < clientHeight - 200 ? y : undefined,
            left: x < clientWidth - 200 ? x : undefined,
            right: x >= clientWidth - 200 ? clientWidth - x : undefined,
            bottom: y >= clientHeight - 200 ? clientHeight - y : undefined,
            clientX: event.clientX,
            clientY: event.clientY,
        };
    }

    function closeMenu() {
        menu = null;
    }

    function handleAddNode() {
        if (menu) {
            addNodePosition = {
                x: menu.clientX,
                y: menu.clientY,
            };
        } else {
            addNodePosition = null;
        }
        isSidebarOpen = true;
    }

    function onSelectNodeFromSidebar(type, data) {
        let position;
        if (addNodePosition) {
            position = screenToFlowPosition(addNodePosition);
        } else {
            // Find a spot or use center
            const center = { x: clientWidth / 2, y: clientHeight / 2 };
            // Simple heuristic: offset a bit from existing nodes if they are in the center
            position = screenToFlowPosition(center);

            // Check if any node is very close to this position
            const threshold = 50;
            let offset = 0;
            while (
                nodes.some(
                    (n) =>
                        Math.abs(n.position.x - (position.x + offset)) <
                            threshold &&
                        Math.abs(n.position.y - (position.y + offset)) <
                            threshold,
                )
            ) {
                offset += 40;
            }
            position.x += offset;
            position.y += offset;
        }

        const newNode = {
            id: `${type}-${Date.now()}`,
            type,
            position,
            data,
        };

        nodes = [...nodes, newNode];
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
    bind:this={container}
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
        </SvelteFlow>

        {#if menu}
            <ContextMenu
                {...menu}
                onclick={closeMenu}
                onAddNode={handleAddNode}
                onRenameNode={handleRenameNode}
            />
        {/if}
    </div>

    <NodeSidebar
        {availableComponents}
        bind:isOpen={isSidebarOpen}
        onSelectNode={onSelectNodeFromSidebar}
    />

    <!-- Plus Button -->
    <button
        type="button"
        onclick={() => {
            addNodePosition = null;
            isSidebarOpen = true;
        }}
        class="absolute top-4 right-4 p-3 bg-white border border-slate-200 rounded-xl shadow-lg text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all z-10 group"
        title="Add Node"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-5 h-5 group-hover:scale-110 transition-transform"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
            />
        </svg>
    </button>
</div>
