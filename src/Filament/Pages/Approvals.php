<?php

namespace Packstub\Flow\Filament\Pages;

use BackedEnum;
use Filament\Actions\Action;
use Filament\Forms\Components\Textarea;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Models\WorkflowWait;
use UnitEnum;

/**
 * Pending approvals for the signed-in user: approve or reject with an
 * optional comment. Users who may manage workflows also see (and may
 * cancel) every pending wait.
 */
class Approvals extends Page implements HasTable
{
    use InteractsWithTable;

    protected static ?string $slug = 'workflow-approvals';

    protected string $view = 'packstub-flow::pages.approvals';

    public static function getNavigationLabel(): string
    {
        return __('packstub-flow::flow.approvals.title');
    }

    public function getTitle(): string
    {
        return __('packstub-flow::flow.approvals.title');
    }

    public function getSubheading(): ?string
    {
        return __('packstub-flow::flow.approvals.intro');
    }

    public static function getNavigationIcon(): string|BackedEnum|null
    {
        return 'heroicon-o-hand-thumb-up';
    }

    public static function getNavigationGroup(): string|UnitEnum|null
    {
        return static::plugin()?->getNavigationGroup() ?? config('packstub-flow.navigation.group');
    }

    public static function getNavigationSort(): ?int
    {
        $sort = static::plugin()?->getNavigationSort() ?? config('packstub-flow.navigation.sort');

        return $sort === null ? null : $sort + 3;
    }

    public static function getNavigationBadge(): ?string
    {
        try {
            $count = static::pendingForCurrentUser()->count();
        } catch (\Throwable) {
            return null;
        }

        return $count > 0 ? (string) $count : null;
    }

    public static function getNavigationBadgeColor(): string|array|null
    {
        return 'warning';
    }

    public static function canAccess(): bool
    {
        return auth()->check();
    }

    /**
     * @return Builder<WorkflowWait>
     */
    public static function pendingForCurrentUser(): Builder
    {
        return Flow::waitModel()::query()->approvals()->pending()->forApprover(auth()->user()?->getAttribute('email'));
    }

    public function table(Table $table): Table
    {
        $manages = static::plugin()?->isAuthorized() ?? true;

        return $table
            ->query(fn (): Builder => $manages
                ? Flow::waitModel()::query()->approvals()->with(['workflow', 'run'])
                : static::pendingForCurrentUser()->with(['workflow', 'run']))
            ->defaultSort('created_at', 'desc')
            ->columns([
                TextColumn::make('meta.title')
                    ->label(__('packstub-flow::flow.approvals.request'))
                    ->description(fn (WorkflowWait $record): ?string => $record->meta['body'] ?? null)
                    ->wrap()
                    ->searchable(query: fn (Builder $query, string $search): Builder => $query->where('meta->title', 'like', "%{$search}%")),
                TextColumn::make('workflow.name')
                    ->label(__('packstub-flow::flow.resource.label'))
                    ->toggleable(),
                TextColumn::make('meta.subject')
                    ->label(__('packstub-flow::flow.runs.subject'))
                    ->placeholder('—')
                    ->toggleable(),
                TextColumn::make('status')
                    ->label(__('packstub-flow::flow.runs.status_label'))
                    ->badge()
                    ->formatStateUsing(fn (WorkflowWait $record): string => __('packstub-flow::flow.approvals.statuses.'.($record->outcome ?: $record->status)))
                    ->color(fn (WorkflowWait $record): string => match ($record->outcome ?: $record->status) {
                        'approved' => 'success',
                        'rejected' => 'danger',
                        WorkflowWait::PENDING => 'warning',
                        default => 'gray',
                    }),
                TextColumn::make('created_at')
                    ->label(__('packstub-flow::flow.approvals.requested'))
                    ->since()
                    ->sortable(),
                TextColumn::make('expires_at')
                    ->label(__('packstub-flow::flow.approvals.expires'))
                    ->since()
                    ->placeholder('—')
                    ->toggleable(),
                TextColumn::make('resolved_by')
                    ->label(__('packstub-flow::flow.approvals.decided_by'))
                    ->placeholder('—')
                    ->toggleable(),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->options([
                        WorkflowWait::PENDING => __('packstub-flow::flow.approvals.statuses.pending'),
                        WorkflowWait::RESOLVED => __('packstub-flow::flow.approvals.statuses.resolved'),
                        WorkflowWait::EXPIRED => __('packstub-flow::flow.approvals.statuses.expired'),
                        WorkflowWait::CANCELLED => __('packstub-flow::flow.approvals.statuses.cancelled'),
                    ])
                    ->default(WorkflowWait::PENDING),
            ])
            ->recordActions([
                $this->decisionAction('approve', 'approved')->color('success')->icon('heroicon-o-check'),
                $this->decisionAction('reject', 'rejected')->color('danger')->icon('heroicon-o-x-mark'),
                Action::make('cancel')
                    ->label(__('packstub-flow::flow.approvals.cancel'))
                    ->icon('heroicon-o-no-symbol')
                    ->color('gray')
                    ->requiresConfirmation()
                    ->visible(fn (WorkflowWait $record): bool => $manages && $record->isPending())
                    ->action(function (WorkflowWait $record): void {
                        Flow::resolveWait($record, WorkflowWait::TIMED_OUT, ['cancelled' => true], auth()->user()?->getAttribute('email'));
                        Flow::waitModel()::query()->whereKey($record->getKey())->update(['status' => WorkflowWait::CANCELLED]);

                        Notification::make()->title(__('packstub-flow::flow.approvals.cancelled'))->success()->send();
                    }),
            ])
            ->poll('30s');
    }

    protected function decisionAction(string $name, string $outcome): Action
    {
        return Action::make($name)
            ->label(__("packstub-flow::flow.approvals.{$name}"))
            ->button()
            ->schema([
                Textarea::make('comment')
                    ->label(__('packstub-flow::flow.approvals.comment'))
                    ->rows(2)
                    ->maxLength(1000),
            ])
            ->modalHeading(fn (WorkflowWait $record): string => (string) ($record->meta['title'] ?? __("packstub-flow::flow.approvals.{$name}")))
            ->modalDescription(fn (WorkflowWait $record): ?string => $record->meta['body'] ?? null)
            ->modalSubmitActionLabel(__("packstub-flow::flow.approvals.{$name}"))
            ->visible(fn (WorkflowWait $record): bool => $record->isPending() && $record->canBeDecidedBy(auth()->user()?->getAttribute('email')))
            ->action(function (WorkflowWait $record, array $data) use ($outcome): void {
                $by = auth()->user()?->getAttribute('email') ?? (string) auth()->id();

                if (Flow::resolveWait($record, $outcome, ['comment' => $data['comment'] ?? null], $by)) {
                    Notification::make()
                        ->title(__('packstub-flow::flow.approvals.decided', ['title' => $record->meta['title'] ?? '', 'outcome' => __("packstub-flow::flow.approvals.outcomes.{$outcome}")]))
                        ->success()
                        ->send();
                } else {
                    Notification::make()->title(__('packstub-flow::flow.approvals.already_decided', ['title' => $record->meta['title'] ?? '', 'outcome' => $record->fresh()->outcome]))->warning()->send();
                }
            });
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
