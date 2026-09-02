<?php

namespace Packstub\Flow\Nodes\Triggers;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Nodes\Trigger;
use Packstub\Flow\Support\ModelFinder;
use Spatie\ModelStates\Events\StateChanged;

/**
 * Fires when a spatie/laravel-model-states state changes: "when an order
 * becomes Paid". Optional from / to filters accept the state's name or
 * class. Available when the package is installed.
 */
class StateTransitioned extends Trigger
{
    public static function isAvailable(): bool
    {
        return class_exists(StateChanged::class);
    }

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.state_transitioned.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.state_transitioned.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-arrows-right-left';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('model_class')
                ->label(__('packstub-flow::flow.nodes.record.model'))
                ->options(fn (): array => ModelFinder::options())
                ->searchable()
                ->required(),
            TextInput::make('field')
                ->label(__('packstub-flow::flow.nodes.state_transitioned.field'))
                ->placeholder('status')
                ->helperText(__('packstub-flow::flow.nodes.state_transitioned.field_help')),
            TextInput::make('from')
                ->label(__('packstub-flow::flow.nodes.state_transitioned.from'))
                ->placeholder('pending')
                ->helperText(__('packstub-flow::flow.nodes.state_transitioned.from_help')),
            TextInput::make('to')
                ->label(__('packstub-flow::flow.nodes.state_transitioned.to'))
                ->placeholder('paid'),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        $model = $payload['model'] ?? null;
        $class = $config['model_class'] ?? null;

        if (! $model instanceof Model || ($class && ! $model instanceof $class)) {
            return false;
        }

        $field = trim((string) ($config['field'] ?? ''));

        if ($field !== '' && ($payload['field'] ?? null) !== $field) {
            return false;
        }

        return static::stateIs($payload['from_state'] ?? null, $config['from'] ?? null)
            && static::stateIs($payload['to_state'] ?? null, $config['to'] ?? null);
    }

    /**
     * A state matches a filter by name (morph name), class name or short
     * class name; an empty filter matches any state.
     */
    public static function stateIs(?object $state, mixed $expected): bool
    {
        $expected = trim((string) $expected);

        if ($expected === '') {
            return true;
        }

        if ($state === null) {
            return false;
        }

        $candidates = array_map('strtolower', array_filter([
            $state::class,
            class_basename($state),
            method_exists($state, 'getValue') ? (string) $state->getValue() : null,
        ]));

        return in_array(strtolower(ltrim($expected, '\\')), $candidates, true);
    }

    public function getPlaceholders(): array
    {
        return [
            '{{ model.name }}' => __('packstub-flow::flow.placeholders.model'),
            '{{ from }}' => __('packstub-flow::flow.placeholders.state_from'),
            '{{ to }}' => __('packstub-flow::flow.placeholders.state_to'),
        ];
    }
}
