<?php

namespace Xlited\LaravelFlow\Nodes\Triggers;

use Xlited\LaravelFlow\Base\Trigger;

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
