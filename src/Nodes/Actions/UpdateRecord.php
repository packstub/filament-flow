<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;

/**
 * Updates the record that started the run.
 */
class UpdateRecord extends Action
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.update_record.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.update_record.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-pencil-square';
    }

    public function getFormSchema(): array
    {
        return [
            KeyValue::make('attributes')
                ->label(__('packstub-flow::flow.nodes.update_record.attributes'))
                ->keyLabel(__('packstub-flow::flow.nodes.update_record.attribute'))
                ->valueLabel(__('packstub-flow::flow.nodes.update_record.value'))
                ->required(),
            Toggle::make('silently')
                ->label(__('packstub-flow::flow.nodes.update_record.silently'))
                ->helperText(__('packstub-flow::flow.nodes.update_record.silently_help'))
                ->default(true),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $model = $payload['model'] ?? null;

        if (! $model instanceof Model) {
            throw new WorkflowException('Update record needs a record in the payload; use it after a record trigger.');
        }

        $attributes = $this->interpolateArray(array_filter((array) ($config['attributes'] ?? []), fn ($key) => $key !== '', ARRAY_FILTER_USE_KEY), $payload);

        if ($attributes === []) {
            return;
        }

        $model->forceFill($attributes);

        if ($config['silently'] ?? true) {
            $model->saveQuietly();
        } else {
            $model->save();
        }
    }
}
