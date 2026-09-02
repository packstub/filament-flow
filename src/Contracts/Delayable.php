<?php

namespace Packstub\Flow\Contracts;

/**
 * An action that pauses the run. The nodes after it resume through the queue
 * once the delay has elapsed; the action's handle() is never called.
 */
interface Delayable
{
    /**
     * Seconds to wait before continuing, or null / 0 to continue immediately.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    public function getDelaySeconds(array $config, array $payload): ?int;
}
