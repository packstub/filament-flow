<?php

namespace Packstub\Flow\Support;

/**
 * What a Waitable action asks the runner to do: pause the branch until an
 * outcome is chosen, optionally with a timeout.
 */
class WaitRequest
{
    /**
     * @param  string  $type  approval | event
     * @param  array<int, string>  $outcomes  the output handles the wait can resolve to (besides "timed_out")
     * @param  array<string, mixed>  $meta  shown on the Approvals page and stored with the wait
     */
    public function __construct(
        public string $type,
        public array $outcomes,
        public ?int $timeoutSeconds = null,
        public ?string $key = null,
        public array $meta = [],
    ) {}
}
