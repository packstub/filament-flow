<script lang="ts">
    import BaseNode from "./BaseNode.svelte";

    let { id, data, selected } = $props();

    const outputs = [{ id: "output" }];
</script>

<BaseNode {id} {data} {selected} type="trigger" {outputs} />
