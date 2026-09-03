<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\UrlGuard;

/**
 * Posts to a Slack incoming webhook.
 */
class SendSlackMessage extends Action
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.slack.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.slack.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-chat-bubble-left-right';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('webhook_url')
                ->label(__('packstub-flow::flow.nodes.slack.webhook_url'))
                ->placeholder('https://hooks.slack.com/services/... or {{ secrets.slack_webhook }}')
                ->helperText(__('packstub-flow::flow.nodes.slack.webhook_url_help'))
                ->rule(fn () => function (string $attribute, mixed $value, \Closure $fail): void {
                    if (is_string($value) && ! Placeholders::hasPlaceholders($value) && ! filter_var($value, FILTER_VALIDATE_URL)) {
                        $fail(__('packstub-flow::flow.nodes.slack.invalid_url'));
                    }
                })
                ->required(),
            Textarea::make('message')
                ->label(__('packstub-flow::flow.nodes.slack.message'))
                ->placeholder(__('packstub-flow::flow.nodes.slack.message_placeholder'))
                ->rows(4)
                ->required(),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $url = $this->interpolate($config['webhook_url'] ?? '', $payload);

        if ($url === '') {
            return;
        }

        UrlGuard::assertAllowed($url);

        Http::timeout((int) config('packstub-flow.http.timeout', 15))
            ->post($url, ['text' => $this->interpolate($config['message'] ?? '', $payload)])
            ->throw();
    }
}
