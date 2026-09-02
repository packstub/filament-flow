<?php

namespace Packstub\Flow\Listeners;

use Illuminate\Auth\Events\Registered;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\UserRegistered;

class TriggerWorkflowsListener
{
    public function handle(Registered $event): void
    {
        if (isset($event->user)) {
            Flow::dispatch(UserRegistered::class, ['model' => $event->user]);
        }
    }
}
