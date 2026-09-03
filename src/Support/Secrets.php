<?php

namespace Packstub\Flow\Support;

use Packstub\Flow\Flow;
use Throwable;

/**
 * Reads the secrets store for placeholder resolution. Values are cached per
 * process for the length of a run and forgotten when a secret is saved.
 */
class Secrets
{
    /** @var array<string, string|null>|null */
    protected static ?array $values = null;

    public static function get(string $key): ?string
    {
        if (static::$values === null) {
            static::$values = static::load();
        }

        return static::$values[$key] ?? null;
    }

    public static function has(string $key): bool
    {
        return static::get($key) !== null;
    }

    /** @return array<int, string> */
    public static function keys(): array
    {
        if (static::$values === null) {
            static::$values = static::load();
        }

        return array_keys(static::$values);
    }

    public static function flush(): void
    {
        static::$values = null;
    }

    /** @return array<string, string|null> */
    protected static function load(): array
    {
        try {
            return Flow::secretModel()::query()
                ->get()
                ->mapWithKeys(fn ($secret): array => [(string) $secret->key => $secret->value === null ? null : (string) $secret->value])
                ->all();
        } catch (Throwable) {
            // Table not migrated yet.
            return [];
        }
    }
}
