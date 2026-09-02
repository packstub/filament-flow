<?php

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\Carbon;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('runs a workflow by id or name from the console', function (): void {
    $workflow = manualWorkflow(attributes: ['name' => 'Nightly report']);

    $this->artisan('packstub-flow:run', ['workflow' => 'Nightly report', '--payload' => '{"answer":42}'])
        ->expectsOutputToContain('finished with status success')
        ->assertSuccessful();

    $this->artisan('packstub-flow:run', ['workflow' => $workflow->id])->assertSuccessful();

    expect(SetStatusAction::$calls)->toHaveCount(2)
        ->and(SetStatusAction::$calls[0]['payload'])->toBe(['answer' => 42]);

    $this->artisan('packstub-flow:run', ['workflow' => 'missing'])->assertFailed();
    $this->artisan('packstub-flow:run', ['workflow' => manualWorkflow(['status' => 'boom'])->id])->assertFailed();
    $this->artisan('packstub-flow:run', ['workflow' => manualWorkflow(attributes: ['is_active' => false])->id])->assertFailed();
});

it('prunes old finished runs', function (): void {
    $workflow = manualWorkflow();

    $old = WorkflowRun::query()->create(['workflow_id' => $workflow->id, 'status' => RunStatus::Success, 'started_at' => Carbon::now()->subDays(40)]);
    $waiting = WorkflowRun::query()->create(['workflow_id' => $workflow->id, 'status' => RunStatus::Delayed, 'started_at' => Carbon::now()->subDays(40)]);
    $recent = WorkflowRun::query()->create(['workflow_id' => $workflow->id, 'status' => RunStatus::Failed, 'started_at' => Carbon::now()->subDays(3)]);

    $this->artisan('packstub-flow:prune')->expectsOutputToContain('Deleted 1 run(s)')->assertSuccessful();

    expect(WorkflowRun::query()->pluck('id')->all())->toEqualCanonicalizing([$waiting->id, $recent->id]);

    $this->artisan('packstub-flow:prune', ['--days' => 1])->expectsOutputToContain('Deleted 1 run(s)');
});

it('publishes config and migrations through the install command', function (): void {
    $this->artisan('packstub-flow:install')
        ->expectsConfirmation('Would you like to run the migrations now?', 'no')
        ->expectsConfirmation('Would you like to star our repo on GitHub?', 'no')
        ->assertSuccessful();

    expect(file_exists(config_path('packstub-flow.php')))->toBeTrue()
        ->and(glob(database_path('migrations/*create_flow_tables.php')))->not->toBe([]);

    @unlink(config_path('packstub-flow.php'));
    foreach (glob(database_path('migrations/*create_flow_tables.php')) as $file) {
        @unlink($file);
    }
});

it('schedules the prune command daily when retention is configured', function (): void {
    $events = collect(app(Schedule::class)->events())
        ->map(fn ($event): string => $event->command ?? '')
        ->filter(fn (string $command): bool => str_contains($command, 'packstub-flow:prune'));

    expect($events)->toHaveCount(1);
});
