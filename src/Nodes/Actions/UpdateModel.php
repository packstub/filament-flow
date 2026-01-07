<?php

namespace Xlited\LaravelFlow\Nodes\Actions;

use Filament\Forms\Components\Repeater\TableColumn;
use Filament\Forms\Components\TextInput;
use Xlited\LaravelFlow\Base\Action;
use Xlited\LaravelFlow\Support\ModelFinder;
use Illuminate\Database\Eloquent\Model;

class UpdateModel extends Action
{
    public function getName(): string
    {
        return 'Update Model';
    }

    public function getDescription(): string
    {
        return 'Updates attributes of a generic Eloquent model.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-pencil-square';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\KeyValue::make('attributes')
                ->required(),
        ];
    }

    public function handle(array $data, array $payload): void
    {
        $attributes = $data['attributes'] ?? [];

        // Use model from payload
        if (isset($payload['model']) && $payload['model'] instanceof Model) {
            // Prevent infinite loops by updating without firing events
            // if the workflow is triggered by an update event.
            // Best practice: use withoutEvents.
            $model = $payload['model'];
            $class = get_class($model);

            $class::withoutEvents(function () use ($model, $attributes) {
                $model->update($attributes);
            });
        }
    }
}
