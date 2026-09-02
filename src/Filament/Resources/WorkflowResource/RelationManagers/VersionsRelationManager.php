<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\RelationManagers;

use Filament\Actions\Action;
use Filament\Notifications\Notification;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Support\Enums\Width;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowVersion;
use Packstub\Flow\Support\DefinitionDiff;

/**
 * The saved versions of a workflow's definition: what changed in each, and
 * a Restore button that brings an older one back (as a new version).
 */
class VersionsRelationManager extends RelationManager
{
    protected static string $relationship = 'versions';

    public static function getTitle(Model $ownerRecord, string $pageClass): string
    {
        return __('packstub-flow::flow.versions.title');
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('number')
            ->defaultSort('number', 'desc')
            ->columns([
                TextColumn::make('number')
                    ->label(__('packstub-flow::flow.versions.number'))
                    ->formatStateUsing(fn (int $state): string => "v{$state}")
                    ->badge()
                    ->color(fn (WorkflowVersion $record): string => $record->number === (int) $this->getOwnerRecord()->latestVersion?->number ? 'success' : 'gray')
                    ->sortable(),
                TextColumn::make('summary')
                    ->label(__('packstub-flow::flow.versions.summary'))
                    ->state(fn (WorkflowVersion $record): string => DefinitionDiff::summary($record->diff()))
                    ->wrap(),
                TextColumn::make('nodes')
                    ->label(__('packstub-flow::flow.versions.nodes'))
                    ->state(fn (WorkflowVersion $record): int => count($record->definition['nodes'] ?? []))
                    ->numeric(),
                TextColumn::make('created_by')
                    ->label(__('packstub-flow::flow.versions.by'))
                    ->placeholder('—'),
                TextColumn::make('created_at')
                    ->label(__('packstub-flow::flow.versions.saved'))
                    ->dateTime()
                    ->since()
                    ->sortable(),
            ])
            ->recordActions([
                Action::make('compare')
                    ->label(__('packstub-flow::flow.versions.compare'))
                    ->icon('heroicon-o-arrows-right-left')
                    ->color('gray')
                    ->modalHeading(fn (WorkflowVersion $record): string => __('packstub-flow::flow.versions.compare_heading', ['number' => $record->number, 'previous' => max(0, $record->previous()?->number ?? 0)]))
                    ->modalWidth(Width::TwoExtraLarge)
                    ->modalSubmitAction(false)
                    ->modalCancelActionLabel(__('packstub-flow::flow.runs.close'))
                    ->modalContent(fn (WorkflowVersion $record) => view('packstub-flow::versions.diff', ['diff' => $record->diff(), 'version' => $record])),
                Action::make('restore')
                    ->label(__('packstub-flow::flow.versions.restore'))
                    ->icon('heroicon-o-arrow-uturn-left')
                    ->requiresConfirmation()
                    ->modalDescription(__('packstub-flow::flow.versions.restore_description'))
                    ->visible(fn (WorkflowVersion $record): bool => $record->number !== (int) $this->getOwnerRecord()->latestVersion?->number)
                    ->action(function (WorkflowVersion $record): void {
                        /** @var Workflow $workflow */
                        $workflow = $this->getOwnerRecord();
                        $workflow->update(['definition' => $record->definition]);

                        Notification::make()
                            ->title(__('packstub-flow::flow.versions.restored', ['number' => $record->number, 'new' => $workflow->fresh()->latestVersion?->number]))
                            ->success()
                            ->send();

                        $this->redirect(request()->header('Referer') ?: url()->current());
                    }),
            ]);
    }

    public function isReadOnly(): bool
    {
        return false;
    }
}
