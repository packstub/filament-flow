<?php

use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Actions\CallWorkflow;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\WorkflowCalled;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('runs the called workflow with the current payload', function (): void {
    $child = createWorkflow([triggerNode('t', WorkflowCalled::class), actionNode('a', SetStatusAction::class, ['status' => 'child'])], [edge('t', 'a')], ['name' => 'Child']);
    $parent = createWorkflow([triggerNode('t', Manual::class), actionNode('call', CallWorkflow::class, ['workflow_id' => $child->id])], [edge('t', 'call')], ['name' => 'Parent']);

    $run = Flow::run($parent, ['answer' => 42]);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(SetStatusAction::$calls[0]['payload'])->toMatchArray(['answer' => 42, 'flow_depth' => 1])
        ->and(WorkflowRun::query()->where('workflow_id', $child->id)->first()->trigger_type)->toBe(WorkflowCalled::class);
});

it('fails when the called workflow has no matching trigger', function (): void {
    $child = manualWorkflow(attributes: ['name' => 'No entry']);
    $parent = createWorkflow([triggerNode('t', Manual::class), actionNode('call', CallWorkflow::class, ['workflow_id' => $child->id])], [edge('t', 'call')]);

    $run = Flow::run($parent);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('Called by another workflow');
});

it('stops workflows that call each other endlessly', function (): void {
    $a = createWorkflow([triggerNode('t', WorkflowCalled::class), actionNode('call', CallWorkflow::class, [])], [edge('t', 'call')], ['name' => 'A']);
    $b = createWorkflow([triggerNode('t', WorkflowCalled::class), actionNode('call', CallWorkflow::class, ['workflow_id' => $a->id])], [edge('t', 'call')], ['name' => 'B']);
    $a->update(['definition' => ['nodes' => [triggerNode('t', WorkflowCalled::class), actionNode('call', CallWorkflow::class, ['workflow_id' => $b->id])], 'edges' => [edge('t', 'call')]]]);

    $run = Flow::run($a);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and(WorkflowRun::query()->where('error', 'like', 'Workflows are calling each other%')->count())->toBe(1)
        ->and(WorkflowRun::query()->count())->toBeLessThanOrEqual(CallWorkflow::MAX_DEPTH + 1);
});
