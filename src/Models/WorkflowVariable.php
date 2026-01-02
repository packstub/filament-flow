<?php

namespace Xlited\LaravelFlow\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class WorkflowVariable extends Model
{
    use HasUuids;

    protected $fillable = [
        'key',
        'value',
    ];
}
