<?php

use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Queue;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Jobs\ResumeWorkflowJob;
use Packstub\Flow\Nodes\Actions\Wait;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('converts duration and unit to seconds', function (): void {
    $wait = new Wait;

    expect($wait->getDelaySeconds(['duration' => 2, 'unit' => 'minutes'], []))->toBe(120)
        ->and($wait->getDelaySeconds(['duration' => 1, 'unit' => 'hours'], []))->toBe(3600)
        ->and($wait->getDelaySeconds(['duration' => 1, 'unit' => 'days'], []))->toBe(86400)
        ->and($wait->getDelaySeconds(['duration' => 5], []))->toBe(5)
        ->and($wait->getDelaySeconds(['duration' => 0], []))->toBeNull()
        ->and($wait->getDelaySeconds([], []))->toBeNull();
});

it('pauses the run and schedules the nodes after the wait', function (): void {
    Queue::fake();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('w', Wait::class, ['duration' => 10, 'unit' => 'minutes']),
        actionNode('a', SetStatusAction::class, ['status' => 'after']),
        actionNode('b', SetStatusAction::class, ['status' => 'after-too']),
    ], [edge('t', 'w'), edge('w', 'a'), edge('w', 'b')]);

    $run = Flow::run($workflow, ['answer' => 42]);

    expect($run->status)->toBe(RunStatus::Delayed)
        ->and($run->pending_resumes)->toBe(1)
        ->and($run->finished_at)->toBeNull()
        ->and(SetStatusAction::$calls)->toBe([]);

    Queue::assertPushed(ResumeWorkflowJob::class, function (ResumeWorkflowJob $job) use ($run): bool {
        return $job->runId === $run->id
            && $job->nodeIds === ['a', 'b']
            && $job->payload === ['answer' => 42]
            && (int) $job->delay->diffInSeconds(now()->subSeconds(0), true) >= 590;
    });
});

it('resumes at the scheduled nodes and finishes the run', function (): void {
    Queue::fake();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('w', Wait::class, ['duration' => 1, 'unit' => 'seconds']),
        actionNode('a', SetStatusAction::class, ['status' => 'after']),
    ], [edge('t', 'w'), edge('w', 'a')]);

    $run = Flow::run($workflow, ['answer' => 42]);
    $job = Queue::pushedJobs()[ResumeWorkflowJob::class][0]['job'];

    $job->handle();

    $run->refresh();

    expect($run->status)->toBe(RunStatus::Success)
        ->and($run->pending_resumes)->toBe(0)
        ->and($run->finished_at)->not->toBeNull()
        ->and(SetStatusAction::$calls[0]['config']['status'])->toBe('after')
        ->and(SetStatusAction::$calls[0]['payload'])->toBe(['answer' => 42])
        ->and(collect($run->steps)->pluck('message')->last())->toBe('Done');
});

it('finishes immediately when nothing follows the wait', function (): void {
    Queue::fake();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('w', Wait::class, ['duration' => 1, 'unit' => 'hours']),
    ], [edge('t', 'w')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Success);
    Queue::assertNothingPushed();
});

it('keeps a run waiting while other waits are still pending', function (): void {
    Queue::fake();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('w1', Wait::class, ['duration' => 1, 'unit' => 'minutes']),
        actionNode('w2', Wait::class, ['duration' => 2, 'unit' => 'minutes']),
        actionNode('a', SetStatusAction::class, ['status' => 'a']),
        actionNode('b', SetStatusAction::class, ['status' => 'b']),
    ], [edge('t', 'w1'), edge('t', 'w2'), edge('w1', 'a'), edge('w2', 'b')]);

    $run = Flow::run($workflow);
    expect($run->pending_resumes)->toBe(2);

    $jobs = Queue::pushedJobs()[ResumeWorkflowJob::class];
    $jobs[0]['job']->handle();

    expect($run->fresh()->status)->toBe(RunStatus::Delayed);

    $jobs[1]['job']->handle();

    expect($run->fresh()->status)->toBe(RunStatus::Success)
        ->and(collect(SetStatusAction::$calls)->pluck('config.status')->all())->toBe(['a', 'b']);
});

it('uses a snapshot of the graph taken when the wait started', function (): void {
    Queue::fake();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('w', Wait::class, ['duration' => 1, 'unit' => 'seconds']),
        actionNode('a', SetStatusAction::class, ['status' => 'original']),
    ], [edge('t', 'w'), edge('w', 'a')]);

    Flow::run($workflow);

    // Edit the workflow while the run is waiting.
    $workflow->update(['definition' => ['nodes' => [triggerNode('t', Manual::class)], 'edges' => []]]);

    Queue::pushedJobs()[ResumeWorkflowJob::class][0]['job']->handle();

    expect(SetStatusAction::$calls[0]['config']['status'])->toBe('original');
});

it('waits until a date from the payload with an offset', function (): void {
    Date::setTestNow('2026-09-02 10:00:00');

    $wait = new Wait;
    $order = createOrder(['created_at' => '2026-09-03 10:00:00']);

    expect($wait->getDelaySeconds(['mode' => 'until', 'until' => '{{ model.created_at }}', 'duration' => 1, 'unit' => 'hours', 'direction' => 'before'], ['model' => $order]))->toBe(23 * 3600)
        ->and($wait->getDelaySeconds(['mode' => 'until', 'until' => '{{ model.created_at }}', 'duration' => 2, 'unit' => 'hours', 'direction' => 'after'], ['model' => $order]))->toBe(26 * 3600)
        ->and($wait->getDelaySeconds(['mode' => 'until', 'until' => '2026-09-02 10:30:00', 'duration' => 0], []))->toBe(1800)
        ->and($wait->getDelaySeconds(['mode' => 'until', 'until' => '{{ model.created_at }}', 'duration' => 3, 'unit' => 'days', 'direction' => 'before'], ['model' => $order]))->toBeNull()
        ->and($wait->getDelaySeconds(['mode' => 'until', 'until' => '{{ missing }}', 'duration' => 1, 'unit' => 'days'], []))->toBeNull()
        ->and($wait->getDelaySeconds(['mode' => 'until', 'until' => 'not a date'], []))->toBeNull();

    Date::setTestNow();
});

it('does not resume a run that another branch already failed', function (): void {
    Queue::fake();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('w', Wait::class, ['duration' => 1, 'unit' => 'minutes']),
        actionNode('after', SetStatusAction::class, ['status' => 'after']),
        actionNode('boom', SetStatusAction::class, ['status' => 'boom']),
    ], [edge('t', 'w'), edge('w', 'after'), edge('t', 'boom')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Failed);

    Queue::assertPushed(ResumeWorkflowJob::class, function (ResumeWorkflowJob $job): bool {
        $job->handle();

        return true;
    });

    expect($run->fresh()->status)->toBe(RunStatus::Failed)
        ->and($run->fresh()->pending_resumes)->toBe(0)
        ->and(collect(SetStatusAction::$calls)->pluck('config.status')->all())->toBe(['boom']);
});
