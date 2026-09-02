<?php

namespace Packstub\Flow\Nodes\Triggers;

use Filament\Forms\Components\TextInput;
use Illuminate\Support\Str;
use Packstub\Flow\Nodes\Trigger;

/**
 * Starts the workflow when a POST hits the webhook URL. The request JSON is
 * available to nodes as {{ webhook.* }}.
 */
class Webhook extends Trigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.webhook.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.webhook.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-arrow-down-on-square';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('token')
                ->label(__('packstub-flow::flow.nodes.webhook.token'))
                ->helperText(__('packstub-flow::flow.nodes.webhook.token_help', ['prefix' => rtrim(url(config('packstub-flow.webhooks.prefix', 'flow/webhooks')), '/')]))
                ->default(fn (): string => Str::random(40))
                ->required()
                ->minLength(16)
                ->maxLength(120)
                ->alphaDash(),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        $token = $config['token'] ?? null;
        $given = $payload['webhook_token'] ?? null;

        return is_string($token) && is_string($given) && hash_equals($token, $given);
    }

    public function getPlaceholders(): array
    {
        return ['{{ webhook.key }}' => __('packstub-flow::flow.placeholders.webhook')];
    }
}
