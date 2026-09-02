<?php

namespace Packstub\Flow\Support;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Packstub\Flow\Concerns\HasWorkflows;
use ReflectionClass;
use Throwable;

/**
 * Models offered by the record triggers: the configured list, the plugin's
 * ->models([...]) list, and every app/Models class that uses HasWorkflows.
 */
class ModelFinder
{
    /** @var array<int, class-string<Model>> */
    protected static array $extra = [];

    /**
     * @param  array<int, class-string<Model>>  $models
     */
    public static function register(array $models): void
    {
        static::$extra = array_values(array_unique([...static::$extra, ...$models]));
    }

    public static function flush(): void
    {
        static::$extra = [];
    }

    /**
     * @return array<class-string<Model>, string> class => label
     */
    public static function options(): array
    {
        $models = [...config('packstub-flow.models_for_triggers', []), ...static::$extra, ...static::discover()];

        $options = [];

        foreach (array_unique($models) as $class) {
            if (is_a($class, Model::class, true)) {
                $options[$class] = class_basename($class);
            }
        }

        asort($options);

        return $options;
    }

    /**
     * @return array<int, class-string<Model>>
     */
    protected static function discover(): array
    {
        $path = app_path('Models');

        if (! File::isDirectory($path)) {
            return [];
        }

        $namespace = app()->getNamespace().'Models\\';
        $models = [];

        foreach (File::allFiles($path) as $file) {
            $relative = str_replace(['/', '.php'], ['\\', ''], $file->getRelativePathname());
            $class = $namespace.$relative;

            try {
                if (! class_exists($class)) {
                    continue;
                }

                $reflection = new ReflectionClass($class);

                if ($reflection->isAbstract() || ! $reflection->isSubclassOf(Model::class)) {
                    continue;
                }

                if (in_array(HasWorkflows::class, class_uses_recursive($class), true)) {
                    $models[] = $class;
                }
            } catch (Throwable) {
                continue;
            }
        }

        return $models;
    }
}
