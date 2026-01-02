<script>
    import BaseNode from "./BaseNode.svelte";

    let { data, selected } = $props();

    const outputs = [{ id: "output" }];
</script>

<BaseNode {data} {selected} type="trigger" {outputs}>
    {#if data.event}
        <div
            class="mt-2 p-2 bg-orange-100 rounded text-xs border border-orange-200"
        >
            <strong>Event:</strong>
            {data.event}
        </div>
    {/if}
</BaseNode>
