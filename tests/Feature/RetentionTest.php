<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Events\WorkflowDeactivated;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\WorkflowRun;

it('prunes runs per workflow retention and the global default otherwise', function (): void {
    $custom = manualWorkflow(attributes: ['name' => 'Short retention', 'prune_after_days' => 2]);
    $default = manualWorkflow(attributes: ['name' => 'Default retention']);

    $make = fn ($workflow, int $daysAgo) => WorkflowRun::query()->create([
        'workflow_id' => $workflow->getKey(), 'status' => RunStatus::Success, 'started_at' => now()->subDays($daysAgo), 'finished_at' => now()->subDays($daysAgo),
    ]);

    $make($custom, 3);
    $keepCustom = $make($custom, 1);
    $keepDefault = $make($default, 10);
    $make($default, 40);

    $this->artisan('packstub-flow:prune')->assertSuccessful();

    expect(WorkflowRun::query()->pluck('id')->sort()->values()->all())->toBe(collect([$keepCustom->id, $keepDefault->id])->sort()->values()->all());
});

it('deactivates a workflow after too many consecutive failures and notifies the admins', function (): void {
    Event::fake([WorkflowDeactivated::class]);
    config()->set('packstub-flow.notifications.recipients', ['admin@example.com']);
    $admin = createUser(['email' => 'admin@example.com']);

    $workflow = manualWorkflow(['status' => 'boom'], ['max_consecutive_failures' => 2]);

    Flow::run($workflow);

    expect($workflow->fresh()->is_active)->toBeTrue()
        ->and($workflow->fresh()->consecutive_failures)->toBe(1);

    Flow::run($workflow);

    expect($workflow->fresh()->is_active)->toBeFalse()
        ->and($workflow->fresh()->consecutive_failures)->toBe(2)
        ->and(DB::table('notifications')->where('notifiable_id', $admin->id)->count())->toBe(1)
        ->and(json_decode(DB::table('notifications')->value('data'), true)['title'])->toContain($workflow->name);

    Event::assertDispatched(WorkflowDeactivated::class, fn (WorkflowDeactivated $event): bool => $event->failures === 2);

    expect(Flow::run($workflow->fresh()))->toBeNull();
});

it('resets the failure counter after a successful run', function (): void {
    $workflow = manualWorkflow(['status' => 'boom'], ['max_consecutive_failures' => 3]);

    Flow::run($workflow);
    Flow::run($workflow);

    expect($workflow->fresh()->consecutive_failures)->toBe(2);

    $workflow->fresh()->update(['definition' => manualWorkflow(['status' => 'fine'])->definition]);
    Flow::run($workflow->fresh());

    expect($workflow->fresh()->consecutive_failures)->toBe(0)
        ->and($workflow->fresh()->is_active)->toBeTrue();
});
