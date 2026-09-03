<?php

namespace Packstub\Flow\Nodes;

use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Support\Placeholders;

abstract class Action extends Node
{
    /** @var array<string, mixed>|null */
    protected ?array $output = null;

    /** @var array<string, mixed>|null what the step log stores instead of the full output */
    protected ?array $outputSummary = null;

    /** @var array<string, mixed> */
    protected array $payloadChanges = [];

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
     * Pass a summary when the output is large (a list of records): the step
     * log stores the summary, the branch gets the full data.
     *
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>|null  $summary
     */
    protected function output(array $data, ?array $summary = null): void
    {
        $this->output = $data;
        $this->outputSummary = $summary;
    }

    /**
     * Replace a top-level payload key for the rest of the branch — "continue
     * with the created record as {{ model }}".
     */
    protected function setPayloadValue(string $key, mixed $value): void
    {
        $this->payloadChanges[$key] = $value;
    }

    /**
     * What a dry run shows instead of running the action: the settings with
     * placeholders filled in. Override for a friendlier description.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public function preview(array $config, array $payload): array
    {
        return Placeholders::renderArray($config, $payload);
    }

    /**
     * @return array{0: array<string, mixed>|null, 1: array<string, mixed>|null, 2: array<string, mixed>}
     *
     * @internal Called by the runner after handle(): [output, log summary, payload changes].
     */
    public function pullResult(): array
    {
        $result = [$this->output, $this->outputSummary, $this->payloadChanges];
        $this->output = $this->outputSummary = null;
        $this->payloadChanges = [];

        return $result;
    }

    /**
     * @return array<string, mixed>|null
     *
     * @internal Kept for custom runners; prefer pullResult().
     */
    public function pullOutput(): ?array
    {
        return $this->pullResult()[0];
    }
}
