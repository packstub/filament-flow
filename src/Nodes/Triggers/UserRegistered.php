<?php

namespace Packstub\Flow\Nodes\Triggers;

use Packstub\Flow\Nodes\Trigger;

/**
 * Fires on Laravel's Illuminate\Auth\Events\Registered event.
 */
class UserRegistered extends Trigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.user_registered.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.user_registered.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-user-plus';
    }

    public function getPlaceholders(): array
    {
        return ['{{ model.email }}' => __('packstub-flow::flow.placeholders.user')];
    }
}
