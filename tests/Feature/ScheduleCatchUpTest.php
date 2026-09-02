<?php

use Illuminate\Support\Facades\Cache;
use Packstub\Flow\Commands\RunScheduledWorkflowsCommand;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Actions\UpdateRecord;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;
use Packstub\Flow\Nodes\Triggers\Schedule;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\Order;

it('catches up missed minutes when enabled', function (): void {
    createWorkflow([triggerNode('t', Schedule::class, ['expression' => '* * * * *']), actionNode('a', EchoAction::class, ['template' => '{{ now | date:H:i }}'])], [edge('t', 'a')]);

    Cache::forever(RunScheduledWorkflowsCommand::LAST_RUN_KEY, now()->subMinutes(3)->getTimestamp());

    $this->artisan('packstub-flow:cron')->assertSuccessful();
    expect(WorkflowRun::query()->count())->toBe(1);

    Cache::forever(RunScheduledWorkflowsCommand::LAST_RUN_KEY, now()->subMinutes(3)->getTimestamp());
    config()->set('packstub-flow.schedule_catch_up_minutes', 10);

    $this->artisan('packstub-flow:cron')->expectsOutputToContain('2 missed minute(s) caught up')->assertSuccessful();
    expect(WorkflowRun::query()->count())->toBe(4)
        ->and((int) Cache::get(RunScheduledWorkflowsCommand::LAST_RUN_KEY))->toBe(now()->startOfMinute()->getTimestamp());

    // The window is capped by the option / config.
    Cache::forever(RunScheduledWorkflowsCommand::LAST_RUN_KEY, now()->subMinutes(30)->getTimestamp());
    $this->artisan('packstub-flow:cron', ['--catch-up' => 1])->assertSuccessful();
    expect(WorkflowRun::query()->count())->toBe(6);
});

it('stops nested runs at the configured depth', function (): void {
    config()->set('packstub-flow.max_nesting', 3);

    // Each run updates the record with events on, which starts the workflow again.
    createWorkflow(
        [triggerNode('t', RecordUpdated::class, ['model_class' => Order::class]), actionNode('a', UpdateRecord::class, ['attributes' => ['reference' => '{{ model.reference }}-'], 'silently' => false])],
        [edge('t', 'a')],
    );

    $order = createOrder();
    $order->update(['total' => 1]);

    expect(WorkflowRun::query()->count())->toBe(3)
        ->and($order->fresh()->reference)->toBe('ORD-0001---');
});
