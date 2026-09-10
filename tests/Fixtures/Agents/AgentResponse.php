<?php

namespace Laravel\Ai\Responses;

use Laravel\Ai\Responses\Data\Usage;

/** Stub of laravel/ai's agent response (see tests/Fixtures/Agents/stubs.php). */
class AgentResponse
{
    public function __construct(public string $invocationId, public string $text, public Usage $usage) {}

    public function __toString(): string
    {
        return $this->text;
    }
}
