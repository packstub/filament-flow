<?php

namespace Xlited\LaravelFlow\Nodes\Conditions;

use Xlited\LaravelFlow\Base\Condition;
use Xlited\LaravelFlow\Support\ModelFinder;
use Illuminate\Database\Eloquent\Model;

class ModelPropertyCheck extends Condition
{
    public function getName(): string
    {
        return 'Model Property Check';
    }

    public function getDescription(): string
    {
        return 'Checks if a model property meets a specific condition.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-magnifying-glass';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\TextInput::make('property')
                ->label('Property')
                ->placeholder('status')
                ->required(),
            \Filament\Forms\Components\Select::make('operator')
                ->label('Operator')
                ->options([
                    '=' => 'Equals',
                    '!=' => 'Not Equals',
                    '>' => 'Greater Than',
                    '>=' => 'Greater Than or Equal To',
                    '<' => 'Less Than',
                    '<=' => 'Less Than or Equal To',
                    '*' => 'Contains',
                ])
                ->required(),
            \Filament\Forms\Components\TextInput::make('value')
                ->label('Value')
                ->placeholder('active')
                ->required(),
        ];
    }

    public function evaluate(array $data, array $payload): bool
    {
        $property = $data['property'] ?? null;
        $operator = $data['operator'] ?? '=';
        $targetValue = $data['value'] ?? null;

        $model = $payload['model'] ?? null;

        if (!($model instanceof Model) || !$property) {
            // Cannot evaluate without model or property
            return false;
        }

        $actualValue = $model->getAttribute($property);

        return match ($operator) {
            '=' => $actualValue == $targetValue,
            '!=' => $actualValue != $targetValue,
            '>' => $actualValue > $targetValue,
            '>=' => $actualValue >= $targetValue,
            '<' => $actualValue < $targetValue,
            '<=' => $actualValue <= $targetValue,
            '*' => str_contains((string) $actualValue, (string) $targetValue),
            default => false,
        };
    }
}
