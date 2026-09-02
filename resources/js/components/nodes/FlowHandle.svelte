<script lang="ts">
    import { Handle, Position, useNodeConnections } from "@xyflow/svelte";
    import { Plus } from "lucide-svelte";
    import { t } from "../labels";

    let {
        type,
        position,
        id,
        nodeId,
        class: className = "",
    }: {
        type: "source" | "target";
        position: Position;
        id: string;
        nodeId: string;
        class?: string;
    } = $props();

    const connections = useNodeConnections({
        get id() {
            return nodeId;
        },
        get handleType() {
            return type;
        },
        get handleId() {
            return id;
        },
    });

    const isConnected = $derived(connections.current.length > 0);

    function onPlusClick(event: MouseEvent) {
        event.stopPropagation();
        window.dispatchEvent(
            new CustomEvent("packstub-flow-handle-click", {
                detail: {
                    nodeId: nodeId,
                    handleId: id,
                    type: type,
                    clientX: event.clientX,
                    clientY: event.clientY,
                },
            }),
        );
    }
</script>

<div class="relative flex items-center justify-center w-3 h-3 group/handle">
    <Handle {type} {position} {id} class={className} />

    {#if !isConnected && (position === Position.Right || position === Position.Bottom)}
        <div
            class="absolute pointer-events-none border border-gray-300 dark:border-gray-600 opacity-60 group-hover/handle:opacity-100 transition-opacity z-9
            {position === Position.Right
                ? 'left-full w-4 border-t top-1/2'
                : ''}
            {position === Position.Bottom
                ? 'top-full h-4 border-l left-1/2'
                : ''}"
        ></div>

        <button
            type="button"
            onclick={onPlusClick}
            class="absolute w-4 h-4 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all hover:scale-125 shadow-sm z-50 border border-gray-600 dark:border-gray-400
            {position === Position.Right ? '-right-8' : ''}
            {position === Position.Bottom ? '-bottom-8' : ''}
            {!Object.values(Position).includes(position) ? '-left-8' : ''}"
            title={t("add_node")} aria-label={t("add_node")}
        >
            <Plus size={12} />
        </button>
    {/if}
</div>
