<script lang="ts">
    import { Handle, Position, useNodeConnections } from "@xyflow/svelte";
    import { Plus } from "lucide-svelte";

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

    function onPlusClick(event) {
        event.stopPropagation();
        window.dispatchEvent(
            new CustomEvent("handle-click", {
                detail: {
                    nodeId: nodeId,
                    handleId: id,
                    type: type,
                },
            }),
        );
    }
</script>

<div class="relative flex items-center justify-center w-3 h-3 group/handle">
    <Handle {type} {position} {id} class={className} />

    {#if !isConnected}
        <button
            type="button"
            onclick={onPlusClick}
            class="absolute {position === Position.Right
                ? '-right-8'
                : '-left-8'} w-4 h-4 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all hover:scale-125 shadow-sm z-50 border border-gray-600 dark:border-gray-400"
            title="Add Node"
        >
            <Plus size={20} />
        </button>
    {/if}
</div>
