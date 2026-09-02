<?php

namespace Packstub\Flow\Support;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Model;
use Stringable;

/**
 * Renders {{ path }} placeholders against a run's payload. Paths are resolved
 * with data_get(), so {{ model.name }}, {{ model.team.name }},
 * {{ webhook.order.total }} and {{ event.order.id }} all work.
 */
class Placeholders
{
    protected const PATTERN = '/\{\{\s*([A-Za-z0-9_.\-]+)\s*\}\}/';

    /**
     * @param  array<string, mixed>  $payload
     */
    public static function render(string $template, array $payload): string
    {
        if (! str_contains($template, '{{')) {
            return $template;
        }

        return (string) preg_replace_callback(
            self::PATTERN,
            fn (array $matches): string => self::stringify(self::resolve($matches[1], $payload)),
            $template,
        );
    }

    /**
     * @param  array<mixed>  $values
     * @param  array<string, mixed>  $payload
     * @return array<mixed>
     */
    public static function renderArray(array $values, array $payload): array
    {
        foreach ($values as $key => $value) {
            $values[$key] = match (true) {
                is_array($value) => self::renderArray($value, $payload),
                is_string($value) => self::render($value, $payload),
                default => $value,
            };
        }

        return $values;
    }

    /**
     * Resolve a single placeholder path to its raw value.
     *
     * @param  array<string, mixed>  $payload
     */
    public static function resolve(string $path, array $payload): mixed
    {
        // "model" is the record that fired a trigger; "record" is an alias
        // so both read naturally in a template.
        if ($path === 'record' || str_starts_with($path, 'record.')) {
            $path = 'model'.substr($path, 6);
        }

        return data_get($payload, $path);
    }

    public static function stringify(mixed $value): string
    {
        return match (true) {
            $value === null => '',
            is_bool($value) => $value ? '1' : '0',
            is_scalar($value) => (string) $value,
            $value instanceof Model => (string) $value->getKey(),
            $value instanceof \DateTimeInterface => $value->format(\DateTimeInterface::ATOM),
            $value instanceof Stringable => (string) $value,
            $value instanceof Arrayable => (string) json_encode($value->toArray()),
            is_array($value) => (string) json_encode($value),
            default => '',
        };
    }

    /**
     * @return array<string, string>
     */
    public static function documentation(): array
    {
        return [
            '{{ model.name }}' => __('packstub-flow::flow.placeholders.model'),
            '{{ model.team.name }}' => __('packstub-flow::flow.placeholders.model_relation'),
            '{{ webhook.order.id }}' => __('packstub-flow::flow.placeholders.webhook'),
            '{{ event.order.total }}' => __('packstub-flow::flow.placeholders.event'),
        ];
    }

    /**
     * True when a value still contains a placeholder.
     */
    public static function hasPlaceholders(string $value): bool
    {
        return (bool) preg_match(self::PATTERN, $value);
    }
}
