<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Actions\Action as NotificationAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use Illuminate\Support\Facades\Mail;
use Packstub\Flow\Contracts\Waitable;
use Packstub\Flow\Filament\Pages\Approvals;
use Packstub\Flow\Flow;
use Packstub\Flow\Mail\WorkflowMail;
use Packstub\Flow\Models\WorkflowWait;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\WaitRequest;
use Throwable;

/**
 * Pauses the run until someone approves or rejects — from the Approvals
 * page, or from the links in the notification / email — or the timeout
 * passes. Continues along "Approved", "Rejected" or "Timed out".
 */
class RequestApproval extends Action implements Waitable
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.request_approval.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.request_approval.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-hand-thumb-up';
    }

    public function getOutputs(): array
    {
        return [
            'approved' => __('packstub-flow::flow.nodes.request_approval.approved'),
            'rejected' => __('packstub-flow::flow.nodes.request_approval.rejected'),
            'timed_out' => __('packstub-flow::flow.nodes.request_approval.timed_out'),
        ];
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('approvers')
                ->label(__('packstub-flow::flow.nodes.request_approval.approvers'))
                ->placeholder('manager@example.com, {{ model.owner.email }}')
                ->helperText(__('packstub-flow::flow.nodes.request_approval.approvers_help')),
            TextInput::make('title')
                ->label(__('packstub-flow::flow.nodes.request_approval.title'))
                ->placeholder('Approve refund for order {{ model.reference }}')
                ->required(),
            Textarea::make('body')
                ->label(__('packstub-flow::flow.nodes.request_approval.body'))
                ->rows(3),
            TextInput::make('timeout')
                ->label(__('packstub-flow::flow.nodes.request_approval.timeout'))
                ->helperText(__('packstub-flow::flow.nodes.request_approval.timeout_help'))
                ->numeric()
                ->minValue(0)
                ->default(0),
            Select::make('timeout_unit')
                ->label(__('packstub-flow::flow.nodes.wait.unit'))
                ->options([
                    'minutes' => __('packstub-flow::flow.nodes.wait.units.minutes'),
                    'hours' => __('packstub-flow::flow.nodes.wait.units.hours'),
                    'days' => __('packstub-flow::flow.nodes.wait.units.days'),
                ])
                ->default('hours'),
            Toggle::make('notify')
                ->label(__('packstub-flow::flow.nodes.request_approval.notify'))
                ->default(true),
            Toggle::make('email')
                ->label(__('packstub-flow::flow.nodes.request_approval.email'))
                ->helperText(__('packstub-flow::flow.nodes.request_approval.email_help'))
                ->default(false),
        ];
    }

    public function getPlaceholders(): array
    {
        return [
            ...Placeholders::documentation(),
            '{{ approval.outcome }}' => __('packstub-flow::flow.placeholders.approval_outcome'),
            '{{ approval.by }}' => __('packstub-flow::flow.placeholders.approval_by'),
            '{{ approval.comment }}' => __('packstub-flow::flow.placeholders.approval_comment'),
        ];
    }

    public function createWait(array $config, array $payload): WaitRequest
    {
        $timeout = (int) ($config['timeout'] ?? 0) * match ($config['timeout_unit'] ?? 'hours') {
            'minutes' => 60,
            'days' => 86400,
            default => 3600,
        };

        return new WaitRequest(
            type: 'approval',
            outcomes: ['approved', 'rejected'],
            timeoutSeconds: $timeout > 0 ? $timeout : null,
            meta: [
                'title' => $this->interpolate($config['title'] ?? '', $payload),
                'body' => $this->interpolate($config['body'] ?? '', $payload),
                'approvers' => $this->emails($this->interpolate($config['approvers'] ?? '', $payload)),
                'subject' => isset($payload['model']) && is_object($payload['model']) ? class_basename($payload['model']).' #'.Placeholders::stringify($payload['model']) : null,
            ],
        );
    }

    public function afterWaitCreated(WorkflowWait $wait, array $config, array $payload): void
    {
        $approvers = $wait->approvers();

        if ($approvers === []) {
            return;
        }

        $users = Flow::userModel()::query()->whereIn('email', $approvers)->get();
        $title = (string) ($wait->meta['title'] ?? '');
        $body = (string) ($wait->meta['body'] ?? '');

        if (($config['notify'] ?? true) && $users->isNotEmpty()) {
            $actions = [
                NotificationAction::make('approve')->label(__('packstub-flow::flow.approvals.approve'))->button()->color('success')->url($wait->decisionUrl('approved'))->markAsRead(),
                NotificationAction::make('reject')->label(__('packstub-flow::flow.approvals.reject'))->button()->color('danger')->url($wait->decisionUrl('rejected'))->markAsRead(),
            ];

            if ($url = static::approvalsPageUrl()) {
                $actions[] = NotificationAction::make('review')->label(__('packstub-flow::flow.approvals.review'))->link()->url($url);
            }

            Notification::make()
                ->title($title)
                ->body($body)
                ->icon('heroicon-o-hand-thumb-up')
                ->warning()
                ->actions($actions)
                ->sendToDatabase($users);
        }

        if ($config['email'] ?? false) {
            $text = $body."\n\n".__('packstub-flow::flow.approvals.email_reject_line', ['url' => $wait->decisionUrl('rejected')]);

            Mail::to($approvers)->send(new WorkflowMail($title, $text, __('packstub-flow::flow.approvals.approve'), $wait->decisionUrl('approved')));
        }
    }

    public function handle(array $config, array $payload): void
    {
        // The runner parks the branch on the wait; nothing to do here.
    }

    public static function approvalsPageUrl(): ?string
    {
        try {
            return class_exists(Approvals::class) ? Approvals::getUrl() : null;
        } catch (Throwable) {
            return null;
        }
    }

    /** @return array<int, string> */
    protected function emails(string $list): array
    {
        return array_values(array_unique(array_filter(array_map(fn (string $email): string => strtolower(trim($email)), preg_split('/[\s,;]+/', $list) ?: []), fn (string $email): bool => str_contains($email, '@'))));
    }
}
