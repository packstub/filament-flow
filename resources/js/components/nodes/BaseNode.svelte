<script>
    import { Handle, Position } from "@xyflow/svelte";

    let {
        data,
        selected,
        type = "default",
        inputs = [],
        outputs = [],
        children,
    } = $props();

    const nodeStyles = {
        trigger: "border-orange-500 bg-orange-50",
        action: "border-blue-500 bg-blue-50",
        condition: "border-purple-500 bg-purple-50",
        default: "border-gray-500 bg-gray-50",
    };

    const headerStyles = {
        trigger: "bg-orange-500 text-white",
        action: "bg-blue-500 text-white",
        condition: "bg-purple-500 text-white",
        default: "bg-gray-500 text-white",
    };
</script>

<div
    class="shadow-lg rounded-lg border-2 {nodeStyles[type]} {selected
        ? 'ring-2 ring-offset-2 ring-blue-400'
        : ''} min-w-[150px] overflow-hidden"
>
    <!-- Handles -->
    {#each inputs as input}
        <Handle
            type="target"
            position={Position.Left}
            id={input.id}
            style="width: 10px; height: 10px; background: #666;"
        />
    {/each}

    <div class="px-3 py-1 font-bold text-xs uppercase {headerStyles[type]}">
        {data.label || "Node"}
    </div>

    <div class="p-3 bg-white text-sm">
        {#if data.description}
            <p class="text-gray-600 mb-2">{data.description}</p>
        {/if}

        {@render children?.()}
    </div>

    {#each outputs as output}
        <Handle
            type="source"
            position={Position.Right}
            id={output.id}
            style="width: 10px; height: 10px; background: #666;"
        />
    {/each}
</div>
