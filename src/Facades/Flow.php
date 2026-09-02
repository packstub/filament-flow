<?php

namespace Packstub\Flow\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static array<int, \Packstub\Flow\Models\WorkflowRun> dispatch(string $trigger, array $payload = [])
 * @method static \Packstub\Flow\Models\WorkflowRun|null run(\Packstub\Flow\Models\Workflow $workflow, array $payload = [], ?string $startNodeId = null, ?bool $queue = null)
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
