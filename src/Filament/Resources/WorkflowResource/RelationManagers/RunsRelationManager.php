<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\RelationManagers;

use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Notifications\Notification;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Support\Enums\Width;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Models\WorkflowRun;

class RunsRelationManager extends RelationManager
{
    protected static string $relationship = 'runs';

    public static function getTitle(Model $ownerRecord, string $pageClass): string
    {
        return __('packstub-flow::flow.runs.title');
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('id')
            ->columns([
                TextColumn::make('status')
                    ->label(__('packstub-flow::flow.runs.status_label'))
                    ->badge(),
                IconColumn::make('is_test')
                    ->label(__('packstub-flow::flow.runs.test'))
                    ->boolean()
                    ->trueIcon('heroicon-o-beaker')
                    ->falseIcon('')
                    ->tooltip(fn (WorkflowRun $record): ?string => $record->is_test ? __('packstub-flow::flow.runs.test_tooltip') : null),
                TextColumn::make('trigger_type')
                    ->label(__('packstub-flow::flow.runs.trigger'))
                    ->formatStateUsing(fn (WorkflowRun $record): ?string => $record->triggerName())
                    ->placeholder('—'),
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
                    ->counts('steps')
                    ->numeric(),
                TextColumn::make('error')
                    ->label(__('packstub-flow::flow.runs.error'))
                    ->limit(60)
                    ->color('danger')
                    ->placeholder('—')
                    ->toggleable(),
            ])
            ->defaultSort('started_at', 'desc')
            ->filters([
                SelectFilter::make('status')->options(RunStatus::class),
                TernaryFilter::make('is_test')->label(__('packstub-flow::flow.runs.test')),
            ])
            ->recordActions([
                Action::make('view')
                    ->label(__('packstub-flow::flow.runs.view'))
                    ->icon('heroicon-o-eye')
                    ->modalHeading(fn (WorkflowRun $record): string => __('packstub-flow::flow.runs.heading', ['id' => substr($record->getKey(), 0, 8)]))
                    ->modalWidth(Width::ThreeExtraLarge)
                    ->modalSubmitAction(false)
                    ->modalCancelActionLabel(__('packstub-flow::flow.runs.close'))
                    ->modalContent(fn (WorkflowRun $record) => view('packstub-flow::runs.detail', ['run' => $record, 'canvasUrl' => WorkflowResource::getUrl('edit', ['record' => $record->workflow_id])])),
                Action::make('rerun')
                    ->label(__('packstub-flow::flow.runs.rerun'))
                    ->icon('heroicon-o-arrow-path')
                    ->color('gray')
                    ->requiresConfirmation()
                    ->modalDescription(__('packstub-flow::flow.runs.rerun_description'))
                    ->visible(fn (WorkflowRun $record): bool => $record->status->isFinished() && ! $record->is_test && $record->workflow?->is_active)
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
            ->poll('10s');
    }

    public function isReadOnly(): bool
    {
        return false;
    }
}
