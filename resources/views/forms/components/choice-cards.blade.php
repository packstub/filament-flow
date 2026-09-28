@php
    $tints = [
        'amber' => 'bg-amber-50 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400',
        'blue' => 'bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400',
        'purple' => 'bg-purple-50 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400',
        'teal' => 'bg-teal-50 text-teal-600 dark:bg-teal-400/10 dark:text-teal-400',
        'default' => 'bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400',
    ];
@endphp

{{-- The wrapper carries .fi-flow only: the plugin's utilities apply to what sits inside it. --}}
<div
    {{ $extraAttributes->merge(['aria-labelledby' => "{$id}-label", 'role' => 'radiogroup'], escape: false)->class(['fi-flow fi-flow-choice-cards']) }}
>
    {{-- Sized by the room the field has (a container query), not the window: a section, a modal, a sidebar. --}}
    <div class="@container">
        <div @class([
            'grid gap-3 @md:grid-cols-2',
            '@4xl:grid-cols-4' => count($options) >= 4,
            '@3xl:grid-cols-3' => count($options) === 3,
        ])>
            @foreach ($options as $value => $label)
                <label class="fi-flow-choice-card relative flex cursor-pointer items-center gap-2.5 rounded-xl bg-white p-3 ring-1 ring-gray-950/10 transition hover:ring-gray-950/20 has-checked:bg-primary-50/50 has-checked:ring-2 has-checked:ring-primary-600 has-focus-visible:ring-2 has-focus-visible:ring-primary-600 has-disabled:cursor-not-allowed has-disabled:opacity-70 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-white/20 dark:has-checked:bg-primary-500/10 dark:has-checked:ring-primary-500">
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
                        <span class="flex size-8 shrink-0 items-center justify-center rounded-lg transition {{ $tints[$accents[$value] ?? 'default'] }} peer-checked:bg-primary-100 peer-checked:text-primary-600 dark:peer-checked:bg-primary-500/20 dark:peer-checked:text-primary-400">
                            {{ \Filament\Support\generate_icon_html($icons[$value], attributes: new \Illuminate\View\ComponentAttributeBag(['class' => 'size-4.5'])) }}
                        </span>
                    @endif

                    <span class="min-w-0 flex-1">
                        <span class="flex items-center gap-1.5 pe-4">
                            <span class="text-sm font-semibold text-gray-950 dark:text-white">{{ $label }}</span>

                            @if (filled($badges[$value] ?? null))
                                <span class="rounded-full bg-gray-100 px-1.5 text-xs font-medium text-gray-600 tabular-nums dark:bg-white/10 dark:text-gray-300">{{ $badges[$value] }}</span>
                            @endif
                        </span>

                        @if (filled($descriptions[$value] ?? null))
                            <span class="block truncate text-xs text-gray-500 dark:text-gray-400" title="{{ $descriptions[$value] }}">{{ $descriptions[$value] }}</span>
                        @endif
                    </span>

                    {{-- The picked one says so with a check, not the colour alone; it sits in the corner, beside the label only. --}}
                    <span class="absolute end-2 top-2 hidden text-primary-600 peer-checked:block dark:text-primary-400" aria-hidden="true">
                        {{ \Filament\Support\generate_icon_html('heroicon-s-check-circle', attributes: new \Illuminate\View\ComponentAttributeBag(['class' => 'size-4'])) }}
                    </span>
                </label>
            @endforeach
        </div>
    </div>
</div>
