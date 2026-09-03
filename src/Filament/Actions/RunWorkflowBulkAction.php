<?php

namespace Packstub\Flow\Filament\Actions;

use Filament\Actions\BulkAction;
use Illuminate\Database\Eloquent\Collection;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Actions\Concerns\RunsWorkflowsForRecords;

/**
 * Start a workflow for every selected record of a table.
 *
 *     ->toolbarActions([RunWorkflowBulkAction::make()])
 */
class RunWorkflowBulkAction extends BulkAction
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
        $this->modalHeading(fn (Collection $records): string => __('packstub-flow::flow.resource_action.bulk_heading', ['count' => $records->count()]));
        $this->modalSubmitActionLabel(__('packstub-flow::flow.resource_action.submit'));
        $this->modalWidth('md');
        $this->schema(fn (): array => [$this->workflowSelect()]);
        $this->deselectRecordsAfterCompletion();
        $this->action(function (array $data, Collection $records): void {
            $workflow = Flow::workflowModel()::query()->find($data['workflow_id'] ?? null);

            if (! $workflow) {
                return;
            }

            $this->notifyResult($workflow, $this->runFor($workflow, $records));
        });
    }
}
