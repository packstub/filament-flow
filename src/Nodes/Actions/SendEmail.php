<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Illuminate\Support\Facades\Mail;
use Packstub\Flow\Mail\WorkflowMail;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;

class SendEmail extends Action
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.send_email.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.send_email.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-envelope';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('recipient')
                ->label(__('packstub-flow::flow.nodes.send_email.recipient'))
                ->placeholder('{{ model.email }}')
                ->default('{{ model.email }}')
                ->helperText(__('packstub-flow::flow.nodes.send_email.recipient_help'))
                ->required(),
            TextInput::make('subject')
                ->label(__('packstub-flow::flow.nodes.send_email.subject'))
                ->placeholder(__('packstub-flow::flow.nodes.send_email.subject_placeholder'))
                ->required(),
            Textarea::make('body')
                ->label(__('packstub-flow::flow.nodes.send_email.body'))
                ->placeholder(__('packstub-flow::flow.nodes.send_email.body_placeholder'))
                ->rows(6)
                ->required(),
            TextInput::make('action_label')
                ->label(__('packstub-flow::flow.nodes.send_email.action_label'))
                ->placeholder(__('packstub-flow::flow.nodes.send_email.action_label_placeholder'))
                ->helperText(__('packstub-flow::flow.nodes.send_email.action_label_help'))
                ->maxLength(60),
            TextInput::make('action_url')
                ->label(__('packstub-flow::flow.nodes.send_email.action_url'))
                ->placeholder('{{ model.url }}'),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $recipients = array_filter(array_map('trim', explode(',', $this->interpolate($config['recipient'] ?? '', $payload))));

        if ($recipients === []) {
            return;
        }

        $label = $this->interpolate($config['action_label'] ?? '', $payload);
        $url = $this->interpolate($config['action_url'] ?? '', $payload);

        Mail::to($recipients)->send(new WorkflowMail(
            $this->interpolate($config['subject'] ?? '', $payload),
            $this->interpolate($config['body'] ?? '', $payload),
            $label !== '' && $url !== '' ? $label : null,
            $label !== '' && $url !== '' ? $url : null,
        ));
    }
}
