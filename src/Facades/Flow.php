<?php

namespace Packstub\Flow\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static void dispatch(string $triggerType, array $payload = [])
 *
 * @see \Packstub\Flow\Engines\WorkflowDispatcher
 */
class Flow extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'packstub-flow';
    }
}
