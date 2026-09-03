<?php

use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\WorkflowCalled;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('follows the error branch when an action fails', function (): void {
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('a', SetStatusAction::class, ['status' => 'boom', Runner::ON_ERROR => 'branch']),
        actionNode('ok', EchoAction::class, ['template' => 'fine']),
        actionNode('handler', EchoAction::class, ['template' => 'caught: {{ error.message }} at {{ error.node }} ({{ error.node_id }})']),
    ], [edge('t', 'a'), edge('a', 'ok'), edge('a', 'handler', 'error')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('caught: Boom from the action at a (a)')
        ->and(collect($run->steps)->pluck('node_id')->all())->toBe(['t', 'a', 'handler'])
        ->and(collect($run->steps)->firstWhere('node_id', 'a')['status'])->toBe('failed');
});

it('fails the run when the error branch is not connected', function (): void {
    $run = Flow::run(manualWorkflow(['status' => 'boom', Runner::ON_ERROR => 'branch']));

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toBe('Boom from the action');
});

it('runs the on-failure workflow with the error', function (): void {
    $handler = createWorkflow(
        [triggerNode('called', WorkflowCalled::class), actionNode('log', EchoAction::class, ['template' => '{{ failed_run.workflow }} failed: {{ error.message }} ({{ answer }})'])],
        [edge('called', 'log')],
        ['name' => 'Alert ops'],
    );

    $workflow = manualWorkflow(['status' => 'boom'], ['name' => 'Fragile', 'on_failure_workflow_id' => $handler->getKey()]);

    $run = Flow::run($workflow, ['answer' => 42]);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and(EchoAction::$last)->toBe('Fragile failed: Boom from the action (42)')
        ->and(WorkflowRun::query()->where('workflow_id', $handler->getKey())->count())->toBe(1);

    // A handler that fails does not loop back into itself.
    $handler->update(['on_failure_workflow_id' => $handler->getKey(), 'definition' => ['nodes' => [triggerNode('called', WorkflowCalled::class), actionNode('x', SetStatusAction::class, ['status' => 'boom'])], 'edges' => [edge('called', 'x')]]]);
    Flow::run($workflow);

    expect(WorkflowRun::query()->where('workflow_id', $handler->getKey())->count())->toBe(2);
});
