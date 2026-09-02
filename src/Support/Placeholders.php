<?php

namespace Packstub\Flow\Support;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;
use Stringable;
use Throwable;

/**
 * Renders {{ path }} placeholders against a run's payload. Paths are resolved
 * with data_get(), so {{ model.name }}, {{ model.team.name }},
 * {{ webhook.order.total }} and {{ event.order.id }} all work. A value can be
 * passed through filters: {{ model.created_at | date:Y-m-d }},
 * {{ model.name | upper }}, {{ webhook.note | default:none }}.
 */
class Placeholders
{
    public const PATTERN = '/\{\{\s*([A-Za-z0-9_.\-]+)((?:\s*\|\s*[A-Za-z_]+(?::[^|}]*?)?)*)\s*\}\}/';

    public const MASK = '••••••';

    /** Secrets resolve only while an action runs (see allowSecrets()). */
    protected static bool $secretsAllowed = false;

    /** @var array<string, true> values of the secrets resolved in this process, masked in run logs */
    protected static array $usedSecrets = [];

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
            fn (array $matches): string => self::stringify(self::resolve($matches[1], $payload, $matches[2] ?? '')),
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
     * Resolve a single placeholder path (with optional filters) to its raw value.
     *
     * @param  array<string, mixed>  $payload
     */
    public static function resolve(string $path, array $payload, string $filters = ''): mixed
    {
        // "model" is the record that fired a trigger; "record" is an alias
        // so both read naturally in a template.
        if ($path === 'record' || str_starts_with($path, 'record.')) {
            $path = 'model'.substr($path, 6);
        }

        if ($path === 'secrets' || str_starts_with($path, 'secrets.')) {
            return self::applyFilters(self::secret(substr($path, 8)), $filters);
        }

        $value = $payload;

        foreach (explode('.', $path) as $segment) {
            // Hidden attributes (passwords, tokens) never leave the model.
            if ($value instanceof Model && in_array($segment, $value->getHidden(), true)) {
                return null;
            }

            $resolved = data_get($value, $segment);

            // {{ model.url }}: the record's page in the panel when a resource exists for it.
            if ($resolved === null && $segment === 'url' && $value instanceof Model) {
                $resolved = ResourceUrl::for($value);
            }

            $value = $resolved;

            if ($value === null) {
                break;
            }
        }

        return self::applyFilters($value, $filters);
    }

    /**
     * Run a callback with {{ secrets.* }} resolvable. Outside of it (in
     * conditions, trigger settings, previews) a secret resolves to nothing.
     *
     * @template T
     *
     * @param  callable(): T  $callback
     * @return T
     */
    public static function allowSecrets(callable $callback): mixed
    {
        $previous = self::$secretsAllowed;
        self::$secretsAllowed = true;

        try {
            return $callback();
        } finally {
            self::$secretsAllowed = $previous;
        }
    }

    public static function secretsAllowed(): bool
    {
        return self::$secretsAllowed;
    }

    /**
     * Replace every secret value resolved in this process with a mask, so a
     * secret that ends up in an error message or an action output is not
     * stored on the run.
     */
    public static function mask(mixed $value): mixed
    {
        if (self::$usedSecrets === []) {
            return $value;
        }

        if (is_array($value)) {
            return array_map(self::mask(...), $value);
        }

        if (! is_string($value) || $value === '') {
            return $value;
        }

        return str_ireplace(array_keys(self::$usedSecrets), self::MASK, $value);
    }

    public static function forgetUsedSecrets(): void
    {
        self::$usedSecrets = [];
    }

    protected static function secret(string $key): ?string
    {
        if (! self::$secretsAllowed || $key === '') {
            return null;
        }

        $value = Secrets::get($key);

        if ($value !== null && $value !== '') {
            self::$usedSecrets[$value] = true;
        }

        return $value;
    }

    /**
     * When a template is exactly one placeholder, return its raw value so
     * numbers, booleans and arrays keep their type. Otherwise null.
     */
    public static function raw(string $template, array $payload): mixed
    {
        if (! preg_match('/^\s*'.substr(self::PATTERN, 1, -1).'\s*$/', $template, $matches)) {
            return null;
        }

        return self::resolve($matches[1], $payload, $matches[2] ?? '');
    }

    public static function isSingle(string $template): bool
    {
        return (bool) preg_match('/^\s*'.substr(self::PATTERN, 1, -1).'\s*$/', $template);
    }

    protected static function applyFilters(mixed $value, string $filters): mixed
    {
        if (trim($filters) === '') {
            return $value;
        }

        foreach (array_filter(array_map('trim', explode('|', $filters))) as $filter) {
            [$name, $argument] = array_pad(explode(':', $filter, 2), 2, null);

            $value = self::applyFilter($value, strtolower(trim($name)), $argument);
        }

        return $value;
    }

    protected static function applyFilter(mixed $value, string $name, ?string $argument): mixed
    {
        try {
            return match ($name) {
                'default' => blank($value) ? $argument : $value,
                'upper' => mb_strtoupper(self::stringify($value)),
                'lower' => mb_strtolower(self::stringify($value)),
                'title' => Str::title(self::stringify($value)),
                'trim' => trim(self::stringify($value)),
                'truncate' => Str::limit(self::stringify($value), (int) ($argument ?? 100)),
                'date' => self::formatDate($value, $argument ?? 'Y-m-d'),
                'number' => is_numeric($n = self::loose($value)) ? number_format((float) $n, (int) ($argument ?? 0)) : self::stringify($value),
                'json' => json_encode(self::jsonable($value), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
                'count' => match (true) {
                    is_countable($value) => count($value),
                    $value instanceof Arrayable => count($value->toArray()),
                    default => blank($value) ? 0 : 1,
                },
                'join' => is_iterable($value) ? implode($argument ?? ', ', array_map(self::stringify(...), collect($value)->all())) : self::stringify($value),
                'first' => is_iterable($value) ? collect($value)->first() : $value,
                'last' => is_iterable($value) ? collect($value)->last() : $value,
                default => $value,
            };
        } catch (Throwable) {
            return $value;
        }
    }

    protected static function formatDate(mixed $value, string $format): string
    {
        if (blank($value)) {
            return '';
        }

        $date = $value instanceof \DateTimeInterface ? Carbon::instance($value) : Carbon::parse(self::stringify($value));

        return $date->format($format);
    }

    protected static function loose(mixed $value): mixed
    {
        return $value instanceof \BackedEnum ? $value->value : $value;
    }

    protected static function jsonable(mixed $value): mixed
    {
        return match (true) {
            $value instanceof Model => $value->attributesToArray(),
            $value instanceof Arrayable => $value->toArray(),
            default => $value,
        };
    }

    public static function stringify(mixed $value): string
    {
        return match (true) {
            $value === null => '',
            is_bool($value) => $value ? '1' : '0',
            is_scalar($value) => (string) $value,
            $value instanceof \BackedEnum => (string) $value->value,
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
            '{{ last.body.id }}' => __('packstub-flow::flow.placeholders.last'),
            '{{ outputs.node_id.status }}' => __('packstub-flow::flow.placeholders.outputs'),
            '{{ model.created_at | date:Y-m-d }}' => __('packstub-flow::flow.placeholders.filters'),
        ];
    }

    /**
     * Placeholders that only actions can use.
     *
     * @return array<string, string>
     */
    public static function actionDocumentation(): array
    {
        return [
            '{{ model.url }}' => __('packstub-flow::flow.placeholders.url'),
            '{{ secrets.api_key }}' => __('packstub-flow::flow.placeholders.secrets'),
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
