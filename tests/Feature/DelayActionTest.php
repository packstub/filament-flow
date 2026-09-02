<?php

namespace Packstub\Flow\Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use Packstub\Flow\Contracts\DelayableAction;
use Packstub\Flow\Jobs\ResumeWorkflowJob;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowLog;
use Packstub\Flow\Nodes\Actions\Delay;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Triggers\ModelCreated;
use Packstub\Flow\Tests\TestCase;
use Packstub\Flow\Tests\User;
use Illuminate\Support\Facades\Mail;

uses(TestCase::class, RefreshDatabase::class);

test('delay action implements delayable action interface', function () {
    $delay = new Delay();

    expect($delay)->toBeInstanceOf(DelayableAction::class);
});

test('delay action returns correct delay seconds', function () {
    $delay = new Delay();

    // With duration set
    $seconds = $delay->getDelaySeconds(['duration' => 60], []);
    expect($seconds)->toBe(60);

    // With zero duration
    $seconds = $delay->getDelaySeconds(['duration' => 0], []);
    expect($seconds)->toBeNull();

    // With no duration
    $seconds = $delay->getDelaySeconds([], []);
    expect($seconds)->toBeNull();
});

test('workflow dispatches job when encountering delay action', function () {
    Queue::fake();

    $workflow = Workflow::create([
        'name' => 'Delayed Workflow',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                [
                    'id' => 'trigger',
                    'type' => 'trigger',
                    'data' => [
                        'identifier' => ModelCreated::class,
                        'config' => ['model_class' => User::class],
                        'label' => 'User Created',
                    ],
                ],
                [
                    'id' => 'delay',
                    'type' => 'action',
                    'data' => [
                        'identifier' => Delay::class,
                        'config' => ['duration' => 30],
                        'label' => 'Wait 30 seconds',
                    ],
                ],
                [
                    'id' => 'send-email',
                    'type' => 'action',
                    'data' => [
                        'identifier' => SendEmail::class,
                        'config' => [
                            'subject' => 'Delayed Email',
                            'body' => 'This was delayed',
                        ],
                        'label' => 'Send Email',
                    ],
                ],
            ],
            'edges' => [
                ['id' => 'e1', 'source' => 'trigger', 'target' => 'delay'],
                ['id' => 'e2', 'source' => 'delay', 'target' => 'send-email'],
            ],
        ],
    ]);

    // Create User (triggers workflow)
    $user = User::create([
        'name' => 'Delayed User',
        'email' => 'delayed@example.com',
        'password' => 'password',
    ]);

    // Assert job was dispatched with delay
    Queue::assertPushed(ResumeWorkflowJob::class, function ($job) use ($workflow) {
        return $job->workflowId === $workflow->id
            && $job->resumeFromNodeId === 'send-email';
    });

    // Assert workflow log exists and has either delayed or success status
    // (depending on timing and queue fake behavior)
    $log = WorkflowLog::where('workflow_id', $workflow->id)->first();
    expect($log)->not->toBeNull();
    expect(in_array($log->status, ['delayed', 'success']))->toBeTrue();
});

test('resume workflow job continues execution from specified node', function () {
    Mail::fake();

    $workflow = Workflow::create([
        'name' => 'Resume Test Workflow',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                [
                    'id' => 'trigger',
                    'type' => 'trigger',
                    'data' => [
                        'identifier' => ModelCreated::class,
                        'config' => ['model_class' => User::class],
                        'label' => 'User Created',
                    ],
                ],
                [
                    'id' => 'send-email',
                    'type' => 'action',
                    'data' => [
                        'identifier' => SendEmail::class,
                        'config' => [
                            'subject' => 'Resumed Email',
                            'body' => 'This was sent after resume',
                        ],
                        'label' => 'Send Email',
                    ],
                ],
            ],
            'edges' => [
                ['id' => 'e1', 'source' => 'trigger', 'target' => 'send-email'],
            ],
        ],
    ]);

    // Create a workflow log in delayed state
    $log = WorkflowLog::create([
        'workflow_id' => $workflow->id,
        'status' => 'delayed',
        'started_at' => now(),
        'output' => [],
    ]);

    $user = User::create([
        'name' => 'Resume User',
        'email' => 'resume@example.com',
        'password' => 'password',
    ]);

    // Manually dispatch the resume job
    $job = new ResumeWorkflowJob(
        $workflow->id,
        $log->id,
        ['model' => $user],
        'send-email',
        $workflow->payload['nodes'],
        $workflow->payload['edges']
    );

    $job->handle();

    // Assert email was sent
    Mail::assertSent(\Packstub\Flow\Mail\GenericEmail::class, function ($mail) {
        return $mail->subject === 'Resumed Email';
    });

    // Assert log is now completed
    $log->refresh();
    expect($log->status)->toBe('success');
    expect($log->finished_at)->not->toBeNull();
});

test('workflow without nodes after delay completes successfully', function () {
    Queue::fake();

    $workflow = Workflow::create([
        'name' => 'Delay Only Workflow',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                [
                    'id' => 'trigger',
                    'type' => 'trigger',
                    'data' => [
                        'identifier' => ModelCreated::class,
                        'config' => ['model_class' => User::class],
                        'label' => 'User Created',
                    ],
                ],
                [
                    'id' => 'delay',
                    'type' => 'action',
                    'data' => [
                        'identifier' => Delay::class,
                        'config' => ['duration' => 10],
                        'label' => 'Wait 10 seconds',
                    ],
                ],
            ],
            'edges' => [
                ['id' => 'e1', 'source' => 'trigger', 'target' => 'delay'],
                // No edge after delay
            ],
        ],
    ]);

    // Create User (triggers workflow)
    $user = User::create([
        'name' => 'Final Delay User',
        'email' => 'final@example.com',
        'password' => 'password',
    ]);

    // No job should be dispatched since there's nothing after the delay
    Queue::assertNotPushed(ResumeWorkflowJob::class);

    // Workflow should complete successfully
    $log = WorkflowLog::where('workflow_id', $workflow->id)->first();
    expect($log)->not->toBeNull();
    expect($log->status)->toBe('success');
});
