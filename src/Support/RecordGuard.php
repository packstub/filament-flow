<?php

namespace Packstub\Flow\Support;

use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Str;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Exceptions\WorkflowException;
use ReflectionMethod;
use ReflectionNamedType;
use ReflectionUnionType;
use Throwable;

/**
 * What the record actions (Find, Create, Update record) may touch: only the
 * models the app allows, and in a run that belongs to a tenant only that
 * tenant's records.
 */
class RecordGuard
{
    /** @var array<int, class-string<Model>> */
    protected static array $models = [];

    /** @var (Closure(Builder<Model>, Model): bool)|null */
    protected static ?Closure $scope = null;

    /**
     * Models the record actions may use, in addition to
     * packstub-flow.records.models.
     *
     * @param  array<int, class-string<Model>>  $models
     */
    public static function register(array $models): void
    {
        static::$models = array_values(array_unique([...static::$models, ...$models]));
    }

    /**
     * Scope a query to a tenant yourself, for a model whose link to the
     * tenant is not a relationship named after it. Return true when the
     * query is scoped (or the model is shared by every tenant on purpose),
     * false to let Flow use the relationship.
     *
     * @param  (Closure(Builder<Model>, Model): bool)|null  $scope
     */
    public static function scopeUsing(?Closure $scope): void
    {
        static::$scope = $scope;
    }

    public static function flush(): void
    {
        static::$models = [];
        static::$scope = null;
    }

    /**
     * The allowed models: packstub-flow.records.models and the plugin's
     * ->recordModels([...]), or, when neither lists any, the models offered
     * to the record triggers.
     *
     * @return array<class-string<Model>, string> class => label
     */
    public static function options(): array
    {
        $listed = config('packstub-flow.records.models');

        if (! is_array($listed) && static::$models === []) {
            return ModelFinder::options();
        }

        $options = [];

        foreach (array_unique([...(array) $listed, ...static::$models]) as $class) {
            if (is_string($class) && is_a($class, Model::class, true)) {
                $options[$class] = class_basename($class);
            }
        }

        return $options;
    }

    public static function allows(mixed $class): bool
    {
        return is_string($class) && array_key_exists(ltrim($class, '\\'), static::options());
    }

    /**
     * @return class-string<Model>
     */
    public static function assertAllowed(mixed $class, string $node): string
    {
        if (! is_string($class) || ! is_a($class, Model::class, true)) {
            throw new WorkflowException(__('packstub-flow::flow.records.choose_model', ['node' => $node]));
        }

        if (! static::allows($class)) {
            throw new WorkflowException(static::notAllowedMessage($class, $node));
        }

        return ltrim($class, '\\');
    }

    public static function notAllowedMessage(string $class, string $node): string
    {
        return __('packstub-flow::flow.records.not_allowed', ['node' => $node, 'model' => class_basename($class)]);
    }

    /**
     * The tenant the record actions are confined to: the tenant of the run
     * in progress. A tenant's workflow whose tenant no longer exists gets no
     * access at all instead of access to every record.
     */
    public static function tenant(): ?Model
    {
        if (($tenant = Tenancy::current()) !== null) {
            return $tenant;
        }

        $workflow = Runner::currentRun()?->workflow()->withoutGlobalScopes()->first();

        if ($workflow !== null && ! $workflow->isGlobal()) {
            throw new WorkflowException(__('packstub-flow::flow.records.tenant_missing'));
        }

        return null;
    }

    /**
     * Limit a query to the run's tenant (no change in a run without one).
     *
     * @param  Builder<Model>  $query
     * @return Builder<Model>
     */
    public static function scope(Builder $query, string $node): Builder
    {
        $tenant = static::tenant();

        if ($tenant === null) {
            return $query;
        }

        if (! static::applyScope($query, $tenant)) {
            throw new WorkflowException(static::notScopedMessage($query->getModel(), $node));
        }

        return $query;
    }

    /**
     * Whether a record's model can be confined to the run's tenant.
     */
    public static function isScopable(Model $model, Model $tenant): bool
    {
        return static::applyScope($model->newQueryWithoutScopes(), $tenant);
    }

