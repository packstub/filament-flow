<?php

namespace Packstub\Flow\Nodes;

use Packstub\Flow\Enums\NodeType;

abstract class Trigger extends Node
{
    public function getType(): NodeType
    {
        return NodeType::Trigger;
    }

    /**
     * Whether a dispatched payload should start the workflow this trigger
     * belongs to. Called once per workflow with that node's config.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    public function matches(array $config, array $payload): bool
    {
        return true;
    }
}
