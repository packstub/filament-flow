<?php

namespace Packstub\Flow\Nodes\Triggers;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Nodes\Trigger;
use Packstub\Flow\Support\ModelFinder;
use Spatie\ModelStatus\Events\StatusUpdated;

/**
 * Fires when a spatie/laravel-model-status status is set. Available when
 * the package is installed.
 */
class StatusChanged extends Trigger
{
    public static function isAvailable(): bool
    {
        return class_exists(StatusUpdated::class);
    }

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.status_changed.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.status_changed.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-tag';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('model_class')
                ->label(__('packstub-flow::flow.nodes.record.model'))
                ->options(fn (): array => ModelFinder::options())
                ->searchable()
                ->required(),
            TextInput::make('from')
                ->label(__('packstub-flow::flow.nodes.status_changed.from'))
                ->placeholder('pending')
                ->helperText(__('packstub-flow::flow.nodes.status_changed.from_help')),
            TextInput::make('to')
                ->label(__('packstub-flow::flow.nodes.status_changed.to'))
                ->placeholder('approved'),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        $model = $payload['model'] ?? null;
        $class = $config['model_class'] ?? null;

        if (! $model instanceof Model || ($class && ! $model instanceof $class)) {
            return false;
        }

        $from = trim((string) ($config['from'] ?? ''));
        $to = trim((string) ($config['to'] ?? ''));

        return ($from === '' || strcasecmp((string) ($payload['from'] ?? ''), $from) === 0)
            && ($to === '' || strcasecmp((string) ($payload['to'] ?? ''), $to) === 0);
    }

    public function getPlaceholders(): array
    {
        return [
            '{{ model.name }}' => __('packstub-flow::flow.placeholders.model'),
            '{{ from }}' => __('packstub-flow::flow.placeholders.state_from'),
            '{{ to }}' => __('packstub-flow::flow.placeholders.state_to'),
            '{{ reason }}' => __('packstub-flow::flow.placeholders.status_reason'),
        ];
    }
}
