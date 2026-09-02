<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\RelationManagers;

use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Support\Enums\Width;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Enums\RunStatus;
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
                TextColumn::make('trigger_type')
                    ->label(__('packstub-flow::flow.runs.trigger'))
                    ->formatStateUsing(fn (WorkflowRun $record): ?string => $record->triggerName())
                    ->placeholder('—'),
                TextColumn::make('started_at')
                    ->label(__('packstub-flow::flow.runs.started'))
                    ->dateTime()
                    ->since()
                    ->sortable(),
                TextColumn::make('duration')
                    ->label(__('packstub-flow::flow.runs.duration'))
                    ->state(fn (WorkflowRun $record): ?string => $record->getDurationInSeconds() !== null ? $record->getDurationInSeconds().' s' : null)
                    ->placeholder('—'),
                TextColumn::make('steps')
                    ->label(__('packstub-flow::flow.runs.steps'))
                    ->state(fn (WorkflowRun $record): int => count($record->steps ?? []))
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
            ])
            ->recordActions([
                Action::make('view')
                    ->label(__('packstub-flow::flow.runs.view'))
                    ->icon('heroicon-o-eye')
                    ->modalHeading(fn (WorkflowRun $record): string => __('packstub-flow::flow.runs.heading', ['id' => substr($record->getKey(), 0, 8)]))
                    ->modalWidth(Width::ThreeExtraLarge)
                    ->modalSubmitAction(false)
                    ->modalCancelActionLabel(__('packstub-flow::flow.runs.close'))
                    ->modalContent(fn (WorkflowRun $record) => view('packstub-flow::runs.detail', ['run' => $record])),
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
