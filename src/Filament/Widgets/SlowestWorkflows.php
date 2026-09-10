<?php

namespace Packstub\Flow\Filament\Widgets;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\JoinClause;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Support\Tenancy;

/**
 * The workflows whose runs took longest over the last 7 days: run count,
 * average duration (from the step timings, so it is the same on every
 * database) and failure rate.
 */
class SlowestWorkflows extends TableWidget
{
    protected int|string|array $columnSpan = 'full';

    protected ?string $pollingInterval = '60s';

    public function table(Table $table): Table
    {
        $resource = FlowPlugin::get()->getResource();

        return $table
            ->query(fn (): Builder => $this->query())
            ->heading(__('packstub-flow::flow.runs.slowest.heading'))
            ->description(__('packstub-flow::flow.runs.slowest.description'))
            ->paginated(false)
            ->emptyStateHeading(__('packstub-flow::flow.runs.slowest.empty'))
            ->columns([
                TextColumn::make('name')
                    ->label(__('packstub-flow::flow.resource.label'))
                    ->url(fn (Workflow $record): string => $resource::getUrl('edit', ['record' => $record])),
                TextColumn::make('runs_count')
                    ->label(__('packstub-flow::flow.runs.slowest.runs'))
                    ->numeric(),
                TextColumn::make('average_ms')
                    ->label(__('packstub-flow::flow.runs.slowest.average'))
                    ->formatStateUsing(fn (mixed $state): string => static::duration((float) $state)),
                TextColumn::make('failure_rate')
                    ->label(__('packstub-flow::flow.runs.slowest.failure_rate'))
                    ->formatStateUsing(fn (mixed $state): string => round((float) $state * 100).' %')
                    ->color(fn (mixed $state): string => (float) $state >= 0.2 ? 'danger' : ((float) $state > 0 ? 'warning' : 'gray')),
            ]);
    }

    /**
     * One row per workflow with finished, non-test runs in the last 7
     * days; a run's duration is the sum of its step timings. Aggregated in
     * subqueries so the outer query needs no GROUP BY (MySQL's
     * ONLY_FULL_GROUP_BY would refuse workflows.*).
     *
     * @return Builder<Workflow>
     */
    protected function query(): Builder
    {
        $runs = config('packstub-flow.tables.runs', 'flow_workflow_runs');
        $steps = config('packstub-flow.tables.steps', 'flow_workflow_steps');
        $workflows = config('packstub-flow.tables.workflows', 'flow_workflows');
        $grammar = Flow::workflowModel()::query()->getQuery()->getGrammar();
        $wrap = fn (string $column): string => $grammar->wrap($column);

        $perRun = Flow::runModel()::query()
            ->getQuery()
            ->from($runs)
            ->leftJoin($steps, fn (JoinClause $join) => $join->on("{$steps}.run_id", '=', "{$runs}.id"))
            ->where("{$runs}.is_test", false)
            ->where("{$runs}.started_at", '>=', now()->subDays(7))
            ->whereIn("{$runs}.status", [RunStatus::Success->value, RunStatus::Failed->value])
            ->groupBy("{$runs}.id", "{$runs}.workflow_id", "{$runs}.status")
            ->selectRaw("{$wrap("{$runs}.id")} as run_id, {$wrap("{$runs}.workflow_id")} as workflow_id, {$wrap("{$runs}.status")} as status, coalesce(sum({$wrap("{$steps}.duration_ms")}), 0) as duration_ms");

        $perWorkflow = Flow::runModel()::query()
            ->getQuery()
            ->fromSub($perRun, 'run_times')
            ->groupBy('run_times.workflow_id')
            ->selectRaw('run_times.workflow_id as workflow_id, count(run_times.run_id) as runs_count, avg(run_times.duration_ms) as average_ms, sum(case when run_times.status = ? then 1 else 0 end) * 1.0 / count(run_times.run_id) as failure_rate', [RunStatus::Failed->value]);

        return Flow::workflowModel()::query()
            ->when(Tenancy::panelTenant(), fn (Builder $query, $tenant) => $query->ofTenant($tenant))
            ->joinSub($perWorkflow, 'workflow_times', fn (JoinClause $join) => $join->on('workflow_times.workflow_id', '=', "{$workflows}.id"))
            ->select("{$workflows}.*", 'workflow_times.runs_count', 'workflow_times.average_ms', 'workflow_times.failure_rate')
            ->orderByDesc('workflow_times.average_ms')
            ->limit(5);
    }

    public static function duration(float $milliseconds): string
    {
        if ($milliseconds < 1000) {
            return round($milliseconds).' ms';
        }

        if ($milliseconds < 60_000) {
            return round($milliseconds / 1000, 1).' s';
        }

        return round($milliseconds / 60_000, 1).' min';
    }
}
