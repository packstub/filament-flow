<?php

namespace Xlited\LaravelFlow\Traits;

use Illuminate\Database\Eloquent\Model;
use Xlited\LaravelFlow\Facades\LaravelFlow;
use Xlited\LaravelFlow\Nodes\Triggers\ModelCreated;
use Xlited\LaravelFlow\Nodes\Triggers\ModelUpdated;
use Xlited\LaravelFlow\Nodes\Triggers\ModelDeleted;

trait HasWorkflows
{
    public static function bootHasWorkflows()
    {
        static::created(function (Model $model) {
            LaravelFlow::dispatch(ModelCreated::class, ['model' => $model]);
        });

        static::updated(function (Model $model) {
            LaravelFlow::dispatch(ModelUpdated::class, ['model' => $model]);
        });

        static::deleted(function (Model $model) {
            LaravelFlow::dispatch(ModelDeleted::class, ['model' => $model]);
        });
    }
}
