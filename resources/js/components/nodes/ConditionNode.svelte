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
                <span class="mr-2 text-[8px] font-black text-emerald-600 uppercase dark:text-emerald-400">{t("true")}</span>
                <FlowHandle type="source" position={Position.Right} id="true" nodeId={id} class="!h-3 !w-3 !border-2 !border-white !bg-emerald-500 dark:!border-gray-800" />
            </div>
            <div class="relative flex h-3 items-center justify-end">
                <span class="mr-2 text-[8px] font-black text-rose-600 uppercase dark:text-rose-400">{t("false")}</span>
                <FlowHandle type="source" position={Position.Right} id="false" nodeId={id} class="!h-3 !w-3 !border-2 !border-white !bg-rose-500 dark:!border-gray-800" />
            </div>
        </div>
    </BaseNode>
</div>
