<?php

namespace Packstub\Flow\Traits;

use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\ModelCreated;
use Packstub\Flow\Nodes\Triggers\ModelUpdated;
use Packstub\Flow\Nodes\Triggers\ModelDeleted;

trait HasWorkflows
{
    public static function bootHasWorkflows()
    {
        static::created(function (Model $model) {
            Flow::dispatch(ModelCreated::class, ['model' => $model]);
        });

        static::updated(function (Model $model) {
            Flow::dispatch(ModelUpdated::class, ['model' => $model]);
        });

        static::deleted(function (Model $model) {
            Flow::dispatch(ModelDeleted::class, ['model' => $model]);
        });
    }
}
