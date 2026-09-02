<?php

namespace Packstub\Flow\Nodes;

use Packstub\Flow\Enums\NodeType;

abstract class Condition extends Node
{
    public function getType(): NodeType
    {
        return NodeType::Condition;
    }

    /**
     * True continues along the "true" edge, false along the "false" edge.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    abstract public function evaluate(array $config, array $payload): bool;
}
