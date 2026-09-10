<?php

namespace Packstub\Flow\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Support\Tenancy;

/**
 * Succeeded and failed runs per day over the last 7, 14 or 30 days.
 */
class RunsChart extends ChartWidget
{
    protected ?string $pollingInterval = '60s';

    public ?string $filter = '14';

    protected int|string|array $columnSpan = 'full';

    protected ?string $maxHeight = '220px';

    public function getHeading(): string|Htmlable|null
    {
        return __('packstub-flow::flow.runs.chart.heading');
    }

    protected function getType(): string
    {
        return 'line';
    }

    protected function getFilters(): ?array
    {
        return [
            '7' => __('packstub-flow::flow.runs.chart.days', ['days' => 7]),
            '14' => __('packstub-flow::flow.runs.chart.days', ['days' => 14]),
            '30' => __('packstub-flow::flow.runs.chart.days', ['days' => 30]),
        ];
    }

    /**
     * @return array{datasets: array<int, array<string, mixed>>, labels: array<int, string>}
     */
    protected function getData(): array
    {
        $days = max(1, min(90, (int) ($this->filter ?? 14)));
        $from = now()->startOfDay()->subDays($days - 1);

        $rows = Flow::runModel()::query()
            ->where('is_test', false)
            ->where('started_at', '>=', $from)
            ->whereIn('status', [RunStatus::Success, RunStatus::Failed])
            ->when(Tenancy::panelTenant(), fn (Builder $query, $tenant) => $query->ofTenant($tenant))
            ->get(['started_at', 'status']);

        $labels = [];
        $succeeded = [];
        $failed = [];

        for ($i = 0; $i < $days; $i++) {
            $day = $from->copy()->addDays($i);
            $key = $day->toDateString();
            $labels[$key] = $day->translatedFormat($days > 14 ? 'j M' : 'D j');
            $succeeded[$key] = 0;
            $failed[$key] = 0;
        }

        foreach ($rows as $run) {
            $key = Carbon::parse($run->started_at)->toDateString();

            if (! isset($labels[$key])) {
                continue;
            }

            if ($run->status === RunStatus::Failed) {
                $failed[$key]++;
            } else {
                $succeeded[$key]++;
            }
        }

        return [
            'datasets' => [
                [
                    'label' => __('packstub-flow::flow.runs.chart.succeeded'),
                    'data' => array_values($succeeded),
                    'borderColor' => '#16a34a',
                    'backgroundColor' => 'rgba(22, 163, 74, 0.15)',
                    'fill' => true,
                    'tension' => 0.3,
                ],
                [
                    'label' => __('packstub-flow::flow.runs.chart.failed'),
                    'data' => array_values($failed),
                    'borderColor' => '#dc2626',
                    'backgroundColor' => 'rgba(220, 38, 38, 0.15)',
                    'fill' => true,
                    'tension' => 0.3,
                ],
            ],
            'labels' => array_values($labels),
        ];
    }

    protected function getOptions(): array
    {
        return [
            'scales' => ['y' => ['beginAtZero' => true, 'ticks' => ['precision' => 0]]],
            'plugins' => ['legend' => ['display' => true]],
        ];
    }
}
