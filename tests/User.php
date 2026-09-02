<?php

namespace Packstub\Flow\Tests;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Packstub\Flow\Traits\HasWorkflows;

class User extends Authenticatable
{
    use HasWorkflows;

    protected $guarded = [];
    protected $table = 'users';
}
