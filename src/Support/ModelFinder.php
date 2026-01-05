<?php

namespace Xlited\LaravelFlow\Support;

use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Model;
use ReflectionClass;

class ModelFinder
{
    public static function all(): array
    {
        $models = [];
        $modelPath = base_path('app/Models');

        if (!File::exists($modelPath)) {
            return [];
        }

        foreach (File::allFiles($modelPath) as $file) {
            $namespace = app()->getNamespace();
            $class = $namespace . 'Models\\' . $file->getBasename('.php');

            if (class_exists($class)) {
                $reflection = new ReflectionClass($class);
                if ($reflection->isSubclassOf(Model::class) && !$reflection->isAbstract()) {
                    $models[$class] = $class;
                }
            }
        }

        return $models;
    }
}
