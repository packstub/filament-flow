<?php

namespace Packstub\Flow;

use Filament\Contracts\Plugin;
use Filament\Panel;
use Packstub\Flow\Filament\Resources\WorkflowResource;

class FlowPlugin implements Plugin
{
    public function getId(): string
    {
        return 'packstub-flow';
    }

    public function register(Panel $panel): void
    {
        $panel
            ->resources([
                WorkflowResource::class,
            ]);
    }

    public function boot(Panel $panel): void
    {
        //
    }

    public static function make(): static
    {
        return app(static::class);
    }

    public static function get(): static
    {
        /** @var static $plugin */
        $plugin = filament()->getPlugin('packstub-flow');

        return $plugin;
    }
}
