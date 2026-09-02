<?php

namespace Packstub\Flow\Nodes\Conditions;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Nodes\Condition;
use Packstub\Flow\Nodes\Conditions\Concerns\ComparesValues;
use Packstub\Flow\Support\Placeholders;

/**
 * Compares any two values; either side may be a placeholder, so it works
 * with webhook and event payloads as well as records.
 */
class CompareValues extends Condition
{
    use ComparesValues;
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.compare_values.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.compare_values.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-scale';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('left')
                ->label(__('packstub-flow::flow.nodes.compare_values.left'))
                ->placeholder('{{ webhook.order.total }}')
                ->required(),
            $this->operatorSelect(),
            TextInput::make('value')
                ->label(__('packstub-flow::flow.nodes.compare.value'))
                ->placeholder('500')
                ->visible(fn (Get $get): bool => static::needsValue($get('operator')))
                ->required(fn (Get $get): bool => static::needsValue($get('operator'))),
        ];
    }

    public function evaluate(array $config, array $payload): bool
    {
        $left = (string) ($config['left'] ?? '');

        // A bare placeholder keeps its raw type (numbers, booleans, arrays).
        $actual = preg_match('/^\{\{\s*([A-Za-z0-9_.\-]+)\s*\}\}$/', trim($left), $matches)
            ? Placeholders::resolve($matches[1], $payload)
            : $this->interpolate($left, $payload);

        return $this->compare(
            $actual,
            (string) ($config['operator'] ?? '='),
            $this->interpolate($config['value'] ?? '', $payload),
        );
    }
}
