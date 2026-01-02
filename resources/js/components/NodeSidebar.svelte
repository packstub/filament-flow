<script>
    const nodeTypes = [
        {
            type: "trigger",
            label: "Trigger",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`,
            description: "Start point",
            color: "bg-amber-500",
            data: { label: "New Trigger", event: "App\\Events\\ExampleEvent" },
        },
        {
            type: "action",
            label: "Action",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>`,
            description: "Execute task",
            color: "bg-blue-600",
            data: { label: "New Action", action: "LogMessage" },
        },
        {
            type: "condition",
            label: "Condition",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>`,
            description: "Branching logic",
            color: "bg-purple-600",
            data: { label: "New Condition", condition: "true == true" },
        },
    ];

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
                    {@html node.icon}
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
