<?php

namespace Packstub\Flow\Filament\Resources;

use BackedEnum;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ReplicateAction;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Forms\Components\FlowBuilder;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages;
use Packstub\Flow\Filament\Resources\WorkflowResource\RelationManagers\RunsRelationManager;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\NodeRegistry;
use UnitEnum;

class WorkflowResource extends Resource
{
    protected static ?string $slug = 'workflows';

    protected static ?int $navigationSort = null;

    public static function getModel(): string
    {
        return Flow::workflowModel();
    }

    public static function getModelLabel(): string
    {
        return __('packstub-flow::flow.resource.label');
    }

    public static function getPluralModelLabel(): string
    {
        return __('packstub-flow::flow.resource.plural_label');
    }

    public static function getNavigationIcon(): string|BackedEnum|null
    {
        return static::plugin()?->getNavigationIcon() ?? config('packstub-flow.navigation.icon', 'heroicon-o-bolt');
    }

    public static function getNavigationGroup(): string|UnitEnum|null
    {
        return static::plugin()?->getNavigationGroup() ?? config('packstub-flow.navigation.group');
    }

    public static function getNavigationSort(): ?int
    {
        return static::plugin()?->getNavigationSort() ?? config('packstub-flow.navigation.sort');
    }

    public static function getRecordTitleAttribute(): ?string
    {
        return 'name';
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            Section::make()
                ->schema([
                    Grid::make(['default' => 1, 'lg' => 12])->schema([
                        TextInput::make('name')
                            ->label(__('packstub-flow::flow.fields.name'))
                            ->required()
                            ->maxLength(120)
                            ->columnSpan(['lg' => 4]),
                        TextInput::make('description')
                            ->label(__('packstub-flow::flow.fields.description'))
                            ->maxLength(255)
                            ->columnSpan(['lg' => 5]),
                        Toggle::make('is_active')
                            ->label(__('packstub-flow::flow.fields.is_active'))
                            ->helperText(__('packstub-flow::flow.fields.is_active_help'))
                            ->inline(false)
                            ->columnSpan(['lg' => 3]),
                    ]),
                ])
                ->columnSpanFull(),
            FlowBuilder::make('definition')
                ->hiddenLabel()
                ->columnSpanFull(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label(__('packstub-flow::flow.fields.name'))
                    ->description(fn (Workflow $record): ?string => $record->description)
                    ->searchable()
                    ->sortable(),
                TextColumn::make('triggers.type')
                    ->label(__('packstub-flow::flow.fields.triggers'))
                    ->badge()
                    ->color('gray')
                    ->formatStateUsing(fn (string $state): string => app(NodeRegistry::class)->trigger($state)?->getName() ?? class_basename($state)),
                IconColumn::make('is_active')
                    ->label(__('packstub-flow::flow.fields.is_active'))
                    ->boolean(),
                TextColumn::make('runs_count')
                    ->label(__('packstub-flow::flow.fields.runs'))
                    ->counts('runs')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('latestRun.status')
                    ->label(__('packstub-flow::flow.fields.last_run'))
                    ->badge()
                    ->description(fn (Workflow $record): ?string => $record->latestRun?->started_at?->diffForHumans())
                    ->placeholder(__('packstub-flow::flow.fields.never_ran')),
                TextColumn::make('updated_at')
                    ->label(__('packstub-flow::flow.fields.updated_at'))
                    ->since()
                    ->sortable()
                    ->toggleable(),
            ])
            ->defaultSort('updated_at', 'desc')
            ->filters([
                TernaryFilter::make('is_active')->label(__('packstub-flow::flow.fields.is_active')),
            ])
            ->recordActions([
                static::runNowAction(),
                EditAction::make(),
                ReplicateAction::make()
                    ->excludeAttributes(['is_active', 'runs_count'])
                    ->beforeReplicaSaved(function (Model $replica): void {
                        $replica->name = __('packstub-flow::flow.actions.copy_of', ['name' => $replica->name]);
                        $replica->is_active = false;
                    }),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->modifyQueryUsing(fn (Builder $query): Builder => $query->with(['triggers', 'latestRun']));
    }

    public static function runNowAction(): Action
    {
        return Action::make('run')
            ->label(__('packstub-flow::flow.actions.run'))
            ->icon('heroicon-o-play')
            ->color('gray')
            ->requiresConfirmation()
            ->modalHeading(fn (Workflow $record): string => __('packstub-flow::flow.actions.run_heading', ['name' => $record->name]))
            ->modalDescription(__('packstub-flow::flow.actions.run_description'))
            ->visible(fn (Workflow $record): bool => $record->is_active && $record->triggerNodes() !== [])
            ->action(function (Workflow $record): void {
                $run = Flow::run($record, ['manual' => true]);

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
            });
    }

    public static function getRelations(): array
    {
        return [
            RunsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWorkflows::route('/'),
            'create' => Pages\CreateWorkflow::route('/create'),
            'edit' => Pages\EditWorkflow::route('/{record}/edit'),
        ];
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
