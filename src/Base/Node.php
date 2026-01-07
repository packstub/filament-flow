<?php

namespace Xlited\LaravelFlow\Base;

abstract class Node
{
    protected string $type;

    abstract public function getName(): string;

    abstract public function getDescription(): string;

    public function getIcon(): ?string
    {
        return null;
    }

    public function getFormSchema(): array
    {
        return [];
    }

    public function toArray(): array
    {
        $icon = $this->getIcon();

        if ($icon && !str_starts_with($icon, '<svg')) {
            try {
                $icon = \Illuminate\Support\Facades\Blade::render('<x-filament::icon :icon="$icon" class="w-5 h-5" />', ['icon' => $icon]);
            } catch (\Exception $e) {
                // Fallback to null or original if rendering fails
            }
        }

        return [
            'identifier' => static::class,
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'icon' => $icon,
            'type' => $this->type,
        ];
    }
}
