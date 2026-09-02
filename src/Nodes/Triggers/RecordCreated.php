<?php

namespace Packstub\Flow\Nodes\Triggers;

class RecordCreated extends RecordTrigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.record_created.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.record_created.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-plus-circle';
    }
}
