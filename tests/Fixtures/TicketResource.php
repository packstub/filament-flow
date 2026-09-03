<?php

namespace Packstub\Flow\Tests\Fixtures;

use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Packstub\Flow\Tests\Fixtures\TicketResource\Pages\ManageTickets;

/**
 * A "simple" resource: one Manage page with modals and no record pages.
 */
class TicketResource extends Resource
{
    protected static ?string $model = Ticket::class;

    protected static ?string $slug = 'tickets';

    public static function form(Schema $schema): Schema
    {
        return $schema->components([TextInput::make('title')]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([TextColumn::make('title')]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageTickets::route('/'),
        ];
    }
}
