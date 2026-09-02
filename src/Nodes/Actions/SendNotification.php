<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Packstub\Flow\Flow;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;

/**
 * A Filament database notification (the bell in the topbar).
 */
class SendNotification extends Action
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.send_notification.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.send_notification.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-bell-alert';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('title')
                ->label(__('packstub-flow::flow.nodes.send_notification.title'))
                ->required(),
            Textarea::make('body')
                ->label(__('packstub-flow::flow.nodes.send_notification.body'))
                ->rows(3),
            Select::make('status')
                ->label(__('packstub-flow::flow.nodes.send_notification.status'))
                ->options([
                    'info' => __('packstub-flow::flow.nodes.send_notification.statuses.info'),
                    'success' => __('packstub-flow::flow.nodes.send_notification.statuses.success'),
                    'warning' => __('packstub-flow::flow.nodes.send_notification.statuses.warning'),
                    'danger' => __('packstub-flow::flow.nodes.send_notification.statuses.danger'),
                ])
                ->default('info'),
            TextInput::make('recipients')
                ->label(__('packstub-flow::flow.nodes.send_notification.recipients'))
                ->placeholder('admin@example.com, {{ model.owner.email }}')
                ->helperText(__('packstub-flow::flow.nodes.send_notification.recipients_help'))
                ->required(),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $users = $this->resolveRecipients($this->interpolate($config['recipients'] ?? '', $payload));

        if ($users->isEmpty()) {
            return;
        }

        $notification = Notification::make()
            ->title($this->interpolate($config['title'] ?? '', $payload))
            ->body($this->interpolate($config['body'] ?? '', $payload));

        match ($config['status'] ?? 'info') {
            'success' => $notification->success(),
            'warning' => $notification->warning(),
            'danger' => $notification->danger(),
            default => $notification->info(),
        };

        $notification->sendToDatabase($users);
    }

    /**
     * @return Collection<int, Model>
     */
    protected function resolveRecipients(string $list): Collection
    {
        $emails = array_values(array_filter(array_map('trim', explode(',', $list))));

        if ($emails === []) {
            return collect();
        }

        $model = Flow::userModel();

        return $model::query()->whereIn('email', $emails)->get();
    }
}
