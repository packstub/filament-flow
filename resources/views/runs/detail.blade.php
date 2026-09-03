@php
    $steps = $run?->steps ?? [];
    $context = $run?->context ?? [];
    $canvasUrl = $canvasUrl ?? null;
    $waits = $run?->waits()->where('status', \Packstub\Flow\Models\WorkflowWait::PENDING)->get() ?? collect();
    $stepColors = [
        'failed' => 'bg-danger-100 text-danger-700 dark:bg-danger-500/20 dark:text-danger-300',
        'retry' => 'bg-warning-100 text-warning-700 dark:bg-warning-500/20 dark:text-warning-300',
        'simulated' => 'bg-info-100 text-info-700 dark:bg-info-500/20 dark:text-info-300',
        'waiting' => 'bg-warning-100 text-warning-700 dark:bg-warning-500/20 dark:text-warning-300',
    ];
@endphp
@if (! $run)
    <p class="text-sm text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.not_found') }}</p>
@else
<div class="fi-flow-run-detail space-y-6 text-sm">
    @if ($run->is_test)
        <div class="flex items-center gap-2 rounded-lg border border-info-300 bg-info-50 p-3 text-info-700 dark:border-info-500/30 dark:bg-info-500/10 dark:text-info-300">
            <x-filament::icon icon="heroicon-o-beaker" class="h-5 w-5" />
            <span>{{ __('packstub-flow::flow.runs.test_banner') }}</span>
        </div>
    @endif

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
        @if ($run->subject_type)
            <div class="col-span-2">
                <dt class="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.subject') }}</dt>
                <dd class="mt-1 text-gray-950 dark:text-white">{{ class_basename($run->subject_type) }} #{{ $run->subject_id }}</dd>
            </div>
        @endif
        @if ($run->version)
            <div>
                <dt class="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.version') }}</dt>
                <dd class="mt-1 text-gray-950 dark:text-white">v{{ $run->version->number }}</dd>
            </div>
        @endif
    </dl>

    @if ($run->error)
        <div class="rounded-lg border border-danger-300 bg-danger-50 p-3 text-danger-700 dark:border-danger-500/30 dark:bg-danger-500/10 dark:text-danger-300">
            {{ $run->error }}
        </div>
    @endif

    @if ($waits->isNotEmpty())
        <div class="rounded-lg border border-warning-300 bg-warning-50 p-3 text-warning-700 dark:border-warning-500/30 dark:bg-warning-500/10 dark:text-warning-300">
            @foreach ($waits as $wait)
                <div>{{ __('packstub-flow::flow.runs.waiting_on', ['type' => __('packstub-flow::flow.runs.wait_types.'.$wait->type), 'label' => $wait->meta['label'] ?? $wait->node_id]) }}@if ($wait->expires_at) — {{ __('packstub-flow::flow.runs.expires', ['when' => $wait->expires_at->diffForHumans()]) }}@endif</div>
            @endforeach
        </div>
    @endif

    <div>
        <h3 class="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ __('packstub-flow::flow.runs.steps') }}</h3>
        <ol class="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-white/10 dark:border-white/10">
            @forelse ($steps as $index => $step)
                @php $status = $step['status'] ?? 'ok'; @endphp
                <li class="flex items-start gap-3 px-3 py-2">
                    <span class="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px] font-semibold {{ $stepColors[$status] ?? 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300' }}">{{ $index + 1 }}</span>
                    <div class="min-w-0 flex-1">
                        <div class="flex flex-wrap items-baseline gap-x-2">
                            @if ($canvasUrl && ! empty($step['node_id']))
                                <a href="{{ $canvasUrl }}?node={{ rawurlencode($step['node_id']) }}" class="font-medium text-gray-950 hover:text-primary-600 hover:underline dark:text-white dark:hover:text-primary-400" title="{{ __('packstub-flow::flow.runs.open_canvas') }}">{{ $step['label'] ?? $step['node_id'] }}</a>
                            @else
                                <span class="font-medium text-gray-950 dark:text-white">{{ $step['label'] ?? $step['node_id'] ?? '' }}</span>
                            @endif
                            <span class="text-xs text-gray-500 dark:text-gray-400">{{ $step['type'] ?? '' }}</span>
                            @if (isset($step['duration_ms']))
                                <span class="text-xs text-gray-400 dark:text-gray-500">{{ $step['duration_ms'] }} ms</span>
                            @endif
                            @if ($status === 'simulated')
                                <span class="text-xs text-info-600 dark:text-info-400">{{ __('packstub-flow::flow.runs.simulated') }}</span>
                            @endif
                        </div>
                        <div class="{{ $status === 'failed' ? 'text-danger-600 dark:text-danger-400' : 'text-gray-600 dark:text-gray-400' }}">{{ $step['message'] ?? '' }}</div>
                        @if (! empty($step['output']))
                            <details class="mt-1">
                                <summary class="cursor-pointer text-xs text-gray-500 dark:text-gray-400">{{ $status === 'simulated' ? __('packstub-flow::flow.runs.would_use') : __('packstub-flow::flow.runs.output') }}</summary>
                                <pre class="mt-1 max-h-48 overflow-auto rounded-lg bg-gray-950 p-2 font-mono text-xs text-gray-100 dark:bg-black/40">{{ json_encode($step['output'], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) }}</pre>
                            </details>
                        @endif
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
@endif
