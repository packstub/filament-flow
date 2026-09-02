<?php

namespace Packstub\Flow\Contracts;

use DateTimeInterface;

/**
 * A trigger that packstub-flow:cron asks every minute for the payloads that
 * are due ("a date on a record is reached"), rather than one dispatched by
 * an event.
 */
interface Pollable
{
    /**
     * @param  array<string, mixed>  $config
     * @return iterable<array<string, mixed>> one payload per run to start
     */
    public function poll(array $config, DateTimeInterface $now): iterable;
}
