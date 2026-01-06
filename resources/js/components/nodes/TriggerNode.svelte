<script>
    import BaseNode from "./BaseNode.svelte";

    let { id, data, selected } = $props();

    const outputs = [{ id: "output" }];
</script>

<BaseNode {id} {data} {selected} type="trigger" {outputs}>
    {#if data.event}
        <div
            class="px-2 py-1 bg-amber-100/50 rounded border border-amber-200 text-[10px] break-all font-mono"
        >
            {data.event.split("\\").pop()}
        </div>
    {/if}
</BaseNode>
