<?php

namespace Packstub\Flow\Tests\Fixtures;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Packstub\Flow\Concerns\HasWorkflows;
use Packstub\Flow\Tests\Fixtures\States\OrderState;
use Spatie\ModelStates\HasStates;

class Order extends Model
{
    use HasStates;
    use HasWorkflows;

    protected $table = 'orders';

    protected $guarded = [];

    protected $casts = ['total' => 'float', 'state' => OrderState::class];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
