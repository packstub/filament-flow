<div class="fi-flow-placeholders text-sm">
    <p class="mb-3 text-gray-600 dark:text-gray-400">{{ __('packstub-flow::flow.node_settings.placeholders_intro') }}</p>
    <dl class="grid gap-2">
        @foreach ($placeholders as $placeholder => $meaning)
            <div class="flex items-baseline gap-3">
                <dt><code class="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:bg-white/10 dark:text-gray-100">{{ $placeholder }}</code></dt>
                <dd class="text-gray-600 dark:text-gray-400">{{ $meaning }}</dd>
            </div>
        @endforeach
    </dl>
</div>
