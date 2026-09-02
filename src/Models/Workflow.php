<?php

namespace Packstub\Flow\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Workflow extends Model
{
    use HasUuids;

    protected $fillable = [
        'name',
        'description',
        // 'trigger_type', // Removed
        'payload',
        'is_active',
    ];

    protected $casts = [
        'payload' => 'array',
        'is_active' => 'boolean',
    ];

    public function triggers(): HasMany
    {
        return $this->hasMany(WorkflowTrigger::class);
    }

    public function logs(): HasMany
    {
        return $this->hasMany(WorkflowLog::class);
    }
}
