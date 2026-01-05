<script>
    let { availableComponents = {} } = $props();

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

    let nodeTypes = $derived(createNodeList(availableComponents));

    function onDragStart(event, nodeType, initialData) {
        event.dataTransfer.setData(
            "application/svelteflow",
            JSON.stringify({ type: nodeType, data: initialData }),
        );
        event.dataTransfer.effectAllowed = "move";
    }
</script>

<div
    class="w-64 bg-slate-50 border-r border-slate-200 p-5 flex flex-col gap-5 overflow-y-auto"
>
    <div>
        <h3
            class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]"
        >
            Components
        </h3>
        <p class="text-[10px] text-slate-500 mt-1">Drag to build workflow</p>
    </div>

    <div class="flex flex-col gap-3" role="list">
        {#each nodeTypes as node}
            <div
                class="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all active:cursor-grabbing"
                draggable="true"
                role="listitem"
                aria-roledescription="node blueprint"
                ondragstart={(e) => onDragStart(e, node.type, node.data)}
            >
                <div
                    class="w-10 h-10 {node.color} rounded-lg flex items-center justify-center text-white shadow-lg shadow-{node.color.split(
                        '-',
                    )[1]}-200/50 group-hover:scale-110 transition-transform"
                >
                    {@html node.icon || "<span>?</span>"}
                </div>
                <div>
                    <div
                        class="text-xs font-bold text-slate-800 tracking-tight"
                    >
                        {node.label}
                    </div>
                    <div class="text-[10px] text-slate-400 mt-0.5">
                        {node.description}
                    </div>
                </div>
            </div>
        {/each}
    </div>

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
            Connect nodes by clicking and dragging between handles. Use <kbd
                class="px-1 py-0.5 bg-white/20 rounded">CMD</kbd
            > to multi-select.
        </p>
    </div>
</div>
