<script lang="ts">
    import { fly } from "svelte/transition";
    import {
        Zap,
        Rocket,
        Scale,
        ChevronLeft,
        X,
        Search,
        ChevronRight,
    } from "lucide-svelte";

    let {
        availableComponents = {},
        isOpen = $bindable(false),
        onSelectNode,
    }: {
        availableComponents?: Record<string, any>;
        isOpen: boolean;
        onSelectNode: (type: string, data: any) => void;
    } = $props();

    let searchQuery = $state("");
    let selectedCategory = $state(null);

    const categories = [
        {
            id: "triggers",
            label: "Triggers",
            icon: Zap,
            color: "text-amber-500",
            description: "Events that start your workflow",
        },
        {
            id: "actions",
            label: "Actions",
            icon: Rocket,
            color: "text-blue-500",
            description: "Operations your workflow performs",
        },
        {
            id: "conditions",
            label: "Conditions",
            icon: Scale,
            color: "text-purple-500",
            description: "Logic to branch your workflow",
        },
    ];

    function createNodeList(components) {
        const triggers = (components.triggers || []).map((t) => ({
            category: "triggers",
            type: "trigger",
            label: t.name,
            icon: t.icon,
            description: t.description,
            color: "bg-amber-500",
            data: {
                label: t.name,
                description: t.description,
                identifier: t.identifier,
            },
        }));

        const actions = (components.actions || []).map((a) => ({
            category: "actions",
            type: "action",
            label: a.name,
            icon: a.icon,
            description: a.description,
            color: "bg-blue-600",
            data: {
                label: a.name,
                description: a.description,
                identifier: a.identifier,
            },
        }));

        const conditions = (components.conditions || []).map((c) => ({
            category: "conditions",
            type: "condition",
            label: c.name,
            icon: c.icon,
            description: c.description,
            color: "bg-purple-600",
            data: {
                label: c.name,
                description: c.description,
                identifier: c.identifier,
            },
        }));

        return [...triggers, ...actions, ...conditions];
    }

    let allNodes = $derived(createNodeList(availableComponents));

    let filteredNodes = $derived(
        searchQuery
            ? allNodes.filter((node) =>
                  node.label.toLowerCase().includes(searchQuery.toLowerCase()),
              )
            : selectedCategory
              ? allNodes.filter((node) => node.category === selectedCategory)
              : [],
    );

    function onDragStart(event, nodeType, initialData) {
        event.dataTransfer.setData(
            "application/svelteflow",
            JSON.stringify({ type: nodeType, data: initialData }),
        );
        event.dataTransfer.effectAllowed = "move";
    }

    function handleNodeClick(node) {
        if (onSelectNode) {
            onSelectNode(node.type, node.data);
        }
        closeSidebar();
    }

    function closeSidebar() {
        isOpen = false;
        searchQuery = "";
        selectedCategory = null;
    }

    function goBack() {
        selectedCategory = null;
    }

    function selectCategory(id) {
        selectedCategory = id;
    }

    $effect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeSidebar();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });
</script>

{#if isOpen}
    <div
        in:fly={{ x: 20, duration: 200 }}
        out:fly={{ x: 20, duration: 200 }}
        class="absolute top-4 right-4 bottom-4 w-80 bg-white dark:bg-gray-900 border border-transparent ring-1 ring-gray-950/5 dark:ring-white/10 flex flex-col overflow-hidden transition-all duration-300 z-40 rounded-2xl shadow-2xl p-0"
    >
        <!-- Sticky Header Section -->
        <div
            class="p-5 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10"
        >
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                    {#if selectedCategory && !searchQuery}
                        <button
                            type="button"
                            onclick={goBack}
                            title="Go back"
                            class="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                        >
                            <ChevronLeft size={16} />
                        </button>
                    {/if}
                    <div>
                        <h3
                            class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest"
                        >
                            {#if searchQuery}
                                Search Results
                            {:else if selectedCategory}
                                {categories.find(
                                    (c) => c.id === selectedCategory,
                                )?.label}
                            {:else}
                                Components
                            {/if}
                        </h3>
                    </div>
                </div>
                <button
                    onclick={closeSidebar}
                    type="button"
                    title="Close"
                    class="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                    <X size={16} />
                </button>
            </div>

            <!-- Search Input (Fixed) -->
            <div class="relative">
                <input
                    type="text"
                    placeholder="Search nodes..."
                    bind:value={searchQuery}
                    class="w-full text-sm px-3 py-2 rounded-lg border-none ring-1 ring-gray-950/10 dark:ring-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 transition-all pl-9"
                />
                <Search
                    size={16}
                    class="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500"
                />
            </div>
        </div>

        <!-- Scrollable Content -->
        <div class="flex-grow overflow-y-auto p-5 relative">
            {#if searchQuery || selectedCategory}
                <div
                    in:fly={{ x: 20, duration: 300, delay: 150 }}
                    out:fly={{ x: 20, duration: 200 }}
                    class="flex flex-col gap-3"
                >
                    {#each filteredNodes as node}
                        <button
                            type="button"
                            class="group flex items-center gap-4 p-3 bg-white dark:bg-gray-800 border-none ring-1 ring-gray-950/5 dark:ring-white/10 rounded-xl shadow-sm cursor-grab hover:ring-primary-500 dark:hover:ring-primary-400 transition-all active:cursor-grabbing text-left w-full"
                            draggable="true"
                            ondragstart={(e) =>
                                onDragStart(e, node.type, node.data)}
                            onclick={() => handleNodeClick(node)}
                        >
                            <div
                                class="w-10 h-10 {node.color} p-2 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0"
                            >
                                {@html node.icon || "<span>?</span>"}
                            </div>
                            <div class="min-w-0 flex-grow">
                                <div
                                    class="text-xs font-semibold text-gray-800 dark:text-gray-100 tracking-tight truncate"
                                >
                                    {node.label}
                                </div>
                                <div
                                    class="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 truncate"
                                >
                                    {node.description}
                                </div>
                            </div>
                        </button>
                    {/each}

                    {#if filteredNodes.length === 0}
                        <div class="text-center py-10">
                            <p class="text-sm text-gray-400 dark:text-gray-500">
                                No nodes found matching "{searchQuery}"
                            </p>
                        </div>
                    {/if}
                </div>
            {:else}
                <div
                    in:fly={{ x: -20, duration: 300, delay: 150 }}
                    out:fly={{ x: -20, duration: 200 }}
                    class="flex flex-col gap-3"
                >
                    {#each categories as category}
                        <button
                            type="button"
                            onclick={() => selectCategory(category.id)}
                            class="group relative flex flex-col gap-1 p-4 bg-white dark:bg-gray-800 border-none ring-1 ring-gray-950/5 dark:ring-white/10 rounded-xl shadow-sm hover:ring-primary-500 dark:hover:ring-primary-400 transition-all w-full text-left overflow-hidden"
                        >
                            <div class="flex items-center gap-3 mb-1">
                                <div
                                    class="w-8 h-8 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-center {category.color}"
                                >
                                    <category.icon size={16} />
                                </div>
                                <span
                                    class="text-sm font-semibold text-gray-800 dark:text-gray-100"
                                    >{category.label}</span
                                >
                                <ChevronRight
                                    size={16}
                                    class="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors"
                                />
                            </div>
                            <p
                                class="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed"
                            >
                                {category.description}
                            </p>
                        </button>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
{/if}
