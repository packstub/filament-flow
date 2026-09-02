<script lang="ts">
    import BaseNode from "./BaseNode.svelte";
    import { Position } from "@xyflow/svelte";
    import FlowHandle from "./FlowHandle.svelte";
    import { outputsFor } from "../nodeDefinitions";
    import { t } from "../labels";

    let { id, data, selected } = $props();

    const inputs = [{ id: "input" }];

    // Output handles come from the node definition (For each: body / done,
    // Ask for approval: approved / rejected / timed out); a node whose
    // error handling is "follow the error branch" gets an extra Error handle.
    const outputs = $derived(outputsFor(data?.identifier, [{ id: "output", label: t("next") }]));
    const hasErrorHandle = $derived(data?.config?._on_error === "branch");
    const multiple = $derived(outputs.length > 1 || hasErrorHandle);
</script>

{#if multiple}
    <div class="relative">
        <BaseNode {id} {data} {selected} type="action" {inputs}>
            <div style="height: {(outputs.length + (hasErrorHandle ? 1 : 0)) * 24 - 8}px"></div>

            <div class="absolute -right-1.5 top-[60px] flex flex-col gap-3">
                {#each outputs as output (output.id)}
                    <div class="relative flex h-3 items-center justify-end">
                        <span class="mr-2 text-[8px] font-black uppercase text-blue-700 dark:text-blue-300">{output.label}</span>
                        <FlowHandle type="source" position={Position.Right} id={output.id} nodeId={id} class="!h-3 !w-3 !border-2 !border-white !bg-blue-500 dark:!border-gray-800" />
                    </div>
                {/each}
                {#if hasErrorHandle}
                    <div class="relative flex h-3 items-center justify-end">
                        <span class="mr-2 text-[8px] font-black uppercase text-rose-600 dark:text-rose-400">{t("error")}</span>
                        <FlowHandle type="source" position={Position.Right} id="error" nodeId={id} class="!h-3 !w-3 !border-2 !border-white !bg-rose-500 dark:!border-gray-800" />
                    </div>
                {/if}
            </div>
        </BaseNode>
    </div>
{:else}
    <BaseNode {id} {data} {selected} type="action" {inputs} outputs={outputs.map((o) => ({ id: o.id }))} />
{/if}
