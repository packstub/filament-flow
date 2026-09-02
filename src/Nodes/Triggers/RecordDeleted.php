<?php

namespace Packstub\Flow\Nodes\Triggers;

class RecordDeleted extends RecordTrigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.record_deleted.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.record_deleted.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-trash';
    }
}
