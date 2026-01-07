<?php

namespace Xlited\LaravelFlow\Nodes\Triggers;

use Xlited\LaravelFlow\Base\Trigger;
use Filament\Forms\Components\TextInput;

class Cron extends Trigger
{
    public function getName(): string
    {
        return 'Cron Schedule';
    }

    public function getDescription(): string
    {
        return 'Triggers on a specific time schedule using cron expression.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-calendar-days';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('expression')
                ->label('Cron Expression')
                ->placeholder('* * * * *')
                ->helperText('Minute, Hour, Day of Month, Month, Day of Week')
                ->required()
                ->rules(['required', 'string']),
        ];
    }
}
