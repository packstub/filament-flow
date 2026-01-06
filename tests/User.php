<?php

namespace Xlited\LaravelFlow\Tests;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Xlited\LaravelFlow\Traits\HasWorkflows;

class User extends Authenticatable
{
    use HasWorkflows;

    protected $guarded = [];
    protected $table = 'users';
}
