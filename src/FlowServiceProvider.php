<?php

namespace Packstub\Flow;

use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Illuminate\Auth\Events\Registered;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Route;
use Livewire\Livewire;
use Packstub\Flow\Commands\PruneRunsCommand;
use Packstub\Flow\Commands\RunScheduledWorkflowsCommand;
use Packstub\Flow\Commands\RunWorkflowCommand;
use Packstub\Flow\Engine\Dispatcher;
use Packstub\Flow\Filament\Livewire\ManageNode;
use Packstub\Flow\Http\Controllers\WebhookController;
use Packstub\Flow\Listeners\DispatchEventTriggers;
use Packstub\Flow\Listeners\DispatchUserRegistered;
use Packstub\Flow\Observers\WorkflowObserver;
use Spatie\LaravelPackageTools\Commands\InstallCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FlowServiceProvider extends PackageServiceProvider
{
    public static string $name = 'packstub-flow';

    public function configurePackage(Package $package): void
    {
        $package
            ->name(static::$name)
            ->hasConfigFile()
            ->hasViews(static::$name)
            ->hasTranslations()
            ->hasMigration('create_flow_tables')
            ->hasCommands([
                RunScheduledWorkflowsCommand::class,
                RunWorkflowCommand::class,
                PruneRunsCommand::class,
            ])
            ->hasInstallCommand(function (InstallCommand $command): void {
                $command
                    ->publishConfigFile()
                    ->publishMigrations()
                    ->askToRunMigrations()
                    ->askToStarRepoOnGitHub('packstub/filament-flow');
            });
    }

    public function packageRegistered(): void
    {
        $this->app->singleton(NodeRegistry::class, function (): NodeRegistry {
            return (new NodeRegistry)
                ->registerTriggers(config('packstub-flow.triggers', []))
                ->registerActions(config('packstub-flow.actions', []))
                ->registerConditions(config('packstub-flow.conditions', []));
        });

        $this->app->singleton(Dispatcher::class);
        $this->app->singleton(Flow::class);
    }

    public function packageBooted(): void
    {
        Flow::workflowModel()::observe(WorkflowObserver::class);

        Event::listen(Registered::class, DispatchUserRegistered::class);
        Event::listen('*', DispatchEventTriggers::class);

        Livewire::component('packstub-flow-manage-node', ManageNode::class);

        FilamentAsset::register([
            Css::make('packstub-flow', __DIR__.'/../resources/dist/flow.css'),
            Js::make('packstub-flow', __DIR__.'/../resources/dist/flow.js'),
        ], 'packstub/filament-flow');

        if (config('packstub-flow.webhooks.enabled', true)) {
            Route::post(trim((string) config('packstub-flow.webhooks.prefix', 'flow/webhooks'), '/').'/{workflow}/{token}', WebhookController::class)
                ->middleware(config('packstub-flow.webhooks.middleware', ['api']))
                ->name('packstub-flow.webhook');
        }

        if (config('packstub-flow.register_schedule', true)) {
            $this->callAfterResolving(Schedule::class, function (Schedule $schedule): void {
                $schedule->command('packstub-flow:cron')->everyMinute()->withoutOverlapping();

                if (config('packstub-flow.prune_runs_after_days')) {
                    $schedule->command('packstub-flow:prune')->daily();
                }
            });
        }
    }
}
