<script lang="ts">
    import { Position } from "@xyflow/svelte";
    import FlowHandle from "./FlowHandle.svelte";
    import { Zap, Rocket, CircleHelp, Box, Settings } from "lucide-svelte";
    import { t } from "../labels";

    let { id, data, selected, type = "default", inputs = [], outputs = [], children } = $props();

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

    function openSettings(event: MouseEvent) {
        event.stopPropagation();
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
</script>

<div class="fi-flow-node group relative" role="presentation" ondblclick={openSettings}>
    <div
        class="min-w-[180px] max-w-[240px] overflow-hidden rounded-xl border bg-white shadow-sm ring-1 ring-gray-950/5 transition-all duration-200 dark:bg-gray-900 dark:ring-white/10 {theme.border} {selected
            ? 'ring-2 ring-primary-500 ring-offset-2 dark:ring-primary-400 dark:ring-offset-gray-950'
            : 'hover:shadow-md dark:hover:shadow-primary-500/10'}"
    >
        <div class="{theme.header} flex items-center gap-2 px-3 py-1.5">
            <span class="text-white"><theme.icon size={12} strokeWidth={2.5} /></span>
            <span class="flex-1 truncate text-[10px] font-bold tracking-wider text-white uppercase">{data.label || "Node"}</span>
            <button
                onclick={openSettings}
                type="button"
                class="rounded p-0.5 text-white/70 opacity-0 transition-all group-hover:opacity-100 hover:bg-white/20 hover:text-white"
                title={t("settings")}
                aria-label={t("settings")}
            >
                <Settings size={14} />
            </button>
        </div>

        <div class="p-3 {theme.bg}">
            {#if data.description}
                <p class="mb-2 text-[10px] leading-relaxed text-gray-500 italic dark:text-gray-400">{data.description}</p>
            {/if}
            <div class="text-xs font-medium {theme.text}">{@render children?.()}</div>
        </div>
    </div>

    <div class="absolute top-0 bottom-0 -left-2 flex flex-col justify-center gap-4">
        {#each inputs as input (input.id)}
            <div class="relative h-3 w-3" role="presentation">
                <FlowHandle
                    type="target"
                    position={Position.Left}
                    id={input.id}
                    nodeId={id}
                    class="!h-3 !w-3 !border-2 !border-white !bg-gray-400 transition-all hover:scale-125 hover:!bg-primary-500 dark:!border-gray-800 dark:!bg-gray-600"
                />
            </div>
        {/each}
    </div>

    <div class="absolute top-0 -right-2 bottom-0 flex flex-col justify-center gap-4">
        {#each outputs as output (output.id)}
            <div class="relative h-3 w-3" role="presentation">
                <FlowHandle
                    type="source"
                    position={Position.Right}
                    id={output.id}
                    nodeId={id}
                    class="!h-3 !w-3 !border-2 !border-white !bg-gray-400 transition-all hover:scale-125 hover:!bg-primary-500 dark:!border-gray-800 dark:!bg-gray-600"
                />
            </div>
        {/each}
    </div>
</div>
