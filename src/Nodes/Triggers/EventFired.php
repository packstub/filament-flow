<?php

namespace Packstub\Flow\Nodes\Triggers;

use Filament\Forms\Components\TextInput;
use Packstub\Flow\Nodes\Trigger;

/**
 * Fires when any Laravel event of the configured class is dispatched. The
 * event object is available to nodes as {{ event.* }}.
 */
class EventFired extends Trigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.event.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.event.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-signal';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('event_class')
                ->label(__('packstub-flow::flow.nodes.event.class'))
                ->placeholder('App\\Events\\OrderShipped')
                ->helperText(__('packstub-flow::flow.nodes.event.class_help'))
                ->required()
                ->rule(fn () => function (string $attribute, mixed $value, \Closure $fail): void {
                    if (! is_string($value) || ! class_exists(ltrim($value, '\\'))) {
                        $fail(__('packstub-flow::flow.nodes.event.unknown_class'));
                    }
                }),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        $class = ltrim((string) ($config['event_class'] ?? ''), '\\');
        $event = $payload['event'] ?? null;

        return $class !== '' && is_object($event) && $event instanceof $class;
    }

    public function getPlaceholders(): array
    {
        return ['{{ event.order.total }}' => __('packstub-flow::flow.placeholders.event')];
    }
}
