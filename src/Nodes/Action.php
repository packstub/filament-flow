<?php

namespace Packstub\Flow\Nodes;

use Packstub\Flow\Enums\NodeType;

abstract class Action extends Node
{
    /** @var array<string, mixed>|null */
    protected ?array $output = null;

    public function getType(): NodeType
    {
        return NodeType::Action;
    }

    /**
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    abstract public function handle(array $config, array $payload): void;

    /**
     * Expose values to the nodes after this one. They are available as
     * {{ last.key }} and {{ outputs.<node id>.key }} for the rest of the branch.
     *
     * @param  array<string, mixed>  $data
     */
    protected function output(array $data): void
    {
        $this->output = $data;
    }

    /**
     * @return array<string, mixed>|null
     *
     * @internal Called by the runner after handle().
     */
    public function pullOutput(): ?array
    {
        $output = $this->output;
        $this->output = null;

        return $output;
    }
}
