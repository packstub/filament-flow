<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <div
        x-data="packstubFlowBuilder({
            state: $wire.{{ $applyStateBindingModifiers("\$entangle('{$getStatePath()}')") }},
            nodes: @js($getAvailableNodes()),
            labels: @js($getTranslations()),
        })"
        x-on:packstub-flow-open-node.window="$wire.dispatch('packstub-flow.open-node', { id: $event.detail.id, identifier: $event.detail.identifier, config: $event.detail.config })"
        x-on:packstub-flow-node-updated.window="$dispatch('packstub-flow-apply-node', { id: $event.detail.id, config: $event.detail.config })"
        class="fi-flow-builder"
        wire:ignore
    >
        <div x-ref="canvas" class="fi-flow-canvas" style="min-height: {{ $getMinHeight() }}; width: 100%;"></div>

        @livewire('packstub-flow-manage-node', [], key($getId().'-manage-node'))
    </div>
</x-dynamic-component>
