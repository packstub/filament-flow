<?php

use Filament\Actions\Testing\TestAction;
use Livewire\Livewire;
use Packstub\Flow\Filament\Actions\RunWorkflowAction;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\OrderResource\Pages\ListOrders;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;
use Packstub\Flow\Tests\Fixtures\User;

beforeEach(function (): void {
    $this->actingAs(createUser());
});

it('runs a workflow for a record from a resource action', function (): void {
    $workflow = manualWorkflow(['status' => 'flagged'], ['name' => 'Flag order']);
    $forUsers = createWorkflow([triggerNode('t', Manual::class, ['model_class' => User::class]), actionNode('a', SetStatusAction::class, ['status' => 'x'])], [edge('t', 'a')], ['name' => 'Users only']);
    $inactive = manualWorkflow(attributes: ['name' => 'Inactive', 'is_active' => false]);

    $order = createOrder();

    Livewire::test(ListOrders::class)
        ->assertActionVisible(TestAction::make('runWorkflow')->table($order))
        ->assertActionExists(TestAction::make('runWorkflow')->table($order), function (RunWorkflowAction $action): bool {
            return true;
        })
        ->callAction(TestAction::make('runWorkflow')->table($order), ['workflow_id' => $workflow->getKey()])
        ->assertHasNoActionErrors()
        ->assertNotified();

    $run = WorkflowRun::query()->sole();

    expect($run->workflow_id)->toBe($workflow->getKey())
        ->and($run->subject_type)->toBe(Order::class)
        ->and($run->subject_id)->toBe((string) $order->getKey())
        ->and($order->fresh()->status)->toBe('flagged')
        ->and(SetStatusAction::$calls[0]['payload']['manual'])->toBeTrue();

    // The Users-only and inactive workflows are not offered for an order.
    Livewire::test(ListOrders::class)
        ->callAction(TestAction::make('runWorkflow')->table($order), ['workflow_id' => $forUsers->getKey()])
        ->assertHasActionErrors(['workflow_id']);

    Livewire::test(ListOrders::class)
        ->callAction(TestAction::make('runWorkflow')->table($order), ['workflow_id' => $inactive->getKey()])
        ->assertHasActionErrors(['workflow_id']);
});

it('hides the resource action when no workflow can run for the record', function (): void {
    $order = createOrder();

    Livewire::test(ListOrders::class)->assertActionHidden(TestAction::make('runWorkflow')->table($order));
});

it('runs a workflow for every selected record from the bulk action', function (): void {
    $workflow = manualWorkflow(['status' => 'bulk']);
    $orders = collect([createOrder(), createOrder(), createOrder()]);

    Livewire::test(ListOrders::class)
        ->selectTableRecords($orders->all())
        ->callAction(TestAction::make('runWorkflow')->table()->bulk(), ['workflow_id' => $workflow->getKey()])
        ->assertHasNoActionErrors()
        ->assertNotified();

    expect(WorkflowRun::query()->count())->toBe(3)
        ->and(Order::query()->where('status', 'bulk')->count())->toBe(3);
});

it('reports failed runs from the resource action', function (): void {
    $workflow = manualWorkflow(['status' => 'boom']);
    $order = createOrder();

    Livewire::test(ListOrders::class)
        ->callAction(TestAction::make('runWorkflow')->table($order), ['workflow_id' => $workflow->getKey()])
        ->assertNotified(__('packstub-flow::flow.resource_action.failed', ['name' => $workflow->name, 'failed' => 1, 'total' => 1]));
});
