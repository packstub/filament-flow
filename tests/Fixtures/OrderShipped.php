<?php

namespace Packstub\Flow\Tests\Fixtures;

class OrderShipped
{
    public function __construct(public Order $order, public string $carrier = 'DHL') {}
}
