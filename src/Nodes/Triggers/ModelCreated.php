<?php

namespace Packstub\Flow\Nodes\Triggers;

use Packstub\Flow\Base\Trigger;
use Packstub\Flow\Support\ModelFinder;

class ModelCreated extends Trigger
{
    public function getName(): string
    {
        return 'Model Created';
    }

    public function getDescription(): string
    {
        return 'Triggers when a specific Eloquent model is created.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-plus-circle';
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
