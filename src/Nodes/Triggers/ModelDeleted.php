<?php

namespace Packstub\Flow\Nodes\Triggers;

use Packstub\Flow\Base\Trigger;
use Packstub\Flow\Support\ModelFinder;

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
