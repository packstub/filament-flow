<?php

namespace Packstub\Flow\Nodes\Triggers;

use Packstub\Flow\Base\Trigger;
use Packstub\Flow\Support\ModelFinder;

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
