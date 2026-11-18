<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\FillsRecords;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\RecordGuard;

/**
 * Creates a record — on its own, or through a relationship of the record
 * that started the run ("add a note to this order").
 */
class CreateRecord extends Action
{
    use FillsRecords;
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.create_record.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.create_record.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-document-plus';
    }

    public function getFormSchema(): array
    {
        return [
            Select::make('model_class')
                ->label(__('packstub-flow::flow.nodes.record.model'))
                ->options(fn (): array => RecordGuard::options())
                ->searchable()
                ->required(),
            TextInput::make('relation')
                ->label(__('packstub-flow::flow.nodes.create_record.relation'))
                ->placeholder('notes')
                ->helperText(__('packstub-flow::flow.nodes.create_record.relation_help')),
            KeyValue::make('attributes')
                ->label(__('packstub-flow::flow.nodes.update_record.attributes'))
                ->keyLabel(__('packstub-flow::flow.nodes.update_record.attribute'))
                ->valueLabel(__('packstub-flow::flow.nodes.update_record.value'))
                ->required(),
            Toggle::make('silently')
                ->label(__('packstub-flow::flow.nodes.create_record.silently'))
                ->helperText(__('packstub-flow::flow.nodes.create_record.silently_help'))
                ->default(true),
            static::forceToggle(),
            Toggle::make('use_as_model')
                ->label(__('packstub-flow::flow.nodes.create_record.use_as_model'))
                ->helperText(__('packstub-flow::flow.nodes.create_record.use_as_model_help'))
                ->default(false),
        ];
    }

    public function getPlaceholders(): array
    {
        return [
            ...Placeholders::documentation(),
            '{{ last.id }}' => __('packstub-flow::flow.placeholders.created_id'),
            '{{ last.record.name }}' => __('packstub-flow::flow.placeholders.created_record'),
        ];
    }

    public function getConfigProblems(array $config, string $label): array
    {
        $class = $config['model_class'] ?? null;

        return filled($class) && ! RecordGuard::allows($class) ? [RecordGuard::notAllowedMessage((string) $class, $label)] : [];
    }

    public function handle(array $config, array $payload): void
    {
        $name = $this->getName();
        $class = RecordGuard::assertAllowed($config['model_class'] ?? null, $name);

        $attributes = $this->attributesFrom($config, $payload);

        $relation = trim((string) ($config['relation'] ?? ''));
        $parent = $payload['model'] ?? null;
        $relationship = null;

        if ($relation !== '') {
            if (! $parent instanceof Model) {
                throw new WorkflowException("{$name}: the relationship [{$relation}] needs a record in the payload.");
            }

            // The parent must be a record this run may use, and the method a
            // declared relationship (never delete() or any other method).
            RecordGuard::assertAllowed($parent::class, $name);
            RecordGuard::assertOwned($parent, $name);
            $relationship = RecordGuard::relation($parent, $relation, $name);
        }

        /** @var Model $record */
        $record = $relationship ? $relationship->getRelated()->newInstance() : new $class;

        // The relationship decides the model: it must be allowed as well.
        RecordGuard::assertAllowed($record::class, $name);

        $this->fillRecord($record, $attributes, $config);

        // Whatever the attributes said, a tenant's run creates the tenant's records.
        RecordGuard::attachTenant($record);

        $save = function () use ($record, $relationship): void {
            if ($relationship && method_exists($relationship, 'save')) {
                $relationship->save($record);
            } else {
                $record->save();
            }
        };

        $this->saveWithinTenant($record, fn () => ($config['silently'] ?? true) ? Model::withoutEvents($save) : $save(), throughParent: $relationship !== null && method_exists($relationship, 'save'));

        if ($config['use_as_model'] ?? false) {
            $this->setPayloadValue('model', $record);
        }

        $this->output(
            ['id' => $record->getKey(), 'type' => $record::class, 'record' => $record],
            ['id' => $record->getKey(), 'type' => $record::class],
        );
    }
}
