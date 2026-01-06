<?php

namespace Xlited\LaravelFlow\Listeners;

use Illuminate\Auth\Events\Registered;
use Xlited\LaravelFlow\Facades\LaravelFlow;
use Xlited\LaravelFlow\Nodes\Triggers\UserRegistered;

class TriggerWorkflowsListener
{
    public function handle(Registered $event): void
    {
        if (isset($event->user)) {
            LaravelFlow::dispatch(UserRegistered::class, ['model' => $event->user]);
        }
    }
}
