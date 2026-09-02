<?php

namespace Packstub\Flow\Filament\Actions;

use Filament\Actions\Action;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Actions\Concerns\RunsWorkflowsForRecords;

/**
 * A record action for any Filament resource: start a workflow for the
 * record. The workflow needs a Manual trigger, optionally restricted to the
 * record's type; the record is {{ model }} in the run.
 *
 *     ->recordActions([RunWorkflowAction::make()])
 */
class RunWorkflowAction extends Action
{
    use RunsWorkflowsForRecords;

    public static function getDefaultName(): ?string
    {
        return 'runWorkflow';
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->label(__('packstub-flow::flow.resource_action.label'));
        $this->icon('heroicon-o-bolt');
        $this->color('gray');
        $this->modalHeading(fn (Model $record): string => __('packstub-flow::flow.resource_action.heading', ['record' => $this->titleOf($record)]));
        $this->modalSubmitActionLabel(__('packstub-flow::flow.resource_action.submit'));
        $this->modalWidth('md');
        $this->schema(fn (): array => [$this->workflowSelect()]);
        $this->visible(fn (): bool => $this->workflowOptions() !== []);
        $this->action(function (array $data, Model $record): void {
            $workflow = Flow::workflowModel()::query()->find($data['workflow_id'] ?? null);

            if (! $workflow) {
                return;
            }

            $this->notifyResult($workflow, $this->runFor($workflow, [$record]));
        });
    }

    protected function titleOf(Model $record): string
    {
        foreach (['name', 'title', 'reference', 'email'] as $attribute) {
            $value = $record->getAttribute($attribute);

            if (is_string($value) && $value !== '') {
                return $value;
            }
        }

        return class_basename($record).' #'.$record->getKey();
    }
}
