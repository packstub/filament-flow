<?php

use Illuminate\Support\Facades\Http;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Actions\HttpRequest;
use Packstub\Flow\Nodes\Conditions\CompareValues;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Tests\Fixtures\FlakyAction;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('passes an action output down the branch as last and outputs', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('first', FlakyAction::class, ['value' => 'one']),
        actionNode('second', FlakyAction::class, ['value' => 'two']),
        actionNode('s', SetStatusAction::class, ['status' => '{{ last.value }}/{{ outputs.first.value }}/{{ last.seen }}']),
    ], [edge('t', 'first'), edge('first', 'second'), edge('second', 's')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(SetStatusAction::$calls[0]['payload']['last']['value'])->toBe('two')
        ->and(SetStatusAction::$calls[0]['payload']['outputs']['first']['value'])->toBe('one')
        ->and(SetStatusAction::$calls[0]['payload']['last']['seen'])->toBe(1)
        ->and(collect($run->steps)->firstWhere('node_id', 'first')['output']['value'])->toBe('one')
        ->and(collect($run->steps)->firstWhere('node_id', 'first'))->toHaveKeys(['duration_ms', 'status']);
});

it('exposes the HTTP response to the next nodes', function (): void {
    Http::fake(['api.example.com/*' => Http::response(['id' => 'cust_9', 'vip' => true], 201)]);

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('h', HttpRequest::class, ['method' => 'GET', 'url' => 'https://api.example.com/customers/1']),
        conditionNode('c', CompareValues::class, ['left' => '{{ last.body.vip }}', 'operator' => 'truthy']),
        actionNode('s', SetStatusAction::class, ['status' => '{{ last.status }}:{{ last.body.id }}']),
    ], [edge('t', 'h'), edge('h', 'c'), edge('c', 's', 'true')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(SetStatusAction::$calls[0]['config']['status'])->toBe('{{ last.status }}:{{ last.body.id }}')
        ->and(SetStatusAction::$calls[0]['payload']['last'])->toMatchArray(['status' => 201, 'ok' => true, 'body' => ['id' => 'cust_9', 'vip' => true]]);
});

it('branches keep their own outputs', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('a', FlakyAction::class, ['value' => 'A']),
        actionNode('sa', SetStatusAction::class, ['status' => 'a']),
        actionNode('sb', SetStatusAction::class, ['status' => 'b']),
    ], [edge('t', 'a'), edge('a', 'sa'), edge('t', 'sb')]);

    Flow::run($workflow);

    expect(SetStatusAction::$calls[0]['payload']['last']['value'])->toBe('A')
        ->and(SetStatusAction::$calls[1]['payload'])->not->toHaveKey('last');
});

it('runs a join node once when two branches reach it', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('a', SetStatusAction::class, ['status' => 'a']),
        actionNode('b', SetStatusAction::class, ['status' => 'b']),
        actionNode('join', SetStatusAction::class, ['status' => 'join']),
    ], [edge('t', 'a'), edge('t', 'b'), edge('a', 'join'), edge('b', 'join')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(array_column(SetStatusAction::$calls, 'config'))->toBe([['status' => 'a'], ['status' => 'join'], ['status' => 'b']]);
});

it('records the failing step with its error', function (): void {
    $run = Flow::run(manualWorkflow(['status' => 'boom']));

    $step = collect($run->steps)->firstWhere('node_id', 'a');

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($step['status'])->toBe('failed')
        ->and($step['message'])->toBe('Boom from the action');
});

it('retries an action the configured number of times', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('f', FlakyAction::class, ['fail_times' => 2, Runner::RETRIES => 2]),
        actionNode('s', SetStatusAction::class, ['status' => 'ok']),
    ], [edge('t', 'f'), edge('f', 's')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(FlakyAction::$attempts)->toBe(3)
        ->and(collect($run->steps)->where('status', 'retry')->count())->toBe(2)
        ->and(SetStatusAction::$calls)->toHaveCount(1)
        ->and(FlakyAction::$attempts)->toBe(3);
});

it('fails the run when retries are exhausted', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('f', FlakyAction::class, ['fail_times' => 5, Runner::RETRIES => 1]),
        actionNode('s', SetStatusAction::class, ['status' => 'ok']),
    ], [edge('t', 'f'), edge('f', 's')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and(FlakyAction::$attempts)->toBe(2)
        ->and(SetStatusAction::$calls)->toBe([]);
});

it('continues after a failure when the node says so', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('f', FlakyAction::class, ['fail_times' => 5, Runner::ON_ERROR => 'continue']),
        actionNode('s', SetStatusAction::class, ['status' => 'still-ran']),
    ], [edge('t', 'f'), edge('f', 's')]);

    $run = Flow::run($workflow);

    $step = collect($run->steps)->firstWhere('node_id', 'f');

    expect($run->status)->toBe(RunStatus::Success)
        ->and($step['status'])->toBe('failed')
        ->and(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['config'])->toBe(['status' => 'still-ran']);
});

it('strips the runner settings from the config an action receives', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('s', SetStatusAction::class, ['status' => 'x', Runner::RETRIES => 1, Runner::RETRY_AFTER => 0, Runner::ON_ERROR => 'fail']),
    ], [edge('t', 's')]);

    Flow::run($workflow);

    expect(SetStatusAction::$calls[0]['config'])->toBe(['status' => 'x']);
});
