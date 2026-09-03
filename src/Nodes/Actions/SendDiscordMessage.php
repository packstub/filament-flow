<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Nodes\Concerns\SendsHttp;

/**
 * Posts to a Discord channel webhook.
 */
class SendDiscordMessage extends Action
{
    use InterpolatesPlaceholders;
    use SendsHttp;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.discord.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.discord.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-chat-bubble-oval-left-ellipsis';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('webhook_url')
                ->label(__('packstub-flow::flow.nodes.discord.webhook_url'))
                ->placeholder('https://discord.com/api/webhooks/... or {{ secrets.discord_webhook }}')
                ->required(),
            Textarea::make('message')
                ->label(__('packstub-flow::flow.nodes.discord.message'))
                ->placeholder(__('packstub-flow::flow.nodes.slack.message_placeholder'))
                ->rows(4)
                ->required(),
            TextInput::make('username')
                ->label(__('packstub-flow::flow.nodes.discord.username'))
                ->helperText(__('packstub-flow::flow.nodes.discord.username_help'))
                ->maxLength(80),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $url = $this->interpolate($config['webhook_url'] ?? '', $payload);

        if ($url === '') {
            return;
        }

        $data = ['content' => mb_substr($this->interpolate($config['message'] ?? '', $payload), 0, 2000)];

        if (($username = $this->interpolate($config['username'] ?? '', $payload)) !== '') {
            $data['username'] = $username;
        }

        $this->postJson($url, $data, 'Discord');
    }
}
