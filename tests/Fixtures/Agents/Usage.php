<?php

namespace Laravel\Ai\Responses\Data;

/** Stub of laravel/ai's token usage (see tests/Fixtures/Agents/stubs.php). */
class Usage
{
    public function __construct(
        public int $promptTokens = 0,
        public int $completionTokens = 0,
        public int $cacheWriteInputTokens = 0,
        public int $cacheReadInputTokens = 0,
        public int $reasoningTokens = 0,
    ) {}

    /** @return array<string, int> */
    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
