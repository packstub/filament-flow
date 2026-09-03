<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\MassAssignmentException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\ModelFinder;
use Packstub\Flow\Support\Placeholders;

/**
 * Creates a record — on its own, or through a relationship of the record
 * that started the run ("add a note to this order").
 */
class CreateRecord extends Action
{
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
                ->options(fn (): array => ModelFinder::options())
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
            Toggle::make('force')
                ->label(__('packstub-flow::flow.nodes.update_record.force'))
                ->helperText(__('packstub-flow::flow.nodes.update_record.force_help'))
                ->default(false),
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

    public function handle(array $config, array $payload): void
    {
        $class = $config['model_class'] ?? null;

        if (! is_string($class) || ! is_a($class, Model::class, true)) {
            throw new WorkflowException('Create record: choose a record type.');
        }

        $attributes = [];

        foreach ((array) ($config['attributes'] ?? []) as $key => $value) {
            if ($key === '') {
                continue;
            }

            $attributes[$key] = is_string($value) && Placeholders::isSingle($value)
                ? Placeholders::raw($value, $payload)
                : $this->interpolate(is_string($value) ? $value : Placeholders::stringify($value), $payload);
        }

        $relation = trim((string) ($config['relation'] ?? ''));
        $parent = $payload['model'] ?? null;
        $relationship = null;

        if ($relation !== '') {
            if (! $parent instanceof Model) {
                throw new WorkflowException("Create record: the relationship [{$relation}] needs a record in the payload.");
            }

            if (! method_exists($parent, $relation) || ! ($relationship = $parent->{$relation}()) instanceof Relation) {
                throw new WorkflowException("Create record: [{$relation}] is not a relationship of ".$parent::class.'.');
            }
        }

        /** @var Model $record */
        $record = $relationship ? $relationship->getRelated()->newInstance() : new $class;

        if ($config['force'] ?? false) {
            $record->forceFill($attributes);
        } else {
            try {
                $record->fill($attributes);
            } catch (MassAssignmentException $exception) {
                throw new WorkflowException("Create record: {$exception->getMessage()}. Add the attribute to \$fillable or enable \"Bypass mass-assignment protection\" on the node.");
            }

            foreach (array_keys($attributes) as $attribute) {
                if (! array_key_exists($attribute, $record->getAttributes()) && ! $record->isFillable($attribute)) {
                    throw new WorkflowException("Create record: [{$attribute}] is not fillable on ".$record::class.'. Add it to $fillable or enable "Bypass mass-assignment protection" on the node.');
                }
            }
        }

        $save = function () use ($record, $relationship): void {
            if ($relationship && method_exists($relationship, 'save')) {
                $relationship->save($record);
            } else {
                $record->save();
            }
        };

        ($config['silently'] ?? true) ? Model::withoutEvents($save) : $save();

        if ($config['use_as_model'] ?? false) {
            $this->setPayloadValue('model', $record);
        }

        $this->output(
            ['id' => $record->getKey(), 'type' => $record::class, 'record' => $record],
            ['id' => $record->getKey(), 'type' => $record::class],
        );
    }
}
