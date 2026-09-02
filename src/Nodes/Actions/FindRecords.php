<?php

namespace Packstub\Flow\Nodes\Actions;

use Carbon\Carbon;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Contracts\ReadOnlyAction;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\ModelFinder;
use Packstub\Flow\Support\Placeholders;
use Throwable;

/**
 * Queries records — "orders unpaid for 3 days", "users without a login this
 * month" — and exposes them as {{ last.records }} for a For each loop.
 */
class FindRecords extends Action implements ReadOnlyAction
{
    use InterpolatesPlaceholders;

    public const OPERATORS = ['=', '!=', '>', '>=', '<', '<=', 'like', 'not_like', 'in', 'not_in', 'null', 'not_null', 'before', 'after'];

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.find_records.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.find_records.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-magnifying-glass';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('model_class')
                ->label(__('packstub-flow::flow.nodes.record.model'))
                ->options(fn (): array => ModelFinder::options())
                ->searchable()
                ->required(),
            Repeater::make('conditions')
                ->label(__('packstub-flow::flow.nodes.find_records.conditions'))
                ->schema([
                    TextInput::make('attribute')
                        ->label(__('packstub-flow::flow.nodes.find_records.attribute'))
                        ->placeholder('status')
                        ->required(),
                    Select::make('operator')
                        ->label(__('packstub-flow::flow.nodes.compare.operator'))
                        ->options(array_combine(self::OPERATORS, array_map(fn (string $operator): string => __("packstub-flow::flow.nodes.find_records.operators.{$operator}"), self::OPERATORS)))
                        ->default('=')
                        ->required()
                        ->live(),
                    TextInput::make('value')
                        ->label(__('packstub-flow::flow.nodes.compare.value'))
                        ->placeholder('paid')
                        ->visible(fn (Get $get): bool => ! in_array($get('operator'), ['null', 'not_null'], true)),
                ])
                ->columns(3)
                ->defaultItems(1)
                ->addActionLabel(__('packstub-flow::flow.nodes.find_records.add_condition'))
                ->helperText(__('packstub-flow::flow.nodes.find_records.conditions_help')),
            TextInput::make('order_by')
                ->label(__('packstub-flow::flow.nodes.find_records.order_by'))
                ->placeholder('created_at'),
            Select::make('direction')
                ->label(__('packstub-flow::flow.nodes.find_records.direction'))
                ->options(['asc' => __('packstub-flow::flow.nodes.find_records.asc'), 'desc' => __('packstub-flow::flow.nodes.find_records.desc')])
                ->default('asc'),
            TextInput::make('limit')
                ->label(__('packstub-flow::flow.nodes.find_records.limit'))
                ->helperText(__('packstub-flow::flow.nodes.find_records.limit_help', ['max' => (int) config('packstub-flow.max_records', 1000)]))
                ->numeric()
                ->minValue(1)
                ->default(100),
        ];
    }

    public function getPlaceholders(): array
    {
        return [
            ...Placeholders::documentation(),
            '{{ last.count }}' => __('packstub-flow::flow.placeholders.find_count'),
            '{{ last.records }}' => __('packstub-flow::flow.placeholders.find_records'),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $records = $this->query($config, $payload)->get();

        $this->output(
            ['records' => $records->all(), 'count' => $records->count(), 'ids' => $records->modelKeys()],
            ['count' => $records->count(), 'ids' => array_slice($records->modelKeys(), 0, 50)],
        );
    }

    /**
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     * @return Builder<Model>
     */
    public function query(array $config, array $payload): Builder
    {
        $class = $config['model_class'] ?? null;

        if (! is_string($class) || ! is_a($class, Model::class, true)) {
            throw new WorkflowException('Find records: choose a record type.');
        }

        $query = $class::query();

        foreach ((array) ($config['conditions'] ?? []) as $condition) {
            if (! is_array($condition) || blank($condition['attribute'] ?? null)) {
                continue;
            }

            $this->applyCondition($query, (string) $condition['attribute'], (string) ($condition['operator'] ?? '='), $condition['value'] ?? null, $payload);
        }

        if (filled($config['order_by'] ?? null)) {
            $query->orderBy((string) $config['order_by'], ($config['direction'] ?? 'asc') === 'desc' ? 'desc' : 'asc');
        }

        $limit = max(1, min((int) ($config['limit'] ?? 100), (int) config('packstub-flow.max_records', 1000)));

        return $query->limit($limit);
    }

    /**
     * @param  Builder<Model>  $query
     * @param  array<string, mixed>  $payload
     */
    protected function applyCondition(Builder $query, string $attribute, string $operator, mixed $value, array $payload): void
    {
        $value = is_string($value) && Placeholders::isSingle($value)
            ? Placeholders::raw($value, $payload)
            : $this->interpolate(is_string($value) ? $value : Placeholders::stringify($value), $payload);

        match ($operator) {
            '=', '!=', '>', '>=', '<', '<=' => $query->where($attribute, $operator, $this->scalar($value)),
            'like' => $query->where($attribute, 'like', '%'.Placeholders::stringify($value).'%'),
            'not_like' => $query->where($attribute, 'not like', '%'.Placeholders::stringify($value).'%'),
            'in' => $query->whereIn($attribute, $this->list($value)),
            'not_in' => $query->whereNotIn($attribute, $this->list($value)),
            'null' => $query->whereNull($attribute),
            'not_null' => $query->whereNotNull($attribute),
            'before' => $query->where($attribute, '<', $this->date($value)),
            'after' => $query->where($attribute, '>', $this->date($value)),
            default => throw new WorkflowException("Find records: unknown operator [{$operator}]."),
        };
    }

    protected function scalar(mixed $value): mixed
    {
        return match (true) {
            $value instanceof Model => $value->getKey(),
            $value instanceof \BackedEnum => $value->value,
            is_array($value) => json_encode($value),
            default => $value,
        };
    }

    /** @return array<int, mixed> */
    protected function list(mixed $value): array
    {
        if (is_iterable($value)) {
            return array_map($this->scalar(...), collect($value)->all());
        }

        return array_values(array_filter(array_map('trim', explode(',', Placeholders::stringify($value))), fn (string $item): bool => $item !== ''));
    }

    protected function date(mixed $value): Carbon
    {
        try {
            return $value instanceof \DateTimeInterface ? Carbon::instance($value) : Carbon::parse(Placeholders::stringify($value));
        } catch (Throwable) {
            throw new WorkflowException('Find records: "'.Placeholders::stringify($value).'" is not a date.');
        }
    }
}
