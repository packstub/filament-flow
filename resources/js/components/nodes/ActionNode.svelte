<script>
    import BaseNode from "./BaseNode.svelte";

    let { data, selected } = $props();

    const inputs = [{ id: "input" }];
    const outputs = [{ id: "output" }];
</script>

<BaseNode {data} {selected} type="action" {inputs} {outputs}>
    {#if data.action}
        <div
            class="mt-2 p-2 bg-blue-100 rounded text-xs border border-blue-200"
        >
            <strong>Action:</strong>
            {data.action}
        </div>
    {/if}
</BaseNode>
