<?php

namespace Packstub\Flow\Concerns;

use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\RecordCreated;
use Packstub\Flow\Nodes\Triggers\RecordDeleted;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;

/**
 * Fires the record triggers for this model. The model is available to nodes
 * as {{ model.attribute }}; an updated model also exposes {{ original.attribute }}.
 */
trait HasWorkflows
{
    public static function bootHasWorkflows(): void
    {
        static::created(function (Model $model): void {
            Flow::dispatch(RecordCreated::class, ['model' => $model]);
        });

        static::updated(function (Model $model): void {
            Flow::dispatch(RecordUpdated::class, [
                'model' => $model,
                'original' => $model->getOriginal(),
                'changes' => $model->getChanges(),
            ]);
        });

        static::deleted(function (Model $model): void {
            Flow::dispatch(RecordDeleted::class, ['model' => $model]);
        });
    }
}
