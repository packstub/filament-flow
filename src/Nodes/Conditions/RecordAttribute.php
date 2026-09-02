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

    protected function extraOperators(): array
    {
        return [
            'changed' => __('packstub-flow::flow.nodes.compare.operators.changed'),
            'changed_from' => __('packstub-flow::flow.nodes.compare.operators.changed_from'),
            'changed_to' => __('packstub-flow::flow.nodes.compare.operators.changed_to'),
        ];
    }

    public function evaluate(array $config, array $payload): bool
    {
        $model = $payload['model'] ?? null;
        $attribute = $config['attribute'] ?? null;

        if (! $model instanceof Model || ! $attribute) {
            return false;
        }

        $operator = (string) ($config['operator'] ?? '=');
        $expected = $this->interpolate($config['value'] ?? '', $payload);

        // "changed" operators read the "Record updated" trigger's changes / original.
        if (in_array($operator, ['changed', 'changed_from', 'changed_to'], true)) {
            if (! array_key_exists($attribute, (array) ($payload['changes'] ?? []))) {
                return false;
            }

            return match ($operator) {
                'changed' => true,
                'changed_from' => $this->compare(data_get((array) ($payload['original'] ?? []), $attribute), '=', $expected),
                default => $this->compare(data_get($model, $attribute), '=', $expected),
            };
        }

        return $this->compare(data_get($model, $attribute), $operator, $expected);
    }
}
