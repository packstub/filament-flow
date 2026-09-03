<?php

namespace Packstub\Flow\Nodes\Triggers;

use Carbon\CarbonImmutable;
use DateTimeInterface;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Contracts\Pollable;
use Packstub\Flow\Nodes\Trigger;
use Packstub\Flow\Support\ModelFinder;

/**
 * "3 days before {{ model.due_at }}", "1 hour after {{ model.starts_at }}":
 * packstub-flow:cron asks this trigger every minute for the records whose
 * date, shifted by the offset, falls in that minute, and starts a run for
 * each of them.
 */
class DateReached extends Trigger implements Pollable
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.date_reached.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.date_reached.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-bell-alert';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('model_class')
                ->label(__('packstub-flow::flow.nodes.record.model'))
                ->options(fn (): array => ModelFinder::options())
                ->searchable()
                ->required(),
            TextInput::make('attribute')
                ->label(__('packstub-flow::flow.nodes.date_reached.attribute'))
                ->placeholder('due_at')
                ->helperText(__('packstub-flow::flow.nodes.date_reached.attribute_help'))
                ->required(),
            TextInput::make('amount')
                ->label(__('packstub-flow::flow.nodes.date_reached.amount'))
                ->numeric()
                ->minValue(0)
                ->default(0)
                ->required(),
            Select::make('unit')
                ->label(__('packstub-flow::flow.nodes.wait.unit'))
                ->options([
                    'minutes' => __('packstub-flow::flow.nodes.wait.units.minutes'),
                    'hours' => __('packstub-flow::flow.nodes.wait.units.hours'),
                    'days' => __('packstub-flow::flow.nodes.wait.units.days'),
                ])
                ->default('days')
                ->required(),
            Select::make('direction')
                ->label(__('packstub-flow::flow.nodes.date_reached.direction'))
                ->options([
                    'before' => __('packstub-flow::flow.nodes.date_reached.directions.before'),
                    'at' => __('packstub-flow::flow.nodes.date_reached.directions.at'),
                    'after' => __('packstub-flow::flow.nodes.date_reached.directions.after'),
                ])
                ->default('before')
                ->required(),
            Toggle::make('once')
                ->label(__('packstub-flow::flow.nodes.record.once'))
                ->helperText(__('packstub-flow::flow.nodes.date_reached.once_help'))
                ->default(true),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        // Only packstub-flow:cron starts these, through poll().
        return false;
    }

    public function poll(array $config, DateTimeInterface $now): iterable
    {
        $class = $config['model_class'] ?? null;
        $attribute = trim((string) ($config['attribute'] ?? ''));

        if (! is_string($class) || ! is_a($class, Model::class, true) || $attribute === '') {
            return [];
        }

        [$from, $to] = static::window($config, $now);

        $records = $class::query()
            ->whereBetween($attribute, [$from, $to])
            ->orderBy((new $class)->getKeyName())
            ->limit((int) config('packstub-flow.max_records', 1000))
            ->get();

        foreach ($records as $record) {
            yield ['model' => $record, 'date' => $record->getAttribute($attribute), 'now' => $now];
        }
    }

    /**
     * The minute-wide window the date column must fall in for the shifted
     * moment to be "now".
     *
     * @param  array<string, mixed>  $config
     * @return array{0: CarbonImmutable, 1: CarbonImmutable}
     */
    public static function window(array $config, DateTimeInterface $now): array
    {
        $seconds = (int) ($config['amount'] ?? 0) * match ($config['unit'] ?? 'days') {
            'minutes' => 60,
            'hours' => 3600,
            default => 86400,
        };

        $shift = match ($config['direction'] ?? 'before') {
            'before' => $seconds,
            'after' => -$seconds,
            default => 0,
        };

        $from = CarbonImmutable::instance($now)->startOfMinute()->addSeconds($shift);

        return [$from, $from->addMinute()->subSecond()];
    }

    public function getPlaceholders(): array
    {
        return [
            '{{ model.name }}' => __('packstub-flow::flow.placeholders.model'),
            '{{ date }}' => __('packstub-flow::flow.placeholders.date_reached'),
        ];
    }
}
