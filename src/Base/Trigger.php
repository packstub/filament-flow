<?php

namespace Xlited\LaravelFlow\Base;

abstract class Trigger
{
    abstract public function getName(): string;

    abstract public function getDescription(): string;

    public function getIcon(): ?string
    {
        return null; // Can return SVG string or icon name
    }

    public function getSchema(): array
    {
        return [];
    }

    public function toArray(): array
    {
        return [
            'identifier' => static::class,
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'icon' => $this->getIcon(),
            'schema' => $this->getSchema(),
            'type' => 'trigger',
        ];
    }
}
