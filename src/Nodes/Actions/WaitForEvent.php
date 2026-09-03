<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Packstub\Flow\Contracts\Waitable;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Models\WorkflowWait;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\WaitRequest;

/**
 * Pauses the run until your code calls Flow::signal('<key>', [...]) — a
 * payment confirmed, a document signed — or the timeout passes. Continues
 * along "Received" (with the signal data as {{ wait.* }}) or "Timed out".
 */
class WaitForEvent extends Action implements Waitable
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.wait_for_event.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.wait_for_event.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-pause-circle';
    }

    public function getOutputs(): array
    {
        return [
            'received' => __('packstub-flow::flow.nodes.wait_for_event.received'),
            'timed_out' => __('packstub-flow::flow.nodes.request_approval.timed_out'),
        ];
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('key')
                ->label(__('packstub-flow::flow.nodes.wait_for_event.key'))
                ->placeholder('payment.{{ model.id }}')
                ->helperText(__('packstub-flow::flow.nodes.wait_for_event.key_help'))
                ->required(),
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
        ];
    }

    public function getPlaceholders(): array
    {
        return [
            ...Placeholders::documentation(),
            '{{ wait.outcome }}' => __('packstub-flow::flow.placeholders.wait_outcome'),
            '{{ wait.amount }}' => __('packstub-flow::flow.placeholders.wait_data'),
        ];
    }

    public function createWait(array $config, array $payload): WaitRequest
    {
        $key = trim($this->interpolate($config['key'] ?? '', $payload));

        if ($key === '') {
            throw new WorkflowException('Wait for signal: the key is empty.');
        }

        $timeout = (int) ($config['timeout'] ?? 0) * match ($config['timeout_unit'] ?? 'hours') {
            'minutes' => 60,
            'days' => 86400,
            default => 3600,
        };

        return new WaitRequest(type: 'event', outcomes: ['received'], timeoutSeconds: $timeout > 0 ? $timeout : null, key: $key, meta: ['title' => $key]);
    }

    public function afterWaitCreated(WorkflowWait $wait, array $config, array $payload): void
    {
        //
    }

    public function handle(array $config, array $payload): void
    {
        // The runner parks the branch on the wait; nothing to do here.
    }
}
