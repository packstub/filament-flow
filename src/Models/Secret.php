<?php

namespace Packstub\Flow\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Support\Secrets;

/**
 * An encrypted key / value used by actions as {{ secrets.<key> }}: API
 * tokens, webhook URLs, passwords. The value is encrypted at rest with the
 * app key, never shown again in the panel, and masked in run logs.
 *
 * @property string $id
 * @property string $key
 * @property string $value
 * @property string|null $description
 */
class Secret extends Model
{
    use HasUuids;

    protected $guarded = [];

    protected $hidden = ['value'];

    protected $casts = [
        'value' => 'encrypted',
    ];

    public function getTable(): string
    {
        return config('packstub-flow.tables.secrets', 'flow_secrets');
    }

    protected static function booted(): void
    {
        static::saved(fn () => Secrets::flush());
        static::deleted(fn () => Secrets::flush());
    }
}
