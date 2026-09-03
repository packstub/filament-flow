<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Nodes\Concerns\SendsHttp;

/**
 * Sends a message through a Telegram bot (the Bot API sendMessage method).
 */
class SendTelegramMessage extends Action
{
    use InterpolatesPlaceholders;
    use SendsHttp;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.telegram.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.telegram.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-paper-airplane';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('bot_token')
                ->label(__('packstub-flow::flow.nodes.telegram.bot_token'))
                ->placeholder('{{ secrets.telegram_bot_token }}')
                ->helperText(__('packstub-flow::flow.nodes.telegram.bot_token_help'))
                ->required(),
            TextInput::make('chat_id')
                ->label(__('packstub-flow::flow.nodes.telegram.chat_id'))
                ->placeholder('-1001234567890 or @channel')
                ->helperText(__('packstub-flow::flow.nodes.telegram.chat_id_help'))
                ->required(),
            Textarea::make('message')
                ->label(__('packstub-flow::flow.nodes.telegram.message'))
                ->rows(4)
                ->required(),
            Select::make('parse_mode')
                ->label(__('packstub-flow::flow.nodes.telegram.parse_mode'))
                ->options(['' => __('packstub-flow::flow.nodes.telegram.parse_modes.plain'), 'MarkdownV2' => 'MarkdownV2', 'HTML' => 'HTML'])
                ->default(''),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $token = trim($this->interpolate($config['bot_token'] ?? '', $payload));
        $chat = trim($this->interpolate($config['chat_id'] ?? '', $payload));

        if ($token === '' || $chat === '') {
            throw new WorkflowException('Telegram: the bot token and chat id are required.');
        }

        $data = [
            'chat_id' => $chat,
            'text' => mb_substr($this->interpolate($config['message'] ?? '', $payload), 0, 4096),
        ];

        if (($mode = (string) ($config['parse_mode'] ?? '')) !== '') {
            $data['parse_mode'] = $mode;
        }

        $response = $this->postJson('https://api.telegram.org/bot'.rawurlencode($token).'/sendMessage', $data, 'Telegram');

        $this->output(['message_id' => $response->json('result.message_id')]);
    }
}
