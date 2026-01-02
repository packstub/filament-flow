<?php

namespace Xlited\LaravelFlow;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Asset;
use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;

class LaravelFlowServiceProvider extends PackageServiceProvider
{
    public string $name = "laravel-flow";
    public string $viewNamespace = "laravel-flow";

    public function configurePackage(Package $package): void
    {
        $package
            ->name($this->name)
            ->hasConfigFile()
            ->hasViews($this->viewNamespace)
            ->hasAssets()
            ->hasMigration('create_workflow_tables')
            ->hasCommand(\Xlited\LaravelFlow\Commands\TestWorkflowCommand::class);
    }

    public function packageRegistered(): void
    {
        $this->app->singleton('laravel-flow', function () {
            return new \Xlited\LaravelFlow\Engines\WorkflowDispatcher();
        });
    }

    public function packageBooted(): void
    {
        FilamentAsset::register(
            [
                Css::make('laravel-flow-styles', __DIR__ . '/../dist/laravel-flow.css'),
                Js::make('laravel-flow-scripts', __DIR__ . '/../dist/laravel-flow.js'),
            ],
            'xlited/laravel-flow'
        );
    }
}
