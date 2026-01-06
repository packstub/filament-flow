<?php

namespace Xlited\LaravelFlow\Nodes\Actions;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Illuminate\Support\Facades\Http;
use Xlited\LaravelFlow\Base\Action;

class HttpRequest extends Action
{
    public function getName(): string
    {
        return 'HTTP Request';
    }

    public function getDescription(): string
    {
        return 'Makes an HTTP request to a URL.';
    }

    public function getIcon(): ?string
    {
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('method')
                ->options([
                    'GET' => 'GET',
                    'POST' => 'POST',
                    'PUT' => 'PUT',
                    'DELETE' => 'DELETE',
                    'PATCH' => 'PATCH',
                ])
                ->default('GET')
                ->required(),

            TextInput::make('url')
                ->label('URL')
                ->required()
                ->url(),

            KeyValue::make('headers')
                ->label('Headers')
                ->keyLabel('Header Name')
                ->valueLabel('Header Value'),

            Textarea::make('body')
                ->label('JSON Body')
                ->rows(5)
                ->json(),
        ];
    }

    public function handle(array $data, array $payload): void
    {
        $method = $data['method'] ?? 'GET';
        $url = $this->interpolate($data['url'] ?? '', $payload);
        $headers = $this->interpolateArray($data['headers'] ?? [], $payload);
        // data['body'] comes as JSON string from the form if using ->json(), 
        // or array if Filament handles it differently? 
        // Filament KeyValue returns array. Textarea returns string.
        // We decode valid JSON string into array, then interpolate.

        $bodyRaw = $data['body'] ?? '{}';
        $body = json_decode($bodyRaw, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            // usage of empty array or log error? 
            $body = [];
        }

        // Interpolate headers and body
        $body = $this->interpolateArray($body, $payload);

        if ($url) {
            // Note: 'json' option is for request body, 'query' for query params
            // We assume body is for POST/PUT
            Http::withHeaders($headers)->send($method, $url, [
                'json' => $body,
            ]);
        }
    }

    protected function interpolateArray(array $data, array $payload): array
    {
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                $data[$key] = $this->interpolateArray($value, $payload);
            } elseif (is_string($value)) {
                $data[$key] = $this->interpolate($value, $payload);
            }
        }
        return $data;
    }

    protected function interpolate(string $text, array $payload): string
    {
        if (isset($payload['model'])) {
            // Simple regex to replace {{ model.attribute }}
            $text = preg_replace_callback('/\{\{\s*model\.(\w+)\s*\}\}/', function ($matches) use ($payload) {
                $attribute = $matches[1];
                return $payload['model']->$attribute ?? '';
            }, $text);
        }
        return $text;
    }
}
