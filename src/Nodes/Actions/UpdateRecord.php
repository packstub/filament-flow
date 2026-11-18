<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\FillsRecords;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\RecordGuard;

/**
 * Updates the record that started the run. Attributes go through the
 * model's mass-assignment rules ($fillable / $guarded); the record must be
 * of an allowed model and, in a tenant's run, the tenant's.
 */
class UpdateRecord extends Action
{
    use FillsRecords;
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
            static::forceToggle(),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $model = $payload['model'] ?? null;

        if (! $model instanceof Model) {
            throw new WorkflowException('Update record needs a record in the payload; use it after a record trigger.');
        }

        // Only a record of an allowed model, and of the run's tenant.
        RecordGuard::assertAllowed($model::class, $this->getName());
        RecordGuard::assertOwned($model, $this->getName());

        $attributes = $this->attributesFrom($config, $payload);

        if ($attributes === []) {
            return;
        }

        $this->fillRecord($model, $attributes, $config);

        // A tenant's run cannot move the record to another tenant either.
        $this->saveWithinTenant($model, fn () => ($config['silently'] ?? true) ? $model->saveQuietly() : $model->save());

        $this->output(['changes' => $model->getChanges()]);
    }
}
