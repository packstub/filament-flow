{{-- The wrapper carries .fi-flow only: the plugin's utilities apply to what sits inside it. --}}
<div
    {{ $extraAttributes->merge(['aria-labelledby' => "{$id}-label", 'role' => 'radiogroup'], escape: false)->class(['fi-flow fi-flow-template-picker']) }}
    x-data="{ category: null, selected: @js($state) }"
    x-on:change="if ($event.target.name === @js($id)) selected = $event.target.value"
>
    <div class="@container space-y-4">
        @if (count($categories) > 1)
            {{-- The categories as a filter; a card of another category stays out of the way but keeps its state. --}}
            <div class="flex flex-wrap gap-2" role="group" aria-label="{{ __('packstub-flow::flow.templates.categories') }}">
                @foreach ([null => __('packstub-flow::flow.templates.all'), ...array_combine($categories, $categories)] as $value => $label)
                    <button
                        type="button"
                        x-on:click="category = @js($value)"
                        x-bind:class="category === @js($value) ? 'bg-primary-50 text-primary-700 ring-primary-600/30 dark:bg-primary-500/10 dark:text-primary-400 dark:ring-primary-400/30' : 'bg-white text-gray-600 ring-gray-950/10 hover:bg-gray-50 dark:bg-white/5 dark:text-gray-400 dark:ring-white/10 dark:hover:bg-white/10'"
                        x-bind:aria-pressed="category === @js($value)"
                        class="rounded-full px-3 py-1 text-xs font-medium ring-1 transition"
                    >
                        {{ $label }}
                    </button>
                @endforeach
            </div>
        @endif

        <div class="grid gap-4 @xl:grid-cols-2 @4xl:grid-cols-3">
            @foreach ($cards as $card)
                <label
                    @if (count($categories) > 1) x-show="category === null || category === @js($card['category'])" @endif
                    class="fi-flow-template-card relative flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white ring-1 ring-gray-950/10 transition hover:ring-gray-950/20 has-checked:ring-2 has-checked:ring-primary-600 has-focus-visible:ring-2 has-focus-visible:ring-primary-600 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-white/20 dark:has-checked:ring-primary-500"
                >
                    <div class="fi-flow-dots flex h-28 items-center justify-center border-b border-gray-950/5 bg-gray-50 px-3 py-3 dark:border-white/5 dark:bg-white/5" aria-hidden="true">
                        @include('packstub-flow::components.definition-preview', ['preview' => $card['preview'], 'compact' => true, 'class' => 'h-full w-full'])
                    </div>

                    <div class="flex flex-1 flex-col gap-1 p-4">
                        <div class="flex items-start justify-between gap-3">
                            <span class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ $card['category'] }}</span>

                            <input
                                type="radio"
                                id="{{ $id }}-{{ $card['key'] }}"
                                name="{{ $id }}"
                                value="{{ $card['key'] }}"
                                {{ $wireModelAttribute }}="{{ $statePath }}"
                                @disabled($isDisabled)
                                @class(['fi-radio-input shrink-0', 'fi-valid' => ! $hasError, 'fi-invalid' => $hasError])
                            />
                        </div>

                        <p class="text-sm font-semibold text-gray-950 dark:text-white">{{ $card['name'] }}</p>

                        @if ($card['description'] !== '')
                            <p class="line-clamp-3 text-sm text-gray-500 dark:text-gray-400" title="{{ $card['description'] }}">{{ $card['description'] }}</p>
                        @endif

                        @if ($card['steps'] !== [])
                            <ol class="sr-only" aria-label="{{ __('packstub-flow::flow.templates.steps', ['count' => count($card['steps'])]) }}">
                                @foreach ($card['steps'] as $step)
                                    <li>{{ $step['label'] }}</li>
                                @endforeach
                            </ol>
                        @endif
                    </div>
                </label>
            @endforeach
        </div>

        {{-- The picked template, whole and fitted to the width, and full screen to read a long one. --}}
        @foreach ($cards as $card)
            <figure
                x-data="{ full: false }"
                x-show="selected === @js($card['key'])"
                @if ($state !== $card['key']) x-cloak style="display: none" @endif
                class="fi-flow-template-preview overflow-hidden rounded-xl ring-1 ring-gray-950/10 dark:ring-white/10"
            >
                <figcaption class="flex items-center justify-between gap-3 border-b border-gray-950/5 bg-white px-4 py-2 dark:border-white/10 dark:bg-gray-900">
                    <span class="min-w-0 text-sm">
                        <span class="font-semibold text-gray-950 dark:text-white">{{ __('packstub-flow::flow.templates.preview', ['name' => $card['name']]) }}</span>
                        <span class="text-gray-500 dark:text-gray-400">· {{ __('packstub-flow::flow.templates.steps', ['count' => count($card['steps'])]) }}</span>
                    </span>

                    <button
                        type="button"
                        x-on:click="full = true"
                        class="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                    >
                        {{ \Filament\Support\generate_icon_html('heroicon-m-arrows-pointing-out', attributes: new \Illuminate\View\ComponentAttributeBag(['class' => 'size-4'])) }}
                        {{ __('packstub-flow::flow.templates.full_screen') }}
                    </button>
                </figcaption>

                <div class="fi-flow-dots bg-gray-50 p-4 dark:bg-white/5">
                    @include('packstub-flow::components.definition-preview', [
                        'preview' => $card['preview'],
                        'class' => 'mx-auto h-auto',
                        'style' => 'width: 100%; max-width: '.round($card['preview']['width'] * 0.85).'px',
                    ])
                </div>

                {{-- Teleported to the body, so it wraps itself in .fi-flow for its utilities. --}}
                <template x-teleport="body">
                    <div
                        x-show="full"
                        x-cloak
                        x-transition.opacity
                        x-on:keydown.escape.window="full = false"
                        x-trap.noscroll="full"
                        class="fi-flow"
                        style="display: none"
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-label="{{ __('packstub-flow::flow.templates.preview', ['name' => $card['name']]) }}"
                            class="fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-950"
                        >
                            <div class="flex items-center justify-between gap-3 border-b border-gray-950/5 px-6 py-3 dark:border-white/10">
                                <div class="min-w-0">
                                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ $card['category'] }}</p>
                                    <p class="truncate text-base font-semibold text-gray-950 dark:text-white">{{ $card['name'] }}</p>
                                </div>

                                <button
                                    type="button"
                                    x-on:click="full = false"
                                    aria-label="{{ __('packstub-flow::flow.templates.close') }}"
                                    class="flex size-9 shrink-0 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
                                >
                                    {{ \Filament\Support\generate_icon_html('heroicon-o-x-mark', attributes: new \Illuminate\View\ComponentAttributeBag(['class' => 'size-5'])) }}
                                </button>
                            </div>

                            <div class="fi-flow-dots flex min-h-0 flex-1 items-center overflow-auto bg-gray-50 p-6 dark:bg-white/5">
                                @include('packstub-flow::components.definition-preview', [
                                    'preview' => $card['preview'],
                                    'class' => 'mx-auto max-h-full',
                                    'style' => 'width: 100%; min-width: '.round($card['preview']['width'] * 0.6).'px; max-width: '.round($card['preview']['width'] * 1.1).'px',
                                ])
                            </div>
                        </div>
                    </div>
                </template>
            </figure>
        @endforeach
    </div>
</div>
