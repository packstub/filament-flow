<?php

use Illuminate\Support\Facades\Cache;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Actions\AddTag;
use Packstub\Flow\Nodes\Actions\AssignOwner;
use Packstub\Flow\Nodes\Actions\CreateRecord;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\RecordCreated;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\GuardedOrder;
use Packstub\Flow\Tests\Fixtures\Note;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('creates a record through a relationship and exposes it', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('note', CreateRecord::class, ['model_class' => Note::class, 'relation' => 'notes', 'attributes' => ['body' => 'Flagged {{ model.reference }}']]),
        actionNode('echo', EchoAction::class, ['template' => 'note {{ last.id }}: {{ last.record.body }} on {{ model.reference }}']),
    ], [edge('t', 'note'), edge('note', 'echo')]);

    $order = createOrder();
    $run = Flow::run($workflow, ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Success)
        ->and($order->notes()->count())->toBe(1)
        ->and(EchoAction::$last)->toBe('note 1: Flagged ORD-0001 on ORD-0001')
        ->and(collect($run->steps)->firstWhere('node_id', 'note')['output'])->toBe(['id' => 1, 'type' => Note::class]);

    expect(Flow::run($workflow)->error)->toContain('needs a record');
});

it('creates a standalone record, quietly by default, and can continue with it as the model', function (): void {
    createWorkflow(
        [triggerNode('t', RecordCreated::class, ['model_class' => Order::class]), actionNode('a', SetStatusAction::class, ['status' => 'from-trigger'])],
        [edge('t', 'a')],
    );

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('create', CreateRecord::class, ['model_class' => Order::class, 'attributes' => ['reference' => 'NEW-{{ n }}', 'total' => '{{ n }}'], 'use_as_model' => true, 'force' => true]),
        actionNode('echo', EchoAction::class, ['template' => '{{ model.reference }}={{ model.total }}']),
    ], [edge('t', 'create'), edge('create', 'echo')]);

    $run = Flow::run($workflow, ['n' => 7]);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('NEW-7=7')
        ->and(Order::query()->where('reference', 'NEW-7')->sole()->total)->toBe(7.0)
        ->and(SetStatusAction::$calls)->toBe([]);

    // Guarded attributes fail without "force".
    $guarded = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('create', CreateRecord::class, ['model_class' => GuardedOrder::class, 'attributes' => ['reference' => 'X', 'status' => 'paid']]),
    ], [edge('t', 'create')]);

    expect(Flow::run($guarded)->error)->toContain('fillable');
});

it('assigns a fixed owner or the next user in turn', function (): void {
    $ann = createUser(['email' => 'ann@example.com']);
    $ben = createUser(['email' => 'ben@example.com']);
    Cache::flush();

    $fixed = createWorkflow([triggerNode('t', Manual::class), actionNode('a', AssignOwner::class, ['attribute' => 'user_id', 'mode' => 'user', 'user' => '{{ who }}'])], [edge('t', 'a')]);
    $order = createOrder();

    $run = Flow::run($fixed, ['model' => $order, 'who' => 'ben@example.com']);

    expect($run->status)->toBe(RunStatus::Success)
        ->and($order->fresh()->user_id)->toBe($ben->id)
        ->and(collect($run->steps)->last()['output']['owner_email'])->toBe('ben@example.com');

    expect(Flow::run($fixed, ['model' => $order, 'who' => 'nobody@example.com'])->error)->toContain('no matching user')
        ->and(Flow::run($fixed, ['who' => 'x'])->error)->toContain('needs a record');

    $robin = createWorkflow([triggerNode('t', Manual::class), actionNode('a', AssignOwner::class, ['mode' => 'round_robin', 'users' => "ann@example.com, ben@example.com\nghost@example.com"])], [edge('t', 'a')]);

    $owners = collect(range(1, 4))->map(fn () => tap(createOrder(), fn (Order $o) => Flow::run($robin, ['model' => $o]))->fresh()->user_id)->all();

    expect($owners)->toBe([$ann->id, $ben->id, $ann->id, $ben->id]);
});

it('attaches, syncs and detaches tags', function (): void {
    expect(AddTag::isAvailable())->toBeTrue();

    $order = createOrder();
    $tag = fn (array $config) => Flow::run(createWorkflow([triggerNode('t', Manual::class), actionNode('a', AddTag::class, $config)], [edge('t', 'a')]), ['model' => $order]);

    expect($tag(['tags' => 'vip, {{ model.status }}'])->status)->toBe(RunStatus::Success)
        ->and($order->fresh()->tags->pluck('name')->sort()->values()->all())->toBe(['pending', 'vip']);

    $tag(['tags' => 'new', 'mode' => 'sync']);
    expect($order->fresh()->tags->pluck('name')->all())->toBe(['new']);

    $tag(['tags' => 'new', 'mode' => 'detach']);
    expect($order->fresh()->tags)->toHaveCount(0);

    $tag(['tags' => 'gold', 'type' => 'tier']);
    expect($order->fresh()->tagsWithType('tier')->pluck('name')->all())->toBe(['gold']);

    expect(Flow::run(createWorkflow([triggerNode('t', Manual::class), actionNode('a', AddTag::class, ['tags' => 'x'])], [edge('t', 'a')]), ['model' => createUser()])->error)->toContain('does not use');
});
