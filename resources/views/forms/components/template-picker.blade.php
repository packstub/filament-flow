@php
    $dots = [
        'trigger' => 'bg-amber-500',
        'action' => 'bg-blue-500',
        'condition' => 'bg-purple-500',
        'ai' => 'bg-teal-500',
        'default' => 'bg-gray-400',
    ];
@endphp

<div
    {{ $extraAttributes->merge(['aria-labelledby' => "{$id}-label", 'role' => 'radiogroup'], escape: false)->class(['fi-flow fi-flow-template-picker space-y-4']) }}
    x-data="{ category: null }"
>
    @if (count($categories) > 1)
        {{-- The categories as a filter; a card of another category stays out of the way but keeps its state. --}}
        <div class="flex flex-wrap gap-1.5" role="group" aria-label="{{ __('packstub-flow::flow.templates.categories') }}">
            @foreach ([null => __('packstub-flow::flow.templates.all'), ...array_combine($categories, $categories)] as $value => $label)
                <button
                    type="button"
                    x-on:click="category = @js($value)"
                    x-bind:class="category === @js($value) ? 'bg-primary-50 text-primary-700 ring-primary-600/20 dark:bg-primary-500/10 dark:text-primary-400 dark:ring-primary-400/30' : 'bg-white text-gray-600 ring-gray-950/10 hover:bg-gray-50 dark:bg-white/5 dark:text-gray-400 dark:ring-white/10 dark:hover:bg-white/10'"
                    x-bind:aria-pressed="category === @js($value)"
                    class="rounded-full px-3 py-1 text-xs font-medium ring-1 transition"
                >
                    {{ $label }}
                </button>
            @endforeach
        </div>
    @endif

    <div class="grid gap-3 sm:grid-cols-2">
        @foreach ($cards as $card)
            <label
                @if (count($categories) > 1) x-show="category === null || category === @js($card['category'])" @endif
                class="fi-flow-template-card relative flex cursor-pointer flex-col gap-3 rounded-xl bg-white p-4 ring-1 ring-gray-950/10 transition hover:bg-gray-50 has-checked:bg-primary-50/40 has-checked:ring-2 has-checked:ring-primary-600 dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10 dark:has-checked:bg-primary-500/10 dark:has-checked:ring-primary-500"
            >
                <div class="flex items-start justify-between gap-3">
                    <div class="min-w-0 space-y-1">
                        @if ($card['category'] !== '')
                            <span class="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">{{ $card['category'] }}</span>
                        @endif
                        <p class="text-sm font-semibold text-gray-950 dark:text-white">{{ $card['name'] }}</p>
                    </div>

                    <input
                        type="radio"
                        id="{{ $id }}-{{ $card['key'] }}"
                        name="{{ $id }}"
                        value="{{ $card['key'] }}"
                        {{ $wireModelAttribute }}="{{ $statePath }}"
                        @disabled($isDisabled)
                        @class(['fi-radio-input mt-0.5 shrink-0', 'fi-valid' => ! $hasError, 'fi-invalid' => $hasError])
                    />
                </div>

                @if ($card['description'] !== '')
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ $card['description'] }}</p>
                @endif

                @if ($card['steps'] !== [])
                    <ol class="mt-auto flex flex-wrap items-center gap-1" aria-label="{{ __('packstub-flow::flow.templates.steps', ['count' => count($card['steps'])]) }}">
                        @foreach ($card['steps'] as $step)
                            <li class="inline-flex items-center gap-1.5 rounded-md bg-gray-50 px-1.5 py-0.5 text-xs text-gray-600 ring-1 ring-gray-950/5 ring-inset dark:bg-white/5 dark:text-gray-300 dark:ring-white/10">
                                <span class="size-1.5 shrink-0 rounded-full {{ $dots[$step['theme']] ?? $dots['default'] }}" aria-hidden="true"></span>
                                {{ $step['label'] }}
                            </li>
                        @endforeach
                    </ol>
                @endif
            </label>
        @endforeach
    </div>
</div>
