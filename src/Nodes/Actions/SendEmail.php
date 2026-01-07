<?php

namespace Xlited\LaravelFlow\Nodes\Actions;

use Xlited\LaravelFlow\Base\Action;

class SendEmail extends Action
{
    public function getName(): string
    {
        return 'Send Email';
    }

    public function getDescription(): string
    {
        return 'Sends an email to a specific user.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-envelope';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\TextInput::make('recipient')
                ->placeholder('user@example.com')
                ->default('{{ model.email }}')
                ->required(),
            \Filament\Forms\Components\TextInput::make('subject')
                ->placeholder('Welcome to our app!')
                ->required(),
            \Filament\Forms\Components\Textarea::make('body')
                ->label('Message')
                ->placeholder('Hi {{ model.name }}, ...')
                ->required(),
        ];
    }

    public function handle(array $data, array $payload): void
    {
        $recipient = $this->interpolate($data['recipient'] ?? '', $payload);
        $subject = $this->interpolate($data['subject'] ?? '', $payload);
        $body = $this->interpolate($data['body'] ?? '', $payload);

        if (!$recipient && isset($payload['model']) && isset($payload['model']->email)) {
            $recipient = $payload['model']->email;
        }

        if (!$recipient) {
            return;
        }

        \Illuminate\Support\Facades\Mail::to($recipient)->send(
            new \Xlited\LaravelFlow\Mail\GenericEmail($subject, $body)
        );
    }

    protected function interpolate(string $text, array $payload): string
    {
        if (isset($payload['model'])) {
            // Replace all {{ model.attribute.nested.key }}
            $text = preg_replace_callback('/\{\{\s*model\.(\w+)\s*\}\}/', function ($matches) use ($payload) {
                $attribute = $matches[1];
                return data_get($payload['model'], $attribute, '');
            }, $text);
        }
        return $text;
    }
}
