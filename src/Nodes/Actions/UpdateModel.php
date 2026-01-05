<?php

namespace Xlited\LaravelFlow\Nodes\Actions;

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
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\Select::make('model_class')
                ->label('Model Type')
                ->options(ModelFinder::all())
                ->searchable()
                ->required(),
            \Filament\Forms\Components\Textarea::make('attributes')
                ->label('Attributes (JSON)')
                ->placeholder('{"status": "active"}')
                ->required(),
        ];
    }

    public function handle(array $data, array $payload): void
    {
        // Requires payload to contain the model instance or ID.
        // For generic update, we assume payload has 'model' key or similar,
        // OR the trigger context passed the model.
        // Implementation depends on how payload is structured.
        // For now, simple logging/placeholder logic.

        $modelClass = $data['model_class'] ?? null;
        $attributes = json_decode($data['attributes'] ?? '{}', true);

        if (isset($payload['model']) && $payload['model'] instanceof Model) {
            $payload['model']->update($attributes);
        }
    }
}
