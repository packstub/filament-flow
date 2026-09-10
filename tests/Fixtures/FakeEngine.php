<?php

namespace Packstub\Flow\Tests\Fixtures;

use Laravel\Ai\StructuredAnonymousAgent;
use Packstub\Agents\Support\AgentBudget;
use Packstub\Agents\Support\AgentModels;
use Packstub\Agents\Support\Context\LaravelContext;
use Throwable;

/** What a test does with the engine stubs (tests/Fixtures/Agents): queue answers, set a refusal, read back what was asked. */
class FakeEngine
{
    public static function reset(): void
    {
        if (! property_exists(StructuredAnonymousAgent::class, 'responses')) {
            return; // the real packages are installed here: nothing to reset
        }

        StructuredAnonymousAgent::$responses = [];
        StructuredAnonymousAgent::$prompts = [];
        AgentBudget::$refusal = null;
        AgentBudget::$checks = [];
        AgentBudget::$hits = [];
        AgentModels::$resolved = [];
        AgentModels::$current = 'auto';
        LaravelContext::$entered = [];
        LaravelContext::$left = 0;
    }

    /** @param  array<string, mixed>|Throwable  ...$answers */
    public static function answer(array|Throwable ...$answers): void
    {
        foreach ($answers as $answer) {
            StructuredAnonymousAgent::$responses[] = $answer;
        }
    }

    /** @return array{prompt: string, instructions: string, provider: mixed, model: ?string, timeout: ?int, schema: array<string, mixed>}|null */
    public static function lastPrompt(): ?array
    {
        return StructuredAnonymousAgent::$prompts === [] ? null : StructuredAnonymousAgent::$prompts[array_key_last(StructuredAnonymousAgent::$prompts)];
    }
}
