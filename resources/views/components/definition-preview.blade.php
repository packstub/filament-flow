{{--
    A static picture of a definition (Support\DefinitionPreview::make()):
    the nodes where they sit on the canvas, coloured like the canvas nodes,
    and the edges between them. $compact leaves the text out for a thumbnail.
    Include it inside a .fi-flow wrapper so its utilities apply.
--}}
@php
    $compact ??= false;
    $themes = [
        'trigger' => ['band' => 'fill-amber-500/15 dark:fill-amber-400/15', 'dot' => 'fill-amber-500'],
        'condition' => ['band' => 'fill-purple-500/15 dark:fill-purple-400/15', 'dot' => 'fill-purple-500'],
        'action' => ['band' => 'fill-blue-500/15 dark:fill-blue-400/15', 'dot' => 'fill-blue-500'],
        'ai' => ['band' => 'fill-teal-500/15 dark:fill-teal-400/15', 'dot' => 'fill-teal-500'],
        'default' => ['band' => 'fill-gray-500/15 dark:fill-gray-400/15', 'dot' => 'fill-gray-400'],
    ];
    $w = \Packstub\Flow\Support\DefinitionPreview::NODE_WIDTH;
@endphp

@if ($preview['nodes'] !== [])
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 {{ $preview['width'] }} {{ $preview['height'] }}"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="{{ trans_choice('packstub-flow::flow.preview.label', count($preview['nodes']), ['count' => count($preview['nodes'])]) }}"
        class="{{ $class ?? '' }}"
        @isset($style) style="{{ $style }}" @endisset
    >
        <g class="fill-none stroke-gray-300 dark:stroke-gray-600" stroke-width="{{ $compact ? 3 : 2 }}">
            @foreach ($preview['edges'] as $edge)
                <path d="{{ $edge['path'] }}" />
            @endforeach
        </g>

        @foreach ($preview['nodes'] as $node)
            @php($theme = $themes[$node['theme']] ?? $themes['default'])
            <g transform="translate({{ $node['x'] }} {{ $node['y'] }})">
                <rect width="{{ $w }}" height="{{ $node['height'] }}" rx="12" class="fill-white stroke-gray-950/10 dark:fill-gray-900 dark:stroke-white/10" stroke-width="1.5" />
                <path d="M 0 12 A 12 12 0 0 1 12 0 H {{ $w - 12 }} A 12 12 0 0 1 {{ $w }} 12 V 24 H 0 Z" class="{{ $theme['band'] }}" />
                <circle cx="14" cy="12" r="{{ $compact ? 5 : 4 }}" class="{{ $theme['dot'] }}" />

                @if ($compact)
                    <rect x="14" y="{{ $node['height'] / 2 + 6 }}" width="{{ min($w - 28, 60 + mb_strlen($node['label']) * 5) }}" height="12" rx="6" class="fill-gray-200 dark:fill-white/15" />
                @else
                    <text x="26" y="16.5" font-size="11" font-weight="500" class="fill-gray-600 dark:fill-gray-300">{{ $node['kind'] }}</text>
                    <text x="14" y="{{ $node['height'] / 2 + 17 }}" font-size="14" font-weight="600" class="fill-gray-950 dark:fill-white">{{ $node['label'] }}</text>
                @endif

                @if ($node['marked'])
                    <circle cx="{{ $w - 2 }}" cy="2" r="{{ $compact ? 10 : 7 }}" class="fill-danger-500 stroke-white dark:stroke-gray-900" stroke-width="2" />
                @endif
            </g>
        @endforeach

        @unless ($compact)
            @foreach ($preview['edges'] as $edge)
                @if ($edge['label'] !== null)
                    <text x="{{ $edge['x'] }}" y="{{ $edge['y'] }}" font-size="11" font-weight="500" class="fill-gray-500 dark:fill-gray-400">{{ $edge['label'] }}</text>
                @endif
            @endforeach
        @endunless
    </svg>
@endif
