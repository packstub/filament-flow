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
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
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
