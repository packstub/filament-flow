<?php

namespace Packstub\Flow\Support;

use Illuminate\Support\Str;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\NodeRegistry;

/**
 * Ready-made workflows to start from: the ones shipped in
 * resources/templates, plus any registered through the config or the
 * plugin. A template is an export document with a category; it is only
 * offered when every node it uses is registered.
 */
class Templates
{
    /** @var array<int, string|array<string, mixed>> */
    protected static array $registered = [];

    protected static bool $builtIn = true;

    /**
     * Register template files, directories of *.json files, or documents.
     *
     * @param  array<int, string|array<string, mixed>>  $templates
     */
    public static function register(array $templates): void
    {
        static::$registered = [...static::$registered, ...$templates];
    }

    public static function withoutBuiltIn(bool $condition = true): void
    {
        static::$builtIn = ! $condition;
    }

    public static function flush(): void
    {
        static::$registered = [];
        static::$builtIn = true;
    }

    /**
     * Every usable template, keyed by its key, in registration order.
     *
     * @return array<string, array<string, mixed>>
     */
    public static function all(): array
    {
        $registry = app(NodeRegistry::class);
        $templates = [];

        foreach (static::sources() as $source) {
            $template = is_array($source) ? $source : static::read($source);

            if ($template === null || ! isset($template['definition']['nodes'])) {
                continue;
            }

            $key = (string) ($template['key'] ?? (is_string($source) ? pathinfo($source, PATHINFO_FILENAME) : Str::slug((string) ($template['name'] ?? ''))));

            if ($key === '' || ! static::usable($template, $registry)) {
                continue;
            }

            $templates[$key] = ['key' => $key, 'category' => (string) ($template['category'] ?? __('packstub-flow::flow.templates.other'))] + $template;
        }

        return $templates;
    }

    /** @return array<string, mixed>|null */
    public static function find(string $key): ?array
    {
        return static::all()[$key] ?? null;
    }

    /**
     * Create an (inactive) workflow from a template.
     *
     * @param  array<string, mixed>  $attributes
     */
    public static function create(string $key, array $attributes = []): Workflow
    {
        $template = static::find($key);

        if ($template === null) {
            throw new \InvalidArgumentException("Unknown workflow template [{$key}].");
        }

        return WorkflowTransfer::import($template, $attributes);
    }

    /**
     * Templates grouped by category, for a picker.
     *
     * @return array<string, array<string, array<string, mixed>>>
     */
    public static function byCategory(): array
    {
        $groups = [];

        foreach (static::all() as $key => $template) {
            $groups[$template['category']][$key] = $template;
        }

        return $groups;
    }

    /** @return array<int, string|array<string, mixed>> */
    protected static function sources(): array
    {
        $sources = [];

        if (static::$builtIn) {
            $sources[] = __DIR__.'/../../resources/templates';
        }

        foreach ([...(array) config('packstub-flow.templates', []), ...static::$registered] as $source) {
            $sources[] = $source;
        }

        $expanded = [];

        foreach ($sources as $source) {
            if (is_string($source) && is_dir($source)) {
                $files = glob(rtrim($source, '/').'/*.json') ?: [];
                sort($files);
                array_push($expanded, ...$files);
            } else {
                $expanded[] = $source;
            }
        }

        return $expanded;
    }

    /** @return array<string, mixed>|null */
    protected static function read(string $path): ?array
    {
        if (! is_file($path)) {
            return null;
        }

        $decoded = json_decode((string) file_get_contents($path), true);

        return is_array($decoded) ? $decoded : null;
    }

    /** @param array<string, mixed> $template */
    protected static function usable(array $template, NodeRegistry $registry): bool
    {
        foreach ((array) $template['definition']['nodes'] as $node) {
            $identifier = $node['data']['identifier'] ?? null;

            if (! is_string($identifier) || ! $registry->has($identifier)) {
                return false;
            }
        }

        return true;
    }
}
