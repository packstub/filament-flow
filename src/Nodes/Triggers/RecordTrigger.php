<?php

namespace Packstub\Flow\Nodes\Triggers;

use Filament\Forms\Components\Select;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Nodes\Trigger;
use Packstub\Flow\Support\ModelFinder;

abstract class RecordTrigger extends Trigger
{
    public function getFormSchema(): array
    {
        return [
            Select::make('model_class')
                ->label(__('packstub-flow::flow.nodes.record.model'))
                ->options(fn (): array => ModelFinder::options())
                ->searchable()
                ->required()
                ->helperText(__('packstub-flow::flow.nodes.record.model_help')),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        $model = $payload['model'] ?? null;
        $class = $config['model_class'] ?? null;

        if (! $model instanceof Model) {
            return false;
        }

        return ! $class || $model instanceof $class;
    }

    public function getPlaceholders(): array
    {
        return [
            '{{ model.name }}' => __('packstub-flow::flow.placeholders.model'),
            '{{ model.team.name }}' => __('packstub-flow::flow.placeholders.model_relation'),
        ];
    }
}
