<?php

namespace Xlited\LaravelFlow\Filament\Resources;

use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Xlited\LaravelFlow\Filament\Resources\WorkflowResource\Pages;
use Xlited\LaravelFlow\Models\Workflow;
use Xlited\LaravelFlow\Filament\Forms\Components\FlowBuilder;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Actions;
use Filament\Schemas\Schema;

class WorkflowResource extends Resource
{
    protected static ?string $model = Workflow::class;

    protected static \BackedEnum|string|null $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make()
                    ->tabs([
                        Tabs\Tab::make('General')
                            ->schema([
                                Section::make()
                                    ->schema([
                                        Forms\Components\TextInput::make('name')
                                            ->required()
                                            ->maxLength(255),
                                        Forms\Components\Textarea::make('description')
                                            ->maxLength(65535)
                                            ->columnSpanFull(),
                                        // trigger_type removed from form, handled via FlowBuilder graph
                                        Forms\Components\Toggle::make('is_active')
                                            ->required(),
                                    ]),
                            ]),
                        Tabs\Tab::make('Flow')
                            ->schema([
                                FlowBuilder::make('payload')
                                    ->hiddenLabel()
                                    ->columnSpanFull(),
                            ]),
                    ])
                    ->contained(false)
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                // trigger_type removed from table display for now
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                Actions\EditAction::make(),
                Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Actions\BulkActionGroup::make([
                    Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
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
}
