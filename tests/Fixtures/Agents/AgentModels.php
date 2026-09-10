<?php

namespace Packstub\Agents\Support;

use Illuminate\Support\Str;

/**
 * Stub of the engine's model picker: a fixed catalog, resolve() records the
 * key it was asked for (see tests/Fixtures/Agents/stubs.php).
 */
class AgentModels
{
    /** @var array<string, array{label: string, provider: string, model: string}> */
    public static array $catalog = [
        'auto' => ['label' => 'Claude Opus 5', 'provider' => 'anthropic', 'model' => 'claude-opus-5'],
        'fast' => ['label' => 'Claude Haiku 4.5', 'provider' => 'anthropic', 'model' => 'claude-haiku-4-5'],
        'flash' => ['label' => 'Gemini Flash', 'provider' => 'gemini', 'model' => 'gemini-3.5-flash-lite'],
    ];

    /** @var list<string> the failover providers every entry falls back to, provider => model taken from the catalog */
    public static array $failover = ['openai'];

    public static string $current = 'auto';

    /** @var list<string|null> the keys resolve() was asked for */
    public static array $resolved = [];

    public static function provider(): string
    {
        return 'anthropic';
    }

    /** @return array<string, string> key => label */
    public static function options(): array
    {
        return array_map(fn (array $m): string => $m['label'], static::$catalog);
    }

    public static function current(): string
    {
        return static::$current;
    }

    /** @return array{provider: string, model: string, effort: ?string, providers: array<string, string>} */
    public static function resolve(?string $key = null): array
    {
        static::$resolved[] = $key;
        $key ??= static::current();
        $entry = static::$catalog[$key] ?? static::$catalog[array_key_first(static::$catalog)];

        $providers = [$entry['provider'] => $entry['model']];
        foreach (static::$failover as $fallback) {
            $providers[$fallback] = $fallback.'-model-for-'.$key;
        }

        return ['provider' => $entry['provider'], 'model' => $entry['model'], 'effort' => null, 'providers' => $providers];
    }

    public static function modelName(string $model): string
    {
        return Str::headline(str_replace('-', ' ', Str::afterLast($model, '/')));
    }
}
