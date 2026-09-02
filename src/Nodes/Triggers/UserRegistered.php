<?php

namespace Packstub\Flow\Nodes\Triggers;

use Packstub\Flow\Base\Trigger;

class UserRegistered extends Trigger
{
    public function getName(): string
    {
        return 'User Registered';
    }

    public function getDescription(): string
    {
        return 'Fires when a new user registers on the platform.';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-user-plus';
    }
    public function getFormSchema(): array
    {
        return [];
    }
}
