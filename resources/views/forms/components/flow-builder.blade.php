<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <div x-data="flowBuilder({
            state: $wire.entangle('{{ $getStatePath() }}'),
            components: @js($getAvailableComponents()),
        })">
        <div x-ref="canvas" style="min-height: 500px; width: 100%;"></div>
    </div>
</x-dynamic-component>