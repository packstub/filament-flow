<?php

namespace Packstub\Flow\Contracts;

/**
 * A loop: the runner visits the "body" branch once per item, with the item
 * in the payload, then continues along "done".
 */
interface Iterates
{
    /**
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     * @return iterable<mixed>
     */
    public function getItems(array $config, array $payload): iterable;

    /**
     * The payload key each item is exposed under ("item" by default).
     *
     * @param  array<string, mixed>  $config
     */
    public function getItemKey(array $config): string;

    /**
     * @param  array<string, mixed>  $config
     */
    public function getMaxIterations(array $config): int;
}
