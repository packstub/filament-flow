<script>
    import { fly } from "svelte/transition";

    let {
        availableComponents = {},
        isOpen = $bindable(false),
        onSelectNode,
    } = $props();

    let searchQuery = $state("");
    let selectedCategory = $state(null);

    const categories = [
        {
            id: "triggers",
            label: "Triggers",
            icon: "⚡️",
            color: "bg-amber-500",
            description: "Events that start your workflow",
        },
        {
            id: "actions",
            label: "Actions",
            icon: "🚀",
            color: "bg-blue-600",
            description: "Operations your workflow performs",
        },
        {
            id: "conditions",
            label: "Conditions",
            icon: "⚖️",
            color: "bg-purple-600",
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
            isOpen = false;
        }
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
</script>

{#if isOpen}
    <div
        class="absolute top-4 right-4 bottom-4 w-80 bg-white/95 backdrop-blur-xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 z-40 rounded-2xl shadow-2xl p-0 animate-in slide-in-from-right-10"
    >
        <!-- Sticky Header Section -->
        <div
            class="p-5 border-b border-slate-100 bg-white/50 backdrop-blur-sm sticky top-0 z-10"
        >
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                    {#if selectedCategory && !searchQuery}
                        <button
                            type="button"
                            onclick={goBack}
                            title="Go back"
                            class="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2.5"
                                stroke="currentColor"
                                class="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                    {/if}
                    <div>
                        <h3
                            class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]"
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
                    class="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <!-- Search Input (Fixed) -->
            <div class="relative">
                <input
                    type="text"
                    placeholder="Search nodes..."
                    bind:value={searchQuery}
                    class="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all pl-9 bg-slate-50/50"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    class="w-4 h-4 absolute left-3 top-3 text-slate-400"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </div>
        </div>

        <!-- Scrollable Content -->
        <div class="flex-grow overflow-y-auto p-5 relative">
            {#if searchQuery || selectedCategory}
                <div
                    in:fly={{ x: 20, duration: 300, delay: 150 }}
                    out:fly={{ x: -20, duration: 200 }}
                    class="flex flex-col gap-3"
                >
                    {#each filteredNodes as node}
                        <button
                            type="button"
                            class="group flex items-center gap-4 p-3 bg-white border border-slate-100 rounded-xl shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all active:cursor-grabbing text-left w-full"
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
                                    class="text-xs font-bold text-slate-800 tracking-tight truncate"
                                >
                                    {node.label}
                                </div>
                                <div
                                    class="text-[10px] text-slate-400 mt-0.5 truncate"
                                >
                                    {node.description}
                                </div>
                            </div>
                        </button>
                    {/each}

                    {#if filteredNodes.length === 0}
                        <div class="text-center py-10">
                            <p class="text-sm text-slate-400">
                                No nodes found matching "{searchQuery}"
                            </p>
                        </div>
                    {/if}
                </div>
            {:else}
                <div
                    in:fly={{ x: -20, duration: 300, delay: 150 }}
                    out:fly={{ x: 20, duration: 200 }}
                    class="flex flex-col gap-3"
                >
                    {#each categories as category}
                        <button
                            type="button"
                            onclick={() => selectCategory(category.id)}
                            class="group relative flex flex-col gap-1 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all w-full text-left overflow-hidden"
                        >
                            <div class="flex items-center gap-3 mb-1">
                                <div
                                    class="w-8 h-8 {category.color} rounded-lg flex items-center justify-center text-white text-sm"
                                >
                                    {category.icon}
                                </div>
                                <span class="text-sm font-bold text-slate-800"
                                    >{category.label}</span
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 ml-auto text-slate-300 group-hover:text-blue-500 transition-colors"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </div>
                            <p
                                class="text-[11px] text-slate-500 leading-relaxed"
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
