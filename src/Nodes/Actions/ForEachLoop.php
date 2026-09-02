<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\Support\Arrayable;
use Packstub\Flow\Contracts\Iterates;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Placeholders;

/**
 * Runs the nodes on its "Each item" handle once per item of a list — the
 * records found by Find records, an array from a webhook — with the item as
 * {{ item }}, then continues along "Done".
 */
class ForEachLoop extends Action implements Iterates
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.for_each.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.for_each.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-arrow-path-rounded-square';
    }

    public function getOutputs(): array
    {
        return [
            'body' => __('packstub-flow::flow.nodes.for_each.body'),
            'done' => __('packstub-flow::flow.nodes.for_each.done'),
        ];
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('items')
                ->label(__('packstub-flow::flow.nodes.for_each.items'))
                ->placeholder('{{ last.records }}')
                ->default('{{ last.records }}')
                ->helperText(__('packstub-flow::flow.nodes.for_each.items_help'))
                ->required(),
            TextInput::make('item_key')
                ->label(__('packstub-flow::flow.nodes.for_each.item_key'))
                ->placeholder('item')
                ->default('item')
                ->alphaDash()
                ->helperText(__('packstub-flow::flow.nodes.for_each.item_key_help')),
            TextInput::make('max_iterations')
                ->label(__('packstub-flow::flow.nodes.for_each.max_iterations'))
                ->numeric()
                ->minValue(1)
                ->default(100)
                ->helperText(__('packstub-flow::flow.nodes.for_each.max_iterations_help', ['max' => (int) config('packstub-flow.max_records', 1000)])),
        ];
    }

    public function getPlaceholders(): array
    {
        return [
            ...Placeholders::documentation(),
            '{{ item.name }}' => __('packstub-flow::flow.placeholders.item'),
            '{{ loop.number }}' => __('packstub-flow::flow.placeholders.loop'),
        ];
    }

    public function getItems(array $config, array $payload): iterable
    {
        $template = (string) ($config['items'] ?? '{{ last.records }}');

        $value = Placeholders::isSingle($template) ? Placeholders::raw($template, $payload) : $this->interpolate($template, $payload);

        return match (true) {
            $value === null || $value === '' => [],
            $value instanceof Arrayable => array_values($value->toArray()),
            is_iterable($value) => array_values(collect($value)->all()),
            is_string($value) => array_values(array_filter(array_map('trim', explode(',', $value)), fn (string $item): bool => $item !== '')),
            default => [$value],
        };
    }

    public function getItemKey(array $config): string
    {
        return trim((string) ($config['item_key'] ?? '')) ?: 'item';
    }

    public function getMaxIterations(array $config): int
    {
        return max(1, (int) ($config['max_iterations'] ?? 100));
    }

    public function handle(array $config, array $payload): void
    {
        // The runner drives the loop; nothing to do here.
    }
}
