<?php

namespace Xlited\LaravelFlow\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static void dispatch(string $triggerType, array $payload = [])
 *
 * @see \Xlited\LaravelFlow\Engines\WorkflowDispatcher
 */
class LaravelFlow extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'laravel-flow';
    }
}
