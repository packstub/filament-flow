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
    import { Plus } from "lucide-svelte";

    let {
        nodes = $bindable([]),
        edges = $bindable([]),
        nodeTypes,
        onNodeClick,
        availableComponents = {},
    } = $props();

    const { screenToFlowPosition, getNodes } = useSvelteFlow();

    let container = $state();
    let menu = $state(null);
    let isNodeSidebarOpen = $state(false);
    let clientWidth = $state(0);
    let clientHeight = $state(0);
    let addNodePosition = $state(null);
    let colorMode = $state("light");

    function onDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    function addNode(newNode) {
        // Deselect all existing nodes and select the new one
        const updatedNodes = nodes.map((n) => ({ ...n, selected: false }));
        nodes = [...updatedNodes, { ...newNode, selected: true }];
    }

    function duplicateNode(id) {
        const currentNodes = getNodes();
        const node = currentNodes.find((n) => n.id === id);
        if (node) {
            const newNode = {
                ...node,
                id: `${node.type}-${Date.now()}`,
                position: {
                    x: node.position.x + 20,
                    y: node.position.y + 20,
                },
            };
            addNode(newNode);
        }
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

        addNode(newNode);
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
        addNodePosition = null;
    }

    function closeNodeSidebar() {
        isNodeSidebarOpen = false;
    }

    function closeOverlays() {
        closeMenu();
        closeNodeSidebar();
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
        isNodeSidebarOpen = true;
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

        addNode(newNode);
    }

    function handleDeleteNode(id) {
        nodes = nodes.filter((n) => n.id !== id);
    }

    function handleRenameNode(id) {
        const node = nodes.find((n) => n.id === id);
        if (node) {
            const newLabel = window.prompt(
                "Enter new node name:",
                node.data.label,
            );
            if (newLabel !== null) {
                nodes = nodes.map((n) => {
                    if (n.id === id) {
                        return {
                            ...n,
                            data: { ...n.data, label: newLabel },
                        };
                    }
                    return n;
                });
            }
        }
    }

    $effect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeOverlays();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // Theme detection for Filament
        const observer = new MutationObserver(() => {
            colorMode = document.documentElement.classList.contains("dark")
                ? "dark"
                : "light";
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Initial check
        colorMode = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            observer.disconnect();
        };
    });
</script>

<div
    class="relative h-[600px] w-full border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl"
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
            {colorMode}
            fitView
            onnodeclick={({ event, node }) => {
                onNodeClick && onNodeClick(event, node);
                closeOverlays();
            }}
            onnodecontextmenu={handleContextMenu}
            onpanecontextmenu={handlePaneContextMenu}
            onpaneclick={closeOverlays}
        >
            <Controls />
            <Background variant="lines" gap={20} size={1} />
            <MiniMap />
        </SvelteFlow>

        {#if menu}
            <ContextMenu
                {...menu}
                onclick={closeMenu}
                onAddNode={handleAddNode}
                onRenameNode={handleRenameNode}
                onDuplicateNode={duplicateNode}
                onDeleteNode={handleDeleteNode}
            />
        {/if}
    </div>

    <NodeSidebar
        {availableComponents}
        bind:isOpen={isNodeSidebarOpen}
        onSelectNode={onSelectNodeFromSidebar}
    />

    <!-- Plus Button -->
    <button
        type="button"
        onclick={() => {
            closeMenu();
            isNodeSidebarOpen = true;
        }}
        class="absolute top-4 right-4 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all z-10 group"
        title="Add Node"
    >
        <Plus size={20} class="group-hover:scale-110 transition-transform" />
    </button>
</div>
