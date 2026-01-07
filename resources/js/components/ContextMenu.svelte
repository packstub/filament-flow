<script>
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
    class="absolute z-50 min-w-[160px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl p-1 animate-in fade-in zoom-in duration-200"
    onclick={(e) => e.stopPropagation()}
>
    {#if type === "node"}
        <button
            type="button"
            class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg"
            onclick={handleRename}
        >
            <Pencil size={16} />
            Rename Node
        </button>

        <button
            type="button"
            class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg"
            onclick={duplicateNode}
        >
            <Copy size={16} />
            Duplicate Node
        </button>

        <div class="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>

        <button
            type="button"
            class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-colors rounded-lg"
            onclick={handleDelete}
        >
            <Trash2 size={16} />
            Delete Node
        </button>
    {:else}
        <button
            type="button"
            class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg"
            onclick={handleAdd}
        >
            <Plus size={16} />
            Add Node
        </button>
    {/if}
</div>
