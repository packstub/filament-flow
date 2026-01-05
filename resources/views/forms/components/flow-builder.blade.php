<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <div x-data="flowBuilder({
            state: $wire.entangle('{{ $getStatePath() }}'),
            components: @js($getAvailableComponents()),
        })"
        x-on:open-node-settings.window="$wire.dispatch('open-node-settings', { id: $event.detail.id, identifier: $event.detail.identifier, config: $event.detail.config })"
        x-on:node-updated.window="$dispatch('update-node-config', { id: $event.detail.id, config: $event.detail.config })">
        <div wire:ignore x-ref="canvas" style="min-height: 500px; width: 100%;"></div>

        @livewire('laravel-flow::manage-node')
    </div>
</x-dynamic-component>