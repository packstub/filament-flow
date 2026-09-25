{{--
    On a phone, Save leaves the header: this bar comes up from the bottom of
    the page while the canvas has unsaved changes. Discard reloads the page
    from the last save.
--}}
<div class="fi-flow">
<div
    x-data
    x-show="$store.packstubFlowEditor?.dirty"
    x-cloak
    x-transition.opacity
    class="fi-flow-unsaved-bar fixed inset-x-0 bottom-0 z-30 flex items-center gap-x-3 border-t border-gray-200 bg-white px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg sm:hidden dark:border-white/10 dark:bg-gray-900"
>
    <span class="size-2 shrink-0 rounded-full bg-primary-500" aria-hidden="true"></span>

    <span class="flex-1 text-sm font-medium text-gray-950 dark:text-white">
        {{ __('packstub-flow::flow.editor.unsaved') }}
    </span>

    <x-filament::button color="gray" size="sm" x-on:click="window.location.reload()">
        {{ __('packstub-flow::flow.editor.discard') }}
    </x-filament::button>

    <x-filament::button type="submit" form-id="form" size="sm">
        {{ __('packstub-flow::flow.editor.save') }}
    </x-filament::button>
</div>
</div>
