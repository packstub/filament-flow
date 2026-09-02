<?php

namespace Packstub\Flow\Tests\Fixtures;

/**
 * An order whose status cannot be mass-assigned.
 */
class GuardedOrder extends Order
{
    protected $guarded = ['status'];
}
