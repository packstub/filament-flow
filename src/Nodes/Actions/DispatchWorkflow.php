<?php

namespace Packstub\Flow\Nodes\Actions;

use Packstub\Flow\Base\Action;
use Packstub\Flow\Models\Workflow;
use Filament\Forms\Components\Select;

class DispatchWorkflow extends Action
{
    public function getName(): string
    {
        return 'Dispatch Workflow';
    }

    public function getDescription(): string
    {
        return 'Start another sub-workflow.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-arrow-path';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('workflow_id')
                ->label('Workflow to Dispatch')
                ->options(Workflow::query()->pluck('name', 'id')->toArray())
                ->searchable()
                ->placeholder('Select a workflow...')
                ->required(),
        ];
    }

    public function handle(array $data, array $payload): void
    {
        $targetWorkflowId = $data['workflow_id'] ?? null;
        if (!$targetWorkflowId) {
            return;
        }

        app('packstub-flow')->dispatch(
            \Packstub\Flow\Nodes\Triggers\SubWorkflowTriggered::class,
            array_merge($payload, [
                'target_workflow_id' => $targetWorkflowId,
            ])
        );
    }
}
