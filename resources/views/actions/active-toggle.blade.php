@php
    use Filament\Support\View\Components\ToggleComponent;

    $active = (bool) ($action->getLivewire()->data['is_active'] ?? false);
@endphp

{{-- Borderless, next to the workflow's name: a switch, then "Active" / "Inactive". --}}
<span class="fi-flow">
<button
    type="button"
    role="switch"
    aria-checked="{{ $active ? 'true' : 'false' }}"
    wire:click="{{ $action->getLivewireClickHandler() }}"
    wire:loading.attr="disabled"
    wire:target="{{ $action->getLivewireTarget() }}"
    class="fi-flow-active-toggle -ms-2 inline-flex h-9 cursor-pointer items-center gap-x-2.5 rounded-lg px-2 text-sm font-medium outline-none hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary-600 disabled:cursor-wait disabled:opacity-70 dark:text-white dark:hover:bg-white/5"
>
    <span
        @class([
            'fi-toggle pointer-events-none',
            'fi-toggle-on' => $active,
            'fi-toggle-off' => ! $active,
            ...\Filament\Support\get_component_color_classes(ToggleComponent::class, $active ? 'success' : 'gray'),
        ])
    >
        <span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </span>
    </span>

    <span @class([
        'text-success-700 dark:text-success-400' => $active,
        'text-gray-500 dark:text-gray-400' => ! $active,
    ])>{{ $action->getLabel() }}</span>
</button>
</span>
