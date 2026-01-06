<?php

namespace Xlited\LaravelFlow\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WorkflowTrigger extends Model
{
    use HasUuids;

    protected $fillable = [
        'workflow_id',
        'type',
        'config',
    ];

    protected $casts = [
        'config' => 'array',
    ];

    public function workflow(): BelongsTo
    {
        return $this->belongsTo(Workflow::class);
    }
}
