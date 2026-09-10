<?php

namespace Packstub\Flow\Tests;

use BladeUI\Heroicons\BladeHeroiconsServiceProvider;
use BladeUI\Icons\BladeIconsServiceProvider;
use Filament\Actions\ActionsServiceProvider;
use Filament\FilamentServiceProvider;
use Filament\Forms\FormsServiceProvider;
use Filament\Infolists\InfolistsServiceProvider;
use Filament\Notifications\NotificationsServiceProvider;
use Filament\Schemas\SchemasServiceProvider;
use Filament\Support\SupportServiceProvider;
use Filament\Tables\TablesServiceProvider;
use Filament\Widgets\WidgetsServiceProvider;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Testing\DatabaseTransactionsManager;
use Illuminate\Support\Facades\Schema;
use Livewire\LivewireServiceProvider;
use Orchestra\Testbench\TestCase as Orchestra;
use Packstub\Flow\Engine\Dispatcher;
use Packstub\Flow\FlowServiceProvider;
use Packstub\Flow\Listeners\DispatchEventTriggers;
use Packstub\Flow\Support\ModelFinder;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\Secrets;
use Packstub\Flow\Support\Tenancy;
use Packstub\Flow\Tests\Fixtures\AdminPanelProvider;
use Packstub\Flow\Tests\Fixtures\User;
use RyanChandler\BladeCaptureDirective\BladeCaptureDirectiveServiceProvider;
use Spatie\ModelStatus\Status;
use Spatie\Tags\TagsServiceProvider;

abstract class TestCase extends Orchestra
{
    /**
     * Config pinned before the application boots, for values the provider
     * reads while registering (webhook routes). Set through rebootWith().
     *
     * @var array<string, mixed>
     */
    public static array $bootConfig = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->migrate();

        DispatchEventTriggers::flush();
        Dispatcher::flushCache();
        ModelFinder::flush();
        Secrets::flush();
        Placeholders::forgetUsedSecrets();
        Tenancy::resolveUsing(null);
    }

    protected function tearDown(): void
    {
        static::$bootConfig = [];

        parent::tearDown();
    }

    /**
     * Re-create the application with extra config pinned before it boots.
     *
     * @param  array<string, mixed>  $config
     */
    public function rebootWith(array $config): void
    {
        static::$bootConfig = $config;

        $this->reloadApplication();
        $this->migrate();
    }

    protected function getPackageProviders($app): array
    {
        return [
            ActionsServiceProvider::class,
            BladeCaptureDirectiveServiceProvider::class,
            BladeHeroiconsServiceProvider::class,
            BladeIconsServiceProvider::class,
            FilamentServiceProvider::class,
            FormsServiceProvider::class,
            InfolistsServiceProvider::class,
            NotificationsServiceProvider::class,
            SchemasServiceProvider::class,
            SupportServiceProvider::class,
            TablesServiceProvider::class,
            WidgetsServiceProvider::class,
            // Real apps discover filament/* before livewire; keep that order.
            LivewireServiceProvider::class,
            TagsServiceProvider::class,
            FlowServiceProvider::class,
            AdminPanelProvider::class,
            Fixtures\TenantPanelProvider::class,
        ];
    }

    protected function defineEnvironment($app): void
    {
        // sqlite in memory by default; DB_CONNECTION=mysql (with the usual
        // DB_* variables) runs the same suite against a real server, as the
        // MySQL job in CI does.
        $app['config']->set('database.default', env('DB_CONNECTION', 'sqlite'));
        $app['config']->set('database.connections.sqlite', [
            'driver' => 'sqlite',
            'database' => ':memory:',
            'prefix' => '',
            'foreign_key_constraints' => true,
        ]);
        $app['config']->set('database.connections.mysql', [
            'driver' => 'mysql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'filament_flow_test'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'strict' => true,
        ]);
        $app['config']->set('auth.providers.users.model', User::class);
        $app['config']->set('app.key', 'base64:2fl+Ktv6fZ7c7ZQfF1Zt6Q0Wd9jz5bJ6rKq8nX0m3Yk=');
        $app['config']->set('mail.default', 'array');
        $app['config']->set('queue.default', 'sync');
        $app['config']->set('packstub-flow.models_for_triggers', [Fixtures\Order::class, Fixtures\Ticket::class]);
        $app['config']->set('packstub-flow.http.block_private_networks', false);
        $app['config']->set('packstub-flow.tenancy.relationship', 'team');
        $app['config']->set('packstub-flow.gate', null);
        $app['config']->set('packstub-flow.queue.enabled', false);
        $app['config']->set('packstub-flow.queue.connection', null);
        $app['config']->set('packstub-flow.schedule_catch_up_minutes', 0);
        $app['config']->set('model-status.status_model', Status::class);

        foreach (static::$bootConfig as $key => $value) {
            $app['config']->set($key, $value);
        }
    }

    /** Whether the server-backed database already has the schema. */
    protected static bool $schemaReady = false;

    /**
     * Build the schema. The in-memory sqlite database is new for every test;
     * a server-backed one (DB_CONNECTION=mysql) is built once per process and
     * every test runs inside a transaction that is rolled back afterwards.
     */
    protected function migrate(): void
    {
        $persistent = config('database.default') !== 'sqlite';

        if ($persistent && static::$schemaReady) {
            $this->beginDatabaseTransaction();

            return;
        }

        if ($persistent) {
            Schema::dropAllTables();
        }

        $this->createTables();

        if ($persistent) {
            static::$schemaReady = true;
            $this->beginDatabaseTransaction();
        }
    }

    /**
     * Same as Laravel's DatabaseTransactions trait; the transactions manager
     * knows about the test transaction, so after-commit jobs still run.
     */
    protected function beginDatabaseTransaction(): void
    {
        $name = config('database.default');
        $connection = $this->app->make('db')->connection($name);

        $this->app->instance('db.transactions', $manager = new DatabaseTransactionsManager([$name]));
        $connection->setTransactionManager($manager);
        $connection->beginTransaction();

        $this->beforeApplicationDestroyed(function () use ($connection): void {
            $connection->rollBack();
            $connection->disconnect();
        });
    }

    protected function createTables(): void
    {
        Schema::create('teams', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->unsignedInteger('max_workflows')->nullable();
            $table->timestamps();
        });

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

        Schema::create('notes', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('order_id');
            $table->string('body');
            $table->timestamps();
        });

        Schema::create('tags', function (Blueprint $table): void {
            $table->id();
            $table->json('name');
            $table->json('slug');
            $table->string('type')->nullable();
            $table->integer('order_column')->nullable();
            $table->timestamps();
        });

        Schema::create('taggables', function (Blueprint $table): void {
            $table->foreignId('tag_id')->constrained()->cascadeOnDelete();
            $table->morphs('taggable');
            $table->unique(['tag_id', 'taggable_id', 'taggable_type']);
        });

        Schema::create('tickets', function (Blueprint $table): void {
            $table->id();
            $table->string('title');
            $table->timestamps();
        });

        Schema::create('statuses', function (Blueprint $table): void {
            $table->increments('id');
            $table->string('name');
            $table->text('reason')->nullable();
            $table->morphs('model');
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

        (include __DIR__.'/../database/migrations/create_flow_tables.php.stub')->up();
    }
}
