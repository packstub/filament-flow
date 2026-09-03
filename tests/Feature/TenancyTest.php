<?php

use Filament\Facades\Filament;
use Illuminate\Support\Carbon;
use Livewire\Livewire;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Pages\WorkflowRuns;
use Packstub\Flow\Filament\Resources\SecretResource\Pages\ManageSecrets;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\CreateWorkflow;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\ListWorkflows;
use Packstub\Flow\Models\Secret;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Triggers\DateReached;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\RecordCreated;
use Packstub\Flow\Support\Secrets;
use Packstub\Flow\Support\Tenancy;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\Team;
use Packstub\Flow\Tests\Fixtures\Ticket;

function team(string $name, ?int $max = null): Team
{
    return Team::query()->create(['name' => $name, 'slug' => strtolower($name), 'max_workflows' => $max]);
}

function tenantWorkflow(?Team $team, string $label, array $trigger = []): Workflow
{
    return createWorkflow(
        [triggerNode('t', RecordCreated::class, ['model_class' => Order::class, ...$trigger]), actionNode('a', EchoAction::class, ['template' => $label.' for {{ tenant.name }} ({{ model.reference }})'])],
        [edge('t', 'a')],
        ['name' => $label, 'tenant_type' => $team?->getMorphClass(), 'tenant_id' => $team?->getKey()],
    );
}

it('runs the tenant\'s workflows and the global ones for a tenant\'s record', function (): void {
    $acme = team('Acme');
    $globex = team('Globex');

    $acmeFlow = tenantWorkflow($acme, 'Acme flow');
    tenantWorkflow($globex, 'Globex flow');
    $global = tenantWorkflow(null, 'Global flow');

    createOrder(['team_id' => $acme->id]);

    $runs = WorkflowRun::query()->orderBy('created_at')->get();

    expect($runs->pluck('workflow_id')->all())->toBe([$acmeFlow->id, $global->id])
        ->and($runs->pluck('tenant_id')->unique()->all())->toBe([(string) $acme->id])
        ->and($runs[0]->tenant)->toBeInstanceOf(Team::class)
        ->and(EchoAction::$last)->toBe('Global flow for Acme (ORD-0001)');

    // A record without a tenant only starts the global workflows.
    $order = createOrder();

    expect(WorkflowRun::query()->count())->toBe(3)
        ->and(WorkflowRun::query()->where('subject_id', $order->id)->sole()->tenant_id)->toBeNull();
});

it('resolves the tenant with a custom resolver or Filament\'s current tenant', function (): void {
    $acme = team('Acme');
    $flow = tenantWorkflow($acme, 'Acme flow');

    Flow::resolveTenantUsing(fn (array $payload): ?Team => isset($payload['team_slug']) ? Team::query()->where('slug', $payload['team_slug'])->first() : null);

    Flow::dispatch(RecordCreated::class, ['model' => createOrder(), 'team_slug' => 'acme']);
    expect(WorkflowRun::query()->where('workflow_id', $flow->id)->count())->toBe(1);

    Flow::resolveTenantUsing(null);

    $this->actingAs(createUser(['team_id' => $acme->id]));
    Filament::setTenant($acme);
    Flow::dispatch(RecordCreated::class, ['model' => Ticket::query()->create(['title' => 'x'])]);
    Filament::setTenant(null);

    // The Ticket is not an Order: no match, but the tenant fallback was used for the lookup.
    expect(Tenancy::resolve(['model' => new Ticket]))->toBeNull()
        ->and(Tenancy::resolve(['model' => createOrder(['team_id' => $acme->id])])->is($acme))->toBeTrue();
});

it('lets a tenant\'s secret shadow the global one during its runs', function (): void {
    $acme = team('Acme');
    $globex = team('Globex');

    Secret::query()->create(['key' => 'slack', 'value' => 'global-hook']);
    Secret::query()->create(['key' => 'slack', 'value' => 'acme-hook', 'tenant_type' => $acme->getMorphClass(), 'tenant_id' => $acme->id]);

    $global = createWorkflow(
        [triggerNode('t', RecordCreated::class, ['model_class' => Order::class]), actionNode('a', EchoAction::class, ['template' => '{{ secrets.slack }}'])],
        [edge('t', 'a')],
    );

    createOrder(['team_id' => $acme->id]);
    expect(EchoAction::$last)->toBe('acme-hook');

    createOrder(['team_id' => $globex->id]);
    expect(EchoAction::$last)->toBe('global-hook');

    createOrder();
    expect(EchoAction::$last)->toBe('global-hook');

    expect(Secrets::get('slack', $acme))->toBe('acme-hook')
        ->and(Secrets::keys($acme))->toBe(['slack']);
});

