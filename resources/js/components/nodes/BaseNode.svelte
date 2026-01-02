<script>
    import { Handle, Position } from "@xyflow/svelte";

    let {
        data,
        selected,
        type = "default",
        inputs = [],
        outputs = [],
        children,
    } = $props();

    const themes = {
        trigger: {
            border: "border-amber-200",
            header: "bg-amber-500",
            bg: "bg-amber-50/50",
            text: "text-amber-900",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`,
        },
        action: {
            border: "border-blue-200",
            header: "bg-blue-600",
            bg: "bg-blue-50/50",
            text: "text-blue-900",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>`,
        },
        condition: {
            border: "border-purple-200",
            header: "bg-purple-600",
            bg: "bg-purple-50/50",
            text: "text-purple-900",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>`,
        },
        default: {
            border: "border-slate-200",
            header: "bg-slate-600",
            bg: "bg-slate-50/50",
            text: "text-slate-900",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>`,
        },
    };

    const theme = $derived(themes[type] || themes.default);
</script>

<div class="relative group" role="presentation">
    <!-- Node Container -->
    <div
        class="min-w-[180px] max-w-[240px] bg-white rounded-xl shadow-sm border {theme.border} overflow-hidden transition-all duration-200 {selected
            ? 'ring-2 ring-blue-500 ring-offset-2'
            : 'hover:shadow-md'}"
    >
        <!-- Header -->
        <div class="{theme.header} px-3 py-1.5 flex items-center gap-2">
            <span class="text-white">
                {@html theme.icon}
            </span>
            <span
                class="text-[10px] font-bold uppercase tracking-wider text-white"
            >
                {data.label || "Node"}
            </span>
        </div>

        <!-- Body -->
        <div class="p-3 {theme.bg}">
            {#if data.description}
                <p
                    class="text-[10px] leading-relaxed text-slate-500 mb-2 italic"
                >
                    {data.description}
                </p>
            {/if}

            <div class="text-xs font-medium {theme.text}">
                {@render children?.()}
            </div>
        </div>
    </div>

    <!-- Inputs (Left) -->
    <div
        class="absolute -left-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"
    >
        {#each inputs as input}
            <div class="relative w-3 h-3" role="presentation">
                <Handle
                    type="target"
                    position={Position.Left}
                    id={input.id}
                    class="!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
                />
            </div>
        {/each}
    </div>

    <!-- Outputs (Right) -->
    <div
        class="absolute -right-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"
    >
        {#each outputs as output}
            <div class="relative w-3 h-3" role="presentation">
                <Handle
                    type="source"
                    position={Position.Right}
                    id={output.id}
                    class="!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
                />
            </div>
        {/each}
    </div>
</div>

<style>
    :global(.svelte-flow__node) {
        border-radius: 12px;
    }

    :global(.svelte-flow__handle) {
        border: 2px solid white !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        z-index: 10;
    }
</style>
