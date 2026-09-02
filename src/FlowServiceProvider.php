<?php

namespace Packstub\Flow;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Asset;
use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;

class FlowServiceProvider extends PackageServiceProvider
{
    public string $name = "packstub-flow";
    public string $viewNamespace = "packstub-flow";

    public function configurePackage(Package $package): void
    {
        $package
            ->name($this->name)
            ->hasConfigFile()
            ->hasViews($this->viewNamespace)
            ->hasAssets()
            ->hasMigration('create_workflow_tables')
            ->hasCommands([
                \Packstub\Flow\Commands\TestWorkflowCommand::class,
                \Packstub\Flow\Commands\InstallCommand::class,
                \Packstub\Flow\Commands\WorkflowsCronCommand::class,
            ]);
    }

    public function packageRegistered(): void
    {
        $this->app->singleton('packstub-flow.registry', function () {
            return new \Packstub\Flow\FlowManager();
        });

        $this->app->singleton('packstub-flow', function () {
            return new \Packstub\Flow\Engines\WorkflowDispatcher();
        });
    }

    public function packageBooted(): void
    {
        \Illuminate\Support\Facades\Event::listen(
            \Illuminate\Auth\Events\Registered::class,
            \Packstub\Flow\Listeners\TriggerWorkflowsListener::class
        );

        \Packstub\Flow\Models\Workflow::observe(\Packstub\Flow\Observers\WorkflowObserver::class);

        $manager = app('packstub-flow.registry');
        $manager->registerTrigger(\Packstub\Flow\Nodes\Triggers\Cron::class);
        $manager->registerTrigger(\Packstub\Flow\Nodes\Triggers\UserRegistered::class);
        $manager->registerTrigger(\Packstub\Flow\Nodes\Triggers\ModelCreated::class);
        $manager->registerTrigger(\Packstub\Flow\Nodes\Triggers\ModelUpdated::class);
        $manager->registerTrigger(\Packstub\Flow\Nodes\Triggers\ModelDeleted::class);
        $manager->registerTrigger(\Packstub\Flow\Nodes\Triggers\SubWorkflowTriggered::class);
        $manager->registerAction(\Packstub\Flow\Nodes\Actions\SendEmail::class);
        $manager->registerAction(\Packstub\Flow\Nodes\Actions\SendSlackNotification::class);
        $manager->registerAction(\Packstub\Flow\Nodes\Actions\UpdateModel::class);
        $manager->registerAction(\Packstub\Flow\Nodes\Actions\HttpRequest::class);
        $manager->registerAction(\Packstub\Flow\Nodes\Actions\Delay::class);
        $manager->registerAction(\Packstub\Flow\Nodes\Actions\DispatchWorkflow::class);

        $manager->registerCondition(\Packstub\Flow\Nodes\Conditions\ModelPropertyCheck::class);
        $manager->registerCondition(\Packstub\Flow\Nodes\Conditions\TimeOfDay::class);

        FilamentAsset::register(
            [
                Css::make('laravel-flow-styles', __DIR__ . '/../dist/laravel-flow.css'),
                Js::make('laravel-flow-scripts', __DIR__ . '/../dist/laravel-flow.js'),
            ],
            'packstub/filament-flow'
        );

        \Livewire\Livewire::component('packstub-flow::manage-node', \Packstub\Flow\Filament\Livewire\ManageNode::class);
    }
}
