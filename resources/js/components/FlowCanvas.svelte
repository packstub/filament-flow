<script lang="ts">
    import {
        SvelteFlow,
        Controls,
        Background,
        MiniMap,
        useSvelteFlow,
        type Node,
        type Edge,
        type NodeTypes,
        type ColorMode,
        BackgroundVariant,
    } from "@xyflow/svelte";
    import NodeSidebar from "./NodeSidebar.svelte";
    import ContextMenu from "./ContextMenu.svelte";
    import { Plus, Zap } from "lucide-svelte";
    import { t } from "./labels";

    let {
        nodes = $bindable([]),
        edges = $bindable([]),
        nodeTypes,
        availableNodes = {},
    }: {
        nodes?: Node[];
        edges?: Edge[];
        nodeTypes: NodeTypes;
        availableNodes?: Record<string, any>;
    } = $props();

    const { screenToFlowPosition, getNodes } = useSvelteFlow();

    let container = $state<HTMLDivElement>();
    let menu = $state<{
        id: string;
        type: "node" | "canvas";
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
        clientX: number;
        clientY: number;
    } | null>(null);
    let isNodeSidebarOpen = $state(false);
    let sidebarCategory = $state<string | null>(null);
    let clientWidth = $state(0);
    let clientHeight = $state(0);
    let addNodePosition = $state<{ x: number; y: number } | null>(null);
    let colorMode = $state<ColorMode>("light");
    let pendingConnection = $state<{
        nodeId: string;
        handleId: string;
        type: "source" | "target";
    } | null>(null);

    let isEmpty = $derived(nodes.length === 0);

    const newId = (type: string) => `${type}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

    function onDragOver(event: DragEvent) {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
    }

    function addNode(newNode: Node) {
        const updatedNodes = nodes.map((n) => ({ ...n, selected: false }));
        nodes = [...updatedNodes, { ...newNode, selected: true }];
    }

    function duplicateNode(id: string) {
        const node = getNodes().find((n) => n.id === id);
        if (!node) return;
        addNode({
            ...node,
            id: newId(node.type ?? "node"),
            position: { x: node.position.x + 40, y: node.position.y + 40 },
            data: JSON.parse(JSON.stringify(node.data)),
        });
    }

    function onDrop(event: DragEvent) {
        event.preventDefault();
        const rawData = event.dataTransfer?.getData("application/svelteflow");
        if (!rawData) return;

        const { type, data } = JSON.parse(rawData);
        const position = screenToFlowPosition({ x: event.clientX, y: event.clientY });
        addNode({ id: newId(type), type, position, data });
    }

    function menuAt(event: MouseEvent, id: string, type: "node" | "canvas") {
        event.preventDefault();
        const rect = container!.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        menu = {
            id,
            type,
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
        pendingConnection = null;
        sidebarCategory = null;
    }

    function closeOverlays() {
        closeMenu();
        closeNodeSidebar();
    }

    function openSidebar(category: string | null = null) {
        sidebarCategory = category;
        isNodeSidebarOpen = true;
    }

    function handleAddNode() {
        addNodePosition = menu ? { x: menu.clientX, y: menu.clientY } : null;
        openSidebar();
    }

    function onSelectNodeFromSidebar(type: string, data: any) {
        let position;
        if (addNodePosition) {
            position = screenToFlowPosition(addNodePosition);
        } else {
            position = screenToFlowPosition({ x: clientWidth / 2, y: clientHeight / 2 });
            const threshold = 50;
            let offset = 0;
            while (
                nodes.some(
                    (n) =>
                        Math.abs(n.position.x - (position.x + offset)) < threshold &&
                        Math.abs(n.position.y - (position.y + offset)) < threshold,
                )
            ) {
                offset += 40;
            }
            position.x += offset;
            position.y += offset;
        }

        const newNode = { id: newId(type), type, position, data };
        addNode(newNode);

        if (pendingConnection) {
            const edgeId = newId("edge");
            let newEdge: Edge | null = null;

            if (pendingConnection.type === "source") {
                if (type === "action" || type === "condition") {
                    newEdge = {
                        id: edgeId,
                        source: pendingConnection.nodeId,
                        sourceHandle: pendingConnection.handleId,
                        target: newNode.id,
                        targetHandle: "input",
                    };
                }
            } else if (type === "trigger" || type === "action") {
                newEdge = {
                    id: edgeId,
                    source: newNode.id,
                    sourceHandle: "output",
                    target: pendingConnection.nodeId,
                    targetHandle: pendingConnection.handleId,
                };
            } else if (type === "condition") {
                newEdge = {
                    id: edgeId,
                    source: newNode.id,
                    sourceHandle: "true",
                    target: pendingConnection.nodeId,
                    targetHandle: pendingConnection.handleId,
                };
            }

            if (newEdge) edges = [...edges, newEdge];
            pendingConnection = null;
        }

        addNodePosition = null;
    }

    function handleDeleteNode(id: string) {
        nodes = nodes.filter((n) => n.id !== id);
        edges = edges.filter((e) => e.source !== id && e.target !== id);
    }

    function handleOpenSettings(id: string) {
        const node = nodes.find((n) => n.id === id);
        if (!node) return;
        const data: any = node.data;
        window.dispatchEvent(
            new CustomEvent("packstub-flow-open-node", {
                detail: {
                    id,
                    identifier: data.identifier,
                    config: { label: data.label, description: data.description, ...(data.config || {}) },
                },
            }),
        );
    }

    $effect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeOverlays();
        };

        const handleNodeHandleClick = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            pendingConnection = detail;
            addNodePosition = { x: detail.clientX + 40, y: detail.clientY - 40 };
            openSidebar();
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("packstub-flow-handle-click", handleNodeHandleClick);

        // Follow Filament's dark mode (the "dark" class on <html>).
        const syncColorMode = () => {
            colorMode = document.documentElement.classList.contains("dark") ? "dark" : "light";
        };
        const observer = new MutationObserver(syncColorMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        syncColorMode();

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("packstub-flow-handle-click", handleNodeHandleClick);
            observer.disconnect();
        };
    });
</script>

<div
    class="relative h-[600px] w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-950 dark:ring-white/10"
    bind:this={container}
    bind:clientWidth
    bind:clientHeight
>
    <div class="absolute inset-0" role="presentation" ondragover={onDragOver} ondrop={onDrop}>
        <SvelteFlow
            {nodeTypes}
            bind:nodes
            bind:edges
            {colorMode}
            fitView
            fitViewOptions={{ padding: 0.15, maxZoom: 1.1 }}
            deleteKey={["Backspace", "Delete"]}
            onnodeclick={closeOverlays}
            onnodecontextmenu={({ event, node }) => menuAt(event as MouseEvent, node.id, "node")}
            onpanecontextmenu={({ event }) => menuAt(event as MouseEvent, "canvas", "canvas")}
            onpaneclick={closeOverlays}
        >
            <Controls showLock={false} />
            <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
            <MiniMap pannable zoomable width={160} height={100} />
        </SvelteFlow>

        {#if menu}
            <ContextMenu
                {...menu}
                onclick={closeMenu}
                onAddNode={handleAddNode}
                onOpenSettings={handleOpenSettings}
                onDuplicateNode={duplicateNode}
                onDeleteNode={handleDeleteNode}
            />
        {/if}
    </div>

    {#if isEmpty && !isNodeSidebarOpen}
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div class="pointer-events-auto max-w-sm rounded-2xl bg-white/90 p-6 text-center shadow-lg ring-1 ring-gray-950/5 backdrop-blur dark:bg-gray-900/90 dark:ring-white/10">
                <div class="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
                    <Zap size={20} />
                </div>
                <h3 class="text-sm font-semibold text-gray-950 dark:text-white">{t("empty_title")}</h3>
                <p class="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{t("empty_description")}</p>
                <button
                    type="button"
                    onclick={() => openSidebar("triggers")}
                    class="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-primary-500"
                >
                    <Plus size={14} />
                    {t("add_trigger")}
                </button>
            </div>
        </div>
    {/if}

    <NodeSidebar
        {availableNodes}
        bind:isOpen={isNodeSidebarOpen}
        bind:selectedCategory={sidebarCategory}
        onSelectNode={onSelectNodeFromSidebar}
        onClose={closeNodeSidebar}
    />

    <button
        type="button"
        onclick={() => {
            closeMenu();
            openSidebar();
        }}
        class="group absolute top-4 right-4 z-10 rounded-xl bg-white p-3 text-gray-600 shadow-lg ring-1 ring-gray-950/10 transition-all hover:text-primary-600 hover:ring-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:ring-white/10 dark:hover:text-primary-400 dark:hover:ring-primary-400"
        title={t("add_node")}
        aria-label={t("add_node")}
    >
        <Plus size={20} class="transition-transform group-hover:scale-110" />
    </button>
</div>
