<?php

namespace Packstub\Flow\Tests\Fixtures;

use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Packstub\Flow\Filament\Actions\RunWorkflowAction;
use Packstub\Flow\Filament\Actions\RunWorkflowBulkAction;
use Packstub\Flow\Tests\Fixtures\OrderResource\Pages\EditOrder;
use Packstub\Flow\Tests\Fixtures\OrderResource\Pages\ListOrders;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $slug = 'orders';

    public static function form(Schema $schema): Schema
    {
        return $schema->components([TextInput::make('reference')]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([TextColumn::make('reference')])
            ->recordActions([RunWorkflowAction::make()])
            ->toolbarActions([RunWorkflowBulkAction::make()]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListOrders::route('/'),
            'edit' => EditOrder::route('/{record}/edit'),
        ];
    }
}
