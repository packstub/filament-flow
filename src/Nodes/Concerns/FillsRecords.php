<?php

namespace Packstub\Flow\Nodes\Concerns;

use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\MassAssignmentException;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\RecordGuard;

/**
 * Writing attributes to a record from a node's settings: through the
 * model's $fillable / $guarded rules, and inside the run's tenant.
 *
 * @mixin Action
 */
trait FillsRecords
{
    /**
     * The "Bypass mass-assignment protection" toggle, offered only when the
     * app allows it (packstub-flow.records.force_fill).
     */
    protected static function forceToggle(): Toggle
    {
        return Toggle::make('force')
            ->label(__('packstub-flow::flow.nodes.update_record.force'))
            ->helperText(__('packstub-flow::flow.nodes.update_record.force_help'))
            ->visible(fn (): bool => (bool) config('packstub-flow.records.force_fill', false))
            ->default(false);
    }

    /**
     * The node's attributes with placeholders filled in; a bare placeholder
     * keeps its type (null, number, boolean, array).
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    protected function attributesFrom(array $config, array $payload): array
    {
        $attributes = [];

        foreach ((array) ($config['attributes'] ?? []) as $key => $value) {
            if ($key === '') {
                continue;
            }

            $attributes[$key] = is_string($value) && Placeholders::isSingle($value)
                ? Placeholders::raw($value, $payload)
                : $this->interpolate(is_string($value) ? $value : Placeholders::stringify($value), $payload);
        }

        return $attributes;
    }

    /**
     * Fill only fillable attributes. "Bypass mass-assignment protection"
     * applies when the app allows it, and never in a tenant's run: the
     * people who build a tenant's workflows are that tenant's members.
     *
     * @param  array<string, mixed>  $attributes
     * @param  array<string, mixed>  $config
     */
    protected function fillRecord(Model $record, array $attributes, array $config): void
    {
        $forceAsked = (bool) ($config['force'] ?? false);

        if ($forceAsked && config('packstub-flow.records.force_fill', false) && RecordGuard::tenant() === null) {
            $record->forceFill($attributes);

            return;
        }

        foreach (array_keys($attributes) as $attribute) {
            if (! $record->isFillable((string) $attribute)) {
                throw new WorkflowException($forceAsked
                    ? __('packstub-flow::flow.records.force_not_allowed', ['node' => $this->getName(), 'attribute' => $attribute, 'model' => class_basename($record)])
                    : "{$this->getName()}: [{$attribute}] is not fillable on ".$record::class.'. Add it to $fillable.');
            }
        }

        try {
            $record->fill($attributes);
        } catch (MassAssignmentException $exception) {
            throw new WorkflowException("{$this->getName()}: {$exception->getMessage()}. Add the attribute to \$fillable.");
        }
    }

    /**
     * Save, and in a tenant's run make sure the record still belongs to the
     * tenant afterwards (rolled back otherwise). A record created through a
     * relationship of the tenant's record, with no tenant link of its own (a
     * note on an order), is the tenant's through its parent.
     *
     * @param  callable(): mixed  $save
     */
    protected function saveWithinTenant(Model $record, callable $save, bool $throughParent = false): void
    {
        $tenant = RecordGuard::tenant();

        if ($tenant === null || $throughParent && ! RecordGuard::isScopable($record, $tenant)) {
            $save();

            return;
        }

        $record->getConnection()->transaction(function () use ($record, $save): void {
            $save();

            RecordGuard::assertOwned($record, $this->getName());
        });
    }
}
