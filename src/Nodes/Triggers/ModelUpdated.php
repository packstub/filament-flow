<?php

namespace Xlited\LaravelFlow\Nodes\Triggers;

use Xlited\LaravelFlow\Base\Trigger;
use Xlited\LaravelFlow\Support\ModelFinder;

class ModelUpdated extends Trigger
{
    public function getName(): string
    {
        return 'Model Updated';
    }

    public function getDescription(): string
    {
        return 'Triggers when a specific Eloquent model is updated.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-pencil-square';
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
