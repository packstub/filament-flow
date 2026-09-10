<?php

use Illuminate\Support\Facades\Schema;
use Livewire\Livewire;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\EditWorkflow;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\ListWorkflows;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\Webhook;
use Packstub\Flow\Support\Audit;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

// A stand-in for spatie/laravel-activitylog's activity() helper: the
// package needs PHP 8.4, which the test matrix does not require.
if (! function_exists('activity')) {
    final class FakeActivityLogger
    {
        /** @var array<int, array<string, mixed>> */
        public static array $entries = [];

        /** @var array<string, mixed> */
        private array $entry = [];

        public function __construct(?string $logName)
        {
            $this->entry['log'] = $logName;
        }

        public function __call(string $method, array $arguments): static
        {
            $this->entry[$method] = $arguments[0] ?? null;

            return $this;
        }

        public function log(string $description): void
        {
            $this->entry['description'] = $description;
            static::$entries[] = $this->entry;
        }
    }

    function activity(?string $logName = null): FakeActivityLogger
    {
        return new FakeActivityLogger($logName);
    }
}

beforeEach(function (): void {
    FakeActivityLogger::$entries = [];
});

it('records who created and last saved a workflow', function (): void {
    $jane = createUser(['email' => 'jane@example.com']);
    $tom = createUser(['email' => 'tom@example.com']);

    $this->actingAs($jane);
    $workflow = manualWorkflow();

    expect($workflow->created_by)->toBe('jane@example.com')
        ->and($workflow->updated_by)->toBe('jane@example.com')
        ->and($workflow->fresh()->latestVersion->created_by)->toBe('jane@example.com');

    $this->actingAs($tom);
    $workflow->update(['name' => 'Renamed']);

    expect($workflow->fresh()->created_by)->toBe('jane@example.com')
        ->and($workflow->fresh()->updated_by)->toBe('tom@example.com');

    // Runs and counters written by the engine do not count as a save by Tom.
    auth()->logout();
    $workflow->increment('consecutive_failures');

    expect($workflow->fresh()->updated_by)->toBe('tom@example.com');

    Livewire::test(EditWorkflow::class, ['record' => $workflow->getKey()])
        ->assertSee('Last saved by tom@example.com');
});

it('leaves the audit columns empty without a signed-in user and honours explicit values', function (): void {
    expect(manualWorkflow()->created_by)->toBeNull()
        ->and(manualWorkflow(attributes: ['created_by' => 'seeder'])->created_by)->toBe('seeder')
        ->and(Audit::actor())->toBeNull();
});

it('writes the activity log when the package is installed', function (): void {
    $this->actingAs(createUser(['email' => 'jane@example.com']));

    $workflow = manualWorkflow(attributes: ['is_active' => false, 'name' => 'Audited']);
    $workflow->update(['is_active' => true, 'definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('a', SetStatusAction::class, ['status' => 'x']), actionNode('b', SetStatusAction::class)], 'edges' => [edge('t', 'a'), edge('a', 'b')]]]);
    $workflow->update(['is_active' => false]);
    $workflow->delete();

    $entries = collect(FakeActivityLogger::$entries);

    expect($entries->pluck('description')->all())->toBe(['created', 'updated', 'activated', 'updated', 'deactivated', 'deleted'])
        ->and($entries->first()['log'])->toBe('packstub-flow')
        ->and($entries->first()['performedOn'])->toBeInstanceOf(Workflow::class)
        ->and($entries->first()['causedBy']->email)->toBe('jane@example.com')
        ->and($entries[1]['withProperties']['changed'])->toContain('is_active')->toContain('definition')
        ->and($entries[1]['withProperties']['definition'])->toContain('1 added');

    config()->set('packstub-flow.audit.activity_log', false);
    FakeActivityLogger::$entries = [];
    manualWorkflow();

    expect(FakeActivityLogger::$entries)->toBe([]);
});

it('gives a replicated workflow its own webhook tokens', function (): void {
    $this->actingAs(createUser());

    $workflow = createWorkflow([triggerNode('w', Webhook::class, ['token' => 'original-token-1234', 'signing_secret' => 'shh'])], [], ['is_active' => true]);

    Livewire::test(ListWorkflows::class)->callTableAction('replicate', $workflow);

    $copy = Workflow::query()->where('name', 'Test workflow (copy)')->sole();
    $config = $copy->triggerNode(Webhook::class)['data']['config'];

    expect($copy->is_active)->toBeFalse()
        ->and($config['token'])->not->toBe('original-token-1234')
        ->and(strlen($config['token']))->toBe(40)
        ->and($config['signing_secret'])->toBe('shh')
        ->and($copy->triggers()->sole()->config['token'])->toBe($config['token'])
        ->and($workflow->fresh()->triggerNode(Webhook::class)['data']['config']['token'])->toBe('original-token-1234');
});

it('adds the audit columns to an older schema once', function (): void {
    $table = config('packstub-flow.tables.workflows');

    Schema::table($table, fn ($blueprint) => $blueprint->dropColumn(['created_by', 'updated_by']));
    expect(Schema::hasColumn($table, 'created_by'))->toBeFalse();

    $migration = include __DIR__.'/../../database/migrations/add_audit_columns_to_flow_workflows.php.stub';
    $migration->up();
    $migration->up();

    expect(Schema::hasColumns($table, ['created_by', 'updated_by']))->toBeTrue();
});
