<script lang="ts">
    import BaseNode from "./BaseNode.svelte";
    import { Position } from "@xyflow/svelte";
    import FlowHandle from "./FlowHandle.svelte";
    import { t } from "../labels";

    let { id, data, selected } = $props();

    const inputs = [{ id: "input" }];
</script>

<div class="relative">
    <BaseNode {id} {data} {selected} type="condition" {inputs}>
        <div class="mb-6"></div>

        <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6">
            <div class="relative flex h-3 items-center justify-end">
                <span class="mr-2 text-[9px] font-medium text-success-600 dark:text-success-400">{t("true")}</span>
                <FlowHandle type="source" position={Position.Right} id="true" nodeId={id} class="!h-3 !w-3 !border-2 !border-white !bg-success-500 dark:!border-gray-800" />
            </div>
            <div class="relative flex h-3 items-center justify-end">
                <span class="mr-2 text-[9px] font-medium text-danger-600 dark:text-danger-400">{t("false")}</span>
                <FlowHandle type="source" position={Position.Right} id="false" nodeId={id} class="!h-3 !w-3 !border-2 !border-white !bg-danger-500 dark:!border-gray-800" />
            </div>
        </div>
    </BaseNode>
</div>
