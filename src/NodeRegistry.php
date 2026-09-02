<?php

namespace Packstub\Flow;

use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Condition;
use Packstub\Flow\Nodes\Node;
use Packstub\Flow\Nodes\Trigger;

/**
 * The triggers, actions and conditions available to the builder and the
 * runner. Only registered classes are ever instantiated from a stored
 * workflow, so a definition cannot reference arbitrary code.
 */
class NodeRegistry
{
    /** @var array<int, class-string<Trigger>> */
    protected array $triggers = [];

    /** @var array<int, class-string<Action>> */
    protected array $actions = [];

    /** @var array<int, class-string<Condition>> */
    protected array $conditions = [];

    /** @param array<int, class-string<Trigger>> $classes */
    public function registerTriggers(array $classes): static
    {
        $this->triggers = array_values(array_unique([...$this->triggers, ...static::available($classes)]));

        return $this;
    }

    /** @param array<int, class-string<Action>> $classes */
    public function registerActions(array $classes): static
    {
        $this->actions = array_values(array_unique([...$this->actions, ...static::available($classes)]));

        return $this;
    }

    /** @param array<int, class-string<Condition>> $classes */
    public function registerConditions(array $classes): static
    {
        $this->conditions = array_values(array_unique([...$this->conditions, ...static::available($classes)]));

        return $this;
    }

    /** @param class-string<Node> $class */
    public function register(string $class): static
    {
        return match (true) {
            is_a($class, Trigger::class, true) => $this->registerTriggers([$class]),
            is_a($class, Action::class, true) => $this->registerActions([$class]),
            is_a($class, Condition::class, true) => $this->registerConditions([$class]),
            default => throw new \InvalidArgumentException("{$class} is not a Trigger, Action or Condition."),
        };
    }

    /** @param array<int, class-string<Node>> $classes */
    public function forget(array $classes): static
    {
        $this->triggers = array_values(array_diff($this->triggers, $classes));
        $this->actions = array_values(array_diff($this->actions, $classes));
        $this->conditions = array_values(array_diff($this->conditions, $classes));

        return $this;
    }

    public function flush(): static
    {
        $this->triggers = $this->actions = $this->conditions = [];

        return $this;
    }

    /**
     * @template T of Node
     *
     * @param  array<int, class-string<T>>  $classes
     * @return array<int, class-string<T>>
     */
    protected static function available(array $classes): array
    {
        return array_values(array_filter($classes, fn (string $class): bool => is_a($class, Node::class, true) && $class::isAvailable()));
    }

    /** @return array<int, class-string<Trigger>> */
    public function triggers(): array
    {
        return $this->triggers;
    }

    /** @return array<int, class-string<Action>> */
    public function actions(): array
    {
        return $this->actions;
    }

    /** @return array<int, class-string<Condition>> */
    public function conditions(): array
    {
        return $this->conditions;
    }

    public function trigger(string $class): ?Trigger
    {
        return in_array($class, $this->triggers, true) ? $class::make() : null;
    }

    public function action(string $class): ?Action
    {
        return in_array($class, $this->actions, true) ? $class::make() : null;
    }

    public function condition(string $class): ?Condition
    {
        return in_array($class, $this->conditions, true) ? $class::make() : null;
    }

    public function node(string $class): ?Node
    {
        return $this->trigger($class) ?? $this->action($class) ?? $this->condition($class);
    }

    public function has(string $class): bool
    {
        return in_array($class, [...$this->triggers, ...$this->actions, ...$this->conditions], true);
    }

    /**
     * What the builder's sidebar shows, grouped by type.
     *
     * @return array{triggers: array<int, array<string, mixed>>, actions: array<int, array<string, mixed>>, conditions: array<int, array<string, mixed>>}
     */
    public function toArray(): array
    {
        $describe = fn (array $classes): array => array_map(fn (string $class): array => $class::make()->toArray(), $classes);

        return [
            NodeType::Trigger->value.'s' => $describe($this->triggers),
            NodeType::Action->value.'s' => $describe($this->actions),
            NodeType::Condition->value.'s' => $describe($this->conditions),
        ];
    }
}
