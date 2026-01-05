<?php

namespace Xlited\LaravelFlow\Nodes\Triggers;

use Xlited\LaravelFlow\Base\Trigger;
use Xlited\LaravelFlow\Support\ModelFinder;

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
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>';
    }

    public function getSchema(): array
    {
        return [
            [
                'name' => 'model_class',
                'label' => 'Model',
                'type' => 'searchable-select',
                'options' => ModelFinder::all(),
                'placeholder' => 'Select a model...',
                'required' => true,
            ],
        ];
    }
}
