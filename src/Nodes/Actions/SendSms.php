<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Nodes\Concerns\SendsHttp;
use Packstub\Flow\Support\UrlGuard;

/**
 * Sends an SMS — or a WhatsApp message — through the Twilio Messages API.
 */
class SendSms extends Action
{
    use InterpolatesPlaceholders;
    use SendsHttp;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.sms.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.sms.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-device-phone-mobile';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('account_sid')
                ->label(__('packstub-flow::flow.nodes.sms.account_sid'))
                ->placeholder('{{ secrets.twilio_sid }}')
                ->required(),
            TextInput::make('auth_token')
                ->label(__('packstub-flow::flow.nodes.sms.auth_token'))
                ->placeholder('{{ secrets.twilio_token }}')
                ->helperText(__('packstub-flow::flow.nodes.sms.auth_token_help'))
                ->required(),
            TextInput::make('from')
                ->label(__('packstub-flow::flow.nodes.sms.from'))
                ->placeholder('+15551234567 or MG... messaging service')
                ->required(),
            TextInput::make('to')
                ->label(__('packstub-flow::flow.nodes.sms.to'))
                ->placeholder('{{ model.phone }}')
                ->required(),
            Textarea::make('body')
                ->label(__('packstub-flow::flow.nodes.sms.body'))
                ->rows(3)
                ->required(),
            Toggle::make('whatsapp')
                ->label(__('packstub-flow::flow.nodes.sms.whatsapp'))
                ->helperText(__('packstub-flow::flow.nodes.sms.whatsapp_help'))
                ->default(false),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $sid = trim($this->interpolate($config['account_sid'] ?? '', $payload));
        $token = trim($this->interpolate($config['auth_token'] ?? '', $payload));
        $from = trim($this->interpolate($config['from'] ?? '', $payload));
        $to = trim($this->interpolate($config['to'] ?? '', $payload));

        if ($sid === '' || $token === '' || $from === '' || $to === '') {
            throw new WorkflowException('Send SMS: the account SID, auth token, sender and recipient are required.');
        }

        if ($config['whatsapp'] ?? false) {
            $from = str_starts_with($from, 'whatsapp:') ? $from : "whatsapp:{$from}";
            $to = str_starts_with($to, 'whatsapp:') ? $to : "whatsapp:{$to}";
        }

        $url = 'https://api.twilio.com/2010-04-01/Accounts/'.rawurlencode($sid).'/Messages.json';

        UrlGuard::assertAllowed($url);

        $data = ['To' => $to, 'Body' => mb_substr($this->interpolate($config['body'] ?? '', $payload), 0, 1600)];
        $data[str_starts_with($from, 'MG') ? 'MessagingServiceSid' : 'From'] = $from;

        $response = $this->httpClient()->withBasicAuth($sid, $token)->asForm()->post($url, $data);

        if ($response->failed()) {
            throw new WorkflowException("Twilio returned HTTP {$response->status()}: ".$this->errorFrom($response));
        }

        $this->output(['sid' => $response->json('sid'), 'status' => $response->json('status')]);
    }
}
