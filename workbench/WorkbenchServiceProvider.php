<?php

namespace Packstub\Flow\Workbench;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\User;

/**
 * The app behind `vendor/bin/testbench serve` for the Playwright smoke test.
 * The skeleton's sqlite file starts empty, so the schema and the user are
 * created here, on the first boot, before the panel handles anything.
 */
class WorkbenchServiceProvider extends ServiceProvider
{
    public const EMAIL = 'admin@example.com';

    public const PASSWORD = 'password';

    public function register(): void
    {
        $this->app['config']->set('auth.providers.users.model', User::class);
        $this->app['config']->set('packstub-flow.models_for_triggers', [Order::class]);
        $this->app['config']->set('packstub-flow.queue.enabled', false);

    }

    public function boot(): void
    {
        if (Schema::hasTable('users')) {
            return;
        }

        Schema::create('users', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('team_id')->nullable();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('orders', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('user_id')->nullable();
            $table->foreignId('team_id')->nullable();
            $table->string('reference');
            $table->string('status')->default('pending');
            $table->decimal('total', 10, 2)->default(0);
            $table->string('state')->nullable();
            $table->timestamp('due_at')->nullable();
            $table->timestamps();
        });

        Schema::create('notifications', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->string('type');
            $table->morphs('notifiable');
            $table->text('data');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });

        Schema::create('sessions', function (Blueprint $table): void {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        (include __DIR__.'/../database/migrations/create_flow_tables.php.stub')->up();

        User::query()->create([
            'name' => 'Admin',
            'email' => self::EMAIL,
            'password' => Hash::make(self::PASSWORD),
        ]);
    }
}
