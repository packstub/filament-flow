<?php

namespace Xlited\LaravelFlow;

use Filament\Contracts\Plugin;
use Filament\Panel;
use Xlited\LaravelFlow\Filament\Resources\WorkflowResource;

class LaravelFlowPlugin implements Plugin
{
    public function getId(): string
    {
        return 'laravel-flow';
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
        $plugin = filament()->getPlugin('laravel-flow');

        return $plugin;
    }
}
