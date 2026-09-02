<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Base\Action;

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
        return 'heroicon-o-globe-alt';
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
