<?php

namespace Packstub\Flow\Tests\Fixtures;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Packstub\Flow\Concerns\HasWorkflows;
use Packstub\Flow\Tests\Fixtures\States\OrderState;
use Spatie\ModelStates\HasStates;
use Spatie\Tags\HasTags;

class Order extends Model
{
    use HasStates;
    use HasTags;
    use HasWorkflows;

    protected $table = 'orders';

    protected $guarded = [];

    protected $casts = ['total' => 'float', 'state' => OrderState::class, 'due_at' => 'datetime'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function notes(): HasMany
    {
        return $this->hasMany(Note::class);
    }

    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }
}
