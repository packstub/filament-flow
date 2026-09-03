<?php

namespace Packstub\Flow\Filament\Actions\Concerns;

use Closure;
use Filament\Forms\Components\Select;
use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Triggers\Manual;

/**
 * Shared by RunWorkflowAction (one record) and RunWorkflowBulkAction (a
 * selection): pick an active workflow whose Manual trigger accepts the
 * record type, then start it with the record as {{ model }}.
 */
trait RunsWorkflowsForRecords
{
    /** @var array<int, string>|Closure|null */
    protected array|Closure|null $workflowIds = null;

    protected ?Closure $payloadUsing = null;

    /**
     * Only offer these workflows (ids), instead of every active workflow
     * with a Manual trigger for the record type.
     *
     * @param  array<int, string>|Closure  $ids
     */
    public function workflows(array|Closure $ids): static
    {
        $this->workflowIds = $ids;

        return $this;
    }

    /**
     * Add to (or replace keys of) the payload each run starts with.
     *
     * @param  Closure(Model): array<string, mixed>  $callback
     */
    public function payload(Closure $callback): static
    {
        $this->payloadUsing = $callback;

        return $this;
    }

    protected function workflowSelect(): Select
    {
        return Select::make('workflow_id')
            ->label(__('packstub-flow::flow.resource_action.workflow'))
            ->options(fn (): array => $this->workflowOptions())
            ->searchable()
            ->required()
            ->helperText(__('packstub-flow::flow.resource_action.workflow_help'));
    }

    /** @return array<string, string> */
    protected function workflowOptions(): array
    {
        $record = method_exists($this, 'getRecord') ? $this->getRecord() : null;
        $record ??= method_exists($this, 'getRecords') ? $this->getRecords()?->first() : null;
        $ids = $this->evaluate($this->workflowIds);

        return Flow::workflowModel()::query()
            ->where('is_active', true)
            ->when(is_array($ids), fn ($query) => $query->whereIn('id', $ids))
            ->orderBy('name')
            ->get()
            ->filter(fn (Workflow $workflow): bool => $this->manualNode($workflow, $record) !== null)
            ->mapWithKeys(fn (Workflow $workflow): array => [(string) $workflow->getKey() => $workflow->name])
            ->all();
    }

    /**
     * @return array<string, mixed>|null
     */
    protected function manualNode(Workflow $workflow, ?object $record): ?array
    {
        $node = $workflow->triggerNode(Manual::class);

        if (! $node) {
            return null;
        }

        if ($record && ! Manual::acceptsRecord((array) ($node['data']['config'] ?? []), $record)) {
            return null;
        }

        return $node;
    }

    /**
     * @param  Collection<int, Model>|array<int, Model>  $records
     * @return array{started: int, queued: int, failed: int, errors: array<int, string>}
     */
    protected function runFor(Workflow $workflow, iterable $records): array
    {
        $node = $this->manualNode($workflow, null);
        $result = ['started' => 0, 'queued' => 0, 'failed' => 0, 'errors' => []];

        foreach ($records as $record) {
            $payload = ['model' => $record, 'manual' => true];

            if ($this->payloadUsing) {
                $payload = [...$payload, ...(array) $this->evaluate($this->payloadUsing, ['record' => $record, 'model' => $record])];
            }

            $run = Flow::run($workflow, $payload, isset($node['id']) ? (string) $node['id'] : null);

            if (! $run) {
                $result['queued']++;
            } elseif ($run->status === RunStatus::Failed) {
                $result['failed']++;
                $result['errors'][] = (string) $run->error;
            } else {
                $result['started']++;
            }
        }

        return $result;
    }

    /**
     * @param  array{started: int, queued: int, failed: int, errors: array<int, string>}  $result
     */
    protected function notifyResult(Workflow $workflow, array $result): void
    {
        $total = $result['started'] + $result['queued'] + $result['failed'];

        if ($result['failed'] > 0) {
            Notification::make()
                ->title(__('packstub-flow::flow.resource_action.failed', ['name' => $workflow->name, 'failed' => $result['failed'], 'total' => $total]))
                ->body(implode("\n", array_unique($result['errors'])))
                ->danger()
                ->send();

            return;
        }

        if ($result['queued'] > 0 && $result['started'] === 0) {
            Notification::make()
                ->title(__('packstub-flow::flow.resource_action.queued', ['name' => $workflow->name, 'count' => $total]))
                ->info()
                ->send();

            return;
        }

        Notification::make()
            ->title(__('packstub-flow::flow.resource_action.done', ['name' => $workflow->name, 'count' => $total]))
            ->success()
            ->send();
    }
}
