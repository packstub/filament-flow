<?php

namespace Packstub\Flow\Tests\Fixtures;

use Filament\Models\Contracts\FilamentUser;
use Filament\Models\Contracts\HasTenants;
use Filament\Panel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use Packstub\Flow\Concerns\HasWorkflows;

class User extends Authenticatable implements FilamentUser, HasTenants
{
    use HasWorkflows;
    use Notifiable;

    protected $table = 'users';

    protected $guarded = [];

    protected $hidden = ['password', 'remember_token'];

    public function canAccessPanel(Panel $panel): bool
    {
        return true;
    }

    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }

    public function getTenants(Panel $panel): Collection
    {
        return Team::query()->whereKey($this->team_id)->get();
    }

    public function canAccessTenant(Model $tenant): bool
    {
        return (int) $tenant->getKey() === (int) $this->team_id;
    }
}
