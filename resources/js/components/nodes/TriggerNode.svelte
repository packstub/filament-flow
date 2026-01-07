<script>
    import BaseNode from "./BaseNode.svelte";

    let { id, data, selected } = $props();

    const outputs = [{ id: "output" }];
</script>

<BaseNode {id} {data} {selected} type="trigger" {outputs}>
    {#if data.event}
        <div
            class="px-2 py-1 bg-amber-100/50 dark:bg-amber-900/30 rounded border border-amber-200 dark:border-amber-800 text-[10px] break-all font-mono text-amber-700 dark:text-amber-400"
        >
            {data.event.split("\\").pop()}
        </div>
    {/if}
</BaseNode>
