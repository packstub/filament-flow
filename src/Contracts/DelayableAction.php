<?php

namespace Xlited\LaravelFlow\Contracts;

/**
 * Interface for actions that can pause workflow execution.
 * Actions implementing this interface can return delay information
 * instead of blocking synchronously.
 */
interface DelayableAction
{
    /**
     * Get the delay duration in seconds, or null if no delay.
     * Called before handle() to determine if this action should pause execution.
     */
    public function getDelaySeconds(array $data, array $payload): ?int;
}
