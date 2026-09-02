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
            'field' => property_exists($event, 'field') ? $event->field : ($to && method_exists($to, 'getField') ? $to->getField() : null),
            'from' => $from && method_exists($from, 'getValue') ? $from->getValue() : ($from ? class_basename($from) : null),
            'to' => $to && method_exists($to, 'getValue') ? $to->getValue() : ($to ? class_basename($to) : null),
            'from_state' => $from,
            'to_state' => $to,
        ]);
    }
}
