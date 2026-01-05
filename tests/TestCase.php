<?php

namespace Xlited\LaravelFlow\Tests;

use Orchestra\Testbench\TestCase as BaseTestCase;
// use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Xlited\LaravelFlow\LaravelFlowServiceProvider;
use Filament\FilamentServiceProvider;
use Livewire\LivewireServiceProvider;

class TestCase extends BaseTestCase
{
    protected function setUp(): void
    {
        parent::setUp();
    }

    protected function getPackageProviders($app)
    {
        return [
            LaravelFlowServiceProvider::class,
            FilamentServiceProvider::class,
            LivewireServiceProvider::class,
        ];
    }

    public function getEnvironmentSetUp($app)
    {
        config()->set('database.default', 'testing');

        /*
        $migration = include __DIR__.'/../database/migrations/create_workflow_tables.php.stub';
        $migration->up();
        */
    }
}
