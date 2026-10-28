<script lang="ts">
    import BaseNode from "./BaseNode.svelte";
    import { Position } from "@xyflow/svelte";
    import FlowHandle from "./FlowHandle.svelte";
    import { t } from "../labels";

    let { id, data, selected } = $props();

    const inputs = [{ id: "input" }];
</script>

<!-- True and False are rows of the card's body; their handles sit outside the card (it clips),
     anchored to its bottom with the same row heights, so they line up with the rows whatever
     the description above them makes the card's height. -->
<div class="relative">
    <BaseNode {id} {data} {selected} type="condition" {inputs}>
        <div class="fi-flow-branches mt-1 flex flex-col items-end gap-1.5 text-[10px]">
            <span class="flex h-4 items-center font-medium text-success-600 dark:text-success-400">{t("true")}</span>
            <span class="flex h-4 items-center font-medium text-danger-600 dark:text-danger-400">{t("false")}</span>
        </div>
    </BaseNode>

    <div class="absolute -right-1.5 bottom-2.5 flex flex-col gap-1.5">
        <div class="flex h-4 items-center">
            <FlowHandle type="source" position={Position.Right} id="true" nodeId={id} class="!h-3 !w-3 !border-2 !border-white !bg-success-500 dark:!border-gray-800" />
        </div>
        <div class="flex h-4 items-center">
            <FlowHandle type="source" position={Position.Right} id="false" nodeId={id} class="!h-3 !w-3 !border-2 !border-white !bg-danger-500 dark:!border-gray-800" />
        </div>
    </div>
</div>
