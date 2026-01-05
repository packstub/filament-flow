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

    public function getSchema(): array
    {
        return [
            [
                'name' => 'model_class',
                'label' => 'Model Type',
                'type' => 'searchable-select',
                'options' => ModelFinder::all(),
                'required' => true,
            ],
            [
                'name' => 'property',
                'label' => 'Property',
                'type' => 'text',
                'placeholder' => 'status',
                'required' => true,
            ],
            [
                'name' => 'operator',
                'label' => 'Operator',
                'type' => 'select',
                'options' => [
                    'equals' => 'Equals',
                    'not_equals' => 'Not Equals',
                    'greater_than' => 'Greater Than',
                    'less_than' => 'Less Than',
                    'contains' => 'Contains',
                ],
                'required' => true,
            ],
            [
                'name' => 'value',
                'label' => 'Value',
                'type' => 'text',
                'placeholder' => 'active',
                'required' => true,
            ],
        ];
    }

    public function evaluate(array $data, array $payload): bool
    {
        $property = $data['property'] ?? null;
        $operator = $data['operator'] ?? 'equals';
        $targetValue = $data['value'] ?? null;

        $model = $payload['model'] ?? null;

        if (!($model instanceof Model) || !$property) {
            return false;
        }

        $actualValue = $model->getAttribute($property);

        return match ($operator) {
            'equals' => $actualValue == $targetValue,
            'not_equals' => $actualValue != $targetValue,
            'greater_than' => $actualValue > $targetValue,
            'less_than' => $actualValue < $targetValue,
            'contains' => str_contains((string) $actualValue, (string) $targetValue),
            default => false,
        };
    }
}
