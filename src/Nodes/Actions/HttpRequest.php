<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;

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
            Toggle::make('throw_on_error')
                ->label(__('packstub-flow::flow.nodes.http.throw_on_error'))
                ->helperText(__('packstub-flow::flow.nodes.http.throw_on_error_help'))
                ->default(true),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $method = strtoupper((string) ($config['method'] ?? 'POST'));
        $url = $this->interpolate($config['url'] ?? '', $payload);

        if ($url === '') {
            throw new WorkflowException('HTTP request has no URL.');
        }

        $headers = $this->interpolateArray(array_filter((array) ($config['headers'] ?? [])), $payload);
        $body = $this->decodeBody($config['body'] ?? null, $payload);

        $options = [];

        if ($body !== null && $method !== 'GET') {
            $options['json'] = $body;
        }

        $response = Http::withHeaders($headers)->send($method, $url, $options);

        if (($config['throw_on_error'] ?? true) && $response->failed()) {
            throw new WorkflowException("HTTP {$method} {$url} returned {$response->status()}.");
        }
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    protected function decodeBody(?string $raw, array $payload): mixed
    {
        if ($raw === null || trim($raw) === '') {
            return null;
        }

        $decoded = json_decode($raw, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            // Placeholders that expand to unquoted values (numbers, JSON) are
            // supported by interpolating first and decoding after.
            $decoded = json_decode($this->interpolate($raw, $payload), true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new WorkflowException('HTTP request body is not valid JSON.');
            }

            return $decoded;
        }

        return is_array($decoded) ? $this->interpolateArray($decoded, $payload) : $decoded;
    }

    protected function maskPlaceholders(string $json): string
    {
        return (string) preg_replace('/\{\{\s*[A-Za-z0-9_.\-]+\s*\}\}/', 'x', $json);
    }
}
