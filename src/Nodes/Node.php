<?php

namespace Packstub\Flow\Nodes;

use Filament\Schemas\Components\Component;
use Illuminate\Support\Facades\Blade;
use Packstub\Flow\Enums\NodeType;
use Throwable;

/**
 * A building block offered in the workflow builder. Subclass Trigger, Action
 * or Condition; the identifier stored in a workflow is the class name.
 */
abstract class Node
{
    abstract public function getType(): NodeType;

    abstract public function getName(): string;

    public function getDescription(): string
    {
        return '';
    }

    /**
     * A Heroicon name (heroicon-o-bolt) or raw <svg> markup.
     */
    public function getIcon(): ?string
    {
        return null;
    }

    /**
     * Filament form components for the node's settings. The values are stored
     * on the node as `config` and passed back to matches() / handle() /
     * evaluate().
     *
     * @return array<int, Component>
     */
    public function getFormSchema(): array
    {
        return [];
    }

    /**
     * Placeholders documented in the settings panel, e.g. ['model.name' => 'The record's name'].
     *
     * @return array<string, string>
     */
    public function getPlaceholders(): array
    {
        return [];
    }

    public static function make(): static
    {
        return app(static::class);
    }

    /**
     * @return array{identifier: class-string<static>, type: string, name: string, description: string, icon: string|null}
     */
    public function toArray(): array
    {
        return [
            'identifier' => static::class,
            'type' => $this->getType()->value,
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'icon' => $this->renderIcon(),
        ];
    }

    protected function renderIcon(): ?string
    {
        $icon = $this->getIcon();

        if ($icon === null || str_starts_with(trim($icon), '<svg')) {
            return $icon;
        }

        try {
            return Blade::render('<x-filament::icon :icon="$icon" class="h-5 w-5" />', ['icon' => $icon]);
        } catch (Throwable) {
            return null;
        }
    }
}
