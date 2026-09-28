@php
    $dots = [
        'trigger' => 'bg-amber-500',
        'action' => 'bg-blue-500',
        'condition' => 'bg-purple-500',
        'ai' => 'bg-teal-500',
        'default' => 'bg-gray-400',
    ];
    $hasFilter = count($categories) > 1;
    $icon = fn (string $icon, string $class): ?\Illuminate\Contracts\Support\Htmlable => \Filament\Support\generate_icon_html($icon, attributes: new \Illuminate\View\ComponentAttributeBag(['class' => $class]));
@endphp

{{-- The wrapper carries .fi-flow only: the plugin's utilities apply to what sits inside it. --}}
<div
    {{ $extraAttributes->class(['fi-flow fi-flow-template-picker']) }}
    x-data="{
        category: null,
        query: '',
        selected: @js($state),
        cards: @js(collect($cards)->map(fn (array $card): array => ['key' => $card['key'], 'category' => $card['category'], 'search' => $card['search']])->all()),
        matches(card) {
            return (this.category === null || this.category === card.category)
                && this.query.toLowerCase().trim().split(/\s+/).every((word) => card.search.includes(word))
        },
        shows(key) {
            return this.matches(this.cards.find((card) => card.key === key))
        },
    }"
    x-on:change="if ($event.target.name === @js($id)) selected = $event.target.value"
>
    {{-- The list beside the preview while there is room (a container query), one above the other when not. --}}
    <div class="@container">
        <div class="grid gap-4 @3xl:grid-cols-[minmax(0,19rem)_minmax(0,1fr)]">
            {{-- The list: a radio group, so the arrow keys move through it. Its cap shows six rows whole and a seventh cut, so a longer list reads as scrollable. --}}
            <div class="flex min-w-0 flex-col overflow-hidden rounded-xl bg-white ring-1 ring-gray-950/10 @3xl:self-start dark:bg-white/5 dark:ring-white/10">
                @if ($isSearchable || $hasFilter)
                    <div class="space-y-2 border-b border-gray-950/5 p-3 dark:border-white/10">
                        @if ($isSearchable)
                            <label class="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 ring-1 ring-gray-950/10 focus-within:ring-2 focus-within:ring-primary-600 dark:bg-white/5 dark:ring-white/20 dark:focus-within:ring-primary-500">
                                {{ $icon('heroicon-m-magnifying-glass', 'size-4 shrink-0 text-gray-400') }}
                                <span class="sr-only">{{ __('packstub-flow::flow.templates.search') }}</span>
                                <input
                                    type="search"
                                    x-model="query"
                                    placeholder="{{ __('packstub-flow::flow.templates.search') }}"
                                    class="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-gray-950 placeholder:text-gray-400 focus:ring-0 focus:outline-none dark:text-white dark:placeholder:text-gray-500"
                                />
                            </label>
                        @endif

                        @if ($hasFilter)
                            {{-- The categories as a filter; a row of another category stays out of the way but keeps its state. --}}
                            <div class="flex flex-wrap gap-1.5" role="group" aria-label="{{ __('packstub-flow::flow.templates.categories') }}">
                                @foreach ([null => __('packstub-flow::flow.templates.all'), ...array_combine($categories, $categories)] as $value => $label)
                                    <button
                                        type="button"
                                        x-on:click="category = @js($value)"
                                        x-bind:class="category === @js($value) ? 'bg-primary-50 text-primary-700 ring-primary-600/30 dark:bg-primary-500/10 dark:text-primary-400 dark:ring-primary-400/30' : 'bg-white text-gray-600 ring-gray-950/10 hover:bg-gray-50 dark:bg-white/5 dark:text-gray-400 dark:ring-white/10 dark:hover:bg-white/10'"
                                        x-bind:aria-pressed="category === @js($value)"
                                        class="rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 transition"
                                    >
                                        {{ $label }}
                                    </button>
                                @endforeach
                            </div>
                        @endif
                    </div>
                @endif

                <div
                    role="radiogroup"
                    aria-labelledby="{{ $id }}-label"
                    class="max-h-[26rem] space-y-0.5 overflow-y-auto p-1.5 @3xl:max-h-[28rem]"
                >
                    @foreach ($cards as $card)
                        <label
                            x-show="shows(@js($card['key']))"
                            class="fi-flow-template-row relative flex cursor-pointer gap-3 rounded-lg px-3 py-2.5 transition hover:bg-gray-50 has-checked:bg-primary-50 has-focus-visible:ring-2 has-focus-visible:ring-primary-600 dark:hover:bg-white/5 dark:has-checked:bg-primary-500/10"
                        >
                            <input
                                type="radio"
                                id="{{ $id }}-{{ $card['key'] }}"
                                name="{{ $id }}"
                                value="{{ $card['key'] }}"
                                {{ $wireModelAttribute }}="{{ $statePath }}"
                                @disabled($isDisabled)
                                @class(['fi-radio-input mt-0.5 shrink-0', 'fi-valid' => ! $hasError, 'fi-invalid' => $hasError])
                            />

                            <span class="min-w-0 flex-1 space-y-1">
                                <span class="block text-sm font-medium text-gray-950 dark:text-white">{{ $card['name'] }}</span>
                                <span class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                                    <span>{{ $card['category'] }}</span>
                                    <span aria-hidden="true">·</span>
                                    <span>{{ __('packstub-flow::flow.templates.steps', ['count' => count($card['steps'])]) }}</span>
                                    <span class="flex items-center gap-0.5" title="{{ implode(', ', array_column($card['steps'], 'label')) }}" aria-hidden="true">
                                        @foreach ($card['steps'] as $step)
                                            <span class="size-1.5 rounded-full {{ $dots[$step['theme']] ?? $dots['default'] }}"></span>
                                        @endforeach
                                    </span>
                                </span>
                            </span>
                        </label>
                    @endforeach

                    <p x-show="! cards.some((card) => matches(card))" x-cloak style="display: none" class="px-3 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                        {{ __('packstub-flow::flow.templates.no_match') }}
                    </p>
                </div>
            </div>

            {{-- The picked template: drawn where its nodes sit, what it does, what it leaves for you. --}}
            <div class="min-w-0 @3xl:sticky @3xl:top-20 @3xl:self-start">
                <div x-show="! selected" @if ($state !== null) x-cloak style="display: none" @endif class="fi-flow-dots flex min-h-60 items-center justify-center rounded-xl bg-gray-50 p-6 text-sm text-gray-500 ring-1 ring-gray-950/10 dark:bg-white/5 dark:text-gray-400 dark:ring-white/10">
                    {{ __('packstub-flow::flow.templates.pick') }}
                </div>

                @foreach ($cards as $card)
                    <figure
                        x-data="{ full: false }"
                        x-show="selected === @js($card['key'])"
                        @if ($state !== $card['key']) x-cloak style="display: none" @endif
                        class="fi-flow-template-preview overflow-hidden rounded-xl bg-white ring-1 ring-gray-950/10 dark:bg-white/5 dark:ring-white/10"
                    >
                        <figcaption class="flex items-start justify-between gap-3 px-4 pt-3 pb-2">
                            <span class="min-w-0">
                                <span class="block text-xs text-gray-500 dark:text-gray-400">{{ $card['category'] }} · {{ __('packstub-flow::flow.templates.steps', ['count' => count($card['steps'])]) }}</span>
                                <span class="block text-base font-semibold text-gray-950 dark:text-white">{{ $card['name'] }}</span>
                            </span>

                            <button
                                type="button"
                                x-on:click="full = true"
                                class="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                            >
                                {{ $icon('heroicon-m-arrows-pointing-out', 'size-4') }}
                                {{ __('packstub-flow::flow.templates.full_screen') }}
                            </button>
                        </figcaption>

                        <div class="fi-flow-dots mx-4 flex min-h-40 items-center justify-center rounded-lg bg-gray-50 p-3 ring-1 ring-gray-950/5 @3xl:min-h-72 dark:bg-white/5 dark:ring-white/10">
                            @include('packstub-flow::components.definition-preview', [
                                'preview' => $card['preview'],
                                'class' => 'h-auto max-h-80 w-full',
                                'style' => 'max-width: '.round($card['preview']['width'] * 0.85).'px',
                            ])
                        </div>

                        <div class="space-y-3 px-4 pt-3 pb-4 text-sm">
                            @if ($card['description'] !== '')
                                <p class="text-gray-600 dark:text-gray-300">{{ $card['description'] }}</p>
                            @endif

                            @if ($card['todo'] !== [])
                                <div>
                                    <p class="font-medium text-gray-950 dark:text-white">{{ __('packstub-flow::flow.templates.fill_in') }}</p>
                                    <ul class="mt-1 space-y-1 text-gray-600 dark:text-gray-300">
                                        @foreach ($card['todo'] as $todo)
                                            <li class="flex items-start gap-2">
                                                <span class="mt-1.5 size-2 shrink-0 rounded-full bg-danger-500" aria-hidden="true"></span>
                                                <span>{!! __('packstub-flow::flow.templates.fill_in_item', ['setting' => '<span class="font-medium text-gray-950 dark:text-white">'.e($todo['setting']).'</span>', 'node' => e($todo['node'])]) !!}</span>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            @else
                                <p class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                    {{ $icon('heroicon-m-check-circle', 'mt-0.5 size-4 shrink-0 text-success-500') }}
                                    {{ __('packstub-flow::flow.templates.ready') }}
                                </p>
                            @endif
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
                                            {{ $icon('heroicon-o-x-mark', 'size-5') }}
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
    </div>
</div>
