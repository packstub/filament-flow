<script>
    import { slide } from "svelte/transition";

    let {
        node = $bindable(null),
        availableComponents = {},
        onClose,
    } = $props();

    let nodeType = $derived(node?.type);
    let componentList = $derived(
        nodeType === "trigger"
            ? availableComponents.triggers
            : nodeType === "action"
              ? availableComponents.actions
              : nodeType === "condition"
                ? availableComponents.conditions
                : [],
    );

    let selectedComponent = $derived(
        componentList?.find((c) => c.identifier === node?.data?.identifier),
    );

    function updateLabel(e) {
        node.data.label = e.target.value;
    }

    function updateConfig(key, value) {
        if (!node.data.config) node.data.config = {};
        node.data.config[key] = value;
    }
</script>

{#if node}
    <div
        transition:slide={{ axis: "x" }}
        class="w-80 border-l border-slate-200 bg-slate-50 flex flex-col h-full shadow-inner"
    >
        <!-- Header -->
        <div
            class="p-4 border-b border-slate-200 bg-white flex items-center justify-between"
        >
            <h3
                class="font-bold text-slate-800 uppercase tracking-wider text-xs"
            >
                Node Settings
            </h3>
            <button
                onclick={onClose}
                class="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close Settings"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <div class="flex-grow overflow-y-auto p-4 space-y-6">
            <!-- Basic Info -->
            <div class="space-y-4">
                <div>
                    <label
                        for="node-label"
                        class="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2"
                        >Display Label</label
                    >
                    <input
                        id="node-label"
                        type="text"
                        value={node.data.label}
                        oninput={updateLabel}
                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>

                {#if componentList && componentList.length > 0}
                    <div>
                        <label
                            for="node-type"
                            class="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2"
                            >Component Type</label
                        >
                        <select
                            id="node-type"
                            value={node.data.identifier}
                            onchange={(e) => {
                                const comp = componentList.find(
                                    (c) => c.identifier === e.target.value,
                                );
                                node.data.identifier = comp.identifier;
                                node.data.description = comp.description;
                                // Initialize empty config
                                node.data.config = {};
                            }}
                            class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        >
                            <option value="">Select a {nodeType}...</option>
                            {#each componentList as comp}
                                <option value={comp.identifier}
                                    >{comp.name}</option
                                >
                            {/each}
                        </select>
                    </div>
                {/if}
            </div>

            <!-- Dynamic Config -->
            {#if selectedComponent && selectedComponent.schema && selectedComponent.schema.length > 0}
                <div class="pt-4 border-t border-slate-200">
                    <h4
                        class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4"
                    >
                        Configuration
                    </h4>
                    <div class="space-y-4">
                        {#each selectedComponent.schema as field}
                            <div class="space-y-2">
                                <label
                                    for="field-{field.name}"
                                    class="text-sm font-semibold text-slate-700 flex items-center gap-1"
                                >
                                    {field.label}
                                    {#if field.required}<span
                                            class="text-rose-500">*</span
                                        >{/if}
                                </label>

                                {#if field.type === "textarea"}
                                    <textarea
                                        id="field-{field.name}"
                                        placeholder={field.placeholder}
                                        value={node.data.config?.[field.name] ||
                                            ""}
                                        oninput={(e) =>
                                            updateConfig(
                                                field.name,
                                                e.target.value,
                                            )}
                                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    ></textarea>
                                {:else if field.type === "select" || field.type === "searchable-select"}
                                    {#if field.type === "searchable-select"}
                                        <input
                                            list="list-{field.name}"
                                            id="field-{field.name}"
                                            placeholder={field.placeholder}
                                            value={node.data.config?.[
                                                field.name
                                            ] || ""}
                                            onchange={(e) =>
                                                updateConfig(
                                                    field.name,
                                                    e.target.value,
                                                )}
                                            class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        />
                                        <datalist id="list-{field.name}">
                                            {#if field.options}
                                                {#each Object.entries(field.options) as [value, label]}
                                                    <option {value}
                                                        >{label}</option
                                                    >
                                                {/each}
                                            {/if}
                                        </datalist>
                                    {:else}
                                        <select
                                            id="field-{field.name}"
                                            value={node.data.config?.[
                                                field.name
                                            ] || ""}
                                            onchange={(e) =>
                                                updateConfig(
                                                    field.name,
                                                    e.target.value,
                                                )}
                                            class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        >
                                            <option value="" disabled selected
                                                >{field.placeholder ||
                                                    "Select an option..."}</option
                                            >
                                            {#if field.options}
                                                {#each Object.entries(field.options) as [value, label]}
                                                    <option {value}
                                                        >{label}</option
                                                    >
                                                {/each}
                                            {/if}
                                        </select>
                                    {/if}
                                {:else}
                                    <input
                                        id="field-{field.name}"
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        value={node.data.config?.[field.name] ||
                                            ""}
                                        oninput={(e) =>
                                            updateConfig(
                                                field.name,
                                                e.target.value,
                                            )}
                                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    />
                                {/if}
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>

        <!-- Footer -->
        <div class="p-4 bg-white border-t border-slate-200">
            <p class="text-[10px] italic text-slate-400 break-all">
                ID: {node.id}
            </p>
        </div>
    </div>
{/if}
