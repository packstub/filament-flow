<?php

namespace Packstub\Flow\Support;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Makes a run payload safe to put on the queue: Eloquent models become a
 * (class, key, attributes) triple and are re-fetched when the job runs. A
 * record that no longer exists (a "deleted" trigger) is rebuilt from the
 * attributes it had, so templates keep working after the delay.
 */
class PayloadSerializer
{
    protected const MARKER = '__flow_model';

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public static function serialize(array $payload): array
    {
        foreach ($payload as $key => $value) {
            $payload[$key] = match (true) {
                $value instanceof Model => [
                    self::MARKER => $value::class,
                    'key' => $value->getKey(),
                    'attributes' => $value->attributesToArray(),
                ],
                is_array($value) => self::serialize($value),
                default => $value,
            };
        }

        return $payload;
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public static function unserialize(array $payload): array
    {
        foreach ($payload as $key => $value) {
            if (! is_array($value)) {
                continue;
            }

            $payload[$key] = isset($value[self::MARKER])
                ? self::restoreModel($value)
                : self::unserialize($value);
        }

        return $payload;
    }

    /**
     * A JSON-friendly description of the payload for the run's context column.
     *
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public static function summarize(array $payload): array
    {
        $summary = [];

        foreach ($payload as $key => $value) {
            $summary[$key] = match (true) {
                $value instanceof Model => ['type' => $value::class, 'key' => $value->getKey()],
                is_object($value) => ['type' => $value::class],
                is_array($value) => self::summarize($value),
                default => $value,
            };
        }

        return $summary;
    }

    /**
     * @param  array{__flow_model: class-string<Model>, key: mixed, attributes: array<string, mixed>}  $value
     */
    protected static function restoreModel(array $value): ?Model
    {
        $class = $value[self::MARKER];

        if (! is_a($class, Model::class, true)) {
            return null;
        }

        $query = $class::query();

        if (in_array(SoftDeletes::class, class_uses_recursive($class), true)) {
            $query->withTrashed();
        }

        $model = $value['key'] !== null ? $query->find($value['key']) : null;

        if ($model) {
            return $model;
        }

        $model = (new $class)->setRawAttributes($value['attributes'] ?? []);
        $model->exists = false;

        return $model;
    }
}
