<script lang="ts">
    import { Settings, Copy, Trash2, Plus } from "lucide-svelte";
    import { t } from "./labels";

    let {
        id,
        top,
        left,
        right,
        bottom,
        type = "canvas",
        onAddNode,
        onOpenSettings,
        onDeleteNode,
        onDuplicateNode,
        onclick,
    }: {
        id: string;
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
        type?: "node" | "canvas";
        onAddNode?: () => void;
        onOpenSettings?: (id: string) => void;
        onDeleteNode?: (id: string) => void;
        onDuplicateNode?: (id: string) => void;
        onclick: () => void;
    } = $props();

    const run = (fn?: (id: string) => void) => () => {
        fn?.(id);
        onclick();
    };

    const itemClass =
        "w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-md";
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
    style="top: {top}px; left: {left}px; right: {right}px; bottom: {bottom}px;"
    class="absolute z-50 min-w-[160px] rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10"
    onclick={(e) => e.stopPropagation()}
>
    {#if type === "node"}
        <button type="button" class={itemClass} onclick={run(onOpenSettings)}>
            <Settings size={16} />
            {t("settings")}
        </button>
        <button type="button" class={itemClass} onclick={run(onDuplicateNode)}>
            <Copy size={16} />
            {t("duplicate")}
        </button>
        <button
            type="button"
            class="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs font-semibold text-rose-600 transition-colors hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-900/10"
            onclick={run(onDeleteNode)}
        >
            <Trash2 size={16} />
            {t("delete")}
        </button>
    {:else}
        <button type="button" class={itemClass} onclick={run(() => onAddNode?.())}>
            <Plus size={16} />
            {t("add_node")}
        </button>
    {/if}
</div>
