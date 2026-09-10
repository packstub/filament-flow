<?php

namespace Packstub\Flow\Listeners;

use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\StateTransitioned;
use Spatie\ModelStates\Events\StateChanged;

class DispatchStateChanged
{
    public function handle(StateChanged $event): void
    {
        $from = $event->initialState;
        $to = $event->finalState;

        Flow::dispatch(StateTransitioned::class, [
            'model' => $event->model,
            'field' => $event->field,
            'from' => $from?->getValue(),
            'to' => $to?->getValue(),
            'from_state' => $from,
            'to_state' => $to,
        ]);
    }
}
