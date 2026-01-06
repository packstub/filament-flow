<?php

namespace Xlited\LaravelFlow\Nodes\Actions;

use Xlited\LaravelFlow\Base\Action;
use Xlited\LaravelFlow\Contracts\DelayableAction;

class Delay extends Action implements DelayableAction
{
    public function getName(): string
    {
        return 'Delay';
    }

    public function getDescription(): string
    {
        return 'Pauses execution for a specified duration.';
    }

    public function getIcon(): ?string
    {
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\TextInput::make('duration')
                ->label('Duration (Seconds)')
                ->numeric()
                ->placeholder('60')
                ->required(),
        ];
    }

    public function getDelaySeconds(array $data, array $payload): ?int
    {
        $duration = (int) ($data['duration'] ?? 0);
        return $duration > 0 ? $duration : null;
    }

    public function handle(array $data, array $payload): void
    {
        // When using queue-based delays, this method is called after the delay.
        // Nothing to do here - the delay was handled by the queue system.
        // For synchronous fallback (if needed), uncomment the sleep below:
        // $duration = (int) ($data['duration'] ?? 0);
        // if ($duration > 0) {
        //     sleep($duration);
        // }
    }
}

