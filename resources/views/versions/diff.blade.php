@php
    $rows = [
        ['label' => __('packstub-flow::flow.versions.added_label'), 'items' => $diff['added'], 'class' => 'text-success-600 dark:text-success-400'],
        ['label' => __('packstub-flow::flow.versions.removed_label'), 'items' => $diff['removed'], 'class' => 'text-danger-600 dark:text-danger-400'],
        ['label' => __('packstub-flow::flow.versions.changed_label'), 'items' => $diff['changed'], 'class' => 'text-warning-600 dark:text-warning-400'],
    ];
@endphp
<div class="fi-flow-version-diff space-y-4 text-sm">
    @if ($diff['added'] === [] && $diff['removed'] === [] && $diff['changed'] === [] && $diff['edges'] === 0)
        <p class="text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.versions.no_changes') }}</p>
    @endif
    @foreach ($rows as $row)
        @if ($row['items'] !== [])
            <div>
                <h3 class="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ $row['label'] }}</h3>
                <ul class="list-inside list-disc {{ $row['class'] }}">
                    @foreach ($row['items'] as $item)
                        <li>{{ $item }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
    @endforeach
    @if ($diff['edges'] !== 0)
        <p class="text-gray-600 dark:text-gray-400">{{ __('packstub-flow::flow.versions.edges', ['delta' => ($diff['edges'] > 0 ? '+' : '').$diff['edges']]) }}</p>
    @endif
    <p class="text-xs text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.versions.saved_by', ['by' => $version->created_by ?: '—', 'at' => $version->created_at?->format('Y-m-d H:i')]) }}</p>
</div>
