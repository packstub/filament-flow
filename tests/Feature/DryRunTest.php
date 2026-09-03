<?php

use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Mail;
use Livewire\Livewire;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Events\WorkflowStarted;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\EditWorkflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Actions\FindRecords;
use Packstub\Flow\Nodes\Actions\RequestApproval;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Actions\Wait;
use Packstub\Flow\Nodes\Conditions\RecordAttribute;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('simulates side effects, evaluates conditions and runs read-only actions', function (): void {
    Mail::fake();
    Event::fake([WorkflowStarted::class]);
    createOrder(['status' => 'paid']);
    $order = createOrder(['status' => 'paid']);

    $workflow = createWorkflow([
        triggerNode('t', RecordUpdated::class, ['model_class' => Order::class]),
        conditionNode('c', RecordAttribute::class, ['attribute' => 'status', 'operator' => '=', 'value' => 'paid']),
        actionNode('mail', SendEmail::class, ['recipient' => 'a@b.c', 'subject' => 'Order {{ model.reference }}', 'body' => 'b']),
        actionNode('w', Wait::class, ['duration' => 1, 'unit' => 'days']),
        actionNode('find', FindRecords::class, ['model_class' => Order::class, 'conditions' => [['attribute' => 'status', 'operator' => '=', 'value' => 'paid']]]),
        actionNode('ask', RequestApproval::class, ['title' => 'x']),
        actionNode('set', SetStatusAction::class, ['status' => 'changed']),
    ], [edge('t', 'c'), edge('c', 'mail', 'true'), edge('mail', 'w'), edge('w', 'find'), edge('find', 'ask'), edge('ask', 'set', 'approved')]);

    $run = Flow::test($workflow, ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Success)
        ->and($run->is_test)->toBeTrue()
        ->and(collect($run->steps)->pluck('node_id')->all())->toBe(['t', 'c', 'mail', 'w', 'find', 'ask', 'set'])
        ->and(collect($run->steps)->firstWhere('node_id', 'mail')['status'])->toBe('simulated')
        ->and(collect($run->steps)->firstWhere('node_id', 'mail')['output']['subject'])->toBe('Order ORD-0002')
        ->and(collect($run->steps)->firstWhere('node_id', 'w')['message'])->toContain('Would wait 86400')
        ->and(collect($run->steps)->firstWhere('node_id', 'find')['output']['count'])->toBe(2)
        ->and(collect($run->steps)->firstWhere('node_id', 'ask')['status'])->toBe('simulated')
        ->and(SetStatusAction::$calls)->toBe([])
        ->and($order->fresh()->status)->toBe('paid')
        ->and(WorkflowRun::query()->real()->count())->toBe(0);

    Mail::assertNothingSent();
    Event::assertNotDispatched(WorkflowStarted::class);
});

it('does not count test runs for once-per-record or failure limits', function (): void {
    $workflow = manualWorkflow(['status' => 'boom'], ['max_consecutive_failures' => 1]);

    $run = Flow::test($workflow);

    expect($run->status)->toBe(RunStatus::Success)
        ->and($workflow->fresh()->is_active)->toBeTrue()
        ->and($workflow->fresh()->consecutive_failures)->toBe(0);
});

it('runs a test from the edit page and shows the result', function (): void {
    $this->actingAs(createUser());
    $order = createOrder();

    $workflow = createWorkflow([
        triggerNode('t', RecordUpdated::class, ['model_class' => Order::class]),
        actionNode('a', EchoAction::class, ['template' => '{{ model.reference }} {{ webhook.note }}']),
    ], [edge('t', 'a')]);

    Livewire::test(EditWorkflow::class, ['record' => $workflow->getKey()])
        ->assertActionExists('test')
        ->callAction('test', ['trigger' => 't', 'model_class' => Order::class, 'model_id' => $order->id, 'payload' => '{"webhook": {"note": "hi"}}'])
        ->assertHasNoActionErrors()
        ->assertNotified();

    $run = WorkflowRun::query()->sole();

    expect($run->is_test)->toBeTrue()
        ->and($run->subject_id)->toBe((string) $order->id)
        ->and(collect($run->steps)->firstWhere('node_id', 'a')['status'])->toBe('simulated')
        ->and(collect($run->steps)->firstWhere('node_id', 'a')['output']['template'])->toBe('ORD-0001 hi');

    Livewire::test(EditWorkflow::class, ['record' => $workflow->getKey()])
        ->callAction('test', ['trigger' => 't', 'model_class' => Order::class, 'model_id' => 999])
        ->assertNotified(__('packstub-flow::flow.test.record_not_found'));

    Livewire::test(EditWorkflow::class, ['record' => $workflow->getKey()])
        ->callAction('test', ['trigger' => 't', 'payload' => '{not json'])
        ->assertHasActionErrors(['payload']);
});
