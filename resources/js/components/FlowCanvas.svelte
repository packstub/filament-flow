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
        type Connection,
        BackgroundVariant,
    } from "@xyflow/svelte";
    import NodeSidebar from "./NodeSidebar.svelte";
    import ContextMenu from "./ContextMenu.svelte";
    import { Plus, Zap, Undo2, Redo2 } from "lucide-svelte";
    import { t } from "./labels";
    import { clearProblems } from "./problems.svelte";
    import {
        copySelection,
        duplicateNodes,
        isValidConnection as connectionAllowed,
        newId,
        pasteClipboard,
        removeNodes,
        selectedIds,
        type Clipboard,
    } from "../lib/graph";
    import { History } from "../lib/history";

    let {
        nodes = $bindable([]),
        edges = $bindable([]),
        nodeTypes,
        availableNodes = {},
        minHeight = "600px",
    }: {
        nodes?: Node[];
        edges?: Edge[];
        nodeTypes: NodeTypes;
        availableNodes?: Record<string, any>;
        minHeight?: string;
    } = $props();

    const { screenToFlowPosition, flowToScreenPosition, getNodes, fitView } = useSvelteFlow();

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
    let selectedCount = $derived(nodes.filter((n) => n.selected).length);

    // ----- Undo / redo -------------------------------------------------------
    // Every settled change (a drag counts once it ends) is a step; applying a
    // step sets the graph back, which the effect sees as "already current".
    const history = new History();
    let canUndo = $state(false);
    let canRedo = $state(false);

    $effect(() => {
        if (nodes.some((n) => n.dragging)) return;

        history.push({ nodes, edges });
        canUndo = history.canUndo;
        canRedo = history.canRedo;
    });

    function applySnapshot(snapshot: { nodes: any[]; edges: any[] } | null) {
        if (!snapshot) return;
        nodes = snapshot.nodes;
        edges = snapshot.edges;
        canUndo = history.canUndo;
        canRedo = history.canRedo;
    }

    const undo = () => applySnapshot(history.undo());
    const redo = () => applySnapshot(history.redo());

    // ----- Clipboard -----------------------------------------------------------
    let clipboard = $state<Clipboard<Node, Edge>>({ nodes: [], edges: [] });
    let canPaste = $derived(clipboard.nodes.length > 0);

    function copy(ids?: string[]) {
        const wanted = ids ? new Set(ids) : null;
        const source = wanted ? nodes.map((n) => ({ ...n, selected: wanted.has(n.id) })) : nodes;
        const copied = copySelection(source, edges);
        if (copied.nodes.length) clipboard = copied;
    }

    function paste() {
        const result = pasteClipboard(clipboard, nodes, edges);
        if (!result.pasted.length) return;
        nodes = result.nodes;
        edges = result.edges;
    }

    function duplicate(ids: string[]) {
        const result = duplicateNodes(ids, nodes, edges);
        nodes = result.nodes;
        edges = result.edges;
    }

    function remove(ids: string[]) {
        const result = removeNodes(ids, nodes, edges);
        nodes = result.nodes;
        edges = result.edges;
    }

    function selectAll() {
        nodes = nodes.map((n) => ({ ...n, selected: true }));
    }

    /** The nodes a menu action on `id` applies to: the selection when the node is part of it. */
    function targetsOf(id: string): string[] {
        const selected = selectedIds(nodes);
        return selected.includes(id) ? selected : [id];
    }

    // ----- Adding nodes --------------------------------------------------------
    function onDragOver(event: DragEvent) {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
    }

    function addNode(newNode: Node) {
        const updatedNodes = nodes.map((n) => ({ ...n, selected: false }));
        nodes = [...updatedNodes, { ...newNode, selected: true }];
    }

    function onDrop(event: DragEvent) {
        event.preventDefault();
        const rawData = event.dataTransfer?.getData("application/svelteflow");
        if (!rawData) return;

        const { type, data } = JSON.parse(rawData);
        const position = screenToFlowPosition({ x: event.clientX, y: event.clientY });
        addNode({ id: newId(type), type, position, data });
    }

    function menuAt(clientX: number, clientY: number, id: string, type: "node" | "canvas") {
        const rect = container!.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        menu = {
            id,
            type,
            top: y < clientHeight - 200 ? y : undefined,
            left: x < clientWidth - 200 ? x : undefined,
            right: x >= clientWidth - 200 ? clientWidth - x : undefined,
            bottom: y >= clientHeight - 200 ? clientHeight - y : undefined,
            clientX,
            clientY,
        };
    }

    function onContextMenu(event: MouseEvent, id: string, type: "node" | "canvas") {
        event.preventDefault();
        menuAt(event.clientX, event.clientY, id, type);
    }

    /** The menu from the keyboard (Shift+F10 / the Menu key): on the selected node, else on the canvas. */
    function openMenuFromKeyboard() {
        const rect = container!.getBoundingClientRect();
        const selected = getNodes().find((n) => n.selected);

        if (selected) {
            const { x, y } = flowToScreenPosition({ x: selected.position.x + (selected.measured?.width ?? 180) / 2, y: selected.position.y + (selected.measured?.height ?? 60) / 2 });
            menuAt(x, y, selected.id, "node");
        } else {
            menuAt(rect.left + rect.width / 2, rect.top + rect.height / 2, "canvas", "canvas");
        }
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

            if (newEdge) {
                edges = [...edges, newEdge];
                clearProblems(newEdge.target);
            }
            pendingConnection = null;
        }

        addNodePosition = null;
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
                    label: data.label ?? null,
                    description: data.description ?? null,
                    config: { ...(data.config || {}) },
                },
            }),
        );
    }

    // ----- Connections ---------------------------------------------------------
    const isValidConnection = (connection: Edge | Connection) => connectionAllowed(connection, nodes, edges);

    function onConnect(connection: Connection) {
        if (connection.target) clearProblems(connection.target);
    }

    // ----- Keyboard ------------------------------------------------------------
    // Shortcuts apply while something in the canvas has focus (a node, the
    // pane), never while typing in a field.
    function isTyping(target: EventTarget | null): boolean {
        const el = target as HTMLElement | null;
        return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable);
    }

    function onKeyDown(event: KeyboardEvent) {
        if (isTyping(event.target)) return;

        const mod = event.metaKey || event.ctrlKey;
        const key = event.key.toLowerCase();

        if (mod && key === "z") {
            event.preventDefault();
            return event.shiftKey ? redo() : undo();
        }
        if (mod && key === "y") {
            event.preventDefault();
            return redo();
        }
        if (mod && key === "c") {
            if (selectedCount === 0) return;
            event.preventDefault();
            return copy();
        }
        if (mod && key === "v") {
            if (!canPaste) return;
            event.preventDefault();
            return paste();
        }
        if (mod && key === "d") {
            if (selectedCount === 0) return;
            event.preventDefault();
            return duplicate(selectedIds(nodes));
        }
        if (mod && key === "a") {
            event.preventDefault();
            return selectAll();
        }
        if (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10")) {
            event.preventDefault();
            return openMenuFromKeyboard();
        }
    }

    // "?node=<id>" in the URL (from a run's step log) selects that node and
    // centres the canvas on it.
    $effect(() => {
        const wanted = new URLSearchParams(window.location.search).get("node");
        if (!wanted || !nodes.some((n) => n.id === wanted)) return;

        const timer = setTimeout(() => {
            nodes = nodes.map((n) => ({ ...n, selected: n.id === wanted }));
            fitView({ nodes: [{ id: wanted }], maxZoom: 1.2, padding: 0.6, duration: 400 });
        }, 150);

        return () => clearTimeout(timer);
    });

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

    const toolButtonClass =
        "rounded-lg p-2 text-gray-600 transition hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-gray-600 dark:text-gray-400 dark:hover:text-primary-400 dark:disabled:hover:text-gray-400";
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="fi-flow-canvas-root relative w-full resize-y overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-950 dark:ring-white/10"
    style="height: {minHeight}; min-height: {minHeight};"
    bind:this={container}
    bind:clientWidth
    bind:clientHeight
    onkeydown={onKeyDown}
