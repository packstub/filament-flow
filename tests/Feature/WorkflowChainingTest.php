<?php

namespace Xlited\LaravelFlow\Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Xlited\LaravelFlow\Models\Workflow;
use Xlited\LaravelFlow\Nodes\Actions\DispatchWorkflow;
use Xlited\LaravelFlow\Nodes\Actions\HttpRequest;
use Xlited\LaravelFlow\Nodes\Triggers\ModelCreated;
use Xlited\LaravelFlow\Nodes\Triggers\WorkflowChained;
use Xlited\LaravelFlow\Tests\TestCase;
use Xlited\LaravelFlow\Tests\User;

uses(TestCase::class, RefreshDatabase::class);

test('workflow B triggers automatically when workflow A completes', function () {
    Http::fake();

    // Create Workflow A (Triggered by ModelCreated)
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

    // Create Workflow B (Triggered by Workflow A completing)
    $workflowB = Workflow::create([
        'name' => 'Workflow B',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                ['id' => 't2', 'type' => 'trigger', 'data' => ['identifier' => WorkflowChained::class, 'config' => ['workflow_id' => $workflowA->id], 'label' => 'A Done']],
                ['id' => 'a2', 'type' => 'action', 'data' => ['identifier' => HttpRequest::class, 'config' => ['method' => 'GET', 'url' => 'https://api.example.com/b'], 'label' => 'Call B']],
            ],
            'edges' => [['id' => 'e2', 'source' => 't2', 'target' => 'a2']],
        ],
    ]);

    // Trigger Workflow A by creating a user
    User::create(['name' => 'Test', 'email' => 'test@example.com', 'password' => 'secret']);

    // Check that BOTH A and B were called
    Http::assertSent(function ($request) {
        return $request->url() === 'https://api.example.com/a';
    });

    Http::assertSent(function ($request) {
        return $request->url() === 'https://api.example.com/b';
    });
});

test('workflow B triggers explicitly via DispatchWorkflow action', function () {
    Http::fake();

    // Workflow B
    $workflowB = Workflow::create([
        'id' => 'workflow-b-id',
        'name' => 'Workflow B',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                ['id' => 't2', 'type' => 'trigger', 'data' => ['identifier' => WorkflowChained::class, 'config' => [], 'label' => 'Manual']],
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
