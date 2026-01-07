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
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>';
    }

    public function getFormSchema(): array
    {
        return [];
    }
}