it('polls a tenant\'s date trigger only for that tenant\'s records', function (): void {
    Carbon::setTestNow('2026-09-02 09:00:00');
    $acme = team('Acme');
    $globex = team('Globex');

    createWorkflow(
        [triggerNode('t', DateReached::class, ['model_class' => Order::class, 'attribute' => 'due_at', 'direction' => 'at']), actionNode('a', EchoAction::class, ['template' => '{{ model.reference }}'])],
        [edge('t', 'a')],
        ['tenant_type' => $acme->getMorphClass(), 'tenant_id' => $acme->id],
    );

    Flow::suppress(function () use ($acme, $globex): void {
        createOrder(['team_id' => $acme->id, 'due_at' => '2026-09-02 09:00:30']);
        createOrder(['team_id' => $globex->id, 'due_at' => '2026-09-02 09:00:30']);
        createOrder(['due_at' => '2026-09-02 09:00:30']);
    });

    expect(Flow::poll(now()))->toHaveCount(1)
        ->and(EchoAction::$last)->toBe('ORD-0001');

    Carbon::setTestNow();
});

it('scopes the panel to the current tenant', function (): void {
    $acme = team('Acme', max: 2);
    $globex = team('Globex');
    $user = createUser(['team_id' => $acme->id]);

    $mine = tenantWorkflow($acme, 'Acme flow');
    $theirs = tenantWorkflow($globex, 'Globex flow');
    $global = tenantWorkflow(null, 'Global flow');

    Filament::setCurrentPanel(Filament::getPanel('app'));
    Filament::setTenant($acme, true);
    $this->actingAs($user);

    Livewire::test(ListWorkflows::class)
        ->assertOk()
        ->assertCanSeeTableRecords([$mine])
        ->assertCanNotSeeTableRecords([$theirs, $global]);

    Livewire::test(CreateWorkflow::class)
        ->fillForm(['name' => 'Second', 'is_active' => false, 'definition' => ['nodes' => [], 'edges' => []]])
        ->call('create')
        ->assertHasNoFormErrors();

    $second = Workflow::query()->withoutGlobalScopes()->where('name', 'Second')->sole();

    expect($second->tenant_id)->toBe((string) $acme->id)
        ->and($second->tenant_type)->toBe($acme->getMorphClass())
        ->and(ListWorkflows::workflowCount())->toBe(2)
        ->and(ListWorkflows::workflowLimit())->toBe(2);

    // The plan limit: two workflows for Acme.
    Livewire::test(ListWorkflows::class)->assertActionDisabled('create');
    Livewire::test(CreateWorkflow::class)
        ->fillForm(['name' => 'Third', 'is_active' => false])
        ->call('create')
        ->assertNotified(__('packstub-flow::flow.actions.limit_reached', ['limit' => 2]));

    expect(Workflow::query()->withoutGlobalScopes()->where('name', 'Third')->exists())->toBeFalse();

    // Secrets are the tenant's own.
    Secret::query()->create(['key' => 'global_key', 'value' => 'g']);

    Livewire::test(ManageSecrets::class)
        ->callAction('create', ['key' => 'api_key', 'value' => 'acme-secret'])
        ->assertHasNoActionErrors();

    $secret = Secret::query()->withoutGlobalScopes()->where('key', 'api_key')->sole();

    expect($secret->tenant_id)->toBe((string) $acme->id);

    Livewire::test(ManageSecrets::class)
        ->assertCanSeeTableRecords([$secret])
        ->assertCanNotSeeTableRecords([Secret::query()->withoutGlobalScopes()->where('key', 'global_key')->sole()]);

    // Runs of the tenant only.
    Filament::setTenant(null);
    createOrder(['team_id' => $globex->id]);
    createOrder(['team_id' => $acme->id]);
    Filament::setTenant($acme, true);

    $acmeRuns = WorkflowRun::query()->withoutGlobalScopes()->where('tenant_id', $acme->id)->get();
    $globexRuns = WorkflowRun::query()->withoutGlobalScopes()->where('tenant_id', $globex->id)->get();

    expect($acmeRuns)->toHaveCount(2)->and($globexRuns)->toHaveCount(2);

    Livewire::test(WorkflowRuns::class)
        ->assertCanSeeTableRecords($acmeRuns)
        ->assertCanNotSeeTableRecords($globexRuns);

    Filament::setTenant(null);
    Filament::setCurrentPanel(Filament::getPanel('admin'));
});

it('keeps Flow::run() and the manual trigger free of tenant checks', function (): void {
    $acme = team('Acme');
    $workflow = manualWorkflow(attributes: ['tenant_type' => $acme->getMorphClass(), 'tenant_id' => $acme->id]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Success)
        ->and($run->tenant_id)->toBe((string) $acme->id);

    $trigger = Workflow::query()->withoutGlobalScopes()->find($workflow->id)->triggerNode(Manual::class);

    expect($trigger)->not->toBeNull();
});
