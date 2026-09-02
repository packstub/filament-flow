<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\UrlGuard;

/**
 * Calls a URL. The response is exposed to the nodes after it as
 * {{ last.status }}, {{ last.body.* }} and {{ last.headers.* }}.
 */
class HttpRequest extends Action
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.http.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.http.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-globe-alt';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('method')
                ->label(__('packstub-flow::flow.nodes.http.method'))
                ->options(array_combine($methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], $methods))
                ->default('POST')
                ->required(),
            TextInput::make('url')
                ->label(__('packstub-flow::flow.nodes.http.url'))
                ->placeholder('https://api.example.com/hooks/{{ model.id }}')
                ->required(),
            KeyValue::make('headers')
                ->label(__('packstub-flow::flow.nodes.http.headers'))
                ->keyLabel(__('packstub-flow::flow.nodes.http.header_name'))
                ->valueLabel(__('packstub-flow::flow.nodes.http.header_value')),
            Textarea::make('body')
                ->label(__('packstub-flow::flow.nodes.http.body'))
                ->placeholder('{"id": "{{ model.id }}", "name": "{{ model.name }}"}')
                ->helperText(__('packstub-flow::flow.nodes.http.body_help'))
                ->rows(6)
                ->rule(fn () => function (string $attribute, mixed $value, \Closure $fail): void {
                    if (is_string($value) && trim($value) !== '' && ! json_validate($this->maskPlaceholders($value))) {
                        $fail(__('packstub-flow::flow.nodes.http.invalid_json'));
                    }
                }),
            TextInput::make('timeout')
                ->label(__('packstub-flow::flow.nodes.http.timeout'))
                ->helperText(__('packstub-flow::flow.nodes.http.timeout_help', ['default' => (int) config('packstub-flow.http.timeout', 15)]))
                ->numeric()
                ->minValue(1)
                ->maxValue(300),
            TextInput::make('retries')
                ->label(__('packstub-flow::flow.nodes.http.retries'))
                ->helperText(__('packstub-flow::flow.nodes.http.retries_help'))
                ->numeric()
                ->minValue(0)
                ->maxValue(5)
                ->default(0),
            Toggle::make('throw_on_error')
                ->label(__('packstub-flow::flow.nodes.http.throw_on_error'))
                ->helperText(__('packstub-flow::flow.nodes.http.throw_on_error_help'))
                ->default(true),
        ];
    }

    public function getPlaceholders(): array
    {
        return [
            ...Placeholders::documentation(),
            '{{ last.status }}' => __('packstub-flow::flow.placeholders.http_status'),
            '{{ last.body.id }}' => __('packstub-flow::flow.placeholders.http_body'),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $method = strtoupper((string) ($config['method'] ?? 'POST'));
        $url = $this->interpolateUrl((string) ($config['url'] ?? ''), $payload);

        if ($url === '') {
            throw new WorkflowException('HTTP request has no URL.');
        }

        UrlGuard::assertAllowed($url);

        $headers = $this->interpolateArray(array_filter((array) ($config['headers'] ?? [])), $payload);
        $body = $this->decodeBody($config['body'] ?? null, $payload);

        $options = [];

        if ($body !== null && $method !== 'GET') {
            $options['json'] = $body;
        }

        $response = $this->client($config)->withHeaders($headers)->send($method, $url, $options);

        $decoded = $response->json();

        $this->output([
            'status' => $response->status(),
            'ok' => $response->successful(),
            'body' => $decoded ?? $response->body(),
            'headers' => collect($response->headers())->map(fn (array $values) => $values[0] ?? null)->all(),
        ]);

        if (($config['throw_on_error'] ?? true) && $response->failed()) {
            throw new WorkflowException("HTTP {$method} {$url} returned {$response->status()}.");
        }
    }

    /**
     * @param  array<string, mixed>  $config
     */
    protected function client(array $config): PendingRequest
    {
        $timeout = (int) (($config['timeout'] ?? null) ?: config('packstub-flow.http.timeout', 15));
        $retries = (int) ($config['retries'] ?? 0);

        $client = Http::timeout($timeout)->connectTimeout(min($timeout, 10));

        if ($retries > 0) {
            $client = $client->retry($retries + 1, (int) config('packstub-flow.http.retry_after_ms', 500), throw: false);
        }

        return $client;
    }

    /**
     * Placeholder values in the URL are URL-encoded so a value containing
     * "?" or "&" cannot change the request.
     *
     * @param  array<string, mixed>  $payload
     */
    protected function interpolateUrl(string $template, array $payload): string
    {
        return trim((string) preg_replace_callback(
            Placeholders::PATTERN,
            fn (array $matches): string => rawurlencode(Placeholders::stringify(Placeholders::resolve($matches[1], $payload, $matches[2] ?? ''))),
            $template,
        ));
    }

    /**
     * Builds the JSON body without letting a placeholder value break out of
     * its position: a placeholder inside a string stays a string (escaped),
     * a bare placeholder becomes the raw value (number, boolean, array...).
     *
     * @param  array<string, mixed>  $payload
     */
    protected function decodeBody(?string $raw, array $payload): mixed
    {
        if ($raw === null || trim($raw) === '') {
            return null;
        }

        $tokens = [];
        $template = $this->tokenize($raw, $tokens);

        $decoded = json_decode($template, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new WorkflowException('HTTP request body is not valid JSON.');
        }

        return $this->fillTokens($decoded, $tokens, $payload);
    }

    /**
     * Replace every placeholder with a token, quoted when it stands outside a
     * JSON string so the template becomes parseable.
     *
     * @param  array<string, array{placeholder: string, bare: bool}>  $tokens
     */
    protected function tokenize(string $raw, array &$tokens): string
    {
        $result = '';
        $inString = false;
        $length = strlen($raw);
        $i = 0;

        while ($i < $length) {
            $char = $raw[$i];

            if ($inString && $char === '\\') {
                $result .= substr($raw, $i, 2);
                $i += 2;

                continue;
            }

            if ($char === '"') {
                $inString = ! $inString;
                $result .= $char;
                $i++;

                continue;
            }

            if ($char === '{' && preg_match('/\G'.substr(Placeholders::PATTERN, 1, -1).'/', $raw, $matches, 0, $i)) {
                $token = '__flow_ph_'.count($tokens).'__';
                $tokens[$token] = ['placeholder' => $matches[0], 'bare' => ! $inString];
                $result .= $inString ? $token : '"'.$token.'"';
                $i += strlen($matches[0]);

                continue;
            }

            $result .= $char;
            $i++;
        }

        return $result;
    }

    /**
     * @param  array<string, array{placeholder: string, bare: bool}>  $tokens
     * @param  array<string, mixed>  $payload
     */
    protected function fillTokens(mixed $value, array $tokens, array $payload): mixed
    {
        if (is_array($value)) {
            foreach ($value as $key => $item) {
                $value[$key] = $this->fillTokens($item, $tokens, $payload);
            }

            return $value;
        }

        if (! is_string($value) || $tokens === [] || ! str_contains($value, '__flow_ph_')) {
            return $value;
        }

        if (isset($tokens[$value]) && $tokens[$value]['bare']) {
            return Placeholders::raw($tokens[$value]['placeholder'], $payload);
        }

        return strtr($value, array_map(
            fn (array $token): string => Placeholders::render($token['placeholder'], $payload),
            $tokens,
        ));
    }

    protected function maskPlaceholders(string $json): string
    {
        // A placeholder may stand for a bare number or a quoted string; "0" is valid in both positions.
        return (string) preg_replace(Placeholders::PATTERN, '0', $json);
    }
}
