@php
    $steps = $run->steps ?? [];
    $context = $run->context ?? [];
@endphp
<div class="fi-flow-run-detail space-y-6 text-sm">
    <dl class="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-4">
        <div>
            <dt class="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.status_label') }}</dt>
            <dd class="mt-1"><x-filament::badge :color="$run->status->getColor()" :icon="$run->status->getIcon()">{{ $run->status->getLabel() }}</x-filament::badge></dd>
        </div>
        <div>
            <dt class="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.trigger') }}</dt>
            <dd class="mt-1 text-gray-950 dark:text-white">{{ $run->triggerName() ?? '—' }}</dd>
        </div>
        <div>
            <dt class="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.started') }}</dt>
            <dd class="mt-1 text-gray-950 dark:text-white">{{ $run->started_at?->format('Y-m-d H:i:s') ?? '—' }}</dd>
        </div>
        <div>
            <dt class="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.duration') }}</dt>
            <dd class="mt-1 text-gray-950 dark:text-white">{{ $run->getDurationInSeconds() !== null ? $run->getDurationInSeconds().' s' : '—' }}</dd>
        </div>
    </dl>

    @if ($run->error)
        <div class="rounded-lg border border-danger-300 bg-danger-50 p-3 text-danger-700 dark:border-danger-500/30 dark:bg-danger-500/10 dark:text-danger-300">
            {{ $run->error }}
        </div>
    @endif

    <div>
        <h3 class="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.steps') }}</h3>
        <ol class="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-white/10 dark:border-white/10">
            @forelse ($steps as $index => $step)
                <li class="flex items-start gap-3 px-3 py-2">
                    <span class="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-100 text-[11px] font-semibold text-gray-600 dark:bg-white/10 dark:text-gray-300">{{ $index + 1 }}</span>
                    <div class="min-w-0 flex-1">
                        <div class="flex flex-wrap items-baseline gap-x-2">
                            <span class="font-medium text-gray-950 dark:text-white">{{ $step['label'] ?? $step['node_id'] ?? '' }}</span>
                            <span class="text-xs text-gray-500 dark:text-gray-400">{{ $step['type'] ?? '' }}</span>
                        </div>
                        <div class="text-gray-600 dark:text-gray-400">{{ $step['message'] ?? '' }}</div>
                    </div>
                    <time class="flex-none text-xs text-gray-500 dark:text-gray-400">{{ isset($step['at']) ? \Illuminate\Support\Carbon::parse($step['at'])->format('H:i:s') : '' }}</time>
                </li>
            @empty
                <li class="px-3 py-2 text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.no_steps') }}</li>
            @endforelse
        </ol>
    </div>

    @if ($context !== [])
        <div>
            <h3 class="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.context') }}</h3>
            <pre class="max-h-64 overflow-auto rounded-lg bg-gray-950 p-3 font-mono text-xs text-gray-100 dark:bg-black/40">{{ json_encode($context, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) }}</pre>
        </div>
    @endif
</div>
