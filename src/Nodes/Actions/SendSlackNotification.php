<?php

namespace Packstub\Flow\Nodes\Actions;

use Packstub\Flow\Base\Action;
use Illuminate\Support\Facades\Http;

class SendSlackNotification extends Action
{
    public function getName(): string
    {
        return 'Send Slack Notification';
    }

    public function getDescription(): string
    {
        return 'Sends a message to a Slack channel via webhook.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-chat-bubble-left-right';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\TextInput::make('webhook_url')
                ->label('Webhook URL')
                ->placeholder('https://hooks.slack.com/services/...')
                ->required(),
            \Filament\Forms\Components\Textarea::make('message')
                ->label('Message')
                ->placeholder('Hello World!')
                ->required(),
        ];
    }

    public function handle(array $data, array $payload): void
    {
        $webhookUrl = $data['webhook_url'] ?? null;
        $message = $data['message'] ?? '';

        if ($webhookUrl) {
            Http::post($webhookUrl, ['text' => $message]);
        }
    }
}
