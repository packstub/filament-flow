<?php

namespace Xlited\LaravelFlow\Base;

abstract class Action extends Node
{
    protected string $type = 'action';

    abstract public function handle(array $data, array $payload): void;
}
