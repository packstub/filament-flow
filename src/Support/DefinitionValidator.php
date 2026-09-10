<?php

namespace Packstub\Flow\Support;

use Filament\Forms\Components\Field;
use Packstub\Flow\Engine\Graph;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\NodeRegistry;
use Throwable;

/**
 * Checks a workflow definition before it is saved: every node must be a
 * registered class, and an active workflow needs a trigger, no dangling
 * nodes and no empty required settings.
 */
class DefinitionValidator
{
    /**
     * @param  array{nodes?: array<int, array<string, mixed>>, edges?: array<int, array<string, mixed>>}|null  $definition
     * @return array<int, string> problems found, empty when the definition is fine
     */
    public static function problems(?array $definition, bool $active = true): array
    {
        return array_merge(...array_values(self::problemsByNode($definition, $active)) ?: [[]]);
    }

    /**
     * The same problems keyed by the id of the node they concern; the empty
     * key holds the ones about the workflow as a whole (no trigger). The
     * canvas shows them as badges on the nodes.
     *
     * @param  array{nodes?: array<int, array<string, mixed>>, edges?: array<int, array<string, mixed>>}|null  $definition
     * @return array<string, array<int, string>>
     */
    public static function problemsByNode(?array $definition, bool $active = true): array
    {
        $graph = Graph::fromDefinition($definition);
        $registry = app(NodeRegistry::class);
        $problems = [];

        $nodes = $graph->nodes();
        $triggers = $graph->nodesOfType(NodeType::Trigger->value);

        foreach ($nodes as $node) {
            $id = (string) $node['id'];
            $identifier = $node['data']['identifier'] ?? null;
            $label = (string) ($node['data']['label'] ?? $id);

            if (! is_string($identifier) || ! $registry->has($identifier)) {
                $problems[$id][] = __('packstub-flow::flow.validation.unknown_node', ['node' => $label]);
            }
        }

        if (! $active) {
            return $problems;
        }

        if ($triggers === []) {
            $problems[''][] = __('packstub-flow::flow.validation.no_trigger');
        }

        $targets = array_fill_keys(array_map(fn (array $edge): string => (string) ($edge['target'] ?? ''), $graph->edges()), true);

        foreach ($nodes as $node) {
            $id = (string) $node['id'];
            $label = (string) ($node['data']['label'] ?? $id);

            if (($node['type'] ?? null) !== NodeType::Trigger->value && ! isset($targets[$id])) {
                $problems[$id][] = __('packstub-flow::flow.validation.unconnected', ['node' => $label]);
            }

            foreach (self::missingSettings($node, $registry) as $setting) {
                $problems[$id][] = __('packstub-flow::flow.validation.missing_setting', ['node' => $label, 'setting' => $setting]);
            }
        }

        return $problems;
    }

    /**
     * Required fields of the node's settings form that are blank.
     *
     * @param  array<string, mixed>  $node
     * @return array<int, string>
     */
    protected static function missingSettings(array $node, NodeRegistry $registry): array
    {
        $identifier = $node['data']['identifier'] ?? null;
        $instance = is_string($identifier) ? $registry->node($identifier) : null;

        if (! $instance) {
            return [];
        }

        $config = (array) ($node['data']['config'] ?? []);
        $missing = [];

        foreach ($instance->getFormSchema() as $component) {
            if (! $component instanceof Field) {
                continue;
            }

            try {
                // Conditionally required fields need a form context; treat
                // any failure to evaluate as "not required". A field with a
                // default (Method → POST) is filled in when the node is
                // opened, so a node saved straight from the palette passes.
                $required = $component->isRequired();
                $label = $component->getLabel();
                $default = $component->getDefaultState();
            } catch (Throwable) {
                continue;
            }

            if ($required && blank($config[$component->getName()] ?? null) && blank($default)) {
                $missing[] = is_string($label) ? $label : $component->getName();
            }
        }

        return $missing;
    }
}
