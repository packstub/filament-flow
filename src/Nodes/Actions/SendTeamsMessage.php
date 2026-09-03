<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Nodes\Concerns\SendsHttp;

/**
 * Posts to a Microsoft Teams channel through a Workflows ("Post to a
 * channel when a webhook request is received") webhook — as an Adaptive
 * Card — or a classic Incoming Webhook connector, as text.
 */
class SendTeamsMessage extends Action
{
    use InterpolatesPlaceholders;
    use SendsHttp;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.teams.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.teams.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-chat-bubble-left-ellipsis';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('webhook_url')
                ->label(__('packstub-flow::flow.nodes.teams.webhook_url'))
                ->placeholder('https://....logic.azure.com/... or {{ secrets.teams_webhook }}')
                ->required(),
            TextInput::make('title')
                ->label(__('packstub-flow::flow.nodes.teams.title'))
                ->placeholder('Order {{ model.reference }}')
                ->maxLength(200),
            Textarea::make('message')
                ->label(__('packstub-flow::flow.nodes.teams.message'))
                ->rows(4)
                ->required(),
            Select::make('format')
                ->label(__('packstub-flow::flow.nodes.teams.format'))
                ->options([
                    'adaptive_card' => __('packstub-flow::flow.nodes.teams.formats.adaptive_card'),
                    'text' => __('packstub-flow::flow.nodes.teams.formats.text'),
                ])
                ->default('adaptive_card')
                ->required(),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $url = $this->interpolate($config['webhook_url'] ?? '', $payload);

        if ($url === '') {
            return;
        }

        $title = $this->interpolate($config['title'] ?? '', $payload);
        $message = $this->interpolate($config['message'] ?? '', $payload);

        $data = ($config['format'] ?? 'adaptive_card') === 'text'
            ? ['title' => $title !== '' ? $title : null, 'text' => $message]
            : $this->adaptiveCard($title, $message);

        $this->postJson($url, array_filter($data, fn ($value): bool => $value !== null), 'Microsoft Teams');
    }

    /**
     * @return array<string, mixed>
     */
    protected function adaptiveCard(string $title, string $message): array
    {
        $body = [];

        if ($title !== '') {
            $body[] = ['type' => 'TextBlock', 'text' => $title, 'weight' => 'Bolder', 'size' => 'Medium', 'wrap' => true];
        }

        $body[] = ['type' => 'TextBlock', 'text' => $message, 'wrap' => true];

        return [
            'type' => 'message',
            'attachments' => [[
                'contentType' => 'application/vnd.microsoft.card.adaptive',
                'contentUrl' => null,
                'content' => [
                    '$schema' => 'http://adaptivecards.io/schemas/adaptive-card.json',
                    'type' => 'AdaptiveCard',
                    'version' => '1.4',
                    'body' => $body,
                ],
            ]],
        ];
    }
}
