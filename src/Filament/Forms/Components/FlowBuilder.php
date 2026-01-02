<?php

namespace Xlited\LaravelFlow\Filament\Forms\Components;

use Filament\Forms\Components\Field;

class FlowBuilder extends Field
{
    protected string $view = 'laravel-flow::forms.components.flow-builder';

    protected function setUp(): void
    {
        parent::setUp();

        $this->default([]);
    }

    public function getAvailableComponents(): array
    {
        return app('laravel-flow-manager')->getAvailableComponents();
    }
}
