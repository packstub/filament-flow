<?php

use Packstub\Flow\Models\WorkflowTrigger;
use Packstub\Flow\Nodes\Actions\WriteLog;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\RecordCreated;
use Packstub\Flow\Tests\Fixtures\Order;

it('mirrors trigger nodes into the triggers table on save', function (): void {
    $workflow = createWorkflow([
        triggerNode('t1', Manual::class),
        triggerNode('t2', RecordCreated::class, ['model_class' => Order::class]),
        actionNode('a', WriteLog::class, ['message' => 'x']),
    ], [edge('t1', 'a'), edge('t2', 'a')]);

    $rows = WorkflowTrigger::query()->where('workflow_id', $workflow->id)->orderBy('node_id')->get();

    expect($rows)->toHaveCount(2)
        ->and($rows[0]->type)->toBe(Manual::class)
        ->and($rows[1]->type)->toBe(RecordCreated::class)
        ->and($rows[1]->node_id)->toBe('t2')
        ->and($rows[1]->config)->toBe(['model_class' => Order::class]);

    $workflow->update(['definition' => ['nodes' => [triggerNode('t1', Manual::class)], 'edges' => []]]);

    expect(WorkflowTrigger::query()->where('workflow_id', $workflow->id)->pluck('type')->all())->toBe([Manual::class]);

    $workflow->delete();

    expect(WorkflowTrigger::query()->count())->toBe(0);
});
