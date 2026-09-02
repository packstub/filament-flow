<?php

namespace Packstub\Flow\Filament\Forms\Components;

use Filament\Forms\Components\Field;

class FlowBuilder extends Field
{
    protected string $view = 'packstub-flow::forms.components.flow-builder';

    protected function setUp(): void
    {
        parent::setUp();

        $this->default([]);
    }

    public function getAvailableComponents(): array
    {
        return app('packstub-flow.registry')->getAvailableComponents();
    }
}
