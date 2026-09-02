<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Packstub\Flow\Contracts\Delayable;
use Packstub\Flow\Nodes\Action;

/**
 * Pauses the run; the nodes after it continue through the queue.
 */
class Wait extends Action implements Delayable
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.wait.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.wait.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-clock';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('duration')
                ->label(__('packstub-flow::flow.nodes.wait.duration'))
                ->numeric()
                ->minValue(1)
                ->default(1)
                ->required(),
            Select::make('unit')
                ->label(__('packstub-flow::flow.nodes.wait.unit'))
                ->options([
                    'seconds' => __('packstub-flow::flow.nodes.wait.units.seconds'),
                    'minutes' => __('packstub-flow::flow.nodes.wait.units.minutes'),
                    'hours' => __('packstub-flow::flow.nodes.wait.units.hours'),
                    'days' => __('packstub-flow::flow.nodes.wait.units.days'),
                ])
                ->default('minutes')
                ->required(),
        ];
    }

    public function getDelaySeconds(array $config, array $payload): ?int
    {
        $duration = (int) ($config['duration'] ?? 0);

        $multiplier = match ($config['unit'] ?? 'seconds') {
            'minutes' => 60,
            'hours' => 3600,
            'days' => 86400,
            default => 1,
        };

        return $duration > 0 ? $duration * $multiplier : null;
    }

    public function handle(array $config, array $payload): void
    {
        // The runner never calls this: the delay is served by the queue.
    }
}
