<?php

namespace Xlited\LaravelFlow\Nodes\Triggers;

use Xlited\LaravelFlow\Base\Trigger;

class SubWorkflowTriggered extends Trigger
{
    public function getName(): string
    {
        return 'Sub-workflow Triggered';
    }

    public function getDescription(): string
    {
        return 'Triggers when this sub-workflow is explicitly started by another workflow.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-arrow-right-circle';
    }

    public function getFormSchema(): array
    {
        return [];
    }
}
