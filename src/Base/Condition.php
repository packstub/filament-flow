<?php

namespace Xlited\LaravelFlow\Base;

abstract class Condition extends Node
{
    protected string $type = 'condition';

    abstract public function evaluate(array $data, array $payload): bool;
}
