<x-mail::message>
{!! str_replace("\n", "  \n", e($body)) !!}
@if ($actionLabel && $actionUrl)

<x-mail::button :url="$actionUrl">
{{ $actionLabel }}
</x-mail::button>
@endif
</x-mail::message>
