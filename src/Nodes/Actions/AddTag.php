<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Spatie\Tags\HasTags;

/**
 * Attaches, detaches or syncs spatie/laravel-tags tags on the record that
 * started the run. Available when the package is installed.
 */
class AddTag extends Action
{
    use InterpolatesPlaceholders;

    public static function isAvailable(): bool
    {
        return trait_exists(HasTags::class);
    }

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.add_tag.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.add_tag.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-tag';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('tags')
                ->label(__('packstub-flow::flow.nodes.add_tag.tags'))
                ->placeholder('vip, {{ model.country }}')
                ->helperText(__('packstub-flow::flow.nodes.add_tag.tags_help'))
                ->required(),
            TextInput::make('type')
                ->label(__('packstub-flow::flow.nodes.add_tag.type'))
                ->placeholder('segment'),
            Select::make('mode')
                ->label(__('packstub-flow::flow.nodes.add_tag.mode'))
                ->options([
                    'attach' => __('packstub-flow::flow.nodes.add_tag.modes.attach'),
                    'detach' => __('packstub-flow::flow.nodes.add_tag.modes.detach'),
                    'sync' => __('packstub-flow::flow.nodes.add_tag.modes.sync'),
                ])
                ->default('attach')
                ->required(),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $model = $payload['model'] ?? null;

        if (! $model instanceof Model) {
            throw new WorkflowException('Add tag needs a record in the payload; use it after a record trigger.');
        }

        if (! in_array(HasTags::class, class_uses_recursive($model), true)) {
            throw new WorkflowException('Add tag: '.$model::class.' does not use Spatie\Tags\HasTags.');
        }

        $tags = array_values(array_filter(array_map('trim', explode(',', $this->interpolate($config['tags'] ?? '', $payload)))));
        $type = trim($this->interpolate($config['type'] ?? '', $payload)) ?: null;

        match ($config['mode'] ?? 'attach') {
            'detach' => $model->detachTags($tags, $type),
            'sync' => $type ? $model->syncTagsWithType($tags, $type) : $model->syncTags($tags),
            default => $model->attachTags($tags, $type),
        };

        $this->output(['tags' => $tags, 'type' => $type]);
    }
}
