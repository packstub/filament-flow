{{-- The workflow's name, with the Active switch beside it. --}}
<span class="fi-flow">
<span class="fi-flow-heading inline-flex flex-wrap items-center gap-x-3 gap-y-1">
    <span>{{ $title }}</span>

    @if ($active?->isVisible())
        {{ $active }}
    @endif
</span>
</span>
