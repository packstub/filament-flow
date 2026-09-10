<?php

namespace Laravel\Ai\Responses;

use Laravel\Ai\Responses\Data\Usage;

/** Stub of laravel/ai's structured response: the parsed object and the text it came from (see tests/Fixtures/Agents/stubs.php). */
class StructuredAgentResponse extends AgentResponse
{
    /** @var array<string, mixed> */
    public array $structured;

    /** @param  array<string, mixed>  $structured */
    public function __construct(string $invocationId, array $structured, string $text, Usage $usage)
    {
        parent::__construct($invocationId, $text, $usage);

        $this->structured = $structured;
    }
}
