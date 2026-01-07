<script lang="ts">
    import { Position } from "@xyflow/svelte";
    import FlowHandle from "./FlowHandle.svelte";
    import { Zap, Rocket, CircleHelp, Box, Settings } from "lucide-svelte";

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
            icon: Zap,
        },
        action: {
            border: "border-blue-200/50 dark:border-blue-500/30",
            header: "bg-blue-600 dark:bg-blue-700",
            bg: "bg-blue-50/50 dark:bg-blue-900/10",
            text: "text-blue-900 dark:text-blue-100",
            icon: Rocket,
        },
        condition: {
            border: "border-purple-200/50 dark:border-purple-500/30",
            header: "bg-purple-600 dark:bg-purple-700",
            bg: "bg-purple-50/50 dark:bg-purple-900/10",
            text: "text-purple-900 dark:text-purple-100",
            icon: CircleHelp,
        },
        default: {
            border: "border-gray-200/50 dark:border-gray-700",
            header: "bg-gray-600 dark:bg-gray-700",
            bg: "bg-gray-50/50 dark:bg-gray-800/10",
            text: "text-gray-900 dark:text-gray-100",
            icon: Box,
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
                <svelte:component
                    this={theme.icon}
                    size={12}
                    strokeWidth={2.5}
                />
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
                <Settings size={14} />
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
