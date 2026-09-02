<?php

namespace Packstub\Flow\Nodes\Triggers;

use Packstub\Flow\Nodes\Trigger;

/**
 * Started from the "Run now" button in the panel, or with Flow::run().
 */
class Manual extends Trigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.manual.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.manual.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-play';
    }
}
