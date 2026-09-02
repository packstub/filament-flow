<?php

namespace Packstub\Flow\Support;

use Filament\Facades\Filament;
use Filament\Panel;
use Illuminate\Database\Eloquent\Model;
use Throwable;

/**
 * The panel URL of a record: the view page of the Filament resource
 * registered for its model, or the edit page when there is no view page.
 * Used by {{ model.url }} and the "View" buttons on notifications and mails.
 */
class ResourceUrl
{
    public static function for(Model $model, ?string $panelId = null): ?string
    {
        try {
            $panel = $panelId ? Filament::getPanel($panelId) : Filament::getCurrentOrDefaultPanel();

            if (! $panel) {
                return null;
            }

            $resource = $panel->getModelResource($model);

            if (! $resource) {
                return null;
            }

            $tenant = $panel->hasTenancy() ? static::tenantFor($model, $panel) : null;

            foreach (['view', 'edit'] as $page) {
                if ($resource::hasPage($page)) {
                    return $resource::getUrl($page, ['record' => $model], panel: $panel->getId(), tenant: $tenant);
                }
            }

            return null;
        } catch (Throwable) {
            return null;
        }
    }

    protected static function tenantFor(Model $model, Panel $panel): ?Model
    {
        $tenant = Filament::getTenant();

        if ($tenant) {
            return $tenant;
        }

        $relationship = $panel->getTenantOwnershipRelationshipName();

        if ($relationship && method_exists($model, $relationship)) {
            $related = $model->{$relationship};

            return $related instanceof Model ? $related : null;
        }

        return null;
    }
}
