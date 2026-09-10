<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Utilities\Get;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Nodes\Trigger;
use Packstub\Flow\Nodes\Triggers;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\ResourceUrl;
use Packstub\Flow\Support\UrlGuard;

/**
 * Hands the run to Zapier, Make, n8n or any webhook receiver: a POST with
 * the whole run (or a JSON body of your own) and, with a signing secret,
 * an HMAC-SHA256 signature the receiver can verify. The plugin is the
 * in-app half; the integration half happens on the platform.
 */
class SendToAutomation extends Action
{
    use InterpolatesPlaceholders;

    public const SIGNATURE_HEADER = 'X-Flow-Signature';

    public const TIMESTAMP_HEADER = 'X-Flow-Timestamp';

    /** Keys of the payload that never leave: the engine's own and secrets. */
    protected const PRIVATE_KEYS = ['secrets', 'tenant', 'last', 'manual'];

    /** @var array<class-string<Trigger>, string> */
    protected const EVENTS = [
        Triggers\RecordCreated::class => 'record.created',
        Triggers\RecordUpdated::class => 'record.updated',
        Triggers\RecordDeleted::class => 'record.deleted',
        Triggers\DateReached::class => 'date.reached',
        Triggers\Schedule::class => 'schedule',
        Triggers\Webhook::class => 'webhook',
        Triggers\EventFired::class => 'event',
        Triggers\Manual::class => 'manual',
        Triggers\UserRegistered::class => 'user.registered',
        Triggers\StateTransitioned::class => 'state.transitioned',
        Triggers\StatusChanged::class => 'status.changed',
        Triggers\WorkflowCalled::class => 'workflow.called',
    ];

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.send_to_automation.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.send_to_automation.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-arrow-up-right';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('service')
                ->label(__('packstub-flow::flow.nodes.send_to_automation.service'))
                ->options([
                    'zapier' => __('packstub-flow::flow.nodes.send_to_automation.services.zapier'),
                    'make' => __('packstub-flow::flow.nodes.send_to_automation.services.make'),
                    'n8n' => __('packstub-flow::flow.nodes.send_to_automation.services.n8n'),
                    'custom' => __('packstub-flow::flow.nodes.send_to_automation.services.custom'),
                ])
                ->default('zapier')
                ->required()
                ->live(),
            TextInput::make('url')
                ->label(__('packstub-flow::flow.nodes.send_to_automation.url'))
                ->placeholder(fn (Get $get): string => match ($get('service')) {
                    'make' => 'https://hook.eu1.make.com/…',
                    'n8n' => 'https://n8n.example.com/webhook/…',
                    'custom' => 'https://…',
                    default => 'https://hooks.zapier.com/hooks/catch/…',
                })
                ->helperText(__('packstub-flow::flow.nodes.send_to_automation.url_help'))
                ->rule(fn () => function (string $attribute, mixed $value, \Closure $fail): void {
                    if (is_string($value) && ! Placeholders::hasPlaceholders($value) && ! filter_var($value, FILTER_VALIDATE_URL)) {
                        $fail(__('packstub-flow::flow.nodes.send_to_automation.invalid_url'));
                    }
                })
                ->required(),
            Select::make('payload')
                ->label(__('packstub-flow::flow.nodes.send_to_automation.payload'))
                ->options([
                    'run' => __('packstub-flow::flow.nodes.send_to_automation.payloads.run'),
                    'custom' => __('packstub-flow::flow.nodes.send_to_automation.payloads.custom'),
                ])
                ->default('run')
                ->required()
                ->live(),
            Textarea::make('body')
                ->label(__('packstub-flow::flow.nodes.send_to_automation.body'))
                ->placeholder('{"id": "{{ model.id }}", "status": "{{ model.status }}"}')
                ->helperText(__('packstub-flow::flow.nodes.send_to_automation.body_help'))
                ->rows(6)
                ->visible(fn (Get $get): bool => $get('payload') === 'custom')
                ->required(fn (Get $get): bool => $get('payload') === 'custom')
                ->rule(fn () => function (string $attribute, mixed $value, \Closure $fail): void {
                    if (is_string($value) && trim($value) !== '' && ! json_validate((string) preg_replace(Placeholders::PATTERN, '0', $value))) {
                        $fail(__('packstub-flow::flow.nodes.http.invalid_json'));
                    }
                }),
            TextInput::make('signing_secret')
                ->label(__('packstub-flow::flow.nodes.send_to_automation.signing_secret'))
                ->placeholder('{{ secrets.zapier_secret }}')
                ->helperText(__('packstub-flow::flow.nodes.send_to_automation.signing_secret_help'))
                ->maxLength(255),
            TextInput::make('timeout')
                ->label(__('packstub-flow::flow.nodes.send_to_automation.timeout'))
                ->helperText(__('packstub-flow::flow.nodes.http.timeout_help', ['default' => (int) config('packstub-flow.http.timeout', 15)]))
                ->numeric()
                ->minValue(1)
                ->maxValue(300),
            Toggle::make('throw_on_error')
                ->label(__('packstub-flow::flow.nodes.send_to_automation.throw_on_error'))
                ->default(true),
        ];
    }

    public function getPlaceholders(): array
    {
        return [
            ...Placeholders::documentation(),
            '{{ last.status }}' => __('packstub-flow::flow.placeholders.http_status'),
            '{{ last.body.id }}' => __('packstub-flow::flow.placeholders.http_body'),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $url = $this->interpolate($config['url'] ?? '', $payload);

        if ($url === '') {
            throw new WorkflowException('Send to automation has no URL.');
        }

        UrlGuard::assertAllowed($url);

        $body = ($config['payload'] ?? 'run') === 'custom'
            ? $this->customBody((string) ($config['body'] ?? ''), $payload)
            : $this->runBody($payload);

        $json = (string) json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        $headers = ['Content-Type' => 'application/json', 'User-Agent' => 'Packstub-Flow'];

        if (($secret = $this->interpolate($config['signing_secret'] ?? '', $payload)) !== '') {
            $timestamp = (string) time();
            $headers[self::TIMESTAMP_HEADER] = $timestamp;
            $headers[self::SIGNATURE_HEADER] = static::sign($secret, $timestamp, $json);
        }

        $timeout = (int) (($config['timeout'] ?? null) ?: config('packstub-flow.http.timeout', 15));

        $response = Http::timeout($timeout)
            ->connectTimeout(min($timeout, 10))
            ->withHeaders($headers)
            ->withBody($json, 'application/json')
            ->post($url);

        $decoded = $response->json();

        $this->output([
            'status' => $response->status(),
            'ok' => $response->successful(),
            'body' => $decoded ?? $response->body(),
        ]);

        if (($config['throw_on_error'] ?? true) && $response->failed()) {
            throw new WorkflowException("Send to automation: {$url} returned {$response->status()}.");
        }
    }

    /**
     * The signature a receiver recomputes: HMAC-SHA256 of "<timestamp>.<body>".
     */
    public static function sign(string $secret, string $timestamp, string $body): string
    {
        return hash_hmac('sha256', $timestamp.'.'.$body, $secret);
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public function preview(array $config, array $payload): array
    {
        return [
            'url' => $this->interpolate($config['url'] ?? '', $payload),
            'payload' => ($config['payload'] ?? 'run') === 'custom' ? $this->customBody((string) ($config['body'] ?? ''), $payload) : $this->runBody($payload),
            'signed' => $this->interpolate($config['signing_secret'] ?? '', $payload) !== '',
        ];
    }

    /**
     * The whole run as JSON: what triggered it, the record with its visible
     * attributes and panel URL, changes, webhook / event data, outputs.
     *
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    protected function runBody(array $payload): array
    {
        $run = Runner::currentRun();
        $workflow = $run?->workflow;

        $body = [
            'event' => $this->eventName($run?->trigger_type),
            'workflow' => $workflow ? ['id' => (string) $workflow->getKey(), 'name' => $workflow->name] : null,
            'run' => $run ? ['id' => (string) $run->getKey(), 'trigger' => $run->trigger_type, 'started_at' => $run->started_at?->toIso8601String()] : null,
        ];

        foreach ($payload as $key => $value) {
            if (in_array($key, self::PRIVATE_KEYS, true)) {
                continue;
            }

            // "event" is the trigger kind above; the event object goes under event_data.
            $body[$key === 'event' ? 'event_data' : $key] = $this->transport($value);
        }

        $body['sent_at'] = now()->toIso8601String();

        return array_filter($body, fn (mixed $value): bool => $value !== null);
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    protected function customBody(string $template, array $payload): array
    {
        $body = app(HttpRequest::class)->interpolateBody($template, $payload);

        if (! is_array($body)) {
            throw new WorkflowException('Send to automation: the body is not a JSON object.');
        }

        return $body;
    }

    protected function eventName(?string $trigger): string
    {
        if ($trigger === null) {
            return 'manual';
        }

        return self::EVENTS[$trigger] ?? str_replace('_', '.', Str::snake(class_basename($trigger)));
    }

    /**
     * Models become their visible attributes with a type, id and panel URL;
     * other objects their public properties; arrays recurse.
     */
    protected function transport(mixed $value, int $depth = 0): mixed
    {
        if ($depth > 6) {
            return null;
        }

        if ($value instanceof Model) {
            return array_filter([
                'type' => $value::class,
                'id' => $value->getKey(),
                'url' => ResourceUrl::for($value),
                'attributes' => $this->transport($value->attributesToArray(), $depth + 1),
            ], fn (mixed $v): bool => $v !== null);
        }

        if ($value instanceof \BackedEnum) {
            return $value->value;
        }

        if ($value instanceof \DateTimeInterface) {
            return $value->format(\DateTimeInterface::ATOM);
        }

        if ($value instanceof Arrayable) {
            return $this->transport($value->toArray(), $depth + 1);
        }

        if ($value instanceof \JsonSerializable) {
            return $this->transport($value->jsonSerialize(), $depth + 1);
        }

        if (is_object($value)) {
            return $this->transport(get_object_vars($value), $depth + 1);
        }

        if (is_array($value)) {
            return array_map(fn (mixed $item): mixed => $this->transport($item, $depth + 1), $value);
        }

        return $value;
    }
}
