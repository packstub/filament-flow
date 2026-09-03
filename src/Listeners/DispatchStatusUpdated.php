<?php

namespace Packstub\Flow\Listeners;

use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\StatusChanged;
use Spatie\ModelStatus\Events\StatusUpdated;

class DispatchStatusUpdated
{
    public function handle(StatusUpdated $event): void
    {
        Flow::dispatch(StatusChanged::class, [
            'model' => $event->model,
            'from' => $event->oldStatus?->name,
            'to' => $event->newStatus->name,
            'reason' => $event->newStatus->reason,
        ]);
    }
}
