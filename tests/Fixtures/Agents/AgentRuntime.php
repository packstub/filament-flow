<?php

namespace Packstub\Agents\Support;

use Closure;
use Packstub\Agents\Facades\Agents;

/** Stub of the engine's runtime: puts a worker into the shape of a request through the context (see tests/Fixtures/Agents/stubs.php). */
class AgentRuntime
{
    /** @return array{panel: ?string, tenant: int|string|null, user: int|string|null, locale: string, guard: string} */
    public static function capture(): array
    {
        return Agents::context()->capture();
    }

    /** @param  array{panel?: ?string, tenant?: int|string|null, user?: int|string|null, locale?: ?string, guard?: ?string}  $context */
    public static function enter(array $context): Closure
    {
        return Agents::context()->enter($context);
    }
}
