<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Illuminate\Support\Facades\Log;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;

class WriteLog extends Action
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.log.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.log.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-document-text';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('level')
                ->label(__('packstub-flow::flow.nodes.log.level'))
                ->options(array_combine($levels = ['debug', 'info', 'notice', 'warning', 'error'], $levels))
                ->default('info')
                ->required(),
            Textarea::make('message')
                ->label(__('packstub-flow::flow.nodes.log.message'))
                ->placeholder('Order {{ model.id }} changed to {{ model.status }}')
                ->rows(3)
                ->required(),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $level = in_array($config['level'] ?? null, ['debug', 'info', 'notice', 'warning', 'error'], true) ? $config['level'] : 'info';

        Log::log($level, '[flow] '.$this->interpolate($config['message'] ?? '', $payload));
    }
}
