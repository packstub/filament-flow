<script>
    import BaseNode from "./BaseNode.svelte";
    import { Handle, Position } from "@xyflow/svelte";

    let { data, selected } = $props();

    const inputs = [{ id: "input" }];
</script>

<div class="relative">
    <BaseNode {data} {selected} type="condition" {inputs}>
        {#if data.condition}
            <div
                class="mt-2 p-2 bg-purple-100 rounded text-xs border border-purple-200"
            >
                <strong>If:</strong>
                {data.condition}
            </div>
        {/if}

        <!-- Custom outputs for True/False -->
        <div class="flex flex-col gap-4 mt-2">
            <div class="relative flex items-center justify-end h-6">
                <span class="text-[10px] font-bold text-green-600 mr-2"
                    >TRUE</span
                >
                <Handle
                    type="source"
                    position={Position.Right}
                    id="true"
                    style="top: 50%; right: -21px; width: 10px; height: 10px; background: #10b981;"
                />
            </div>
            <div class="relative flex items-center justify-end h-6">
                <span class="text-[10px] font-bold text-red-600 mr-2"
                    >FALSE</span
                >
                <Handle
                    type="source"
                    position={Position.Right}
                    id="false"
                    style="top: 50%; right: -21px; width: 10px; height: 10px; background: #ef4444;"
                />
            </div>
        </div>
    </BaseNode>
</div>
