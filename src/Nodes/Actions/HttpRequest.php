<?php

namespace Xlited\LaravelFlow\Nodes\Actions;

use Xlited\LaravelFlow\Base\Action;
use Illuminate\Support\Facades\Http;

class HttpRequest extends Action
{
    public function getName(): string
    {
        return 'HTTP Request';
    }

    public function getDescription(): string
    {
        return 'Sends an HTTP request to an external API.';
    }

    public function getIcon(): ?string
    {
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\Select::make('method')
                ->label('Method')
                ->options(['GET' => 'GET', 'POST' => 'POST', 'PUT' => 'PUT', 'DELETE' => 'DELETE'])
                ->required(),
            \Filament\Forms\Components\TextInput::make('url')
                ->label('URL')
                ->placeholder('https://api.example.com/data')
                ->required(),
            \Filament\Forms\Components\Textarea::make('headers')
                ->label('Headers (JSON)')
                ->placeholder('{"Authorization": "Bearer ..."}'),
            \Filament\Forms\Components\Textarea::make('body')
                ->label('Body (JSON)')
                ->placeholder('{"key": "value"}'),
        ];
    }

    public function handle(array $data, array $payload): void
    {
        $method = $data['method'] ?? 'GET';
        $url = $data['url'] ?? '';
        $headers = json_decode($data['headers'] ?? '{}', true);
        $body = json_decode($data['body'] ?? '{}', true);

        if ($url) {
            Http::withHeaders($headers)->send($method, $url, ['json' => $body]);
        }
    }
}
