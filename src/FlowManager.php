<?php

namespace Packstub\Flow;

use Packstub\Flow\Base\Trigger;
use Packstub\Flow\Base\Action;
use Packstub\Flow\Base\Condition;

class FlowManager
{
    protected array $triggers = [];
    protected array $actions = [];
    protected array $conditions = [];

    public function registerTrigger(string $triggerClass): void
    {
        $this->triggers[] = $triggerClass;
    }

    public function registerAction(string $actionClass): void
    {
        $this->actions[] = $actionClass;
    }

    public function registerCondition(string $conditionClass): void
    {
        $this->conditions[] = $conditionClass;
    }

    public function getAvailableComponents(): array
    {
        return [
            'triggers' => collect($this->triggers)->map(fn($class) => (new $class())->toArray())->toArray(),
            'actions' => collect($this->actions)->map(fn($class) => (new $class())->toArray())->toArray(),
            'conditions' => collect($this->conditions)->map(fn($class) => (new $class())->toArray())->toArray(),
        ];
    }

    public function getTrigger(string $identifier): ?Trigger
    {
        return $this->getComponent($this->triggers, $identifier);
    }

    public function getAction(string $identifier): ?Action
    {
        return $this->getComponent($this->actions, $identifier);
    }

    public function getCondition(string $identifier): ?Condition
    {
        return $this->getComponent($this->conditions, $identifier);
    }

    protected function getComponent(array $list, string $class): ?object
    {
        if (in_array($class, $list) && class_exists($class)) {
            return new $class();
        }
        return null;
    }
}
