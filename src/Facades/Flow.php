<?php

namespace Packstub\Flow\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static array<int, \Packstub\Flow\Models\WorkflowRun> dispatch(class-string<\Packstub\Flow\Nodes\Trigger> $trigger, array<string, mixed> $payload = [])
 * @method static \Packstub\Flow\Models\WorkflowRun|null run(\Packstub\Flow\Models\Workflow $workflow, array<string, mixed> $payload = [], ?string $startNodeId = null, ?bool $queue = null)
 * @method static array<string, mixed> export(\Packstub\Flow\Models\Workflow $workflow)
 * @method static \Packstub\Flow\Models\Workflow import(array<string, mixed>|string $data, array<string, mixed> $attributes = [])
 * @method static \Packstub\Flow\NodeRegistry registry()
 * @method static \Packstub\Flow\Flow register(string $class)
 * @method static class-string<\Packstub\Flow\Models\Workflow> workflowModel()
 * @method static class-string<\Packstub\Flow\Models\WorkflowTrigger> triggerModel()
 * @method static class-string<\Packstub\Flow\Models\WorkflowRun> runModel()
 *
 * @see \Packstub\Flow\Flow
 */
class Flow extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return \Packstub\Flow\Flow::class;
    }
}
