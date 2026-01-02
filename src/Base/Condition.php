<?php

namespace Xlited\LaravelFlow\Base;

abstract class Condition
{
    abstract public function getName(): string;

    abstract public function getDescription(): string;

    abstract public function evaluate(array $data, array $payload): bool;

    public function getIcon(): ?string
    {
        return null;
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
            'type' => 'condition',
        ];
    }
}
