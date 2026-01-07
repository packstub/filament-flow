<script lang="ts">
    import { Pencil, Copy, Trash2, Plus } from "lucide-svelte";

    let {
        id,
        top,
        left,
        right,
        bottom,
        type = "canvas",
        onAddNode,
        onRenameNode,
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
        onRenameNode?: (id: string) => void;
        onDeleteNode?: (id: string) => void;
        onDuplicateNode?: (id: string) => void;
        onclick: () => void;
    } = $props();

    function handleRename() {
        if (onRenameNode) {
            onRenameNode(id);
        }
        onclick();
    }

    function handleDelete() {
        if (onDeleteNode) {
            onDeleteNode(id);
        }
        onclick();
    }

    function handleAdd() {
        if (onAddNode) {
            onAddNode();
        }
        onclick();
    }

    function duplicateNode() {
        if (onDuplicateNode) {
            onDuplicateNode(id);
        }
        onclick();
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
    style="top: {top}px; left: {left}px; right: {right}px; bottom: {bottom}px;"
    class="absolute z-50 min-w-[160px] bg-white dark:bg-gray-900 ring-1 ring-gray-950/5 dark:ring-white/10 rounded-lg shadow-lg p-1 animate-in fade-in zoom-in duration-100"
    onclick={(e) => e.stopPropagation()}
>
    {#if type === "node"}
        <button
            type="button"
            class="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-md"
            onclick={handleRename}
        >
            <Pencil size={16} />
            Rename Node
        </button>

        <button
            type="button"
            class="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-md"
            onclick={duplicateNode}
        >
            <Copy size={16} />
            Duplicate Node
        </button>

        <div class="h-px bg-gray-100 dark:bg-white/5 my-1"></div>

        <button
            type="button"
            class="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors rounded-md"
            onclick={handleDelete}
        >
            <Trash2 size={16} />
            Delete Node
        </button>
    {:else}
        <button
            type="button"
            class="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-md"
            onclick={handleAdd}
        >
            <Plus size={16} />
            Add Node
        </button>
    {/if}
</div>
