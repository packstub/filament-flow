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
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
    }

    public function getSchema(): array
    {
        return [
            [
                'name' => 'start_time',
                'label' => 'Start Time (HH:mm)',
                'type' => 'text',
                'placeholder' => '09:00',
                'required' => true,
            ],
            [
                'name' => 'end_time',
                'label' => 'End Time (HH:mm)',
                'type' => 'text',
                'placeholder' => '17:00',
                'required' => true,
            ],
            [
                'name' => 'timezone',
                'label' => 'Timezone',
                'type' => 'text',
                'placeholder' => 'UTC',
                'required' => false,
            ],
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
