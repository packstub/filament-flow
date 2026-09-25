<script lang="ts">
    import { Position } from "@xyflow/svelte";
    import FlowHandle from "./FlowHandle.svelte";
    import { Zap, Rocket, CircleHelp, Sparkles, Box, Settings } from "lucide-svelte";
    import { t } from "../labels";
    import { problemsFor } from "../problems.svelte";
    import type { Snippet } from "svelte";
    import { TriangleAlert } from "lucide-svelte";

    let {
        id,
        data,
        selected = false,
        type = "default",
        category = undefined,
        inputs = [],
        outputs = [],
        children,
    }: {
        id: string;
        data: any;
        selected?: boolean;
        type?: string;
        category?: string;
        inputs?: { id: string }[];
        outputs?: { id: string }[];
        children?: Snippet;
    } = $props();

    // A tinted header with a coloured icon, like a Filament section: the
    // colour tells the kind of node apart without shouting.
    const themes = {
        trigger: {
            header: "bg-amber-50 dark:bg-amber-500/10",
            icon: "text-amber-600 dark:text-amber-400",
            symbol: Zap,
        },
        action: {
            header: "bg-blue-50 dark:bg-blue-500/10",
            icon: "text-blue-600 dark:text-blue-400",
            symbol: Rocket,
        },
        condition: {
            header: "bg-purple-50 dark:bg-purple-500/10",
            icon: "text-purple-600 dark:text-purple-400",
            symbol: CircleHelp,
        },
        ai: {
            header: "bg-teal-50 dark:bg-teal-500/10",
            icon: "text-teal-600 dark:text-teal-400",
            symbol: Sparkles,
        },
        default: {
            header: "bg-gray-50 dark:bg-white/5",
            icon: "text-gray-500 dark:text-gray-400",
            symbol: Box,
        },
    };

    // A node in a group with a look of its own (AI) takes it; otherwise the type's.
    const themeKey = $derived(category && themes[category] ? category : themes[type] ? type : "default");
    const theme = $derived(themes[themeKey]);
    const problems = $derived(problemsFor(id));

    function openSettings(event: MouseEvent) {
        event.stopPropagation();
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
</script>

<div class="fi-flow-node group relative" role="presentation" data-theme={themeKey} ondblclick={openSettings}>
    <div
        class="min-w-[180px] max-w-[240px] overflow-hidden rounded-xl bg-white shadow-sm ring-1 transition-shadow duration-200 dark:bg-gray-900 {selected
            ? 'ring-2 ring-primary-600 dark:ring-primary-500'
            : problems.length
              ? 'ring-2 ring-danger-500 dark:ring-danger-400'
              : 'ring-gray-950/10 hover:shadow-md dark:ring-white/10'}"
    >
        <div class="{theme.header} flex items-center gap-2 px-3 py-2">
            <span class={theme.icon}><theme.symbol size={14} strokeWidth={2} /></span>
            <span class="flex-1 truncate text-xs font-semibold text-gray-950 dark:text-white">{data.label || "Node"}</span>
            <button
                onclick={openSettings}
                type="button"
                class="rounded-md p-0.5 text-gray-400 opacity-0 transition-all group-hover:opacity-100 hover:bg-gray-950/5 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-white/10 dark:hover:text-gray-300"
                title={t("settings")}
                aria-label={t("settings")}
            >
                <Settings size={14} />
            </button>
        </div>

        <div class="px-3 py-2.5">
            {#if data.description}
                <p class="text-[11px] leading-snug text-gray-500 dark:text-gray-400">{data.description}</p>
            {/if}
            <div class="text-xs font-medium text-gray-700 dark:text-gray-300">{@render children?.()}</div>
        </div>
    </div>

    {#if problems.length}
        <div
            class="fi-flow-node-problems absolute -top-2.5 -right-2.5 z-20 flex h-5 min-w-5 items-center justify-center gap-0.5 rounded-full bg-danger-500 px-1 text-[10px] font-bold text-white shadow ring-2 ring-white dark:ring-gray-950"
            role="img"
            aria-label={t("node_problems")}
            title={problems.join("\n")}
        >
            <TriangleAlert size={11} strokeWidth={2.5} />
            {#if problems.length > 1}{problems.length}{/if}
        </div>
    {/if}

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
