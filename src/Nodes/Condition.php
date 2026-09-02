<?php

namespace Packstub\Flow\Nodes;

use Packstub\Flow\Enums\NodeType;

abstract class Condition extends Node
{
    public function getType(): NodeType
    {
        return NodeType::Condition;
    }

    public function getOutputs(): array
    {
        return [
            'true' => __('packstub-flow::flow.builder.true'),
            'false' => __('packstub-flow::flow.builder.false'),
        ];
    }

    /**
     * True continues along the "true" edge, false along the "false" edge.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    abstract public function evaluate(array $config, array $payload): bool;
}
