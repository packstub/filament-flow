<script lang="ts">
    import { fly } from "svelte/transition";
    import { Zap, Rocket, Scale, ChevronLeft, X, Search, ChevronRight } from "lucide-svelte";
    import { t } from "./labels";

    let {
        availableNodes = {},
        isOpen = $bindable(false),
        selectedCategory = $bindable<string | null>(null),
        onSelectNode,
        onClose,
    }: {
        availableNodes?: Record<string, any>;
        isOpen: boolean;
        selectedCategory: string | null;
        onSelectNode: (type: string, data: any) => void;
        onClose?: () => void;
    } = $props();

    let searchQuery = $state("");

    const categories = [
        { id: "triggers", type: "trigger", icon: Zap, color: "text-amber-500", tile: "bg-amber-500" },
        { id: "actions", type: "action", icon: Rocket, color: "text-blue-500", tile: "bg-blue-600" },
        { id: "conditions", type: "condition", icon: Scale, color: "text-purple-500", tile: "bg-purple-600" },
    ];

    let allNodes = $derived(
        categories.flatMap((category) =>
            (availableNodes[category.id] || []).map((node: any) => ({
                category: category.id,
                type: category.type,
                label: node.name,
                icon: node.icon,
                description: node.description,
                color: category.tile,
                data: { label: node.name, description: node.description, identifier: node.identifier, config: {} },
            })),
        ),
    );

    let filteredNodes = $derived(
        searchQuery
            ? allNodes.filter((node) => node.label.toLowerCase().includes(searchQuery.toLowerCase()))
            : selectedCategory
              ? allNodes.filter((node) => node.category === selectedCategory)
              : [],
    );

    function onDragStart(event: DragEvent, nodeType: string, initialData: any) {
        event.dataTransfer?.setData("application/svelteflow", JSON.stringify({ type: nodeType, data: initialData }));
        if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
    }

    function handleNodeClick(node: any) {
        onSelectNode?.(node.type, JSON.parse(JSON.stringify(node.data)));
        closeSidebar();
    }

    function closeSidebar() {
        isOpen = false;
        searchQuery = "";
        selectedCategory = null;
        onClose?.();
    }

    $effect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeSidebar();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });
</script>

{#if isOpen}
    <div
        in:fly={{ x: 20, duration: 200 }}
        out:fly={{ x: 20, duration: 200 }}
        class="fi-flow-sidebar absolute top-2 right-2 bottom-2 z-40 flex w-80 flex-col overflow-hidden rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10"
    >
        <div class="sticky top-0 z-10 border-b border-gray-100 p-5 dark:border-gray-800">
            <div class="mb-4 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    {#if selectedCategory && !searchQuery}
                        <button
                            type="button"
                            onclick={() => (selectedCategory = null)}
                            title={t("back")}
                            class="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                        >
                            <ChevronLeft size={16} />
                        </button>
                    {/if}
                    <h3 class="text-xs font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                        {#if searchQuery}
                            {t("search_results")}
                        {:else if selectedCategory}
                            {t(selectedCategory)}
                        {:else}
                            {t("components")}
                        {/if}
                    </h3>
                </div>
                <button
                    onclick={closeSidebar}
                    type="button"
                    title={t("close")}
                    class="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                    <X size={16} />
                </button>
            </div>

            <div class="relative">
                <input
                    type="text"
                    placeholder={t("search")}
                    bind:value={searchQuery}
                    class="w-full rounded-lg border-none bg-white py-2 pr-3 pl-9 text-sm text-gray-900 ring-1 ring-gray-950/10 transition-all focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-100 dark:ring-white/10"
                />
                <Search size={16} class="absolute top-2.5 left-3 text-gray-400 dark:text-gray-500" />
            </div>
        </div>

        <div class="relative flex-grow overflow-y-auto p-5">
            {#if searchQuery || selectedCategory}
                <div in:fly={{ x: 20, duration: 300, delay: 150 }} out:fly={{ x: 20, duration: 200 }} class="flex flex-col gap-3">
                    {#each filteredNodes as node (node.data.identifier)}
                        <button
                            type="button"
                            class="group flex w-full cursor-grab items-center gap-4 rounded-xl border-none bg-white p-3 text-left shadow-sm ring-1 ring-gray-950/5 transition-all hover:ring-primary-500 active:cursor-grabbing dark:bg-gray-800 dark:ring-white/10 dark:hover:ring-primary-400"
                            draggable="true"
                            ondragstart={(e) => onDragStart(e, node.type, node.data)}
                            onclick={() => handleNodeClick(node)}
                        >
                            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg {node.color} p-2 text-white transition-transform group-hover:scale-110">
                                {@html node.icon || "<span>?</span>"}
                            </div>
                            <div class="min-w-0 flex-grow">
                                <div class="truncate text-xs font-semibold tracking-tight text-gray-800 dark:text-gray-100">{node.label}</div>
                                <div class="mt-0.5 truncate text-[10px] text-gray-400 dark:text-gray-500">{node.description}</div>
                            </div>
                        </button>
                    {/each}

                    {#if filteredNodes.length === 0}
                        <div class="py-10 text-center">
                            <p class="text-sm text-gray-400 dark:text-gray-500">{t("no_results", { query: searchQuery })}</p>
                        </div>
                    {/if}
                </div>
            {:else}
                <div in:fly={{ x: -20, duration: 300, delay: 150 }} out:fly={{ x: -20, duration: 200 }} class="flex flex-col gap-3">
                    {#each categories as category (category.id)}
                        <button
                            type="button"
                            onclick={() => (selectedCategory = category.id)}
                            class="group relative flex w-full flex-col gap-1 overflow-hidden rounded-xl border-none bg-white p-4 text-left shadow-sm ring-1 ring-gray-950/5 transition-all hover:ring-primary-500 dark:bg-gray-800 dark:ring-white/10 dark:hover:ring-primary-400"
                        >
                            <div class="mb-1 flex items-center gap-3">
                                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700/50 {category.color}">
                                    <category.icon size={16} />
                                </div>
                                <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">{t(category.id)}</span>
                                <ChevronRight size={16} class="ml-auto text-gray-300 transition-colors group-hover:text-primary-500 dark:text-gray-600 dark:group-hover:text-primary-400" />
                            </div>
                            <p class="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">{t(`${category.id}_description`)}</p>
                        </button>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
{/if}
