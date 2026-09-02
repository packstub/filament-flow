<?php

namespace Packstub\Flow\Nodes\Concerns;

use Packstub\Flow\Support\Placeholders;

trait InterpolatesPlaceholders
{
    /**
     * @param  array<string, mixed>  $payload
     */
    protected function interpolate(?string $template, array $payload): string
    {
        return Placeholders::render((string) $template, $payload);
    }

    /**
     * @param  array<mixed>  $values
     * @param  array<string, mixed>  $payload
     * @return array<mixed>
     */
    protected function interpolateArray(array $values, array $payload): array
    {
        return Placeholders::renderArray($values, $payload);
    }

    /**
     * @return array<string, string>
     */
    public function getPlaceholders(): array
    {
        return Placeholders::documentation();
    }
}
