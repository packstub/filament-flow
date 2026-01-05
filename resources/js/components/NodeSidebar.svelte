<script>
    let { availableComponents = {} } = $props();

    let isCollapsed = $state(false);
    let searchQuery = $state("");

    function createNodeList(components) {
        const triggers = (components.triggers || []).map((t) => ({
            type: "trigger",
            label: t.name,
            icon: t.icon || `<svg ...>`, // Use default if null
            description: t.description,
            color: "bg-amber-500",
            data: {
                label: t.name,
                description: t.description,
                identifier: t.identifier,
            },
        }));

        const actions = (components.actions || []).map((a) => ({
            type: "action",
            label: a.name,
            icon: a.icon || `<svg ...>`,
            description: a.description,
            color: "bg-blue-600",
            data: {
                label: a.name,
                description: a.description,
                identifier: a.identifier,
            },
        }));

        const conditions = (components.conditions || []).map((c) => ({
            type: "condition",
            label: c.name,
            icon: c.icon || `<svg ...>`,
            description: c.description,
            color: "bg-purple-600",
            data: {
                label: c.name,
                description: c.description,
                identifier: c.identifier,
            },
        }));

        return [...triggers, ...actions, ...conditions];
    }

    let allNodeTypes = $derived(createNodeList(availableComponents));
    let nodeTypes = $derived(
        allNodeTypes.filter((node) =>
            node.label.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    );

    function onDragStart(event, nodeType, initialData) {
        event.dataTransfer.setData(
            "application/svelteflow",
            JSON.stringify({ type: nodeType, data: initialData }),
        );
        event.dataTransfer.effectAllowed = "move";
    }

    function toggleSidebar() {
        isCollapsed = !isCollapsed;
    }
</script>

<div
    class="{isCollapsed
        ? 'w-20 px-2 pt-14 pb-5 items-center'
        : 'w-64 p-5'} bg-slate-50 border-r border-slate-200 flex flex-col gap-5 overflow-y-auto transition-all duration-300 relative"
>
    <!-- Toggle Button -->
    <button
        onclick={toggleSidebar}
        type="button"
        class="absolute top-2 right-2 p-1 rounded-md text-slate-400 hover:bg-slate-200 transition-colors z-10"
        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
    >
        {#if isCollapsed}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
            </svg>
        {:else}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.75 4.5l-7.5 7.5 7.5 7.5m-6-15l-7.5 7.5 7.5 7.5"
                />
            </svg>
        {/if}
    </button>

    {#if !isCollapsed}
        <div>
            <h3
                class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]"
            >
                Components
            </h3>
            <p class="text-[10px] text-slate-500 mt-1">
                Drag to build workflow
            </p>
        </div>

        <!-- Search Input -->
        <div class="relative">
            <input
                type="text"
                placeholder="Search nodes..."
                bind:value={searchQuery}
                class="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow pl-8"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        </div>
    {/if}

    <div class="flex flex-col gap-3 w-full" role="list">
        {#each nodeTypes as node}
            <div
                class="group flex items-center {isCollapsed
                    ? 'justify-center p-2'
                    : 'gap-4 p-4'} bg-white border border-slate-200 rounded-xl shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all active:cursor-grabbing"
                draggable="true"
                role="listitem"
                aria-roledescription="node blueprint"
                ondragstart={(e) => onDragStart(e, node.type, node.data)}
                title={node.label}
            >
                <div
                    class="w-10 h-10 {node.color} rounded-lg flex items-center justify-center text-white shadow-lg shadow-{node.color.split(
                        '-',
                    )[1]}-200/50 group-hover:scale-110 transition-transform flex-shrink-0"
                >
                    {@html node.icon || "<span>?</span>"}
                </div>
                {#if !isCollapsed}
                    <div class="min-w-0">
                        <div
                            class="text-xs font-bold text-slate-800 tracking-tight truncate"
                        >
                            {node.label}
                        </div>
                        <div class="text-[10px] text-slate-400 mt-0.5 truncate">
                            {node.description}
                        </div>
                    </div>
                {/if}
            </div>
        {/each}
    </div>

    {#if !isCollapsed}
        <div
            class="mt-auto p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl text-white shadow-xl shadow-blue-200/50"
        >
            <div class="flex items-center gap-2 mb-2">
                <span class="text-sm">💡</span>
                <span class="text-[10px] font-bold uppercase tracking-wider"
                    >Pro Tip</span
                >
            </div>
            <p class="text-[10px] leading-relaxed opacity-90">
                Connect nodes by clicking and dragging between handles.
            </p>
        </div>
    {/if}
</div>
