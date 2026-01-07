<script>
    import BaseNode from "./BaseNode.svelte";

    let { id, data, selected } = $props();

    const inputs = [{ id: "input" }];
    const outputs = [{ id: "output" }];
</script>

<BaseNode {id} {data} {selected} type="action" {inputs} {outputs}>
    {#if data.action}
        <div
            class="flex items-center gap-2 px-2 py-1 bg-blue-100/50 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800 text-[10px] font-semibold text-blue-700 dark:text-blue-300"
        >
            <span>⚡</span>
            {data.action}
        </div>
    {/if}
</BaseNode>
