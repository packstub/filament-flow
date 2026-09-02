<?php

namespace Packstub\Flow\Filament\Resources;

use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Gate;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Resources\SecretResource\Pages;
use Packstub\Flow\FlowPlugin;
use UnitEnum;

/**
 * The secrets store: encrypted values that actions reference as
 * {{ secrets.<key> }}. Values are write-only in the panel.
 */
class SecretResource extends Resource
{
    protected static ?string $slug = 'workflow-secrets';

    public static function getModel(): string
    {
        return Flow::secretModel();
    }

    public static function getModelLabel(): string
    {
        return __('packstub-flow::flow.secrets.label');
    }

    public static function getPluralModelLabel(): string
    {
        return __('packstub-flow::flow.secrets.plural_label');
    }

    public static function getNavigationIcon(): string|BackedEnum|null
    {
        return 'heroicon-o-key';
    }

    public static function getNavigationGroup(): string|UnitEnum|null
    {
        return static::plugin()?->getNavigationGroup() ?? config('packstub-flow.navigation.group');
    }

    public static function getNavigationSort(): ?int
    {
        $sort = static::plugin()?->getNavigationSort() ?? config('packstub-flow.navigation.sort');

        return $sort === null ? null : $sort + 1;
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

    public static function getRecordTitleAttribute(): ?string
    {
        return 'key';
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('key')
                ->label(__('packstub-flow::flow.secrets.key'))
                ->helperText(__('packstub-flow::flow.secrets.key_help'))
                ->required()
                ->maxLength(80)
                ->regex('/^[A-Za-z][A-Za-z0-9_]*$/')
                ->unique(ignoreRecord: true),
            TextInput::make('value')
                ->label(__('packstub-flow::flow.secrets.value'))
                ->helperText(fn (?string $operation): string => $operation === 'edit'
                    ? __('packstub-flow::flow.secrets.value_edit_help')
                    : __('packstub-flow::flow.secrets.value_help'))
                ->password()
                ->revealable()
                ->required(fn (?string $operation): bool => $operation !== 'edit')
                ->dehydrated(fn (?string $state): bool => filled($state))
                ->maxLength(4096),
            TextInput::make('description')
                ->label(__('packstub-flow::flow.secrets.description'))
                ->maxLength(255),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('key')
                    ->label(__('packstub-flow::flow.secrets.key'))
                    ->formatStateUsing(fn (string $state): string => '{{ secrets.'.$state.' }}')
                    ->copyable()
                    ->copyableState(fn (string $state): string => '{{ secrets.'.$state.' }}')
                    ->fontFamily('mono')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('description')
                    ->label(__('packstub-flow::flow.secrets.description'))
                    ->placeholder('—')
                    ->searchable(),
                TextColumn::make('updated_at')
                    ->label(__('packstub-flow::flow.fields.updated_at'))
                    ->since()
                    ->sortable(),
            ])
            ->defaultSort('key')
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageSecrets::route('/'),
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
