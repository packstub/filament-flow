<?php

namespace Packstub\Flow\Nodes\Actions;

use Closure;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Utilities\Get;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Database\Eloquent\Model;
use Illuminate\JsonSchema\Types\Type;
use Laravel\Ai\Responses\StructuredAgentResponse;
use Laravel\Ai\StructuredAnonymousAgent;
use Packstub\Agents\Facades\Agents;
use Packstub\Agents\Support\AgentBudget;
use Packstub\Agents\Support\AgentModels;
use Packstub\Agents\Support\AgentRuntime;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\Tenancy;
use Throwable;

/**
 * Asks a language model a question built from the run and gets a structured
 * answer back — fields the user named, in the shape they asked for — so the
 * nodes after it can branch on {{ last.urgency }}. Runs on packstub/agents
 * (Agents for Laravel): provider and model, the workspace's own key, the
 * operator's budgets and limits all come from the engine, and laravel/ai
 * does the structured output. Offered only when the engine is installed.
 */
class AskAi extends Action
{
    use InterpolatesPlaceholders;

    public const DEFAULT_MODEL = 'default';

    /** What the fields builder offers; "enum" and "list" are string enums / string arrays in the schema. */
    public const FIELD_TYPES = ['string', 'number', 'integer', 'boolean', 'enum', 'list'];

    /** Output keys the action sets next to the answer's fields; a field may not use them. */
    public const RESERVED_KEYS = ['ok', 'raw', 'model', 'provider', 'usage', 'error'];

