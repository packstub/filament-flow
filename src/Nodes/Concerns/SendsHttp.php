<?php

namespace Packstub\Flow\Nodes\Concerns;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Support\UrlGuard;

/**
 * For actions that call a third-party API: a client with the configured
 * timeout, the URL guard, and failures reported without echoing the URL
 * (which may carry a token).
 */
trait SendsHttp
{
    protected function httpClient(): PendingRequest
    {
        $timeout = (int) config('packstub-flow.http.timeout', 15);

        return Http::timeout($timeout)->connectTimeout(min($timeout, 10));
    }

    /**
     * @param  array<string, mixed>  $data
     */
    protected function postJson(string $url, array $data, string $service): Response
    {
        UrlGuard::assertAllowed($url);

        $response = $this->httpClient()->post($url, $data);

        if ($response->failed()) {
            throw new WorkflowException("{$service} returned HTTP {$response->status()}: ".$this->errorFrom($response));
        }

        return $response;
    }

    protected function errorFrom(Response $response): string
    {
        $json = $response->json();

        $message = is_array($json)
            ? ($json['description'] ?? $json['message'] ?? $json['error'] ?? $json['error_message'] ?? null)
            : null;

        return mb_substr(is_string($message) ? $message : trim((string) $response->body()), 0, 200);
    }
}
