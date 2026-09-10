<?php

namespace Laravel\Ai;

use Closure;
use Illuminate\JsonSchema\JsonSchemaTypeFactory;
use Illuminate\JsonSchema\Types\Type;
use Laravel\Ai\Responses\AgentResponse;
use Laravel\Ai\Responses\Data\Usage;
use Laravel\Ai\Responses\StructuredAgentResponse;
use RuntimeException;
use Throwable;

/**
 * Stub of laravel/ai's ad-hoc structured agent. prompt() records what it was
 * asked — the question, the instructions, the provider list, the timeout and
 * the schema as JSON Schema — and answers with the next queued response: an
 * array becomes the structured answer, a Throwable is thrown as a provider
 * would (see tests/Fixtures/Agents/stubs.php).
 */
class StructuredAnonymousAgent
{
    /** @var list<array<string, mixed>|Throwable> */
    public static array $responses = [];

    /** @var list<array{prompt: string, instructions: string, provider: mixed, model: ?string, timeout: ?int, schema: array<string, mixed>}> the schema as one JSON Schema object: properties and required */
    public static array $prompts = [];

    public function __construct(
        public string $instructions,
        public iterable $messages,
        public iterable $tools,
        public ?Closure $schema = null,
    ) {}

    /** @return array<string, Type> */
    public function schema(JsonSchemaTypeFactory $schema): array
    {
        return $this->schema ? ($this->schema)($schema) : [];
    }

    /** @param  array<mixed>  $attachments */
    public function prompt(string $prompt, array $attachments = [], array|string|null $provider = null, ?string $model = null, ?int $timeout = null): AgentResponse
    {
        $types = $this->schema(new JsonSchemaTypeFactory);

        static::$prompts[] = [
            'prompt' => $prompt,
            'instructions' => $this->instructions,
            'provider' => $provider,
            'model' => $model,
            'timeout' => $timeout,
            'schema' => (new JsonSchemaTypeFactory)->object($types)->toArray(),
        ];

        $response = array_shift(static::$responses);

        if ($response instanceof Throwable) {
            throw $response;
        }

        if ($response === null) {
            throw new RuntimeException('No fake answer was queued for the Ask AI stub.');
        }

        return new StructuredAgentResponse('inv-'.count(static::$prompts), $response, (string) json_encode($response), new Usage(promptTokens: 120, completionTokens: 18));
    }
}
