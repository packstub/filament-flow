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
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
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
