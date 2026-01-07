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
            ->hasCommands([
                \Xlited\LaravelFlow\Commands\TestWorkflowCommand::class,
                \Xlited\LaravelFlow\Commands\InstallCommand::class,
                \Xlited\LaravelFlow\Commands\WorkflowsCronCommand::class,
            ]);
    }

    public function packageRegistered(): void
    {
        $this->app->singleton('laravel-flow-manager', function () {
            return new \Xlited\LaravelFlow\FlowManager();
        });

        $this->app->singleton('laravel-flow', function () {
            return new \Xlited\LaravelFlow\Engines\WorkflowDispatcher();
        });
    }

    public function packageBooted(): void
    {
        \Illuminate\Support\Facades\Event::listen(
            \Illuminate\Auth\Events\Registered::class,
            \Xlited\LaravelFlow\Listeners\TriggerWorkflowsListener::class
        );

        \Xlited\LaravelFlow\Models\Workflow::observe(\Xlited\LaravelFlow\Observers\WorkflowObserver::class);

        $manager = app('laravel-flow-manager');
        $manager->registerTrigger(\Xlited\LaravelFlow\Nodes\Triggers\Cron::class);
        $manager->registerTrigger(\Xlited\LaravelFlow\Nodes\Triggers\UserRegistered::class);
        $manager->registerTrigger(\Xlited\LaravelFlow\Nodes\Triggers\ModelCreated::class);
        $manager->registerTrigger(\Xlited\LaravelFlow\Nodes\Triggers\ModelUpdated::class);
        $manager->registerTrigger(\Xlited\LaravelFlow\Nodes\Triggers\ModelDeleted::class);
        $manager->registerTrigger(\Xlited\LaravelFlow\Nodes\Triggers\WorkflowChained::class);
        $manager->registerAction(\Xlited\LaravelFlow\Nodes\Actions\SendEmail::class);
        $manager->registerAction(\Xlited\LaravelFlow\Nodes\Actions\SendSlackNotification::class);
        $manager->registerAction(\Xlited\LaravelFlow\Nodes\Actions\UpdateModel::class);
        $manager->registerAction(\Xlited\LaravelFlow\Nodes\Actions\HttpRequest::class);
        $manager->registerAction(\Xlited\LaravelFlow\Nodes\Actions\Delay::class);

        $manager->registerCondition(\Xlited\LaravelFlow\Nodes\Conditions\ModelPropertyCheck::class);
        $manager->registerCondition(\Xlited\LaravelFlow\Nodes\Conditions\TimeOfDay::class);

        FilamentAsset::register(
            [
                Css::make('laravel-flow-styles', __DIR__ . '/../dist/laravel-flow.css'),
                Js::make('laravel-flow-scripts', __DIR__ . '/../dist/laravel-flow.js'),
            ],
            'xlited/laravel-flow'
        );

        \Livewire\Livewire::component('laravel-flow::manage-node', \Xlited\LaravelFlow\Filament\Livewire\ManageNode::class);
    }
}
