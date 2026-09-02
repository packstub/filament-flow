<?php

namespace Packstub\Flow\Nodes\Conditions\Concerns;

use Carbon\Carbon;
use Filament\Forms\Components\Select;
use Packstub\Flow\Support\Placeholders;
use Throwable;

trait ComparesValues
{
    /**
     * Operators added by the condition that uses the trait, e.g. the
     * "changed" family on Record attribute.
     *
     * @return array<string, string>
     */
    protected function extraOperators(): array
    {
        return [];
    }

    protected function operatorSelect(): Select
    {
        return Select::make('operator')
            ->label(__('packstub-flow::flow.nodes.compare.operator'))
            ->options([
                ...$this->extraOperators(),
                '=' => __('packstub-flow::flow.nodes.compare.operators.equals'),
                '!=' => __('packstub-flow::flow.nodes.compare.operators.not_equals'),
                '>' => __('packstub-flow::flow.nodes.compare.operators.greater'),
                '>=' => __('packstub-flow::flow.nodes.compare.operators.greater_or_equal'),
                '<' => __('packstub-flow::flow.nodes.compare.operators.less'),
                '<=' => __('packstub-flow::flow.nodes.compare.operators.less_or_equal'),
                'contains' => __('packstub-flow::flow.nodes.compare.operators.contains'),
                'not_contains' => __('packstub-flow::flow.nodes.compare.operators.not_contains'),
                'starts_with' => __('packstub-flow::flow.nodes.compare.operators.starts_with'),
                'ends_with' => __('packstub-flow::flow.nodes.compare.operators.ends_with'),
                'in' => __('packstub-flow::flow.nodes.compare.operators.in'),
                'empty' => __('packstub-flow::flow.nodes.compare.operators.empty'),
                'not_empty' => __('packstub-flow::flow.nodes.compare.operators.not_empty'),
                'truthy' => __('packstub-flow::flow.nodes.compare.operators.truthy'),
                'falsy' => __('packstub-flow::flow.nodes.compare.operators.falsy'),
                'is_null' => __('packstub-flow::flow.nodes.compare.operators.is_null'),
                'is_not_null' => __('packstub-flow::flow.nodes.compare.operators.is_not_null'),
                'regex' => __('packstub-flow::flow.nodes.compare.operators.regex'),
                'before' => __('packstub-flow::flow.nodes.compare.operators.before'),
                'after' => __('packstub-flow::flow.nodes.compare.operators.after'),
            ])
            ->default('=')
            ->required()
            ->live();
    }

    protected function compare(mixed $actual, string $operator, mixed $expected): bool
    {
        $expected = is_string($expected) ? $this->normalize($expected) : $expected;

        return match ($operator) {
            '=' => $this->loose($actual) == $this->loose($expected),
            '!=' => $this->loose($actual) != $this->loose($expected),
            '>' => $this->loose($actual) > $this->loose($expected),
            '>=' => $this->loose($actual) >= $this->loose($expected),
            '<' => $this->loose($actual) < $this->loose($expected),
            '<=' => $this->loose($actual) <= $this->loose($expected),
            'contains' => str_contains(mb_strtolower($this->str($actual)), mb_strtolower($this->str($expected))),
            'not_contains' => ! str_contains(mb_strtolower($this->str($actual)), mb_strtolower($this->str($expected))),
            'starts_with' => str_starts_with($this->str($actual), $this->str($expected)),
            'ends_with' => str_ends_with($this->str($actual), $this->str($expected)),
            'in' => in_array($this->str($actual), array_map('trim', explode(',', $this->str($expected))), true),
            'empty' => blank($actual),
            'not_empty' => filled($actual),
            'truthy' => filter_var($actual, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? (bool) $actual,
            'falsy' => ! (filter_var($actual, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? (bool) $actual),
            'is_null' => $actual === null,
            'is_not_null' => $actual !== null,
            'regex' => $this->matchesPattern($this->str($actual), $this->str($expected)),
            'before' => ($a = $this->date($actual)) && ($b = $this->date($expected)) && $a->lessThan($b),
            'after' => ($a = $this->date($actual)) && ($b = $this->date($expected)) && $a->greaterThan($b),
            default => false,
        };
    }

    protected static function needsValue(?string $operator): bool
    {
        return ! in_array($operator, ['empty', 'not_empty', 'truthy', 'falsy', 'is_null', 'is_not_null', 'changed'], true);
    }

    protected function matchesPattern(string $value, string $pattern): bool
    {
        if ($pattern === '') {
            return false;
        }

        // Accept both "/^ORD-/i" and a bare expression "^ORD-".
        $delimited = preg_match('/^([^A-Za-z0-9\\s]).*\1[imsxu]*$/s', $pattern) === 1 ? $pattern : '/'.str_replace('/', '\/', $pattern).'/u';

        try {
            return @preg_match($delimited, $value) === 1;
        } catch (Throwable) {
            return false;
        }
    }

    /**
     * Parse a date or a relative expression ("now", "-3 days", "next monday").
     */
    protected function date(mixed $value): ?Carbon
    {
        if ($value instanceof \DateTimeInterface) {
            return Carbon::instance($value);
        }

        $string = trim(Placeholders::stringify($value));

        if ($string === '') {
            return null;
        }

        try {
            return Carbon::parse($string);
        } catch (Throwable) {
            return null;
        }
    }

    protected function normalize(string $value): mixed
    {
        return match (true) {
            is_numeric($value) => $value + 0,
            in_array(strtolower($value), ['true', 'false'], true) => strtolower($value) === 'true',
            strtolower($value) === 'null' => null,
            default => $value,
        };
    }

    protected function loose(mixed $value): mixed
    {
        return match (true) {
            $value instanceof \BackedEnum => $value->value,
            $value instanceof \DateTimeInterface => $value->getTimestamp(),
            $value instanceof \Stringable => (string) $value,
            is_string($value) && is_numeric($value) => $value + 0,
            default => $value,
        };
    }

    protected function str(mixed $value): string
    {
        return Placeholders::stringify($this->loose($value));
    }
}
