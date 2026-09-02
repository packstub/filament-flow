<?php

use Filament\Actions\Testing\TestAction;
use Livewire\Livewire;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Livewire\ManageNode;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\CreateWorkflow;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\EditWorkflow;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\ListWorkflows;
use Packstub\Flow\Filament\Resources\WorkflowResource\RelationManagers\RunsRelationManager;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

beforeEach(function (): void {
    $this->actingAs(createUser());
});

it('lists workflows in the panel navigation and table', function (): void {
    $workflow = manualWorkflow(attributes: ['name' => 'Welcome sequence']);

    $this->get('/admin')->assertOk()->assertSee('Workflows')->assertSee('Automation');

    Livewire::test(ListWorkflows::class)
        ->assertOk()
        ->assertCanSeeTableRecords([$workflow])
        ->assertSee('Welcome sequence')
        ->assertSee('Manual');

    expect(WorkflowResource::getNavigationGroup())->toBe('Automation')
        ->and(WorkflowResource::getUrl())->toBe(url('/admin/workflows'));
});

it('creates a workflow from the form with the canvas state', function (): void {
    Livewire::test(CreateWorkflow::class)
        ->assertOk()
        ->assertSee('packstubFlowBuilder', escape: false)
        ->fillForm([
            'name' => 'Order alerts',
            'description' => 'Ping ops',
            'is_active' => true,
            'definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('a', SendEmail::class, ['recipient' => 'ops@example.com', 'subject' => 's', 'body' => 'b'])], 'edges' => [edge('t', 'a')]],
        ])
        ->call('create')
        ->assertHasNoFormErrors();

    $workflow = Workflow::query()->where('name', 'Order alerts')->first();

    expect($workflow)->not->toBeNull()
        ->and($workflow->nodes())->toHaveCount(2)
        ->and($workflow->nodes()[1]['data']['config']['recipient'])->toBe('ops@example.com')
        ->and($workflow->triggers()->count())->toBe(1);

    Livewire::test(CreateWorkflow::class)->fillForm(['name' => ''])->call('create')->assertHasFormErrors(['name' => 'required']);
});

it('edits a workflow and can run it from the header', function (): void {
    $workflow = manualWorkflow(attributes: ['name' => 'Editable']);

    Livewire::test(EditWorkflow::class, ['record' => $workflow->id])
        ->assertOk()
        ->assertFormSet(['name' => 'Editable'])
        ->fillForm(['name' => 'Renamed'])
        ->call('save')
        ->assertHasNoFormErrors()
        ->callAction('run')
        ->assertNotified();

    expect($workflow->fresh()->name)->toBe('Renamed')
        ->and(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload'])->toBe(['manual' => true])
        ->and(WorkflowRun::query()->count())->toBe(1);
});

it('runs and duplicates from the table', function (): void {
    $workflow = manualWorkflow(attributes: ['name' => 'Copy me']);

    Livewire::test(ListWorkflows::class)
        ->callAction(TestAction::make('run')->table($workflow))
        ->assertNotified()
        ->callAction(TestAction::make('replicate')->table($workflow));

    expect(WorkflowRun::query()->count())->toBe(1)
        ->and(Workflow::query()->where('name', 'Copy me (copy)')->first()->is_active)->toBeFalse();
});

it('hides the run action for inactive workflows', function (): void {
    $workflow = manualWorkflow(attributes: ['is_active' => false]);

    Livewire::test(ListWorkflows::class)->assertActionHidden(TestAction::make('run')->table($workflow));
});

it('shows runs with their steps in the relation manager', function (): void {
    $workflow = manualWorkflow(['status' => 'boom']);
    $run = Flow::run($workflow, ['answer' => 42]);

    Livewire::test(RunsRelationManager::class, ['ownerRecord' => $workflow, 'pageClass' => EditWorkflow::class])
        ->assertOk()
        ->assertCanSeeTableRecords([$run])
        ->assertSee('Failed')
        ->assertSee('Boom from the action')
        ->assertActionExists(TestAction::make('view')->table($run));

    $detail = view('packstub-flow::runs.detail', ['run' => $run])->render();

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($detail)->toContain('Triggered')->toContain('Boom from the action')->toContain('Payload');
});

it('opens node settings only for registered nodes', function (): void {
    Livewire::test(ManageNode::class)
        ->call('open', 'n1', SendEmail::class, ['label' => 'Send email', 'recipient' => 'a@b.c', 'subject' => 's', 'body' => 'b'])
        ->assertActionMounted('manageNode')
        ->assertActionDataSet(['label' => 'Send email', 'recipient' => 'a@b.c'])
        ->setActionData(['label' => 'Welcome mail', 'subject' => 'Hello {{ model.name }}'])
        ->callMountedAction()
        ->assertHasNoActionErrors()
        ->assertDispatched('packstub-flow.node-updated', id: 'n1');

    Livewire::test(ManageNode::class)
        ->call('open', 'n1', stdClass::class, [])
        ->assertActionNotMounted('manageNode');
});

it('validates node settings', function (): void {
    Livewire::test(ManageNode::class)
        ->call('open', 'n1', SendEmail::class, ['label' => 'x'])
        ->setActionData(['label' => '', 'recipient' => ''])
        ->callMountedAction()
        ->assertHasActionErrors(['label', 'recipient']);
});

it('runs a finished run again with the same payload', function (): void {
    $order = createOrder();
    $workflow = manualWorkflow(['status' => 'again']);
    $run = Flow::run($workflow, ['model' => $order]);

    Livewire::test(RunsRelationManager::class, ['ownerRecord' => $workflow, 'pageClass' => EditWorkflow::class])
        ->callTableAction('rerun', $run)
        ->assertNotified();

    expect(WorkflowRun::query()->count())->toBe(2)
        ->and(SetStatusAction::$calls)->toHaveCount(2)
        ->and(SetStatusAction::$calls[1]['payload']['model']->is($order))->toBeTrue()
        ->and(WorkflowRun::query()->latest('started_at')->first()->subject_id)->toBe((string) $order->id);
});
