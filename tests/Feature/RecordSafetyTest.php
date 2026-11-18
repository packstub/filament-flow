<?php

use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\CallWorkflow;
use Packstub\Flow\Nodes\Actions\CreateRecord;
use Packstub\Flow\Nodes\Actions\FindRecords;
use Packstub\Flow\Nodes\Actions\ForEachLoop;
use Packstub\Flow\Nodes\Actions\UpdateRecord;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\WorkflowCalled;
use Packstub\Flow\Support\DefinitionValidator;
use Packstub\Flow\Support\RecordGuard;
use Packstub\Flow\Support\WorkflowTransfer;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\GuardedOrder;
use Packstub\Flow\Tests\Fixtures\Note;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\Team;
use Packstub\Flow\Tests\Fixtures\Ticket;
use Packstub\Flow\Tests\Fixtures\User;

function safetyTeam(string $name): Team
{
    return Team::query()->create(['name' => $name, 'slug' => strtolower($name)]);
}

/**
 * @param  array<int, array<string, mixed>>  $nodes
 * @param  array<int, array<string, mixed>>  $edges
 */
function teamWorkflow(?Team $team, array $nodes, array $edges): Workflow
{
    return createWorkflow($nodes, $edges, ['tenant_type' => $team?->getMorphClass(), 'tenant_id' => $team?->getKey()]);
}

// --- Find records ---------------------------------------------------------

it('finds only the records of the run\'s tenant', function (): void {
    $acme = safetyTeam('Acme');
    $globex = safetyTeam('Globex');
    createOrder(['team_id' => $acme->id, 'reference' => 'ACME-1']);
    createOrder(['team_id' => $globex->id, 'reference' => 'GLOBEX-1']);
    createOrder(['team_id' => $globex->id, 'reference' => 'GLOBEX-2']);

    $workflow = teamWorkflow($acme, [
        triggerNode('t', Manual::class),
        actionNode('find', FindRecords::class, ['model_class' => Order::class]),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.count }}']),
    ], [edge('t', 'find'), edge('find', 'echo')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('1');

    // A global workflow without a tenant still sees every record.
    $global = teamWorkflow(null, [
        triggerNode('t', Manual::class),
        actionNode('find', FindRecords::class, ['model_class' => Order::class]),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.count }}']),
    ], [edge('t', 'find'), edge('find', 'echo')]);

    expect(Flow::run($global)->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('3');
});

it('refuses to find records of a model with no link to the tenant in a tenant\'s run', function (): void {
    $acme = safetyTeam('Acme');
    Ticket::query()->create(['title' => 'Shared']);

    $workflow = teamWorkflow($acme, [
        triggerNode('t', Manual::class),
        actionNode('find', FindRecords::class, ['model_class' => Ticket::class]),
    ], [edge('t', 'find')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('Ticket')->toContain('tenant');
});

it('lets the app scope or share a model with Flow::scopeRecordsUsing()', function (): void {
    $acme = safetyTeam('Acme');
    Ticket::query()->create(['title' => 'Shared']);

    Flow::scopeRecordsUsing(fn ($query, $tenant): bool => $query->getModel() instanceof Ticket);

    $workflow = teamWorkflow($acme, [
        triggerNode('t', Manual::class),
        actionNode('find', FindRecords::class, ['model_class' => Ticket::class]),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.count }}']),
    ], [edge('t', 'find'), edge('find', 'echo')]);

    expect(Flow::run($workflow)->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('1');
});

// --- Allowed models ---------------------------------------------------------

it('refuses to import or save record nodes on a model the app did not allow', function (string $node): void {
    $definition = ['nodes' => [
        triggerNode('t', Manual::class),
        actionNode('a', $node, ['model_class' => User::class, 'attributes' => ['name' => 'x']]),
    ], 'edges' => [edge('t', 'a')]];

    expect(DefinitionValidator::problems($definition, active: false))->toHaveCount(1)
        ->and(fn () => WorkflowTransfer::import(['definition' => $definition]))->toThrow(WorkflowException::class, 'User');
})->with([CreateRecord::class, FindRecords::class]);

it('refuses record nodes on a model the app did not allow when the run reaches them', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('a', CreateRecord::class, ['model_class' => User::class, 'force' => true, 'attributes' => ['name' => 'x', 'email' => 'x@example.com', 'password' => 'secret']]),
    ], [edge('t', 'a')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('User')
        ->and(User::query()->where('email', 'x@example.com')->exists())->toBeFalse();

    // Update record checks the record it is handed too.
    $user = createUser();

    expect(fn () => (new UpdateRecord)->handle(['attributes' => ['name' => 'y']], ['model' => $user]))
        ->toThrow(WorkflowException::class, 'User');
});

it('allows exactly the models the app lists for record nodes', function (): void {
    config()->set('packstub-flow.records.models', [Note::class]);

    expect(array_keys(RecordGuard::options()))->toBe([Note::class]);

    Flow::recordModels([Ticket::class]);

    expect(array_keys(RecordGuard::options()))->toBe([Note::class, Ticket::class]);
});

// --- Mass assignment ------------------------------------------------------

