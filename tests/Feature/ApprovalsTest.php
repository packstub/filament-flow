<?php

use Filament\Actions\Testing\TestAction;
use Filament\Facades\Filament;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Livewire\Livewire;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Pages\Approvals;
use Packstub\Flow\Mail\WorkflowMail;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowWait;
use Packstub\Flow\Nodes\Actions\RequestApproval;
use Packstub\Flow\Nodes\Actions\WaitForEvent;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Tests\Fixtures\EchoAction;

function approvalWorkflow(array $config = []): Workflow
{
    return createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('ask', RequestApproval::class, ['approvers' => 'boss@example.com', 'title' => 'Refund {{ model.reference }}', 'body' => 'Please decide', ...$config]),
        actionNode('yes', EchoAction::class, ['template' => 'approved by {{ approval.by }}: {{ approval.comment }}']),
        actionNode('no', EchoAction::class, ['template' => 'rejected']),
        actionNode('late', EchoAction::class, ['template' => 'timed out']),
    ], [edge('t', 'ask'), edge('ask', 'yes', 'approved'), edge('ask', 'no', 'rejected'), edge('ask', 'late', 'timed_out')]);
}

it('pauses on an approval, notifies the approvers and continues on approve', function (): void {
    Mail::fake();
    $boss = createUser(['email' => 'boss@example.com']);
    $order = createOrder();

    $run = Flow::run(approvalWorkflow(['email' => true, 'timeout' => 2, 'timeout_unit' => 'days']), ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Delayed)
        ->and($run->pending_resumes)->toBe(1)
        ->and(collect($run->steps)->last()['status'])->toBe('waiting');

    $wait = WorkflowWait::query()->sole();

    expect($wait->status)->toBe(WorkflowWait::PENDING)
        ->and($wait->type)->toBe('approval')
        ->and($wait->outcomes)->toBe(['approved', 'rejected', 'timed_out'])
        ->and($wait->meta['title'])->toBe('Refund ORD-0001')
        ->and($wait->approvers())->toBe(['boss@example.com'])
        ->and($wait->expires_at->diffInDays(now()->addDays(2), true))->toBeLessThan(1)
        ->and($wait->canBeDecidedBy('boss@example.com'))->toBeTrue()
        ->and($wait->canBeDecidedBy('other@example.com'))->toBeFalse();

    $notification = json_decode(DB::table('notifications')->where('notifiable_id', $boss->id)->value('data'), true);

    expect($notification['title'])->toBe('Refund ORD-0001')
        ->and(collect($notification['actions'])->pluck('name')->all())->toBe(['approve', 'reject', 'review'])
        ->and($notification['actions'][0]['url'])->toContain('/flow/approvals/'.$wait->id.'/approved');

    Mail::assertSent(WorkflowMail::class, fn (WorkflowMail $mail): bool => $mail->actionLabel === 'Approve' && str_contains((string) $mail->actionUrl, '/approved') && str_contains($mail->body, '/rejected'));

    expect(Flow::resolveWait($wait, 'approved', ['comment' => 'Go ahead'], 'boss@example.com'))->toBeTrue()
        ->and(Flow::resolveWait($wait->fresh(), 'rejected'))->toBeFalse();

    $run->refresh();

    expect($run->status)->toBe(RunStatus::Success)
        ->and($run->pending_resumes)->toBe(0)
        ->and(EchoAction::$last)->toBe('approved by boss@example.com: Go ahead')
        ->and(collect($run->steps)->pluck('node_id')->all())->toBe(['t', 'ask', 'ask', 'yes'])
        ->and(collect($run->steps)->last(fn (array $step): bool => $step['node_id'] === 'ask')['message'])->toContain('approved')
        ->and($wait->fresh()->status)->toBe(WorkflowWait::RESOLVED)
        ->and($wait->fresh()->result['comment'])->toBe('Go ahead');
});

