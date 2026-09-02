<?php

namespace Packstub\Flow\Tests\Fixtures;

use Illuminate\Database\Eloquent\Model;
use Spatie\ModelStatus\HasStatuses;

class Ticket extends Model
{
    use HasStatuses;

    protected $table = 'tickets';

    protected $guarded = [];
}
