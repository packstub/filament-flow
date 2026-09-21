<?php

namespace Packstub\Flow\Support;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\RequestException;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Exceptions\WorkflowException;
use Throwable;

/**
 * A small client for Jev, TypeSafe's System One model: one state, a map of
 * typed questions (noul, choice, score), one typed answer per question with
 * its probabilities. See https://docs.typesafe.ai/api.
 */
class Jev
{
    public const DEFAULT_URL = 'https://api.typesafe.ai/v1/systemone';

    public const DEFAULT_MODEL = 'jev-latest';

    /** Too many requests / overloaded: TypeSafe asks for a retry after a short delay. */
    protected const RETRYABLE = [429, 529];

    /** Whether the Decide node is offered: switched on or off in the config, by the key otherwise. */
    public static function enabled(): bool
    {
        $enabled = config('packstub-flow.jev.enabled');

        return $enabled === null ? static::key() !== '' : (bool) $enabled;
    }

    public static function key(): string
    {
        return trim((string) config('packstub-flow.jev.key', ''));
    }

    public static function model(): string
    {
        return trim((string) config('packstub-flow.jev.model', '')) ?: self::DEFAULT_MODEL;
    }

    public static function timeout(): int
    {
        return max(1, (int) config('packstub-flow.jev.timeout', 15));
    }

    /**
     * Evaluate a state against the questions. Returns the response as
     * TypeSafe sends it: the model version that answered, the answers under
     * the question ids, the token usage.
     *
     * @param  string|array<mixed>  $state
     * @param  array<string, array<string, mixed>>  $questions
     * @return array{model: string, answers: array<string, array<string, mixed>>, usage: array<string, int>}
     */
    public static function ask(string|array $state, array $questions, ?string $model = null, ?string $key = null, ?int $timeout = null): array
    {
        $key = trim((string) $key) ?: static::key();

        if ($key === '') {
            throw new WorkflowException('Jev: no API key. Set TYPESAFE_API_KEY, or the API key on the node.');
        }

        $timeout ??= static::timeout();

        try {
            $response = Http::withToken($key)
                ->acceptJson()
                ->timeout($timeout)
                ->connectTimeout(min($timeout, 10))
                ->retry(
                    max(1, (int) config('packstub-flow.jev.attempts', 3)),
                    fn (int $attempt): int => 400 * (2 ** ($attempt - 1)),
                    fn (Throwable $exception): bool => $exception instanceof ConnectionException
                        || ($exception instanceof RequestException && in_array($exception->response->status(), self::RETRYABLE, true)),
                    throw: false,
                )
                ->post((string) (config('packstub-flow.jev.url') ?: self::DEFAULT_URL), [
                    'state' => $state,
                    'model' => trim((string) $model) ?: static::model(),
                    'questions' => $questions,
                ]);
        } catch (ConnectionException $exception) {
            throw new WorkflowException('Jev did not answer: '.$exception->getMessage(), previous: $exception);
        }

        if ($response->failed()) {
            throw new WorkflowException("Jev returned HTTP {$response->status()}: ".static::errorFrom($response));
        }

        $answers = $response->json('answers');

        if (! is_array($answers)) {
            throw new WorkflowException('Jev answered without answers.');
        }

        return [
            'model' => (string) $response->json('model', ''),
            'answers' => $answers,
            'usage' => [
                'input' => (int) $response->json('usage.input_tokens', 0),
                'output' => (int) $response->json('usage.output_tokens', 0),
            ],
        ];
    }

    /** What went wrong, from the JSON body of an error (a 422 names the field). */
    protected static function errorFrom(Response $response): string
    {
        $json = $response->json();
        $message = is_array($json) ? ($json['message'] ?? $json['error'] ?? $json['detail'] ?? null) : null;

        if (is_array($message)) {
            $message = json_encode($message, JSON_UNESCAPED_SLASHES);
        }

        return mb_substr(is_string($message) && $message !== '' ? $message : trim((string) $response->body()), 0, 300);
    }
}