it('times out waits from the cron command', function (): void {
    $run = Flow::run(approvalWorkflow(['timeout' => 30, 'timeout_unit' => 'minutes']));

    $this->artisan('packstub-flow:cron')->assertSuccessful();
    expect(WorkflowWait::query()->sole()->status)->toBe(WorkflowWait::PENDING);

    $this->travel(31)->minutes();
    $this->artisan('packstub-flow:cron')->expectsOutputToContain('1 wait(s) timed out')->assertSuccessful();

    expect(WorkflowWait::query()->sole()->status)->toBe(WorkflowWait::EXPIRED)
        ->and($run->fresh()->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('timed out');
});

it('finishes the run when nothing is connected to the outcome', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('ask', RequestApproval::class, ['title' => 'Decide']),
    ], [edge('t', 'ask')]);

    $run = Flow::run($workflow);
    $wait = WorkflowWait::query()->sole();

    expect($wait->approvers())->toBe([])->and($wait->canBeDecidedBy(null))->toBeTrue();

    Flow::resolveWait($wait, 'rejected');

    expect($run->fresh()->status)->toBe(RunStatus::Success)
        ->and(collect($run->fresh()->steps)->pluck('node_id')->all())->toBe(['t', 'ask', 'ask']);
});

it('decides from the signed link and the Approvals page', function (): void {
    $boss = createUser(['email' => 'boss@example.com']);
    $other = createUser(['email' => 'other@example.com']);

    Flow::run(approvalWorkflow());
    $wait = WorkflowWait::query()->sole();

    $this->get($wait->decisionUrl('approved'))->assertRedirect(Filament::getLoginUrl());
    $this->actingAs($other)->get($wait->decisionUrl('approved'))->assertForbidden();
    // A changed token breaks the signature.
    $this->actingAs($boss)->get(str_replace('token='.$wait->token, 'token=wrong', $wait->decisionUrl('approved')))->assertForbidden();
    $this->actingAs($boss)->get(route('packstub-flow.approval', ['wait' => $wait->id, 'outcome' => 'approved', 'token' => $wait->token]))->assertForbidden();

    $this->actingAs($boss)->get($wait->decisionUrl('rejected'))->assertRedirect(Approvals::getUrl());

    expect($wait->fresh()->outcome)->toBe('rejected')
        ->and($wait->fresh()->resolved_by)->toBe('boss@example.com')
        ->and(EchoAction::$last)->toBe('rejected');

    // Already decided: a warning, no change.
    $this->actingAs($boss)->get($wait->decisionUrl('approved'))->assertRedirect();
    expect($wait->fresh()->outcome)->toBe('rejected');

    Flow::run(approvalWorkflow());
    $second = WorkflowWait::query()->pending()->sole();

    $this->actingAs($boss);

    expect(Approvals::getNavigationBadge())->toBe('1');

    Livewire::test(Approvals::class)
        ->assertOk()
        ->assertCanSeeTableRecords([$second])
        ->callAction(TestAction::make('approve')->table($second), ['comment' => 'ok'])
        ->assertHasNoActionErrors()
        ->assertNotified();

    expect($second->fresh()->outcome)->toBe('approved')
        ->and(EchoAction::$last)->toBe('approved by boss@example.com: ok')
        ->and(Approvals::getNavigationBadge())->toBeNull();

    // Someone who is not an approver cannot decide, but a workflow manager can cancel.
    Flow::run(approvalWorkflow());
    $third = WorkflowWait::query()->pending()->sole();

    $this->actingAs($other);

    Livewire::test(Approvals::class)
        ->assertActionHidden(TestAction::make('approve')->table($third))
        ->callAction(TestAction::make('cancel')->table($third));

    expect($third->fresh()->status)->toBe(WorkflowWait::CANCELLED)
        ->and(EchoAction::$last)->toBe('timed out');
});

it('waits for a signal from code', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('wait', WaitForEvent::class, ['key' => 'payment.{{ model.id }}', 'timeout' => 1, 'timeout_unit' => 'hours']),
        actionNode('paid', EchoAction::class, ['template' => 'paid {{ wait.amount }} ({{ wait.outcome }})']),
        actionNode('late', EchoAction::class, ['template' => 'late']),
    ], [edge('t', 'wait'), edge('wait', 'paid', 'received'), edge('wait', 'late', 'timed_out')]);

    $order = createOrder();
    $run = Flow::run($workflow, ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Delayed)
        ->and(WorkflowWait::query()->sole()->key)->toBe('payment.'.$order->id);

    expect(Flow::signal('payment.999'))->toBe(0)
        ->and(Flow::signal('payment.'.$order->id, ['amount' => 99]))->toBe(1)
        ->and($run->fresh()->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('paid 99 (received)');

    $empty = createWorkflow([triggerNode('t', Manual::class), actionNode('wait', WaitForEvent::class, ['key' => '{{ nothing }}'])], [edge('t', 'wait')]);

    expect(Flow::run($empty)->error)->toContain('key is empty');
});
