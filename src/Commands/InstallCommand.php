<?php

namespace Packstub\Flow\Commands;

use Illuminate\Console\Command;

class InstallCommand extends Command
{
    protected $signature = 'flow:install';
    protected $description = 'Install Filament Flow - runs migrations and publishes assets';

    public function handle(): int
    {
        $this->info('Installing Filament Flow...');
        $this->newLine();

        // Run migrations
        $this->components->task('Running migrations', function () {
            $migrationPath = __DIR__ . '/../../database/migrations';

            $this->callSilently('migrate', [
                '--path' => $migrationPath,
                '--realpath' => true,
            ]);
            return true;
        });

        // Publish assets
        $this->components->task('Publishing assets', function () {
            $this->callSilently('vendor:publish', [
                '--tag' => 'laravel-flow-assets',
                '--force' => true,
            ]);
            return true;
        });

        $this->newLine();
        $this->components->info('Filament Flow installed successfully!');
        $this->newLine();
        $this->line('  Next steps:');
        $this->line('  1. Add the HasWorkflows trait to models you want to track');
        $this->line('  2. Register the FlowPlugin in your Filament panel');
        $this->line('  3. Visit /admin/workflows to create your first workflow');
        $this->newLine();

        return self::SUCCESS;
    }
}
