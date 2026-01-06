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
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>';
    }

    public function getFormSchema(): array
    {
        return [
            \Filament\Forms\Components\TextInput::make('subject')
                ->label('Subject')
                ->placeholder('Welcome to our app!')
                ->required(),
            \Filament\Forms\Components\Textarea::make('body')
                ->label('Email Body')
                ->placeholder('Hi {{ user.name }},...')
                ->required(),
        ];
    }

    public function handle(array $data, array $payload): void
    {
        $recipient = $data['recipient'] ?? null; // Assuming recipient is in config or derived
        $subject = $this->interpolate($data['subject'] ?? '', $payload);
        $body = $this->interpolate($data['body'] ?? '', $payload);

        // If recipient is not in config, try to get it from payload model
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
            // Simple regex to replace {{ model.attribute }}
            $text = preg_replace_callback('/\{\{\s*model\.(\w+)\s*\}\}/', function ($matches) use ($payload) {
                $attribute = $matches[1];
                return $payload['model']->$attribute ?? '';
            }, $text);
        }
        return $text;
    }
}
