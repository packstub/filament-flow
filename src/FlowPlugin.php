<?php

namespace Packstub\Flow;

use Closure;
use Filament\Contracts\Plugin;
use Filament\Panel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Gate;
use Packstub\Flow\Filament\Pages\Approvals;
use Packstub\Flow\Filament\Pages\WorkflowRuns;
use Packstub\Flow\Filament\Resources\SecretResource;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Support\ModelFinder;
use Packstub\Flow\Support\Tenancy;

class FlowPlugin implements Plugin
{
    public const ID = 'packstub-flow';

    /** @var array<int, class-string<Nodes\Trigger>> */
    protected array $triggers = [];

    /** @var array<int, class-string<Nodes\Action>> */
    protected array $actions = [];

    /** @var array<int, class-string<Nodes\Condition>> */
    protected array $conditions = [];

    /** @var array<int, class-string<Nodes\Node>> */
    protected array $without = [];

    /** @var array<int, class-string<Model>> */
    protected array $models = [];

    /** @var class-string<WorkflowResource> */
    protected string $resource = WorkflowResource::class;

    protected ?string $navigationGroup = null;

    protected ?string $navigationIcon = null;

    protected ?int $navigationSort = null;

    protected bool $hasResource = true;

    /** @var class-string<SecretResource> */
    protected string $secretResource = SecretResource::class;

    protected bool $hasSecrets = true;

    protected bool $hasRunsPage = true;

    protected bool $hasApprovalsPage = true;

    /** @var (Closure(): bool)|null */
    protected ?Closure $authorize = null;

    /** @var int|(Closure(?Model): ?int)|null */
    protected int|Closure|null $maxWorkflows = null;

    public static function make(): static
    {
        return app(static::class);
    }

    public static function get(): static
    {
        /** @var static $plugin */
        $plugin = filament(static::ID);

        return $plugin;
    }

    public function getId(): string
    {
        return static::ID;
    }

    // ------------------------------------------------------------------
    // Configuration
    // ------------------------------------------------------------------

    /** @param array<int, class-string<Nodes\Trigger>> $triggers */
    public function triggers(array $triggers): static
    {
        $this->triggers = [...$this->triggers, ...$triggers];

        return $this;
    }

    /** @param array<int, class-string<Nodes\Action>> $actions */
    public function actions(array $actions): static
    {
        $this->actions = [...$this->actions, ...$actions];

        return $this;
    }

    /** @param array<int, class-string<Nodes\Condition>> $conditions */
    public function conditions(array $conditions): static
    {
        $this->conditions = [...$this->conditions, ...$conditions];

        return $this;
    }

    /**
     * Hide built-in nodes from the builder (and refuse to run them).
     *
     * @param  array<int, class-string<Nodes\Node>>  $nodes
     */
    public function without(array $nodes): static
    {
        $this->without = [...$this->without, ...$nodes];

        return $this;
    }

    /**
     * Models offered by the record triggers, in addition to the ones
     * discovered in app/Models.
     *
     * @param  array<int, class-string<Model>>  $models
     */
    public function models(array $models): static
    {
        $this->models = [...$this->models, ...$models];

        return $this;
    }

    /** @param class-string<WorkflowResource> $resource */
    public function resource(string $resource): static
    {
        $this->resource = $resource;

        return $this;
    }

    /**
     * Skip registering the Workflows resource (bring your own).
     */
    public function withoutResource(): static
    {
        $this->hasResource = false;

        return $this;
    }

    /** @param class-string<SecretResource> $resource */
    public function secretResource(string $resource): static
    {
        $this->secretResource = $resource;

        return $this;
    }

    /**
     * Skip registering the Secrets resource.
     */
    public function withoutSecrets(): static
    {
        $this->hasSecrets = false;

        return $this;
    }

    /**
     * Skip registering the cross-workflow Runs page.
     */
    public function withoutRunsPage(): static
    {
        $this->hasRunsPage = false;

        return $this;
    }

    /**
     * Skip registering the Approvals page (approval links keep working).
     */
    public function withoutApprovalsPage(): static
    {
        $this->hasApprovalsPage = false;

        return $this;
    }

    /**
     * How many workflows a tenant (or the whole app, without tenancy) may
     * have; the Create button is disabled beyond it. A closure receives the
     * current tenant, so a plan limit fits: fn ($team) => $team->plan->workflows.
     *
     * @param  int|(Closure(?Model): ?int)|null  $limit
     */
    public function maxWorkflows(int|Closure|null $limit): static
    {
        $this->maxWorkflows = $limit;

        return $this;
    }

    public function getMaxWorkflows(?Model $tenant = null): ?int
    {
        $limit = $this->maxWorkflows instanceof Closure ? ($this->maxWorkflows)($tenant) : $this->maxWorkflows;

        return $limit === null ? null : (int) $limit;
    }

    /**
     * Which tenant a dispatched payload belongs to (see Flow::resolveTenantUsing()).
     *
     * @param  Closure(array<string, mixed>): ?Model  $resolver
     */
    public function resolveTenantUsing(Closure $resolver): static
    {
        Tenancy::resolveUsing($resolver);

        return $this;
    }

    /**
     * Who may see and manage workflows. Runs in addition to any policy on
     * the Workflow model and the packstub-flow.gate ability.
     *
     * @param  Closure(): bool  $callback
     */
    public function authorize(Closure $callback): static
    {
        $this->authorize = $callback;

        return $this;
    }

    public function isAuthorized(): bool
    {
        if ($this->authorize !== null && ! (bool) app()->call($this->authorize)) {
            return false;
        }

        $gate = config('packstub-flow.gate');

        return ! $gate || Gate::allows($gate);
    }

    public function navigationGroup(?string $group): static
    {
        $this->navigationGroup = $group;

        return $this;
    }

    public function navigationIcon(?string $icon): static
    {
        $this->navigationIcon = $icon;

        return $this;
    }

    public function navigationSort(?int $sort): static
    {
        $this->navigationSort = $sort;

        return $this;
    }

    // ------------------------------------------------------------------
    // Accessors
    // ------------------------------------------------------------------

    public function getNavigationGroup(): ?string
    {
        return $this->navigationGroup ?? config('packstub-flow.navigation.group');
    }

    public function getNavigationIcon(): string
    {
        return $this->navigationIcon ?? config('packstub-flow.navigation.icon', 'heroicon-o-bolt');
    }

    public function getNavigationSort(): ?int
    {
        return $this->navigationSort ?? config('packstub-flow.navigation.sort');
    }

    /** @return class-string<WorkflowResource> */
    public function getResource(): string
    {
        return $this->resource;
    }

    /** @return class-string<SecretResource> */
    public function getSecretResource(): string
    {
        return $this->secretResource;
    }

    // ------------------------------------------------------------------
    // Panel integration
    // ------------------------------------------------------------------

    public function register(Panel $panel): void
    {
        $registry = app(NodeRegistry::class);

        $registry
            ->registerTriggers($this->triggers)
            ->registerActions($this->actions)
            ->registerConditions($this->conditions)
            ->forget($this->without);

        ModelFinder::register($this->models);

        if ($this->hasResource) {
            $panel->resources([$this->resource]);
        }

        if ($this->hasSecrets) {
            $panel->resources([$this->secretResource]);
        }

        $pages = [];

        if ($this->hasRunsPage) {
            $pages[] = WorkflowRuns::class;
        }

        if ($this->hasApprovalsPage) {
            $pages[] = Approvals::class;
        }

        if ($pages !== []) {
            $panel->pages($pages);
        }
    }

    public function boot(Panel $panel): void
    {
        //
    }
}