>
    <div class="absolute inset-0" role="presentation" ondragover={onDragOver} ondrop={onDrop}>
        <SvelteFlow
            {nodeTypes}
            bind:nodes
            bind:edges
            {colorMode}
            {isValidConnection}
            fitView
            fitViewOptions={{ padding: 0.15, maxZoom: 1.1 }}
            deleteKey={["Backspace", "Delete"]}
            selectionKey="Shift"
            onconnect={onConnect}
            onnodeclick={closeOverlays}
            onnodecontextmenu={({ event, node }) => onContextMenu(event as MouseEvent, node.id, "node")}
            onselectioncontextmenu={({ event, nodes: selected }) => onContextMenu(event as MouseEvent, selected[0]?.id ?? "canvas", selected.length ? "node" : "canvas")}
            onpanecontextmenu={({ event }) => onContextMenu(event as MouseEvent, "canvas", "canvas")}
            onpaneclick={closeOverlays}
        >
            <Controls showLock={false} />
            <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
            <MiniMap pannable zoomable width={160} height={100} />
        </SvelteFlow>

        {#if menu}
            <ContextMenu
                {...menu}
                selection={menu.type === "node" ? targetsOf(menu.id).length : 0}
                {canPaste}
                onclick={closeMenu}
                onAddNode={handleAddNode}
                onOpenSettings={handleOpenSettings}
                onDuplicateNode={(id) => duplicate(targetsOf(id))}
                onDeleteNode={(id) => remove(targetsOf(id))}
                onCopy={(id) => copy(targetsOf(id))}
                onPaste={paste}
                onSelectAll={selectAll}
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

    <div class="absolute top-4 right-4 z-10 flex items-center gap-2">
        <div class="flex items-center rounded-xl bg-white p-1 shadow-lg ring-1 ring-gray-950/10 dark:bg-gray-800 dark:ring-white/10">
            <button type="button" class={toolButtonClass} onclick={undo} disabled={!canUndo} title="{t('undo')} (⌘Z)" aria-label={t("undo")}>
                <Undo2 size={18} />
            </button>
            <button type="button" class={toolButtonClass} onclick={redo} disabled={!canRedo} title="{t('redo')} (⇧⌘Z)" aria-label={t("redo")}>
                <Redo2 size={18} />
            </button>
        </div>
        <button
            type="button"
            onclick={() => {
                closeMenu();
                openSidebar();
            }}
            class="group rounded-xl bg-white p-3 text-gray-600 shadow-lg ring-1 ring-gray-950/10 transition-all hover:text-primary-600 hover:ring-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:ring-white/10 dark:hover:text-primary-400 dark:hover:ring-primary-400"
            title={t("add_node")}
            aria-label={t("add_node")}
        >
            <Plus size={20} class="transition-transform group-hover:scale-110" />
        </button>
    </div>
</div>
