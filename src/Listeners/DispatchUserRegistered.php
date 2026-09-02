<?php

namespace Packstub\Flow\Listeners;

use Illuminate\Auth\Events\Registered;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\UserRegistered;

class DispatchUserRegistered
{
    public function handle(Registered $event): void
    {
        Flow::dispatch(UserRegistered::class, ['model' => $event->user, 'user' => $event->user]);
    }
}
