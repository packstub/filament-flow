<?php

namespace Packstub\Flow\Nodes;

use Packstub\Flow\Enums\NodeType;

abstract class Action extends Node
{
    public function getType(): NodeType
    {
        return NodeType::Action;
    }

    /**
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    abstract public function handle(array $config, array $payload): void;
}
