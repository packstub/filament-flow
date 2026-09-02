<?php

namespace Packstub\Flow\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;

/**
 * Runs today, failures today, waiting runs and the 7-day success rate.
 */
class RunsOverview extends StatsOverviewWidget
{
    protected ?string $pollingInterval = '60s';

    protected function getStats(): array
    {
        $runs = Flow::runModel()::query()->where('is_test', false);

        $today = (clone $runs)->where('started_at', '>=', now()->startOfDay())->count();
        $failedToday = (clone $runs)->where('started_at', '>=', now()->startOfDay())->where('status', RunStatus::Failed)->count();
        $waiting = (clone $runs)->whereIn('status', [RunStatus::Delayed, RunStatus::Running])->count();

        $week = (clone $runs)->where('started_at', '>=', now()->subDays(7))->whereIn('status', [RunStatus::Success, RunStatus::Failed]);
        $weekTotal = (clone $week)->count();
        $weekFailed = (clone $week)->where('status', RunStatus::Failed)->count();
        $rate = $weekTotal > 0 ? round(($weekTotal - $weekFailed) / $weekTotal * 100) : null;

        return [
            Stat::make(__('packstub-flow::flow.runs.stats.today'), $today),
            Stat::make(__('packstub-flow::flow.runs.stats.failed_today'), $failedToday)->color($failedToday > 0 ? 'danger' : 'success'),
            Stat::make(__('packstub-flow::flow.runs.stats.waiting'), $waiting)->color('warning'),
            Stat::make(__('packstub-flow::flow.runs.stats.success_rate'), $rate === null ? '—' : $rate.' %')
                ->description(__('packstub-flow::flow.runs.stats.last_7_days', ['count' => $weekTotal]))
                ->color($rate === null ? 'gray' : ($rate >= 95 ? 'success' : ($rate >= 80 ? 'warning' : 'danger'))),
        ];
    }
}
