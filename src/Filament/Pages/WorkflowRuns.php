<?php

namespace Packstub\Flow\Filament\Pages;

use BackedEnum;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Forms\Components\DatePicker;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Enums\Width;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Gate;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Filament\Widgets\RunsOverview;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Models\WorkflowRun;
use UnitEnum;

/**
 * Every run of every workflow: filter by workflow, status and date, open
 * the step log, jump to the failing node on the canvas, run again.
 */
class WorkflowRuns extends Page implements HasTable
{
    use InteractsWithTable;

    protected static ?string $slug = 'workflow-runs';

    protected string $view = 'packstub-flow::pages.runs';

    public static function getNavigationLabel(): string
    {
        return __('packstub-flow::flow.runs.page_title');
    }

    public function getTitle(): string
    {
        return __('packstub-flow::flow.runs.page_title');
    }

    public static function getNavigationIcon(): string|BackedEnum|null
    {
        return 'heroicon-o-queue-list';
    }

    public static function getNavigationGroup(): string|UnitEnum|null
    {
        return static::plugin()?->getNavigationGroup() ?? config('packstub-flow.navigation.group');
    }

    public static function getNavigationSort(): ?int
    {
        $sort = static::plugin()?->getNavigationSort() ?? config('packstub-flow.navigation.sort');

        return $sort === null ? null : $sort + 2;
    }

    public static function canAccess(): bool
    {
        $plugin = static::plugin();

        if ($plugin && ! $plugin->isAuthorized()) {
            return false;
        }

        if (! $plugin && ($gate = config('packstub-flow.gate')) && ! Gate::allows($gate)) {
            return false;
        }

        return parent::canAccess();
    }

    protected function getHeaderWidgets(): array
    {
        return [RunsOverview::class];
    }

