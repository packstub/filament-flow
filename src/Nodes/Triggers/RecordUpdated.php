<?php

namespace Packstub\Flow\Nodes\Triggers;

use Filament\Forms\Components\TagsInput;

/**
 * Fires when a record is saved with changes; optionally only when one of a
 * list of attributes changed ("when status changes").
 */
class RecordUpdated extends RecordTrigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.record_updated.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.record_updated.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-pencil-square';
    }

    public function getFormSchema(): array
    {
        return [
            ...parent::getFormSchema(),
            TagsInput::make('watch')
                ->label(__('packstub-flow::flow.nodes.record_updated.watch'))
                ->placeholder('status')
                ->helperText(__('packstub-flow::flow.nodes.record_updated.watch_help')),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        if (! parent::matches($config, $payload)) {
            return false;
        }

        $watch = array_values(array_filter(array_map('trim', (array) ($config['watch'] ?? []))));

        if ($watch === []) {
            return true;
        }

        $changed = array_keys((array) ($payload['changes'] ?? []));

        return array_intersect($watch, $changed) !== [];
    }

    public function getPlaceholders(): array
    {
        return [
            ...parent::getPlaceholders(),
            '{{ original.status }}' => __('packstub-flow::flow.placeholders.original'),
            '{{ changes.status }}' => __('packstub-flow::flow.placeholders.changes'),
        ];
    }
}
