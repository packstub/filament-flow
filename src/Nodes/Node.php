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

    /**
     * Whether the node can be offered at all — false when a package it
     * depends on is not installed. Unavailable nodes are never registered.
     */
    public static function isAvailable(): bool
    {
        return true;
    }

    /**
     * The output handles drawn on the canvas, id => label. Actions have a
     * single "output"; a node with several outcomes (a loop, an approval)
     * lists them here and the runner follows the edges leaving the handle
     * it picks.
     *
     * @return array<string, string>
     */
    public function getOutputs(): array
    {
        return ['output' => __('packstub-flow::flow.builder.next')];
    }

    public static function make(): static
    {
        return app(static::class);
    }

    /**
     * @return array{identifier: class-string<static>, type: string, name: string, description: string, icon: string|null, outputs: array<int, array{id: string, label: string}>}
     */
    public function toArray(): array
    {
        $outputs = [];

        foreach ($this->getOutputs() as $id => $label) {
            $outputs[] = ['id' => (string) $id, 'label' => (string) $label];
        }

        return [
            'identifier' => static::class,
            'type' => $this->getType()->value,
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'icon' => $this->renderIcon(),
            'outputs' => $outputs,
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
