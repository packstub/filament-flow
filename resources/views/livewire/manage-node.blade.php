<div x-data="{ visible: @entangle('visible') }" x-show="visible" x-transition:enter="transition ease-out duration-300"
    x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
    x-transition:leave="transition ease-in duration-300" x-transition:leave-start="translate-x-0"
    x-transition:leave-end="translate-x-full"
    class="fixed inset-y-0 right-0 w-96 bg-white shadow-xl z-50 overflow-y-auto border-l border-gray-200"
    style="display: none;">
    <div class="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 class="font-bold text-gray-800 uppercase tracking-wider text-xs">Node Settings</h3>
        <button wire:click="close" class="text-gray-400 hover:text-gray-600">
            <x-heroicon-o-x-mark class="w-5 h-5" />
        </button>
    </div>

    <div class="p-4">
        {{ $this->form }}
    </div>

    <div class="p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-2">
        {{ $this->cancelAction }}
        {{ $this->saveAction }}
    </div>
</div>