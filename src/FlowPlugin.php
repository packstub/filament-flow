<?php

namespace Packstub\Flow;

use Filament\Contracts\Plugin;
use Filament\Panel;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Support\ModelFinder;

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
    }

    public function boot(Panel $panel): void
    {
        //
    }
}
