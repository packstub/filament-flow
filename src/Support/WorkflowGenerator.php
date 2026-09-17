<?php

namespace Packstub\Flow\Support;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Support\Str;
use Laravel\Ai\Responses\StructuredAgentResponse;
use Laravel\Ai\StructuredAnonymousAgent;
use Packstub\Agents\Support\AgentBudget;
use Packstub\Agents\Support\AgentModels;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\AskAi;

/**
 * "Describe the workflow": a sentence in, an inactive workflow out. The
 * model gets the registered nodes (NodeCatalog) and answers with a graph
 * in a fixed shape — nodes with settings as key / value text, edges by
 * output handle — which becomes an export document (WorkflowTransfer,
 * positions laid out by depth) and goes through Workflow::import(), so
 * unknown nodes are refused and webhook tokens are fresh. Runs on
 * packstub/agents (Agents for Laravel) like the Ask AI action: provider
 * and model, the workspace's key, budgets and limits are the engine's.
 */
class WorkflowGenerator
{
    /** Horizontal distance between depths and vertical distance between nodes of one depth, on the canvas. */
    public const COLUMN = 320;

    public const ROW = 180;

    public static function isAvailable(): bool
    {
        return AskAi::isAvailable();
    }

    /**
     * Describe, draft, import: the created (inactive) workflow.
     *
     * @param  array<string, mixed>  $attributes  overrides for the workflow: tenant_type / tenant_id, name, …
     *
     * @throws WorkflowException when the workspace's limits refuse the question, the provider fails, or the answer is not a workflow
     */
    public static function generate(string $description, ?string $modelKey = null, array $attributes = []): Workflow
    {
        return WorkflowTransfer::import(static::draft($description, $modelKey), $attributes);
    }

    /**
     * The model's answer as an export document, before anything is saved.
     *
     * @return array{format: string, name: string, description: string|null, settings: array<string, mixed>, definition: array{nodes: array<int, array<string, mixed>>, edges: array<int, array<string, mixed>>}}
     */
    public static function draft(string $description, ?string $modelKey = null): array
    {
        $description = trim($description);

        if ($description === '') {
            throw new WorkflowException(__('packstub-flow::flow.describe.empty'));
        }

        $catalog = NodeCatalog::all();

        if ($catalog === []) {
            throw new WorkflowException(__('packstub-flow::flow.describe.no_nodes'));
        }

        $answer = AgentTenant::within(Tenancy::panelTenant(), fn (): array => static::ask($description, $catalog, $modelKey));

        return static::document($answer, $catalog);
    }

    /**
     * The question to the provider, inside the engine's budget: refused
     * before it costs anything when the workspace is switched off or over
     * its limits, counted against the per-minute limit once answered.
     *
     * @param  array<string, array<string, mixed>>  $catalog
     * @return array<string, mixed>
     */
    protected static function ask(string $description, array $catalog, ?string $modelKey): array
    {
        if (($refusal = AgentBudget::refusal($description)) !== null) {
            throw new WorkflowException($refusal);
        }

        $modelKey = $modelKey === '' || $modelKey === AskAi::DEFAULT_MODEL ? null : $modelKey;
        $resolved = AgentModels::resolve($modelKey);
        $schema = static::schema($catalog);

        $agent = new StructuredAnonymousAgent(
            instructions: static::instructions($catalog),
            messages: [],
            tools: [],
            schema: fn (JsonSchema $types): array => AskAi::types($types, $schema),
        );

        try {
            $response = $agent->prompt($description, provider: $resolved['providers'], timeout: AskAi::defaultTimeout());
        } catch (\Throwable $exception) {
            throw new WorkflowException(__('packstub-flow::flow.describe.failed', ['error' => $exception->getMessage()]), previous: $exception);
        }

        AgentBudget::hit();

        return $response instanceof StructuredAgentResponse ? $response->structured : [];
    }

    /**
     * The shape the model answers in. Settings are key / value pairs of
     * text — strict structured output cannot take an object whose keys
     * differ per node — and are coerced by the catalog afterwards.
     *
     * @param  array<string, array<string, mixed>>  $catalog
     * @return array<string, mixed>
     */
    public static function schema(array $catalog): array
    {
        return [
            'type' => 'object',
            'properties' => [
                'name' => ['type' => 'string', 'description' => 'A short name for the workflow, in the language of the request'],
                'description' => ['type' => 'string', 'description' => 'One sentence: what the workflow does'],
                'nodes' => [
                    'type' => 'array',
                    'description' => 'The nodes of the workflow: one trigger first, then the conditions and actions',
                    'items' => [
                        'type' => 'object',
                        'properties' => [
                            'id' => ['type' => 'string', 'description' => 'A short unique id: trigger-1, condition-1, action-1, action-2'],
                            'node' => ['type' => 'string', 'enum' => array_keys($catalog), 'description' => 'The identifier of a node from the catalog'],
                            'label' => ['type' => 'string', 'description' => 'What this node does here, a few words'],
                            'note' => ['type' => 'string', 'description' => 'What the person still has to fill in or check on this node, or an empty string'],
                            'settings' => [
                                'type' => 'array',
                                'description' => 'The node\'s settings from the catalog: key and value, both text',
                                'items' => [
                                    'type' => 'object',
                                    'properties' => [
                                        'key' => ['type' => 'string'],
                                        'value' => ['type' => 'string'],
                                    ],
                                    'required' => ['key', 'value'],
                                ],
                            ],
                        ],
                        'required' => ['id', 'node', 'label', 'note', 'settings'],
                    ],
                ],
                'edges' => [
                    'type' => 'array',
                    'description' => 'The connections: from a node\'s output to the next node',
                    'items' => [
                        'type' => 'object',
                        'properties' => [
                            'from' => ['type' => 'string', 'description' => 'The id of the node the edge leaves'],
                            'output' => ['type' => 'string', 'description' => 'The output it leaves from: "output" for triggers and actions, "true" or "false" for conditions, or another output listed for the node'],
                            'to' => ['type' => 'string', 'description' => 'The id of the node it enters'],
                        ],
                        'required' => ['from', 'output', 'to'],
                    ],
                ],
            ],
            'required' => ['name', 'description', 'nodes', 'edges'],
        ];
    }

