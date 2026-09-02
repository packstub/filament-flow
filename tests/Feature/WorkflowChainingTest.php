<?php

namespace Packstub\Flow\Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\DispatchWorkflow;
use Packstub\Flow\Nodes\Actions\HttpRequest;
use Packstub\Flow\Nodes\Triggers\ModelCreated;
use Packstub\Flow\Nodes\Triggers\SubWorkflowTriggered;
use Packstub\Flow\Tests\TestCase;
use Packstub\Flow\Tests\User;

uses(TestCase::class, RefreshDatabase::class);

test('workflow B triggers explicitly via DispatchWorkflow action', function () {
    Http::fake();

    // Workflow B: Triggered by SubWorkflowTriggered
    $workflowB = Workflow::create([
        'name' => 'Workflow B',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                ['id' => 't2', 'type' => 'trigger', 'data' => ['identifier' => SubWorkflowTriggered::class, 'config' => [], 'label' => 'Sub Start']],
                ['id' => 'a2', 'type' => 'action', 'data' => ['identifier' => HttpRequest::class, 'config' => ['method' => 'GET', 'url' => 'https://api.example.com/b'], 'label' => 'Call B']],
            ],
            'edges' => [['id' => 'e2', 'source' => 't2', 'target' => 'a2']],
        ],
    ]);

    // Workflow A with Dispatch action
    $workflowA = Workflow::create([
        'name' => 'Workflow A',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                ['id' => 't1', 'type' => 'trigger', 'data' => ['identifier' => ModelCreated::class, 'config' => ['model_class' => User::class], 'label' => 'Start']],
                ['id' => 'a1', 'type' => 'action', 'data' => ['identifier' => DispatchWorkflow::class, 'config' => ['workflow_id' => $workflowB->id], 'label' => 'Call B']],
            ],
            'edges' => [['id' => 'e1', 'source' => 't1', 'target' => 'a1']],
        ],
    ]);

    // Trigger Workflow A
    User::create(['name' => 'Test', 'email' => 'test@example.com', 'password' => 'secret']);

    // Check that B was called
    Http::assertSent(function ($request) {
        return $request->url() === 'https://api.example.com/b';
    });
});

test('workflow does not trigger automatically anymore', function () {
    Http::fake();

    // Create Workflow A
    $workflowA = Workflow::create([
        'name' => 'Workflow A',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                ['id' => 't1', 'type' => 'trigger', 'data' => ['identifier' => ModelCreated::class, 'config' => ['model_class' => User::class], 'label' => 'Start']],
                ['id' => 'a1', 'type' => 'action', 'data' => ['identifier' => HttpRequest::class, 'config' => ['method' => 'GET', 'url' => 'https://api.example.com/a'], 'label' => 'Call A']],
            ],
            'edges' => [['id' => 'e1', 'source' => 't1', 'target' => 'a1']],
        ],
    ]);

    // Create Workflow B (Attempting to chain automatically)
    $workflowB = Workflow::create([
        'name' => 'Workflow B',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                ['id' => 't2', 'type' => 'trigger', 'data' => ['identifier' => SubWorkflowTriggered::class, 'config' => ['workflow_id' => $workflowA->id], 'label' => 'A Done']],
                ['id' => 'a2', 'type' => 'action', 'data' => ['identifier' => HttpRequest::class, 'config' => ['method' => 'GET', 'url' => 'https://api.example.com/b'], 'label' => 'Call B']],
            ],
            'edges' => [['id' => 'e2', 'source' => 't2', 'target' => 'a2']],
        ],
    ]);

    // Trigger Workflow A
    User::create(['name' => 'Test', 'email' => 'test@example.com', 'password' => 'secret']);

    // A should be called, but B should NOT be called automatically
    Http::assertSent(function ($request) {
        return $request->url() === 'https://api.example.com/a';
    });

    Http::assertNotSent(function ($request) {
        return $request->url() === 'https://api.example.com/b';
    });
});
