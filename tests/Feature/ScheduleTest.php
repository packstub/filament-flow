<?php

use Illuminate\Console\Scheduling\Schedule as Scheduler;
use Illuminate\Support\Carbon;
use Packstub\Flow\Nodes\Triggers\Schedule;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('starts due schedules from the cron command', function (): void {
    Carbon::setTestNow('2026-03-02 09:00:00');

    createWorkflow([triggerNode('t', Schedule::class, ['expression' => '0 9 * * 1-5']), actionNode('a', SetStatusAction::class, ['status' => 'due'])], [edge('t', 'a')]);
    createWorkflow([triggerNode('t', Schedule::class, ['expression' => '0 18 * * *']), actionNode('a', SetStatusAction::class, ['status' => 'not-due'])], [edge('t', 'a')]);
    createWorkflow([triggerNode('t', Schedule::class, ['expression' => 'not a cron']), actionNode('a', SetStatusAction::class, ['status' => 'invalid'])], [edge('t', 'a')]);

    $this->artisan('packstub-flow:cron')
        ->expectsOutputToContain('1 scheduled workflow run(s) started.')
        ->assertSuccessful();

    expect(collect(SetStatusAction::$calls)->pluck('config.status')->all())->toBe(['due']);

    Carbon::setTestNow();
});

it('registers the cron command with the scheduler', function (): void {
    $events = collect(app(Scheduler::class)->events())->map(fn ($event) => $event->command);

    expect($events->filter(fn (?string $command) => str_contains((string) $command, 'packstub-flow:cron')))->toHaveCount(1);
});

it('validates the expression', function (): void {
    expect((new Schedule)->matches(['expression' => '* * * * *'], []))->toBeTrue()
        ->and((new Schedule)->matches(['expression' => 'nope'], []))->toBeFalse()
        ->and((new Schedule)->matches([], []))->toBeFalse();
});

it('evaluates the expression in the trigger timezone', function (): void {
    $schedule = new Schedule;
    $now = Carbon::parse('2026-09-02 09:00:00', 'UTC');

    expect($schedule->matches(['expression' => '0 9 * * *'], ['now' => $now]))->toBeTrue()
        ->and($schedule->matches(['expression' => '0 9 * * *', 'timezone' => 'Europe/Bucharest'], ['now' => $now]))->toBeFalse()
        ->and($schedule->matches(['expression' => '0 12 * * *', 'timezone' => 'Europe/Bucharest'], ['now' => $now]))->toBeTrue();
});
