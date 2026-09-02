<?php

namespace Packstub\Flow\Nodes\Conditions;

use Carbon\Carbon;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TimePicker;
use Illuminate\Support\Facades\Date;
use Packstub\Flow\Nodes\Condition;

/**
 * True while the current time is inside a daily window (may cross midnight).
 */
class TimeOfDay extends Condition
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.time_of_day.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.time_of_day.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-sun';
    }

    public function getFormSchema(): array
    {
        return [
            TimePicker::make('start_time')
                ->label(__('packstub-flow::flow.nodes.time_of_day.start'))
                ->seconds(false)
                ->default('09:00')
                ->required(),
            TimePicker::make('end_time')
                ->label(__('packstub-flow::flow.nodes.time_of_day.end'))
                ->seconds(false)
                ->default('17:00')
                ->required(),
            Select::make('timezone')
                ->label(__('packstub-flow::flow.nodes.time_of_day.timezone'))
                ->options(array_combine($zones = timezone_identifiers_list(), $zones))
                ->searchable()
                ->default(config('app.timezone')),
        ];
    }

    public function evaluate(array $config, array $payload): bool
    {
        $timezone = $config['timezone'] ?: config('app.timezone');
        $now = Date::now($timezone);

        $start = Carbon::parse($config['start_time'] ?? '00:00', $timezone)->setDate($now->year, $now->month, $now->day);
        $end = Carbon::parse($config['end_time'] ?? '23:59', $timezone)->setDate($now->year, $now->month, $now->day);

        if ($start->greaterThan($end)) {
            return $now->greaterThanOrEqualTo($start) || $now->lessThanOrEqualTo($end);
        }

        return $now->betweenIncluded($start, $end);
    }
}