    /**
     * The system prompt: the rules of a workflow and the catalog as JSON.
     *
     * @param  array<string, array<string, mixed>>  $catalog
     */
    public static function instructions(array $catalog): string
    {
        $secrets = Secrets::keys(Tenancy::panelTenant());
        $models = array_keys(ModelFinder::options());

        $lines = [
            'You design workflows for Filament Flow, a workflow automation tool inside a Laravel admin panel. A workflow is a graph: a trigger starts it, conditions branch on true / false, actions do things. Nodes are connected by edges from an output of one node to the next node.',
            '',
            'Rules:',
            '- Use only the nodes in the catalog below, by their identifier, and only the settings listed for each node, by key. Values are always text: "true" / "false" for boolean settings, digits for numbers, one of the listed option keys (or its label) for selects, JSON text for lists, maps and items.',
            '- Start with exactly one trigger unless the request clearly needs several. Every other node must be reachable from a trigger through edges. Do not add nodes the request does not ask for.',
            '- Outputs: triggers and actions continue through "output"; conditions through "true" and "false"; an action also has "error" when its _on_error setting is "branch"; other outputs are listed with the node.',
            '- Fill in what the request says and what the catalog knows (record types, option keys). When a value cannot be known — an API endpoint, an email address, a phone number, a channel, a threshold the request does not give — leave the setting out and say in the node\'s note what the person has to fill in. Never invent URLs, addresses, keys or tokens.',
            '- Credentials and webhook URLs are secrets, referenced as {{ secrets.<name> }}'.($secrets !== [] ? '; the secrets that exist: '.implode(', ', $secrets) : '; when none fits, reference a sensible new name and say so in the note').'.',
            '- Placeholders put values of the run into text: {{ model.<attribute> }} for the record that started the run, {{ last.<key> }} for the previous action\'s output, {{ outputs.<node id>.<key> }} for an earlier one, {{ model.url }} for the record\'s page; filters such as {{ model.total | number:2 }}. Each node lists the placeholders it provides or accepts.',
            $models !== [] ? '- Record types available for the record triggers and actions: '.implode(', ', $models).'.' : '- No record types are registered yet: leave the record type empty and say so in the note.',
            '- Node ids: short and unique (trigger-1, condition-1, action-1). Labels: a few words, in the language of the request, as are the name, the description and the notes.',
            '',
            'Catalog (JSON):',
            (string) json_encode(array_values($catalog), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
        ];

        return implode("\n", $lines);
    }

    /**
     * The model's answer as an export document: nodes typed from the
     * catalog, settings coerced, notes as descriptions, edges through
     * outputs the node has, positions by depth.
     *
     * @param  array<string, mixed>  $answer
     * @param  array<string, array<string, mixed>>  $catalog
     * @return array{format: string, name: string, description: string|null, settings: array<string, mixed>, definition: array{nodes: array<int, array<string, mixed>>, edges: array<int, array<string, mixed>>}}
     */
    public static function document(array $answer, array $catalog): array
    {
        $nodes = [];
        $ids = [];

        foreach ((array) ($answer['nodes'] ?? []) as $index => $raw) {
            if (! is_array($raw)) {
                continue;
            }

            $identifier = (string) ($raw['node'] ?? '');
            $entry = $catalog[$identifier] ?? null;
            $id = static::id($raw['id'] ?? null, $index, $ids);
            $ids[$id] = $identifier;

            $nodes[$id] = [
                'id' => $id,
                // An unknown node keeps a type so the import can refuse it by name.
                'type' => $entry['type'] ?? NodeType::Action->value,
                'position' => ['x' => 0, 'y' => 0],
                'data' => [
                    'identifier' => $identifier,
                    'label' => Str::limit(trim((string) ($raw['label'] ?? '')) ?: ($entry['name'] ?? $id), 80, ''),
                    'description' => filled($raw['note'] ?? null) ? Str::limit(trim((string) $raw['note']), 255, '') : null,
                    'config' => static::config($entry, (array) ($raw['settings'] ?? [])),
                ],
            ];
        }

        if ($nodes === []) {
            throw new WorkflowException(__('packstub-flow::flow.describe.nothing'));
        }

        $edges = [];
        $seen = [];

        foreach ((array) ($answer['edges'] ?? []) as $raw) {
            if (! is_array($raw)) {
                continue;
            }

            $source = static::slug($raw['from'] ?? null);
            $target = static::slug($raw['to'] ?? null);

            if ($source === null || $target === null || $source === $target || ! isset($nodes[$source], $nodes[$target]) || $nodes[$target]['type'] === NodeType::Trigger->value) {
                continue;
            }

            $handle = static::handle($catalog[$ids[$source]] ?? null, $raw['output'] ?? null);

            if (isset($seen["{$source}/{$handle}/{$target}"])) {
                continue;
            }

            $seen["{$source}/{$handle}/{$target}"] = true;
            $edges[] = [
                'id' => 'e'.(count($edges) + 1),
                'source' => $source,
                'sourceHandle' => $handle,
                'target' => $target,
                'targetHandle' => 'input',
            ];
        }

        return [
            'format' => WorkflowTransfer::FORMAT,
            'name' => Str::limit(trim((string) ($answer['name'] ?? '')) ?: __('packstub-flow::flow.describe.default_name'), 120, ''),
            'description' => filled($answer['description'] ?? null) ? Str::limit(trim((string) $answer['description']), 500, '') : null,
            'settings' => [],
            'definition' => ['nodes' => array_values(static::layout($nodes, $edges)), 'edges' => $edges],
        ];
    }

    /**
     * The settings of a node from the model's key / value pairs, coerced by
     * the catalog; keys the node does not have are dropped.
     *
     * @param  array<string, mixed>|null  $entry
     * @param  array<int, mixed>  $pairs
     * @return array<string, mixed>
     */
    protected static function config(?array $entry, array $pairs): array
    {
        if ($entry === null) {
            return [];
        }

        $settings = collect((array) $entry['settings'])->keyBy('key');
        $config = [];

        foreach ($pairs as $pair) {
            $key = is_array($pair) ? (string) ($pair['key'] ?? '') : '';
            $setting = $settings->get($key);

            if ($setting === null) {
                continue;
            }

            $value = NodeCatalog::coerce($setting, $pair['value'] ?? null);

            if ($value !== null) {
                $config[$key] = $value;
            }
        }

        return $config;
    }

    /**
     * The output an edge leaves from: what the model said when the node
     * has it, the node's first output otherwise.
     *
     * @param  array<string, mixed>|null  $entry
     */
    protected static function handle(?array $entry, mixed $output): string
    {
        $outputs = array_keys((array) ($entry['outputs'] ?? []));
        $output = is_string($output) ? strtolower(trim($output)) : '';

        if ($outputs === []) {
            return $output !== '' ? $output : 'output';
        }

        return in_array($output, $outputs, true) ? $output : $outputs[0];
    }

    /**
     * Columns by depth from the triggers (the longest path in), rows in the
     * order the model listed the nodes.
     *
     * @param  array<string, array<string, mixed>>  $nodes
     * @param  array<int, array<string, mixed>>  $edges
     * @return array<string, array<string, mixed>>
     */
    protected static function layout(array $nodes, array $edges): array
    {
        $depth = [];

        foreach ($nodes as $id => $node) {
            $depth[$id] = 0;
        }

        // Longest path from a root; bounded by the node count so a cycle cannot loop forever.
        for ($pass = 0; $pass < count($nodes); $pass++) {
            $changed = false;

            foreach ($edges as $edge) {
                if ($depth[$edge['target']] < $depth[$edge['source']] + 1 && count($nodes) > $depth[$edge['source']] + 1) {
                    $depth[$edge['target']] = $depth[$edge['source']] + 1;
                    $changed = true;
                }
            }

            if (! $changed) {
                break;
            }
        }

        $rows = [];

        foreach ($nodes as $id => $node) {
            $column = $depth[$id];
            $rows[$column] = ($rows[$column] ?? 0) + 1;
            $nodes[$id]['position'] = ['x' => 40 + $column * self::COLUMN, 'y' => 40 + ($rows[$column] - 1) * self::ROW];
        }

        return $nodes;
    }

    /**
     * @param  array<string, string>  $taken
     */
    protected static function id(mixed $raw, int $index, array $taken): string
    {
        $id = static::slug($raw) ?? 'node-'.($index + 1);
        $candidate = $id;

        for ($n = 2; isset($taken[$candidate]); $n++) {
            $candidate = "{$id}-{$n}";
        }

        return $candidate;
    }

    protected static function slug(mixed $raw): ?string
    {
        if (! is_scalar($raw)) {
            return null;
        }

        $slug = trim((string) preg_replace('/-+/', '-', (string) preg_replace('/[^A-Za-z0-9_-]+/', '-', trim((string) $raw))), '-');

        return $slug === '' ? null : Str::limit($slug, 40, '');
    }
}
