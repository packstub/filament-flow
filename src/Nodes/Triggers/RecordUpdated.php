<?php

namespace Packstub\Flow\Nodes\Triggers;

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

    public function getPlaceholders(): array
    {
        return [
            ...parent::getPlaceholders(),
            '{{ original.status }}' => __('packstub-flow::flow.placeholders.original'),
            '{{ changes.status }}' => __('packstub-flow::flow.placeholders.changes'),
        ];
    }
}
