<?php

namespace Xlited\LaravelFlow\Nodes\Triggers;

use Xlited\LaravelFlow\Base\Trigger;
use Xlited\LaravelFlow\Support\ModelFinder;

class ModelDeleted extends Trigger
{
    public function getName(): string
    {
        return 'Model Deleted';
    }

    public function getDescription(): string
    {
        return 'Triggers when a specific Eloquent model is deleted.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-trash';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\Select::make('model_class')
                ->label('Model')
                ->options(ModelFinder::all())
                ->searchable()
                ->placeholder('Select a model...')
                ->required(),
        ];
    }
}
