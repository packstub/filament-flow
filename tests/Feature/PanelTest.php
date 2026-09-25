<?php

use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\Testing\TestAction;
use Filament\Schemas\Schema;
use Livewire\Livewire;
use Packstub\Flow\Engine\Runner;
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
use Packstub\Flow\Nodes\Actions\HttpRequest;
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

it('keeps the header to a blank canvas and the model-drafted way, the other starters behind the menu beside them', function (): void {
    [$describe, $create, $menu] = Livewire::test(ListWorkflows::class)->instance()->getCachedHeaderActions();

    expect($menu)->toBeInstanceOf(ActionGroup::class)
        ->and(array_keys($menu->getFlatActions()))->toBe(['template', 'import'])
        ->and($menu->getFlatActions()['template']->getIcon())->toBe('heroicon-o-rectangle-stack')
        ->and($describe->getName())->toBe('describe')
        ->and($describe->getIcon())->toBe('heroicon-o-sparkles')
        ->and($create->getName())->toBe('create')
        ->and($create->getLabel())->toBe('New workflow');

    // Every starter is offered where the rows will be, on a first visit.
    Livewire::test(ListWorkflows::class)
        ->assertSee('No workflows yet')
        ->assertActionVisible(TestAction::make('create')->table())
        ->assertActionVisible(TestAction::make('template')->table())
        ->assertActionVisible(TestAction::make('import')->table())
        ->assertSee('New workflow')
        ->assertDontSee('New Workflow');
});

