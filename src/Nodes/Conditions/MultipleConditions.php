<?php

namespace Packstub\Flow\Nodes\Conditions;

use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Nodes\Condition;
use Packstub\Flow\Nodes\Conditions\Concerns\ComparesValues;
use Packstub\Flow\Support\Placeholders;

/**
 * Several comparisons in one node, joined with AND ("all of") or OR ("any
 * of"). Each rule compares a placeholder with a value, like Compare values.
 */
class MultipleConditions extends Condition
{
    use ComparesValues;
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.multiple_conditions.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.multiple_conditions.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-list-bullet';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('match')
                ->label(__('packstub-flow::flow.nodes.multiple_conditions.match'))
                ->options([
                    'all' => __('packstub-flow::flow.nodes.multiple_conditions.all'),
                    'any' => __('packstub-flow::flow.nodes.multiple_conditions.any'),
                ])
                ->default('all')
                ->required(),
            Repeater::make('rules')
                ->label(__('packstub-flow::flow.nodes.multiple_conditions.rules'))
                ->schema([
                    TextInput::make('left')
                        ->label(__('packstub-flow::flow.nodes.compare_values.left'))
                        ->placeholder('{{ model.status }}')
                        ->required(),
                    $this->operatorSelect(),
                    TextInput::make('value')
                        ->label(__('packstub-flow::flow.nodes.compare.value'))
                        ->visible(fn (Get $get): bool => static::needsValue($get('operator')))
                        ->required(fn (Get $get): bool => static::needsValue($get('operator'))),
                ])
                ->columns(3)
                ->minItems(1)
                ->defaultItems(1)
                ->addActionLabel(__('packstub-flow::flow.nodes.multiple_conditions.add_rule'))
                ->required(),
        ];
    }

    public function evaluate(array $config, array $payload): bool
    {
        $rules = array_values(array_filter((array) ($config['rules'] ?? []), 'is_array'));

        if ($rules === []) {
            return false;
        }

        $any = ($config['match'] ?? 'all') === 'any';

        foreach ($rules as $rule) {
            $result = $this->evaluateRule($rule, $payload);

            if ($any && $result) {
                return true;
            }

            if (! $any && ! $result) {
                return false;
            }
        }

        return ! $any;
    }

    /**
     * @param  array<string, mixed>  $rule
     * @param  array<string, mixed>  $payload
     */
    protected function evaluateRule(array $rule, array $payload): bool
    {
        $left = (string) ($rule['left'] ?? '');

        $actual = Placeholders::isSingle($left) ? Placeholders::raw($left, $payload) : $this->interpolate($left, $payload);

        return $this->compare($actual, (string) ($rule['operator'] ?? '='), $this->interpolate($rule['value'] ?? '', $payload));
    }
}
