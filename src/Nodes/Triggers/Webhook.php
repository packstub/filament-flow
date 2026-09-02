<?php

namespace Packstub\Flow\Nodes\Triggers;

use Filament\Forms\Components\TextInput;
use Illuminate\Support\Str;
use Packstub\Flow\Nodes\Trigger;

/**
 * Starts the workflow when a POST hits the webhook URL. The request JSON is
 * available to nodes as {{ webhook.* }}. With a signing secret set, the
 * request must carry an HMAC-SHA256 signature of the raw body.
 */
class Webhook extends Trigger
{
    public const DEFAULT_SIGNATURE_HEADER = 'X-Signature';

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
            TextInput::make('signing_secret')
                ->label(__('packstub-flow::flow.nodes.webhook.signing_secret'))
                ->helperText(__('packstub-flow::flow.nodes.webhook.signing_secret_help'))
                ->password()
                ->revealable()
                ->maxLength(255),
            TextInput::make('signature_header')
                ->label(__('packstub-flow::flow.nodes.webhook.signature_header'))
                ->placeholder(self::DEFAULT_SIGNATURE_HEADER)
                ->maxLength(80),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        $token = $config['token'] ?? null;
        $given = $payload['webhook_token'] ?? null;

        return is_string($token) && is_string($given) && hash_equals($token, $given);
    }

    /**
     * Whether a raw request body carries a valid signature for this node.
     * Accepts "<hex>" and "sha256=<hex>".
     *
     * @param  array<string, mixed>  $config
     */
    public static function verifySignature(array $config, string $body, ?string $signature): bool
    {
        $secret = (string) ($config['signing_secret'] ?? '');

        if ($secret === '') {
            return true;
        }

        if (! is_string($signature) || $signature === '') {
            return false;
        }

        $signature = strtolower(trim(Str::after($signature, 'sha256=')));

        return hash_equals(hash_hmac('sha256', $body, $secret), $signature);
    }

    /**
     * @param  array<string, mixed>  $config
     */
    public static function signatureHeader(array $config): string
    {
        return trim((string) ($config['signature_header'] ?? '')) ?: self::DEFAULT_SIGNATURE_HEADER;
    }

    public function getPlaceholders(): array
    {
        return ['{{ webhook.key }}' => __('packstub-flow::flow.placeholders.webhook')];
    }
}
