<div
    {{ $extraAttributes->merge(['aria-labelledby' => "{$id}-label", 'role' => 'radiogroup'], escape: false)->class(['fi-flow fi-flow-choice-cards']) }}
>
    {{-- Sized by the room the field has (a container query), not the window: a section, a modal, a sidebar. --}}
    <div class="@container">
    <div @class([
        'grid gap-3 @md:grid-cols-2',
        '@3xl:grid-cols-4' => count($options) >= 4,
        '@2xl:grid-cols-3' => count($options) === 3,
    ])>
        @foreach ($options as $value => $label)
            <label class="fi-flow-choice-card relative flex cursor-pointer items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-gray-950/10 transition hover:ring-gray-950/20 has-checked:bg-primary-50/50 has-checked:ring-2 has-checked:ring-primary-600 has-focus-visible:ring-2 has-focus-visible:ring-primary-600 has-disabled:cursor-not-allowed has-disabled:opacity-70 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-white/20 dark:has-checked:bg-primary-500/10 dark:has-checked:ring-primary-500 @3xl:flex-col">
                <input
                    type="radio"
                    id="{{ $id }}-{{ $value }}"
                    name="{{ $id }}"
                    value="{{ $value }}"
                    {{ $wireModelAttribute }}="{{ $statePath }}"
                    @disabled($isDisabled)
                    class="peer sr-only"
                />

                @if (filled($icons[$value] ?? null))
                    <span class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition peer-checked:bg-primary-100 peer-checked:text-primary-600 dark:bg-white/10 dark:text-gray-400 dark:peer-checked:bg-primary-500/20 dark:peer-checked:text-primary-400">
                        {{ \Filament\Support\generate_icon_html($icons[$value], attributes: new \Illuminate\View\ComponentAttributeBag(['class' => 'size-5'])) }}
                    </span>
                @endif

                <span class="min-w-0 space-y-0.5">
                    <span class="block text-sm font-semibold text-gray-950 dark:text-white">{{ $label }}</span>

                    @if (filled($descriptions[$value] ?? null))
                        <span class="block text-sm text-gray-500 dark:text-gray-400">{{ $descriptions[$value] }}</span>
                    @endif
                </span>
            </label>
        @endforeach
    </div>
    </div>
</div>
