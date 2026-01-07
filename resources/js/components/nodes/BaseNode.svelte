<script lang="ts">
    import { Position } from "@xyflow/svelte";
    import FlowHandle from "./FlowHandle.svelte";

    let {
        id,
        data,
        selected,
        type = "default",
        inputs = [],
        outputs = [],
        children,
    } = $props();

    const themes = {
        trigger: {
            border: "border-amber-200/50 dark:border-amber-500/30",
            header: "bg-amber-500 dark:bg-amber-600",
            bg: "bg-amber-50/50 dark:bg-amber-900/10",
            text: "text-amber-900 dark:text-amber-100",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`,
        },
        action: {
            border: "border-blue-200/50 dark:border-blue-500/30",
            header: "bg-blue-600 dark:bg-blue-700",
            bg: "bg-blue-50/50 dark:bg-blue-900/10",
            text: "text-blue-900 dark:text-blue-100",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>`,
        },
        condition: {
            border: "border-purple-200/50 dark:border-purple-500/30",
            header: "bg-purple-600 dark:bg-purple-700",
            bg: "bg-purple-50/50 dark:bg-purple-900/10",
            text: "text-purple-900 dark:text-purple-100",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>`,
        },
        default: {
            border: "border-gray-200/50 dark:border-gray-700",
            header: "bg-gray-600 dark:bg-gray-700",
            bg: "bg-gray-50/50 dark:bg-gray-800/10",
            text: "text-gray-900 dark:text-gray-100",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>`,
        },
    };

    const theme = $derived(themes[type] || themes.default);

    function openSettings(event) {
        event.stopPropagation();
        window.dispatchEvent(
            new CustomEvent("open-node-settings", {
                detail: {
                    id: id,
                    identifier: data.identifier,
                    config: {
                        label: data.label,
                        description: data.description,
                        ...(data.config || {}),
                    },
                },
            }),
        );
    }
</script>

<div class="relative group" role="presentation">
    <!-- Node Container -->
    <div
        class="min-w-[180px] max-w-[240px] bg-white dark:bg-gray-900 rounded-xl shadow-sm border {theme.border} ring-1 ring-gray-950/5 dark:ring-white/10 overflow-hidden transition-all duration-200 {selected
            ? 'ring-2 ring-primary-500 dark:ring-primary-400 ring-offset-2 dark:ring-offset-gray-950'
            : 'hover:shadow-md dark:hover:shadow-primary-500/10'}"
    >
        <!-- Header -->
        <div class="{theme.header} px-3 py-1.5 flex items-center gap-2">
            <span class="text-white">
                {@html theme.icon}
            </span>
            <span
                class="text-[10px] font-bold uppercase tracking-wider text-white flex-1"
            >
                {data.label || "Node"}
            </span>
            <!-- Settings Button -->
            <button
                onclick={openSettings}
                type="button"
                class="text-white/70 hover:text-white hover:bg-white/20 rounded p-0.5 transition-all opacity-0 group-hover:opacity-100"
                title="Edit Settings"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-3.5 h-3.5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                </svg>
            </button>
        </div>

        <!-- Body -->
        <div class="p-3 {theme.bg}">
            {#if data.description}
                <p
                    class="text-[10px] leading-relaxed text-gray-500 dark:text-gray-400 mb-2 italic"
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
                <FlowHandle
                    type="target"
                    position={Position.Left}
                    id={input.id}
                    nodeId={id}
                    class="!w-3 !h-3 !bg-gray-400 dark:!bg-gray-600 !border-2 !border-white dark:!border-gray-800 hover:!bg-primary-500 transition-all hover:scale-125"
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
                <FlowHandle
                    type="source"
                    position={Position.Right}
                    id={output.id}
                    nodeId={id}
                    class="!w-3 !h-3 !bg-gray-400 dark:!bg-gray-600 !border-2 !border-white dark:!border-gray-800 hover:!bg-primary-500 transition-all hover:scale-125"
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
        border-radius: 50% !important;
        z-index: 10;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        border-color: white !important;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }

    .dark :global(.svelte-flow__handle) {
        border-color: #111827 !important; /* gray-900 */
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }
</style>
