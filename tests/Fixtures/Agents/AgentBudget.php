<?php

namespace Packstub\Agents\Support;

use Packstub\Agents\Facades\Agents;

/**
 * Stub of the engine's budget: refusal() answers what a test set and records
 * the workspace it was asked in; hit() counts (see tests/Fixtures/Agents/stubs.php).
 */
class AgentBudget
{
    public static ?string $refusal = null;

    /** @var list<array{tenant: int|string|null, prompt: ?string}> */
    public static array $checks = [];

    /** @var list<int|string|null> the workspace of every hit */
    public static array $hits = [];

    public static function refusal(?string $prompt = null): ?string
    {
        static::$checks[] = ['tenant' => Agents::tenant()?->getKey(), 'prompt' => $prompt];

        return static::$refusal;
    }

    public static function hit(): void
    {
        static::$hits[] = Agents::tenant()?->getKey();
    }
}