    /**
     * Refuse a record that does not belong to the run's tenant.
     */
    public static function assertOwned(Model $record, string $node): void
    {
        $tenant = static::tenant();

        if ($tenant === null) {
            return;
        }

        $query = $record->newQueryWithoutScopes()->whereKey($record->getKey());

        if (! static::applyScope($query, $tenant)) {
            throw new WorkflowException(static::notScopedMessage($record, $node));
        }

        if (! $record->exists || ! $query->exists()) {
            throw new WorkflowException(__('packstub-flow::flow.records.other_tenant', ['node' => $node, 'model' => class_basename($record)]));
        }
    }

    /**
     * Point a new record at the run's tenant through its BelongsTo / MorphTo
     * relationship, whatever its attributes said.
     */
    public static function attachTenant(Model $record): void
    {
        $tenant = static::tenant();

        if ($tenant === null || static::$scope !== null && (static::$scope)($record->newQueryWithoutScopes(), $tenant)) {
            return;
        }

        $relation = static::tenantRelation($record, $tenant);

        if ($relation instanceof BelongsTo) {
            $relation->associate($tenant);
        }
    }

    /**
     * A relationship of $parent by name, called only when the method is
     * declared to return a relationship, so a name typed into a node can
     * never call delete(), truncate() or any other method.
     *
     * @return Relation<Model, Model, mixed>
     */
    public static function relation(Model $parent, string $name, string $node): Relation
    {
        $message = __('packstub-flow::flow.records.not_a_relation', ['node' => $node, 'relation' => $name, 'model' => class_basename($parent)]);

        if (! preg_match('/^[A-Za-z_][A-Za-z0-9_]*$/', $name) || ! method_exists($parent, $name)) {
            throw new WorkflowException($message);
        }

        $method = new ReflectionMethod($parent, $name);

        if (! $method->isPublic() || $method->isStatic() || $method->getNumberOfRequiredParameters() > 0 || ! static::returnsRelation($method)) {
            throw new WorkflowException($message);
        }

        $relation = $parent->{$name}();

        if (! $relation instanceof Relation) {
            throw new WorkflowException($message);
        }

        return $relation;
    }

    /**
     * @param  Builder<Model>  $query
     */
    protected static function applyScope(Builder $query, Model $tenant): bool
    {
        if (static::$scope !== null && (static::$scope)($query, $tenant) === true) {
            return true;
        }

        $relation = static::tenantRelation($query->getModel(), $tenant);
        $name = $relation === null ? null : static::tenantRelationName($query->getModel(), $tenant);

        if ($relation === null || $name === null) {
            return false;
        }

        match (true) {
            $relation instanceof MorphTo => $query->whereMorphedTo($name, $tenant),
            $relation instanceof BelongsTo => $query->where($relation->getQualifiedForeignKeyName(), $tenant->getAttribute($relation->getOwnerKeyName())),
            default => $query->whereHas($name, fn (Builder $related) => $related->whereKey($tenant->getKey())),
        };

        return true;
    }

    /**
     * The model's relationship to the tenant: the one named in
     * packstub-flow.tenancy.relationship, or the one named after the tenant
     * model ("team" for a Team, Filament's convention).
     *
     * @return Relation<Model, Model, mixed>|null
     */
    protected static function tenantRelation(Model $model, Model $tenant): ?Relation
    {
        $name = static::tenantRelationName($model, $tenant);

        return $name === null ? null : $model->{$name}();
    }

    protected static function tenantRelationName(Model $model, Model $tenant): ?string
    {
        $names = array_unique(array_filter([
            (string) config('packstub-flow.tenancy.relationship', ''),
            Str::camel(class_basename($tenant)),
        ]));

        foreach ($names as $name) {
            try {
                $relation = static::relation($model, $name, '');
            } catch (Throwable) {
                continue;
            }

            if ($relation instanceof MorphTo || $relation->getRelated() instanceof $tenant) {
                return $name;
            }
        }

        return null;
    }

    protected static function returnsRelation(ReflectionMethod $method): bool
    {
        $returnType = $method->getReturnType();

        foreach ($returnType instanceof ReflectionUnionType ? $returnType->getTypes() : [$returnType] as $type) {
            if (! $type instanceof ReflectionNamedType || $type->isBuiltin() || ! is_a($type->getName(), Relation::class, true)) {
                return false;
            }
        }

        return true;
    }

    protected static function notScopedMessage(Model $model, string $node): string
    {
        return __('packstub-flow::flow.records.not_scoped', ['node' => $node, 'model' => class_basename($model)]);
    }
}
