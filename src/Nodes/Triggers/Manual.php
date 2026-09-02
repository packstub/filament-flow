<?php

namespace Packstub\Flow\Nodes\Triggers;

use Filament\Forms\Components\Select;
use Packstub\Flow\Nodes\Trigger;
use Packstub\Flow\Support\ModelFinder;

/**
 * Started from the "Run now" button in the panel, from a RunWorkflowAction
 * on any resource (with the record as {{ model }}), or with Flow::run().
 */
class Manual extends Trigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.manual.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.manual.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-play';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('model_class')
                ->label(__('packstub-flow::flow.nodes.manual.model'))
                ->options(fn (): array => ModelFinder::options())
                ->searchable()
                ->helperText(__('packstub-flow::flow.nodes.manual.model_help')),
        ];
    }

    /**
     * Whether the workflow can be started for this record from a
     * RunWorkflowAction: no record type set, or the record is of that type.
     *
     * @param  array<string, mixed>  $config
     */
    public static function acceptsRecord(array $config, object $record): bool
    {
        $class = $config['model_class'] ?? null;

        return ! $class || $record instanceof $class;
    }

    public function getPlaceholders(): array
    {
        return ['{{ model.name }}' => __('packstub-flow::flow.placeholders.manual_model')];
    }
}
