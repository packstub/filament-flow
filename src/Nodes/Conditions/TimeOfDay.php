<?php

namespace Xlited\LaravelFlow\Nodes\Conditions;

use Xlited\LaravelFlow\Base\Condition;
use Carbon\Carbon;

class TimeOfDay extends Condition
{
    public function getName(): string
    {
        return 'Time of Day';
    }

    public function getDescription(): string
    {
        return 'Checks if the current time is within a specific range.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-sun';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\TimePicker::make('start_time')
                ->label('Start Time')
                ->placeholder('09:00')
                ->seconds(false)
                ->required(),
            \Filament\Forms\Components\TimePicker::make('end_time')
                ->label('End Time')
                ->placeholder('17:00')
                ->seconds(false)
                ->required(),
            \Filament\Forms\Components\Select::make('timezone')
                ->label('Timezone')
                ->options(array_combine(timezone_identifiers_list(), timezone_identifiers_list()))
                ->searchable()
                ->placeholder('UTC'),
        ];
    }

    public function evaluate(array $data, array $payload): bool
    {
        $startTime = $data['start_time'] ?? '00:00';
        $endTime = $data['end_time'] ?? '23:59';
        $timezone = $data['timezone'] ?: config('app.timezone');

        $now = Carbon::now($timezone);
        $start = Carbon::createFromTimeString($startTime, $timezone);
        $end = Carbon::createFromTimeString($endTime, $timezone);

        if ($start > $end) {
            // Over midnight case
            return $now >= $start || $now <= $end;
        }

        return $now >= $start && $now <= $end;
    }
}