it('ignores "Bypass mass-assignment protection" unless the app allows it, and never in a tenant\'s run', function (): void {
    config()->set('packstub-flow.records.models', [GuardedOrder::class]);
    $order = GuardedOrder::query()->create(['reference' => 'G-1']);

    expect(fn () => (new UpdateRecord)->handle(['attributes' => ['status' => 'paid'], 'force' => true], ['model' => $order]))
        ->toThrow(WorkflowException::class, 'force_fill');

    config()->set('packstub-flow.records.force_fill', true);
    (new UpdateRecord)->handle(['attributes' => ['status' => 'paid'], 'force' => true], ['model' => $order]);

    expect($order->fresh()->status)->toBe('paid');

    $acme = safetyTeam('Acme');
    $order->forceFill(['team_id' => $acme->id])->save();

    $workflow = teamWorkflow($acme, [
        triggerNode('t', Manual::class),
        actionNode('u', UpdateRecord::class, ['attributes' => ['status' => 'refunded'], 'force' => true]),
    ], [edge('t', 'u')]);

    $run = Flow::run($workflow, ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($order->fresh()->status)->toBe('paid');
});

// --- Create / update within the tenant -------------------------------------

it('creates records inside the run\'s tenant whatever the attributes say', function (): void {
    $acme = safetyTeam('Acme');
    $globex = safetyTeam('Globex');

    $workflow = teamWorkflow($acme, [
        triggerNode('t', Manual::class),
        actionNode('c', CreateRecord::class, ['model_class' => Order::class, 'attributes' => ['reference' => 'NEW', 'team_id' => (string) $globex->id]]),
    ], [edge('t', 'c')]);

    expect(Flow::run($workflow)->status)->toBe(RunStatus::Success)
        ->and(Order::query()->where('reference', 'NEW')->sole()->team_id)->toBe($acme->id);
});

it('refuses to update a record of another tenant or to move a record to another tenant', function (): void {
    $acme = safetyTeam('Acme');
    $globex = safetyTeam('Globex');
    $theirs = createOrder(['team_id' => $globex->id]);
    $mine = createOrder(['team_id' => $acme->id]);

    $workflow = teamWorkflow($acme, [
        triggerNode('t', Manual::class),
        actionNode('u', UpdateRecord::class, ['attributes' => ['status' => 'hacked']]),
    ], [edge('t', 'u')]);

    $run = Flow::run($workflow, ['model' => $theirs]);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('tenant')
        ->and($theirs->fresh()->status)->toBe('pending');

    $move = teamWorkflow($acme, [
        triggerNode('t', Manual::class),
        actionNode('u', UpdateRecord::class, ['attributes' => ['team_id' => (string) $globex->id]]),
    ], [edge('t', 'u')]);

    expect(Flow::run($move, ['model' => $mine])->status)->toBe(RunStatus::Failed)
        ->and($mine->fresh()->team_id)->toBe($acme->id);
});

it('updates only the tenant\'s records in a For each loop over found records', function (): void {
    $acme = safetyTeam('Acme');
    $globex = safetyTeam('Globex');
    $mine = createOrder(['team_id' => $acme->id]);
    $theirs = createOrder(['team_id' => $globex->id]);

    $workflow = teamWorkflow($acme, [
        triggerNode('t', Manual::class),
        actionNode('find', FindRecords::class, ['model_class' => Order::class]),
        actionNode('each', ForEachLoop::class, ['items' => '{{ last.records }}', 'item_key' => 'model']),
        actionNode('u', UpdateRecord::class, ['attributes' => ['status' => 'touched']]),
    ], [edge('t', 'find'), edge('find', 'each'), edge('each', 'u', 'body')]);

    expect(Flow::run($workflow)->status)->toBe(RunStatus::Success)
        ->and($mine->fresh()->status)->toBe('touched')
        ->and($theirs->fresh()->status)->toBe('pending');
});

it('refuses a For each item name that would replace the run\'s own keys', function (string $key): void {
    $definition = ['nodes' => [
        triggerNode('t', Manual::class),
        actionNode('each', ForEachLoop::class, ['items' => '{{ list }}', 'item_key' => $key]),
    ], 'edges' => [edge('t', 'each')]];

    expect(DefinitionValidator::problems($definition, active: false))->toHaveCount(1);

    $run = Flow::run(createWorkflow($definition['nodes'], $definition['edges']), ['list' => [1, 2]]);

    expect($run->status)->toBe(RunStatus::Failed);
})->with(['tenant', 'last', 'outputs', 'loop']);

// --- Create through a relationship -------------------------------------------

it('only calls declared relationship methods when creating through a relationship', function (): void {
    config()->set('packstub-flow.records.models', [Note::class, Order::class]);
    $order = createOrder();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('c', CreateRecord::class, ['model_class' => Note::class, 'relation' => 'delete', 'attributes' => ['body' => 'x']]),
    ], [edge('t', 'c')]);

    $run = Flow::run($workflow, ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('not a relationship')
        ->and(Order::query()->whereKey($order->id)->exists())->toBeTrue();
});

it('checks the model a relationship creates against the allowed models', function (): void {
    $order = createOrder();

    // Order::user() creates a User, which is not allowed.
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('c', CreateRecord::class, ['model_class' => Order::class, 'relation' => 'user', 'attributes' => ['name' => 'x', 'email' => 'x@example.com', 'password' => 'secret']]),
    ], [edge('t', 'c')]);

    $run = Flow::run($workflow, ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('User')
        ->and(User::query()->count())->toBe(0);
});

// --- Call workflow --------------------------------------------------------------

it('does not call another tenant\'s workflow', function (): void {
    $acme = safetyTeam('Acme');
    $globex = safetyTeam('Globex');

    $target = teamWorkflow($globex, [
        triggerNode('t', WorkflowCalled::class),
        actionNode('echo', EchoAction::class, ['template' => 'called']),
    ], [edge('t', 'echo')]);

    $caller = teamWorkflow($acme, [
        triggerNode('t', Manual::class),
        actionNode('call', CallWorkflow::class, ['workflow_id' => $target->id]),
    ], [edge('t', 'call')]);

    $run = Flow::run($caller);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and(EchoAction::$last)->toBeNull();
});
