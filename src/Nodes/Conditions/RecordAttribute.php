<?php

namespace Packstub\Flow\Nodes\Conditions;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Nodes\Condition;
use Packstub\Flow\Nodes\Conditions\Concerns\ComparesValues;

/**
 * Compares an attribute of the record that started the run.
 */
class RecordAttribute extends Condition
{
    use ComparesValues;
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.record_attribute.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.record_attribute.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-funnel';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('attribute')
                ->label(__('packstub-flow::flow.nodes.record_attribute.attribute'))
                ->placeholder('status')
                ->helperText(__('packstub-flow::flow.nodes.record_attribute.attribute_help'))
                ->required(),
            $this->operatorSelect(),
            TextInput::make('value')
                ->label(__('packstub-flow::flow.nodes.compare.value'))
                ->placeholder('paid')
                ->visible(fn (Get $get): bool => static::needsValue($get('operator')))
                ->required(fn (Get $get): bool => static::needsValue($get('operator'))),
        ];
    }

    public function evaluate(array $config, array $payload): bool
    {
        $model = $payload['model'] ?? null;
        $attribute = $config['attribute'] ?? null;

        if (! $model instanceof Model || ! $attribute) {
            return false;
        }

        return $this->compare(
            data_get($model, $attribute),
            (string) ($config['operator'] ?? '='),
            $this->interpolate($config['value'] ?? '', $payload),
        );
    }
}
