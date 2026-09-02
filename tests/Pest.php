<?php

use Illuminate\Support\Facades\Hash;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Tests\Fixtures\FlakyAction;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;
use Packstub\Flow\Tests\Fixtures\User;
use Packstub\Flow\Tests\TestCase;

pest()->extend(TestCase::class)->in('Feature');

pest()->beforeEach(function (): void {
    SetStatusAction::$calls = [];
    FlakyAction::$attempts = 0;
});

/**
 * @param  array<string, mixed>  $attributes
 */
function createUser(array $attributes = []): User
{
    $sequence = User::query()->count() + 1;

    return User::query()->create([
        'name' => "User {$sequence}",
        'email' => "user{$sequence}@example.com",
        'password' => Hash::make('secret'),
        ...$attributes,
    ]);
}

/**
 * @param  array<string, mixed>  $attributes
 */
function createOrder(array $attributes = []): Order
{
    $sequence = Order::query()->count() + 1;

    return Order::query()->create([
        'reference' => sprintf('ORD-%04d', $sequence),
        'status' => 'pending',
        'total' => 100,
        ...$attributes,
    ]);
}

/**
 * Build a node for a workflow definition.
 *
 * @param  array<string, mixed>  $config
 * @return array<string, mixed>
 */
function node(string $id, string $type, string $identifier, array $config = [], ?string $label = null): array
{
    return [
        'id' => $id,
        'type' => $type,
        'position' => ['x' => 0, 'y' => 0],
        'data' => [
            'identifier' => $identifier,
            'label' => $label ?? $id,
            'description' => null,
            'config' => $config,
        ],
    ];
}

/** @param array<string, mixed> $config */
function triggerNode(string $id, string $identifier, array $config = []): array
{
    return node($id, 'trigger', $identifier, $config);
}

/** @param array<string, mixed> $config */
function actionNode(string $id, string $identifier, array $config = []): array
{
    return node($id, 'action', $identifier, $config);
}

/** @param array<string, mixed> $config */
function conditionNode(string $id, string $identifier, array $config = []): array
{
    return node($id, 'condition', $identifier, $config);
}

/** @return array<string, mixed> */
function edge(string $source, string $target, ?string $sourceHandle = null): array
{
    static $sequence = 0;

    $sequence++;

    return array_filter([
        'id' => "e{$sequence}",
        'source' => $source,
        'sourceHandle' => $sourceHandle,
        'target' => $target,
    ], fn ($value): bool => $value !== null);
}

/**
 * @param  array<int, array<string, mixed>>  $nodes
 * @param  array<int, array<string, mixed>>  $edges
 * @param  array<string, mixed>  $attributes
 */
function createWorkflow(array $nodes, array $edges = [], array $attributes = []): Workflow
{
    return Workflow::query()->create([
        'name' => 'Test workflow',
        'is_active' => true,
        'definition' => ['nodes' => $nodes, 'edges' => $edges],
        ...$attributes,
    ]);
}

/**
 * A workflow with a manual trigger followed by one test action.
 *
 * @param  array<string, mixed>  $actionConfig
 */
function manualWorkflow(array $actionConfig = ['status' => 'done'], array $attributes = []): Workflow
{
    return createWorkflow(
        [triggerNode('t', Manual::class), actionNode('a', SetStatusAction::class, $actionConfig)],
        [edge('t', 'a')],
        $attributes,
    );
}
