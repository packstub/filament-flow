<script lang="ts">
    import { Settings, Copy, Trash2, Plus, ClipboardPaste, SquareDashedMousePointer, Files } from "lucide-svelte";
    import { t } from "./labels";

    let {
        id,
        top,
        left,
        right,
        bottom,
        type = "canvas",
        selection = 1,
        canPaste = false,
        onAddNode,
        onOpenSettings,
        onDeleteNode,
        onDuplicateNode,
        onCopy,
        onPaste,
        onSelectAll,
        onclick,
    }: {
        id: string;
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
        type?: "node" | "canvas";
        /** How many nodes the menu acts on (the selection, or the one right-clicked). */
        selection?: number;
        canPaste?: boolean;
        onAddNode?: () => void;
        onOpenSettings?: (id: string) => void;
        onDeleteNode?: (id: string) => void;
        onDuplicateNode?: (id: string) => void;
        onCopy?: (id: string) => void;
        onPaste?: () => void;
        onSelectAll?: () => void;
        onclick: () => void;
    } = $props();

    let menu = $state<HTMLDivElement>();

    const run = (fn?: (id: string) => void) => () => {
        fn?.(id);
        onclick();
    };

    const many = $derived(selection > 1);
    const count = $derived({ count: String(selection) });

    const itemClass =
        "w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 focus:bg-gray-50 dark:focus:bg-white/5 focus:outline-none transition-colors rounded-md";
    const dangerClass =
        "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs font-semibold text-rose-600 transition-colors hover:bg-rose-50 focus:bg-rose-50 focus:outline-none dark:text-rose-400 dark:hover:bg-rose-900/10 dark:focus:bg-rose-900/10";

    // Keyboard: focus lands on the first item; arrows move, Escape / Tab
    // close.
    function items(): HTMLButtonElement[] {
        return Array.from(menu?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]') ?? []);
    }

    $effect(() => {
        items()[0]?.focus();
    });

    function onKeyDown(event: KeyboardEvent) {
        const list = items();
        const index = list.indexOf(document.activeElement as HTMLButtonElement);

        const focus = (i: number) => {
            event.preventDefault();
            list[(i + list.length) % list.length]?.focus();
        };

        switch (event.key) {
            case "ArrowDown":
                return focus(index + 1);
            case "ArrowUp":
                return focus(index - 1);
            case "Home":
                return focus(0);
            case "End":
                return focus(list.length - 1);
            case "Escape":
            case "Tab":
                event.preventDefault();
                event.stopPropagation();
                return onclick();
        }
    }
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
    bind:this={menu}
    role="menu"
    tabindex="-1"
    style="top: {top}px; left: {left}px; right: {right}px; bottom: {bottom}px;"
    class="fi-flow-context-menu absolute z-50 min-w-[180px] rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10"
    onclick={(e) => e.stopPropagation()}
    onkeydown={onKeyDown}
>
    {#if type === "node"}
        {#if !many}
            <button type="button" role="menuitem" class={itemClass} onclick={run(onOpenSettings)}>
                <Settings size={16} />
                {t("settings")}
            </button>
        {/if}
        <button type="button" role="menuitem" class={itemClass} onclick={run(onCopy)}>
            <Copy size={16} />
            {many ? t("copy_selection", count) : t("copy")}
        </button>
        <button type="button" role="menuitem" class={itemClass} onclick={run(onDuplicateNode)}>
            <Files size={16} />
            {many ? t("duplicate_selection", count) : t("duplicate")}
        </button>
        <button type="button" role="menuitem" class={dangerClass} onclick={run(onDeleteNode)}>
            <Trash2 size={16} />
            {many ? t("delete_selection", count) : t("delete")}
        </button>
    {:else}
        <button type="button" role="menuitem" class={itemClass} onclick={run(() => onAddNode?.())}>
            <Plus size={16} />
            {t("add_node")}
        </button>
        {#if canPaste}
            <button type="button" role="menuitem" class={itemClass} onclick={run(() => onPaste?.())}>
                <ClipboardPaste size={16} />
                {t("paste")}
            </button>
        {/if}
        <button type="button" role="menuitem" class={itemClass} onclick={run(() => onSelectAll?.())}>
            <SquareDashedMousePointer size={16} />
            {t("select_all")}
        </button>
    {/if}
</div>
