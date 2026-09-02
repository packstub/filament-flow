<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\MassAssignmentException;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Placeholders;

/**
 * Updates the record that started the run. Attributes go through the
 * model's mass-assignment rules ($fillable / $guarded) unless the node is
 * told to bypass them.
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
            Toggle::make('force')
                ->label(__('packstub-flow::flow.nodes.update_record.force'))
                ->helperText(__('packstub-flow::flow.nodes.update_record.force_help'))
                ->default(false),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $model = $payload['model'] ?? null;

        if (! $model instanceof Model) {
            throw new WorkflowException('Update record needs a record in the payload; use it after a record trigger.');
        }

        $attributes = [];

        foreach ((array) ($config['attributes'] ?? []) as $key => $value) {
            if ($key === '') {
                continue;
            }

            // A bare placeholder keeps its type (null, number, boolean, array).
            $attributes[$key] = is_string($value) && Placeholders::isSingle($value)
                ? Placeholders::raw($value, $payload)
                : $this->interpolate(is_string($value) ? $value : Placeholders::stringify($value), $payload);
        }

        if ($attributes === []) {
            return;
        }

        if ($config['force'] ?? false) {
            $model->forceFill($attributes);
        } else {
            try {
                $model->fill($attributes);
            } catch (MassAssignmentException $exception) {
                throw new WorkflowException("Update record: {$exception->getMessage()}. Add the attribute to \$fillable or enable \"Bypass mass-assignment protection\" on the node.");
            }

            $ignored = array_diff(array_keys($attributes), array_keys($model->getDirty()), array_keys($model->getAttributes()));

            if ($ignored !== [] && $model->totallyGuarded() === false) {
                foreach ($ignored as $attribute) {
                    if (! $model->isFillable($attribute)) {
                        throw new WorkflowException("Update record: [{$attribute}] is not fillable on ".$model::class.'. Add it to $fillable or enable "Bypass mass-assignment protection" on the node.');
                    }
                }
            }
        }

        if ($config['silently'] ?? true) {
            $model->saveQuietly();
        } else {
            $model->save();
        }

        $this->output(['changes' => $model->getChanges()]);
    }
}
