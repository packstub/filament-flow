<script>
    import BaseNode from "./BaseNode.svelte";
    import { Position } from "@xyflow/svelte";
    import FlowHandle from "./FlowHandle.svelte";

    let { id, data, selected } = $props();

    const inputs = [{ id: "input" }];
</script>

<div class="relative">
    <BaseNode {id} {data} {selected} type="condition" {inputs}>
        {#if data.condition}
            <div
                class="px-2 py-1 bg-purple-100/50 dark:bg-purple-900/30 rounded border border-purple-200 dark:border-purple-800 text-[10px] font-mono mb-6 text-purple-700 dark:text-purple-400"
            >
                {data.condition}
            </div>
        {/if}

        <!-- Custom outputs for True/False -->
        <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6">
            <div class="relative flex items-center justify-end h-3">
                <span
                    class="text-[8px] font-black text-emerald-600 dark:text-emerald-400 mr-2 uppercase"
                    >True</span
                >
                <FlowHandle
                    type="source"
                    position={Position.Right}
                    id="true"
                    nodeId={id}
                    class="!w-3 !h-3 !bg-emerald-500 !border-2 !border-white dark:!border-slate-800"
                />
            </div>
            <div class="relative flex items-center justify-end h-3">
                <span
                    class="text-[8px] font-black text-rose-600 dark:text-rose-400 mr-2 uppercase"
                    >False</span
                >
                <FlowHandle
                    type="source"
                    position={Position.Right}
                    id="false"
                    nodeId={id}
                    class="!w-3 !h-3 !bg-rose-500 !border-2 !border-white dark:!border-slate-800"
                />
            </div>
        </div>
    </BaseNode>
</div>
