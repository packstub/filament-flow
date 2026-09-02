<?php

use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Actions\FindRecords;
use Packstub\Flow\Nodes\Actions\ForEachLoop;
use Packstub\Flow\Nodes\Actions\Wait;
use Packstub\Flow\Nodes\Conditions\CompareValues;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('finds records and loops over them', function (): void {
    createOrder(['status' => 'pending', 'total' => 50]);
    createOrder(['status' => 'pending', 'total' => 500]);
    createOrder(['status' => 'paid', 'total' => 900]);

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('find', FindRecords::class, [
            'model_class' => Order::class,
            'conditions' => [
                ['attribute' => 'status', 'operator' => '=', 'value' => '{{ wanted }}'],
                ['attribute' => 'total', 'operator' => '>=', 'value' => '{{ min }}'],
            ],
            'order_by' => 'total',
            'direction' => 'desc',
        ]),
        actionNode('each', ForEachLoop::class, ['items' => '{{ last.records }}']),
        actionNode('body', EchoAction::class, ['template' => '{{ loop.number }}/{{ loop.count }} {{ item.reference }} first={{ loop.first }} last={{ loop.last }}']),
        actionNode('done', EchoAction::class, ['template' => 'done {{ last.count }} of {{ outputs.find.count }}']),
    ], [edge('t', 'find'), edge('find', 'each'), edge('each', 'body', 'body'), edge('each', 'done', 'done')]);

    $run = Flow::run($workflow, ['wanted' => 'pending', 'min' => 10]);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('done 2 of 2')
        ->and(collect($run->steps)->pluck('node_id')->all())->toBe(['t', 'find', 'body', 'body', 'each', 'done'])
        ->and(collect($run->steps)->firstWhere('node_id', 'find')['output'])->toBe(['count' => 2, 'ids' => [2, 1]])
        ->and(collect($run->steps)->where('node_id', 'body')->pluck('output.text')->all())->toBe([
            '1/2 ORD-0002 first=1 last=0',
            '2/2 ORD-0001 first=0 last=1',
        ]);
});

it('loops over arrays, comma lists and nothing', function (): void {
    $loop = new ForEachLoop;

    expect($loop->getItems(['items' => '{{ list }}'], ['list' => ['a', 'b']]))->toBe(['a', 'b'])
        ->and($loop->getItems(['items' => '{{ list }}'], ['list' => collect(['x' => 1, 'y' => 2])]))->toBe([1, 2])
        ->and($loop->getItems(['items' => 'a, b,,c'], []))->toBe(['a', 'b', 'c'])
        ->and($loop->getItems(['items' => '{{ missing }}'], []))->toBe([])
        ->and($loop->getItemKey(['item_key' => 'order']))->toBe('order')
        ->and($loop->getItemKey([]))->toBe('item');

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('each', ForEachLoop::class, ['items' => '{{ webhook.skus }}', 'item_key' => 'sku']),
        conditionNode('c', CompareValues::class, ['left' => '{{ sku }}', 'operator' => 'starts_with', 'value' => 'A']),
        actionNode('a', EchoAction::class, ['template' => 'A:{{ sku }}']),
        actionNode('done', SetStatusAction::class, ['status' => 'done']),
    ], [edge('t', 'each'), edge('each', 'c', 'body'), edge('c', 'a', 'true'), edge('each', 'done', 'done')]);

    $run = Flow::run($workflow, ['webhook' => ['skus' => ['A1', 'B2', 'A3']]]);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(collect($run->steps)->where('node_id', 'a')->pluck('output.text')->all())->toBe(['A:A1', 'A:A3'])
        ->and(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload'])->not->toHaveKey('sku');

    expect(Flow::run($workflow, ['webhook' => ['skus' => []]])->status)->toBe(RunStatus::Success)
        ->and(SetStatusAction::$calls)->toHaveCount(2);
});

it('fails the run when the loop is longer than allowed', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('each', ForEachLoop::class, ['items' => '{{ list }}', 'max_iterations' => 2]),
        actionNode('a', SetStatusAction::class, ['status' => 'x']),
    ], [edge('t', 'each'), edge('each', 'a', 'body')]);

    $run = Flow::run($workflow, ['list' => [1, 2, 3]]);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('3 items exceed the limit of 2');
});

it('supports the other find operators and relative dates', function (): void {
    $old = createOrder(['status' => 'paid', 'created_at' => now()->subDays(10)]);
    $new = createOrder(['status' => 'review', 'created_at' => now()->subDay()]);
    createOrder(['status' => 'cancelled', 'user_id' => 5]);

    $find = fn (array $conditions): array => (new FindRecords)->query(['model_class' => Order::class, 'conditions' => $conditions], [])->pluck('id')->all();

    expect($find([['attribute' => 'created_at', 'operator' => 'before', 'value' => '-3 days']]))->toBe([$old->id])
        ->and($find([['attribute' => 'created_at', 'operator' => 'after', 'value' => '-3 days']]))->toHaveCount(2)
        ->and($find([['attribute' => 'status', 'operator' => 'in', 'value' => 'paid, review']]))->toBe([$old->id, $new->id])
        ->and($find([['attribute' => 'status', 'operator' => 'not_in', 'value' => 'paid, review']]))->toHaveCount(1)
        ->and($find([['attribute' => 'user_id', 'operator' => 'null']]))->toHaveCount(2)
        ->and($find([['attribute' => 'user_id', 'operator' => 'not_null']]))->toHaveCount(1)
        ->and($find([['attribute' => 'reference', 'operator' => 'like', 'value' => '0002']]))->toBe([$new->id])
        ->and($find([['attribute' => 'reference', 'operator' => 'not_like', 'value' => '0002']]))->toHaveCount(2);

    expect(fn () => (new FindRecords)->query(['model_class' => 'Nope'], []))->toThrow(WorkflowException::class);
});

it('pauses inside a loop body per item and continues the rest of the loop', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('each', ForEachLoop::class, ['items' => '{{ list }}']),
        actionNode('w', Wait::class, ['duration' => 1, 'unit' => 'seconds']),
        actionNode('a', EchoAction::class, ['template' => 'after {{ item }}']),
        actionNode('done', EchoAction::class, ['template' => 'done']),
    ], [edge('t', 'each'), edge('each', 'w', 'body'), edge('w', 'a'), edge('each', 'done', 'done')]);

    // The sync queue runs the delayed resume immediately.
    $run = Flow::run($workflow, ['list' => ['x', 'y']]);

    expect($run->fresh()->status)->toBe(RunStatus::Success)
        ->and(collect($run->fresh()->steps)->where('node_id', 'a')->pluck('output.text')->filter()->values()->all())->toBe(['after x', 'after y']);
});