    public function table(Table $table): Table
    {
        $resource = static::plugin()?->getResource() ?? WorkflowResource::class;

        return $table
            ->query(fn (): Builder => Flow::runModel()::query()->with('workflow')->withCount('steps'))
            ->defaultSort('started_at', 'desc')
            ->columns([
                TextColumn::make('status')
                    ->label(__('packstub-flow::flow.runs.status_label'))
                    ->badge(),
                TextColumn::make('workflow.name')
                    ->label(__('packstub-flow::flow.resource.label'))
                    ->url(fn (WorkflowRun $record): ?string => $record->workflow ? $resource::getUrl('edit', ['record' => $record->workflow]) : null)
                    ->searchable()
                    ->sortable(),
                IconColumn::make('is_test')
                    ->label(__('packstub-flow::flow.runs.test'))
                    ->boolean()
                    ->trueIcon('heroicon-o-beaker')
                    ->falseIcon(''),
                TextColumn::make('trigger_type')
                    ->label(__('packstub-flow::flow.runs.trigger'))
                    ->formatStateUsing(fn (WorkflowRun $record): ?string => $record->triggerName())
                    ->placeholder('—')
                    ->toggleable(),
                TextColumn::make('subject_id')
                    ->label(__('packstub-flow::flow.runs.subject'))
                    ->formatStateUsing(fn (WorkflowRun $record): string => class_basename((string) $record->subject_type).' #'.$record->subject_id)
                    ->searchable()
                    ->placeholder('—')
                    ->toggleable(),
                TextColumn::make('started_at')
                    ->label(__('packstub-flow::flow.runs.started'))
                    ->dateTime()
                    ->since()
                    ->sortable(),
                TextColumn::make('duration')
                    ->label(__('packstub-flow::flow.runs.duration'))
                    ->state(fn (WorkflowRun $record): ?string => $record->getDurationInSeconds() !== null ? $record->getDurationInSeconds().' s' : null)
                    ->placeholder('—'),
                TextColumn::make('steps_count')
                    ->label(__('packstub-flow::flow.runs.steps'))
                    ->numeric(),
                TextColumn::make('error')
                    ->label(__('packstub-flow::flow.runs.error'))
                    ->limit(60)
                    ->color('danger')
                    ->placeholder('—')
                    ->toggleable(),
            ])
            ->filters([
                SelectFilter::make('status')->options(RunStatus::class)->multiple(),
                SelectFilter::make('workflow_id')
                    ->label(__('packstub-flow::flow.resource.label'))
                    ->options(fn (): array => Flow::workflowModel()::query()->orderBy('name')->pluck('name', 'id')->all())
                    ->searchable(),
                TernaryFilter::make('is_test')->label(__('packstub-flow::flow.runs.test'))->default(false),
                Filter::make('started_at')
                    ->schema([
                        DatePicker::make('from')->label(__('packstub-flow::flow.runs.from')),
                        DatePicker::make('until')->label(__('packstub-flow::flow.runs.until')),
                    ])
                    ->query(fn (Builder $query, array $data): Builder => $query
                        ->when($data['from'] ?? null, fn (Builder $query, string $date) => $query->whereDate('started_at', '>=', $date))
                        ->when($data['until'] ?? null, fn (Builder $query, string $date) => $query->whereDate('started_at', '<=', $date))),
            ])
            ->recordActions([
                Action::make('view')
                    ->label(__('packstub-flow::flow.runs.view'))
                    ->icon('heroicon-o-eye')
                    ->modalHeading(fn (WorkflowRun $record): string => __('packstub-flow::flow.runs.heading', ['id' => substr($record->getKey(), 0, 8)]))
                    ->modalWidth(Width::ThreeExtraLarge)
                    ->modalSubmitAction(false)
                    ->modalCancelActionLabel(__('packstub-flow::flow.runs.close'))
                    ->modalContent(fn (WorkflowRun $record) => view('packstub-flow::runs.detail', [
                        'run' => $record,
                        'canvasUrl' => $record->workflow ? $resource::getUrl('edit', ['record' => $record->workflow]) : null,
                    ])),
                Action::make('canvas')
                    ->label(__('packstub-flow::flow.runs.open_canvas'))
                    ->icon('heroicon-o-map')
                    ->color('gray')
                    ->url(function (WorkflowRun $record) use ($resource): ?string {
                        if (! $record->workflow) {
                            return null;
                        }

                        $failed = collect($record->steps)->firstWhere('status', 'failed');

                        return $resource::getUrl('edit', ['record' => $record->workflow]).($failed ? '?node='.rawurlencode((string) $failed['node_id']) : '');
                    }),
                Action::make('rerun')
                    ->label(__('packstub-flow::flow.runs.rerun'))
                    ->icon('heroicon-o-arrow-path')
                    ->color('gray')
                    ->requiresConfirmation()
                    ->modalDescription(__('packstub-flow::flow.runs.rerun_description'))
                    ->visible(fn (WorkflowRun $record): bool => $record->status->isFinished() && ! $record->is_test && (bool) $record->workflow?->is_active)
                    ->action(function (WorkflowRun $record): void {
                        $workflow = $record->workflow;
                        $startNode = $record->trigger_type ? $workflow->triggerNode($record->trigger_type) : null;

                        $run = Flow::run($workflow, $record->rebuildPayload(), isset($startNode['id']) ? (string) $startNode['id'] : null);

                        if (! $run) {
                            Notification::make()->title(__('packstub-flow::flow.actions.run_queued'))->info()->send();

                            return;
                        }

                        $notification = Notification::make()
                            ->title(__('packstub-flow::flow.actions.run_finished', ['status' => $run->status->getLabel()]));

                        $run->status === RunStatus::Failed
                            ? $notification->danger()->body($run->error)
                            : $notification->success();

                        $notification->send();
                    }),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->poll('15s');
    }

    protected static function plugin(): ?FlowPlugin
    {
        try {
            return FlowPlugin::get();
        } catch (\Throwable) {
            return null;
        }
    }
}