it('creates an inactive workflow from its name and opens the full-page editor', function (): void {
    Livewire::test(CreateWorkflow::class)
        ->assertOk()
        ->assertDontSee('packstubFlowBuilder', escape: false)
        ->assertFormFieldDoesNotExist('is_active')
        ->fillForm(['name' => 'Order alerts', 'description' => 'Ping ops'])
        ->call('create')
        ->assertHasNoFormErrors()
        ->assertRedirect(WorkflowResource::getUrl('edit', ['record' => Workflow::query()->where('name', 'Order alerts')->first()]));

    $workflow = Workflow::query()->where('name', 'Order alerts')->first();

    expect($workflow->description)->toBe('Ping ops')
        ->and($workflow->is_active)->toBeFalse()
        ->and($workflow->nodes())->toBe([]);

    Livewire::test(EditWorkflow::class, ['record' => $workflow->id])
        ->assertSee('packstubFlowBuilder', escape: false)
        ->fillForm(['definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('a', SendEmail::class, ['recipient' => 'ops@example.com', 'subject' => 's', 'body' => 'b'])], 'edges' => [edge('t', 'a')]]])
        ->call('save')
        ->assertHasNoFormErrors();

    expect($workflow->fresh()->nodes()[1]['data']['config']['recipient'])->toBe('ops@example.com')
        ->and($workflow->triggers()->count())->toBe(1);

    Livewire::test(CreateWorkflow::class)->fillForm(['name' => ''])->call('create')->assertHasFormErrors(['name' => 'required']);
});

it('creates a workflow from the modal on the list and opens the editor', function (): void {
    Livewire::test(ListWorkflows::class)
        ->callAction('create', ['name' => 'From the modal', 'description' => 'Two fields'])
        ->assertHasNoActionErrors()
        ->assertRedirect(WorkflowResource::getUrl('edit', ['record' => Workflow::query()->where('name', 'From the modal')->first()]));

    $workflow = Workflow::query()->where('name', 'From the modal')->first();

    expect($workflow->description)->toBe('Two fields')
        ->and($workflow->is_active)->toBeFalse()
        ->and($workflow->nodes())->toBe([]);

    Livewire::test(ListWorkflows::class)
        ->callAction('create', ['name' => ''])
        ->assertHasActionErrors(['name' => 'required']);
});

it('edits a workflow and can run it from the header', function (): void {
    $workflow = manualWorkflow(attributes: ['name' => 'Editable']);

    Livewire::test(EditWorkflow::class, ['record' => $workflow->id])
        ->assertOk()
        ->assertSee('Editable')
        ->assertActionExists('save')
        ->assertActionExists('saved')
        ->assertActionDisabled('saved')
        ->assertSee(__('packstub-flow::flow.editor.unsaved'))
        ->assertFormFieldDoesNotExist('name')
        ->callAction('settings', ['name' => 'Renamed', 'is_active' => true])
        ->assertHasNoActionErrors()
        ->assertDispatched('packstub-flow-workflow-saved')
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

it('opens a new node with its schema defaults filled in', function (): void {
    Livewire::test(ManageNode::class)
        ->call('open', 'n1', HttpRequest::class, [], 'HTTP request')
        ->assertActionMounted('manageNode')
        ->assertActionDataSet(['label' => 'HTTP request', 'config.method' => 'POST', 'config.throw_on_error' => true, 'config.'.Runner::RETRIES => 0, 'config.'.Runner::ON_ERROR => 'fail'])
        ->setActionData(['config.url' => 'https://api.example.com/x'])
        ->callMountedAction()
        ->assertHasNoActionErrors()
        ->assertDispatched('packstub-flow-node-updated', id: 'n1', label: 'HTTP request');
});

it('opens node settings only for registered nodes', function (): void {
    Livewire::test(ManageNode::class)
        ->call('open', 'n1', SendEmail::class, ['recipient' => 'a@b.c', 'subject' => 's', 'body' => 'b'], 'Send email')
        ->assertActionMounted('manageNode')
        ->assertActionDataSet(['label' => 'Send email', 'config.recipient' => 'a@b.c'])
        ->setActionData(['label' => 'Welcome mail', 'config.subject' => 'Hello {{ model.name }}'])
        ->callMountedAction()
        ->assertHasNoActionErrors()
        ->assertDispatched('packstub-flow-node-updated', id: 'n1', label: 'Welcome mail');

    // The flat shape older canvases sent still opens.
    Livewire::test(ManageNode::class)
        ->call('open', 'n1', SendEmail::class, ['label' => 'Send email', 'recipient' => 'a@b.c'])
        ->assertActionMounted('manageNode')
        ->assertActionDataSet(['label' => 'Send email', 'config.recipient' => 'a@b.c']);

    Livewire::test(ManageNode::class)
        ->call('open', 'n1', stdClass::class, [])
        ->assertActionNotMounted('manageNode');
});

it('validates node settings', function (): void {
    Livewire::test(ManageNode::class)
        ->call('open', 'n1', SendEmail::class, [], 'x')
        ->setActionData(['label' => '', 'config.recipient' => ''])
        ->callMountedAction()
        ->assertHasActionErrors(['label', 'config.recipient']);
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

it('keeps a workflow inactive when Settings switches on an incomplete canvas, but saves the rest', function (): void {
    $workflow = Workflow::query()->create(['name' => 'Draft', 'is_active' => false, 'definition' => [
        'nodes' => [triggerNode('t', Manual::class), actionNode('a', SendEmail::class)],
        'edges' => [],
    ]]);

    Livewire::test(EditWorkflow::class, ['record' => $workflow->id])
        ->callAction('settings', ['name' => 'Renamed draft', 'is_active' => true])
        ->assertDispatched('packstub-flow-problems')
        ->assertNotified(__('packstub-flow::flow.editor.activation_refused'))
        ->assertSet('data.is_active', false);

    expect($workflow->fresh())
        ->name->toBe('Renamed draft')
        ->is_active->toBeFalse();
});

it('switches a workflow on and off from the Active switch in the header', function (): void {
    $workflow = manualWorkflow(attributes: ['is_active' => false]);

    Livewire::test(EditWorkflow::class, ['record' => $workflow->id])
        ->assertActionHasLabel('active', 'Inactive')
        ->assertSee('role="switch"', escape: false)
        ->callAction('active')
        ->assertNotified(__('packstub-flow::flow.editor.activated'))
        ->assertSet('data.is_active', true)
        ->assertActionHasLabel('active', 'Active')
        ->assertDispatched('packstub-flow-workflow-saved');

    expect($workflow->fresh()->is_active)->toBeTrue();

    Livewire::test(EditWorkflow::class, ['record' => $workflow->id])
        ->callAction('active')
        ->assertNotified(__('packstub-flow::flow.editor.deactivated'));

    expect($workflow->fresh()->is_active)->toBeFalse();
});

it('keeps a workflow inactive when the Active switch meets an incomplete canvas', function (): void {
    $workflow = Workflow::query()->create(['name' => 'Draft', 'is_active' => false, 'definition' => [
        'nodes' => [triggerNode('t', Manual::class), actionNode('a', SendEmail::class)],
        'edges' => [],
    ]]);

    Livewire::test(EditWorkflow::class, ['record' => $workflow->id])
        ->callAction('active')
        ->assertDispatched('packstub-flow-problems')
        ->assertNotified(__('packstub-flow::flow.editor.activation_refused'))
        ->assertSet('data.is_active', false)
        ->assertActionHasLabel('active', 'Inactive');

    expect($workflow->fresh()->is_active)->toBeFalse();
});

it('puts the Active switch next to the name and Settings in the more-actions menu', function (): void {
    $workflow = manualWorkflow(attributes: ['name' => 'Order follow-up']);

    $page = Livewire::test(EditWorkflow::class, ['record' => $workflow->id])->instance();
    $heading = (string) $page->getHeading();

    expect($heading)->toContain('Order follow-up')
        ->toContain('role="switch"')
        ->toContain(__('packstub-flow::flow.editor.active'))
        // The switch first, its label after it.
        ->and(strpos($heading, 'fi-toggle'))->toBeLessThan(strpos($heading, __('packstub-flow::flow.editor.active').'</span>'));

    $topLevel = collect((fn () => $this->getHeaderActions())->call($page))
        ->filter(fn ($action) => $action instanceof Action)
        ->map(fn (Action $action) => $action->getName())
        ->values()
        ->all();

    expect($topLevel)->toBe(['test', 'run', 'saved', 'save']);
});

it('shows the canvas, runs and versions as tabs', function (): void {
    $workflow = manualWorkflow();

    Livewire::test(EditWorkflow::class, ['record' => $workflow->id])
        ->assertSee(__('packstub-flow::flow.editor.canvas'))
        ->assertSee(__('packstub-flow::flow.editor.active'));

    expect((new EditWorkflow)->hasCombinedRelationManagerTabsWithContent())->toBeTrue()
        ->and(WorkflowResource::form(Schema::make())->getComponents())->toHaveCount(2);
});
