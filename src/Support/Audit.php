<?php

namespace Packstub\Flow\Support;

use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Models\Workflow;
use Throwable;

/**
 * Who did what to a workflow: the created_by / updated_by columns, and an
 * entry in spatie/laravel-activitylog when that package is installed.
 */
class Audit
{
    /**
     * The signed-in user as stored in created_by / updated_by and on
     * versions: the email, or the id.
     */
    public static function actor(): ?string
    {
        $user = auth()->user();

        if ($user === null) {
            return null;
        }

        $email = $user->getAttribute('email');

        return is_string($email) && $email !== '' ? $email : (string) $user->getAuthIdentifier();
    }

    public static function enabled(): bool
    {
        return (bool) config('packstub-flow.audit.activity_log', true) && function_exists('activity');
    }

    /**
     * Write an activity-log entry (created, updated, activated, deactivated,
     * deleted, restored, imported…) when the package is installed.
     *
     * @param  array<string, mixed>  $properties
     */
    public static function record(Workflow $workflow, string $event, array $properties = []): void
    {
        if (! static::enabled()) {
            return;
        }

        try {
            // The helper comes from spatie/laravel-activitylog, an optional dependency.
            $logger = app()->call('activity', ['logName' => (string) config('packstub-flow.audit.log_name', 'packstub-flow')])
                ->performedOn($workflow)
                ->event($event)
                ->withProperties($properties);

            $user = auth()->user();

            if ($user instanceof Model) {
                $logger->causedBy($user);
            }

            $logger->log($event);
        } catch (Throwable $e) {
            report($e);
        }
    }
}
