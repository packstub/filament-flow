<?php

namespace Packstub\Flow\Workbench;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Laravel\Ai\AiServiceProvider;
use Laravel\Mcp\Server\McpServiceProvider;
use Packstub\Agents\AgentsServiceProvider;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\User;

/**
 * The app behind `vendor/bin/testbench serve` for the Playwright smoke test.
 * The skeleton's sqlite file starts empty, so the schema and the user are
 * created here, on the first boot, before the panel handles anything.
 *
 * With packstub/agents installed (`composer require packstub/agents --dev`,
 * PHP 8.4; CI's canvas job does it) the engine is registered too, so the
 * real Ask AI node is offered and the AI group shows in the sidebar.
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

        if (static::engineInstalled()) {
            $this->app->register(AiServiceProvider::class);
            $this->app->register(McpServiceProvider::class);
            $this->app->register(AgentsServiceProvider::class);

            // No MCP endpoint in the smoke test; a key so the model picker lists the provider's entries.
            $this->app['config']->set('packstub-agents.mcp.enabled', false);
            $this->app['config']->set('ai.providers.anthropic.key', 'e2e-placeholder');
        }
    }

    public static function engineInstalled(): bool
    {
        return class_exists(AgentsServiceProvider::class);
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

        if (static::engineInstalled()) {
            foreach (glob(dirname(__DIR__).'/vendor/packstub/agents/database/migrations/*.php') ?: [] as $migration) {
                (include $migration)->up();
            }
        }

        User::query()->create([
            'name' => 'Admin',
            'email' => self::EMAIL,
            'password' => Hash::make(self::PASSWORD),
        ]);
    }
}