    public static function isAvailable(): bool
    {
        return class_exists(AgentModels::class)
            && class_exists(AgentBudget::class)
            && class_exists(StructuredAnonymousAgent::class);
    }

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.ask_ai.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.ask_ai.description');
    }

    public function getCategory(): string
    {
        return 'ai';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-sparkles';
    }

    public function getFormSchema(): array
    {
        return [
            Textarea::make('prompt')
                ->label(__('packstub-flow::flow.nodes.ask_ai.prompt'))
                ->placeholder(__('packstub-flow::flow.nodes.ask_ai.prompt_placeholder'))
                ->helperText(__('packstub-flow::flow.nodes.ask_ai.prompt_help'))
                ->rows(5)
                ->required(),
            Select::make('shape')
                ->label(__('packstub-flow::flow.nodes.ask_ai.shape'))
                ->options([
                    'fields' => __('packstub-flow::flow.nodes.ask_ai.shapes.fields'),
                    'schema' => __('packstub-flow::flow.nodes.ask_ai.shapes.schema'),
                ])
                ->default('fields')
                ->required()
                ->live(),
            Repeater::make('fields')
                ->label(__('packstub-flow::flow.nodes.ask_ai.fields'))
                ->schema([
                    TextInput::make('name')
                        ->label(__('packstub-flow::flow.nodes.ask_ai.field_name'))
                        ->placeholder('urgency')
                        ->regex('/^[A-Za-z_][A-Za-z0-9_]*$/')
                        ->notIn(self::RESERVED_KEYS)
                        ->required(),
                    Select::make('type')
                        ->label(__('packstub-flow::flow.nodes.ask_ai.field_type'))
                        ->options(array_combine(self::FIELD_TYPES, array_map(fn (string $type): string => __("packstub-flow::flow.nodes.ask_ai.types.{$type}"), self::FIELD_TYPES)))
                        ->default('string')
                        ->required()
                        ->live(),
                    TextInput::make('options')
                        ->label(__('packstub-flow::flow.nodes.ask_ai.field_options'))
                        ->placeholder('low, normal, high, urgent')
                        ->visible(fn (Get $get): bool => $get('type') === 'enum')
                        ->required(fn (Get $get): bool => $get('type') === 'enum'),
                    TextInput::make('description')
                        ->label(__('packstub-flow::flow.nodes.ask_ai.field_description'))
                        ->placeholder(__('packstub-flow::flow.nodes.ask_ai.field_description_placeholder')),
                    Toggle::make('required')
                        ->label(__('packstub-flow::flow.nodes.ask_ai.field_required'))
                        ->default(true)
                        ->inline(false),
                ])
                ->columns(2)
                ->defaultItems(1)
                ->minItems(1)
                ->addActionLabel(__('packstub-flow::flow.nodes.ask_ai.add_field'))
                ->helperText(__('packstub-flow::flow.nodes.ask_ai.fields_help'))
                ->visible(fn (Get $get): bool => ($get('shape') ?? 'fields') === 'fields'),
            Textarea::make('schema')
                ->label(__('packstub-flow::flow.nodes.ask_ai.schema'))
                ->placeholder('{"type": "object", "properties": {"urgency": {"type": "string", "enum": ["low", "high"]}}, "required": ["urgency"]}')
                ->helperText(__('packstub-flow::flow.nodes.ask_ai.schema_help'))
                ->rows(8)
                ->visible(fn (Get $get): bool => $get('shape') === 'schema')
                ->required(fn (Get $get): bool => $get('shape') === 'schema')
                ->rule(fn () => function (string $attribute, mixed $value, Closure $fail): void {
                    if (! is_string($value) || trim($value) === '') {
                        return;
                    }

                    try {
                        static::normalizeSchema(json_decode($value, true, 32, JSON_THROW_ON_ERROR));
                    } catch (Throwable) {
                        $fail(__('packstub-flow::flow.nodes.ask_ai.invalid_schema'));
                    }
                }),
            Textarea::make('instructions')
                ->label(__('packstub-flow::flow.nodes.ask_ai.instructions'))
                ->placeholder(__('packstub-flow::flow.nodes.ask_ai.instructions_placeholder'))
                ->helperText(__('packstub-flow::flow.nodes.ask_ai.instructions_help'))
                ->rows(3),
            Select::make('model')
                ->label(__('packstub-flow::flow.nodes.ask_ai.model'))
                ->options(fn (): array => [self::DEFAULT_MODEL => __('packstub-flow::flow.nodes.ask_ai.default_model')] + static::modelOptions())
                ->default(self::DEFAULT_MODEL)
                ->helperText(__('packstub-flow::flow.nodes.ask_ai.model_help')),
            TextInput::make('timeout')
                ->label(__('packstub-flow::flow.nodes.ask_ai.timeout'))
                ->helperText(__('packstub-flow::flow.nodes.http.timeout_help', ['default' => static::defaultTimeout()]))
                ->numeric()
                ->minValue(1)
                ->maxValue(600),
            Toggle::make('throw_on_error')
                ->label(__('packstub-flow::flow.nodes.ask_ai.throw_on_error'))
                ->helperText(__('packstub-flow::flow.nodes.ask_ai.throw_on_error_help'))
                ->default(true),
        ];
    }

    public function getPlaceholders(): array
    {
        return [
            ...Placeholders::documentation(),
            '{{ last.urgency }}' => __('packstub-flow::flow.placeholders.ai_field'),
            '{{ last.raw }}' => __('packstub-flow::flow.placeholders.ai_raw'),
            '{{ last.ok }}' => __('packstub-flow::flow.placeholders.ai_ok'),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $prompt = trim($this->interpolate($config['prompt'] ?? '', $payload));

        if ($prompt === '') {
            throw new WorkflowException('Ask AI has no question.');
        }

        $instructions = trim($this->interpolate($config['instructions'] ?? '', $payload));
        $schema = static::shape($config);
        $modelKey = $this->modelKey($config);
        $timeout = (int) (($config['timeout'] ?? null) ?: static::defaultTimeout());

        try {
            $answer = $this->withinTenant(fn (): array => $this->ask($prompt, $instructions, $schema, $modelKey, $timeout));
        } catch (Throwable $exception) {
            if ($config['throw_on_error'] ?? true) {
                throw $exception instanceof WorkflowException ? $exception : new WorkflowException('Ask AI: '.$exception->getMessage(), previous: $exception);
            }

            $this->output(['ok' => false, 'error' => $exception->getMessage()]);

            return;
        }

        $this->output($answer);
    }

    /**
     * What a test run shows instead of asking: the model it would ask, the
     * question and instructions with placeholders filled in, and the shape.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public function preview(array $config, array $payload): array
    {
        try {
            $answer = static::shape($config);
        } catch (WorkflowException $exception) {
            $answer = ['error' => $exception->getMessage()];
        }

        return array_filter([
            'would_ask' => static::modelLabel($this->modelKey($config)),
            'prompt' => trim($this->interpolate($config['prompt'] ?? '', $payload)),
            'instructions' => trim($this->interpolate($config['instructions'] ?? '', $payload)),
            'answer' => $answer,
        ], fn (mixed $value): bool => $value !== '');
    }

    /**
     * The question to the provider, inside the engine's budget: refused
     * before it costs anything when the workspace is switched off or over
     * its limits, counted against the per-minute limit once answered.
     *
     * @param  array<string, mixed>  $schema
     * @return array<string, mixed>
     */
    protected function ask(string $prompt, string $instructions, array $schema, ?string $modelKey, int $timeout): array
    {
        if (($refusal = AgentBudget::refusal($prompt)) !== null) {
            throw new WorkflowException($refusal);
        }

        $resolved = AgentModels::resolve($modelKey);

        $agent = new StructuredAnonymousAgent(
            instructions: $instructions !== '' ? $instructions : __('packstub-flow::flow.nodes.ask_ai.default_instructions'),
            messages: [],
            tools: [],
            schema: fn (JsonSchema $types): array => static::types($types, $schema),
        );

        $response = $agent->prompt($prompt, provider: $resolved['providers'], timeout: $timeout);

        AgentBudget::hit();

        $structured = $response instanceof StructuredAgentResponse ? $response->structured : [];

        return $structured + [
            'ok' => true,
            'raw' => $response->text,
            'model' => $resolved['model'],
            'provider' => $resolved['provider'],
            'usage' => ['input' => $response->usage->promptTokens, 'output' => $response->usage->completionTokens],
        ];
    }

    /**
     * Run the callback as the run's tenant, the way a queued turn runs: the
     * engine's context enters the workspace (budgets, limits and credentials
     * then read that workspace's) and leaves it afterwards. Nothing happens
     * when the run has no tenant, when the engine is already on it, or when
     * the engine's workspace model is not the one Flow scopes by.
     *
     * @template T
     *
     * @param  Closure(): T  $callback
     * @return T
     */
    protected function withinTenant(Closure $callback): mixed
    {
        $tenant = Tenancy::current();
        $model = Agents::context()->tenantModel();

        if (! $tenant instanceof Model || $model === null || ! $tenant instanceof $model || Agents::tenant()?->is($tenant)) {
            return $callback();
        }

        $leave = AgentRuntime::enter(['tenant' => $tenant->getKey()]);

        try {
            return $callback();
        } finally {
            $leave();
        }
    }

    /**
     * The answer's shape as a JSON Schema object, from the fields builder or
     * the raw schema, with `properties` and `required` normalised.
     *
     * @param  array<string, mixed>  $config
     * @return array<string, mixed>
     */
    public static function shape(array $config): array
    {
        if (($config['shape'] ?? 'fields') === 'schema') {
            $decoded = json_decode((string) ($config['schema'] ?? ''), true);

            if (! is_array($decoded)) {
                throw new WorkflowException('Ask AI: the answer schema is not a JSON object.');
            }

            try {
                return static::normalizeSchema($decoded);
            } catch (\InvalidArgumentException $exception) {
                throw new WorkflowException('Ask AI: '.$exception->getMessage(), previous: $exception);
            }
        }

        $properties = [];
        $required = [];

        foreach ((array) ($config['fields'] ?? []) as $field) {
            $name = trim((string) ($field['name'] ?? ''));

            if ($name === '') {
                continue;
            }

            $type = (string) ($field['type'] ?? 'string');
            $property = match ($type) {
                'enum' => ['type' => 'string', 'enum' => array_values(array_filter(array_map('trim', explode(',', (string) ($field['options'] ?? ''))), fn (string $v): bool => $v !== ''))],
                'list' => ['type' => 'array', 'items' => ['type' => 'string']],
                default => ['type' => in_array($type, self::FIELD_TYPES, true) ? $type : 'string'],
            };

            if (trim((string) ($field['description'] ?? '')) !== '') {
                $property['description'] = trim((string) $field['description']);
            }

            $properties[$name] = $property;

            if ($field['required'] ?? true) {
                $required[] = $name;
            }
        }

        if ($properties === []) {
            throw new WorkflowException('Ask AI: the answer has no fields.');
        }

        return ['type' => 'object', 'properties' => $properties, 'required' => $required];
    }

    /**
     * Check a raw JSON Schema is an object with named properties and return it
     * with `required` as a list; anything laravel/ai cannot express is refused.
     *
     * @param  array<mixed>  $schema
     * @return array<string, mixed>
     *
     * @throws \InvalidArgumentException
     */
    public static function normalizeSchema(array $schema): array
    {
        if (($schema['type'] ?? 'object') !== 'object' || ! is_array($schema['properties'] ?? null) || $schema['properties'] === []) {
            throw new \InvalidArgumentException('the answer schema must be an object with at least one property.');
        }

        foreach ($schema['properties'] as $name => $property) {
            if (! is_string($name) || ! preg_match('/^[A-Za-z_][A-Za-z0-9_]*$/', $name)) {
                throw new \InvalidArgumentException("\"{$name}\" is not a valid field name.");
            }

            if (in_array($name, self::RESERVED_KEYS, true)) {
                throw new \InvalidArgumentException("\"{$name}\" is reserved; pick another field name.");
            }

            if (! is_array($property)) {
                throw new \InvalidArgumentException("the schema of \"{$name}\" must be an object.");
            }

            static::kind($property);
        }

        $schema['type'] = 'object';
        $schema['required'] = array_values(array_filter((array) ($schema['required'] ?? []), 'is_string'));

        return $schema;
    }

    /**
     * The laravel/ai types for the schema's properties, built with the type
     * factory the agent is handed.
     *
     * @param  array<string, mixed>  $schema
     * @return array<string, Type>
     */
    public static function types(JsonSchema $factory, array $schema): array
    {
        $required = (array) ($schema['required'] ?? []);
        $types = [];

        foreach ((array) ($schema['properties'] ?? []) as $name => $property) {
            $types[(string) $name] = static::type($factory, (array) $property, in_array($name, $required, true));
        }

        return $types;
    }

    /**
     * @param  array<string, mixed>  $property
     */
    protected static function type(JsonSchema $factory, array $property, bool $required): Type
    {
        [$kind, $nullable] = static::kind($property);

        $type = match ($kind) {
            'integer' => $factory->integer(),
            'number' => $factory->number(),
            'boolean' => $factory->boolean(),
            'array' => $factory->array()->items(static::type($factory, (array) ($property['items'] ?? ['type' => 'string']), false)),
            'object' => $factory->object(static::types($factory, $property)),
            default => $factory->string(),
        };

        if (is_array($property['enum'] ?? null) && $property['enum'] !== []) {
            $type = $type->enum(array_values($property['enum']));
        }

        if (is_string($property['description'] ?? null) && $property['description'] !== '') {
            $type = $type->description($property['description']);
        }

        if ($nullable) {
            $type = $type->nullable();
        }

        if ($required) {
            $type = $type->required();
        }

        return $type;
    }

    /**
     * A property's JSON Schema type and whether null is allowed: a string, or a
     * list such as ["string", "null"]; an enum without a type is a string.
     *
     * @param  array<string, mixed>  $property
     * @return array{0: string, 1: bool}
     *
     * @throws \InvalidArgumentException
     */
    protected static function kind(array $property): array
    {
        $type = $property['type'] ?? (isset($property['enum']) ? 'string' : null);
        $nullable = false;

        if (is_array($type)) {
            $nullable = in_array('null', $type, true);
            $type = collect($type)->first(fn (mixed $t): bool => $t !== 'null');
        }

        if (! is_string($type) || ! in_array($type, ['string', 'number', 'integer', 'boolean', 'array', 'object'], true)) {
            throw new \InvalidArgumentException('every field needs a type: string, number, integer, boolean, array or object.');
        }

        return [$type, $nullable];
    }

    /** @param array<string, mixed> $config */
    protected function modelKey(array $config): ?string
    {
        $key = (string) ($config['model'] ?? self::DEFAULT_MODEL);

        return $key === '' || $key === self::DEFAULT_MODEL ? null : $key;
    }

    /**
     * The engine's model picker entries, or nothing when no provider is set
     * up yet (the select then offers the default only).
     *
     * @return array<string, string>
     */
    public static function modelOptions(): array
    {
        try {
            return AgentModels::options();
        } catch (Throwable) {
            return [];
        }
    }

    /** How the model a key stands for is called, for the test run's log. */
    public static function modelLabel(?string $key): string
    {
        try {
            $options = AgentModels::options();
            $key ??= AgentModels::current();

            return $options[$key] ?? ($key.' ('.__('packstub-flow::flow.nodes.ask_ai.default_model').')');
        } catch (Throwable) {
            return $key ?? __('packstub-flow::flow.nodes.ask_ai.default_model');
        }
    }

    public static function defaultTimeout(): int
    {
        return (int) config('packstub-flow.ai.timeout', 60);
    }
}
