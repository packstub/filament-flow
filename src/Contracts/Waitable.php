<?php

namespace Packstub\Flow\Contracts;

use Packstub\Flow\Models\WorkflowWait;
use Packstub\Flow\Support\WaitRequest;

/**
 * An action that pauses the run until something outside the workflow
 * happens: an approver decides, Flow::signal() is called. The runner stores
 * a WorkflowWait, stops the branch, and continues along the output handle
 * named by the outcome once the wait is resolved (or "timed_out").
 */
interface Waitable
{
    /**
     * Describe the wait. Return null to continue right away along "output".
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    public function createWait(array $config, array $payload): ?WaitRequest;

    /**
     * Called once the wait row exists: notify approvers, send links.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    public function afterWaitCreated(WorkflowWait $wait, array $config, array $payload): void;
}
