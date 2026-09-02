<?php

namespace Packstub\Flow\Tests;

use Orchestra\Testbench\TestCase as BaseTestCase;
// use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Packstub\Flow\FlowServiceProvider;
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
            FlowServiceProvider::class,
            FilamentServiceProvider::class,
            LivewireServiceProvider::class,
        ];
    }

    public function getEnvironmentSetUp($app)
    {
        config()->set('database.default', 'testing');

        $migration = include __DIR__ . '/../database/migrations/2026_01_01_000000_create_workflow_tables.php';
        $migration->up();

        // Create users table for testing
        \Illuminate\Support\Facades\Schema::create('users', function (\Illuminate\Database\Schema\Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }
}
