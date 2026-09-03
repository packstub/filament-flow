<?php

namespace Packstub\Flow\Tests\Fixtures;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Note extends Model
{
    protected $table = 'notes';

    protected $fillable = ['body'];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
