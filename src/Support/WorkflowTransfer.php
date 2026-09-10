<?php

namespace Packstub\Flow\Support;

use Illuminate\Support\Str;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Forms\Components\FlowBuilder;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Triggers\Webhook;

/**
 * A workflow as a portable JSON document: name, description, run settings
 * and the definition. Nothing tied to one install travels with it — no ids,
 * tenant, runs, versions, webhook tokens or signing secrets.
 */
class WorkflowTransfer
{
    public const FORMAT = 'packstub-flow/1';

    /** The per-workflow settings that are part of an export. */
    public const SETTINGS = ['prune_after_days', 'max_consecutive_failures'];

    /**
     * @return array{format: string, name: string, description: string|null, settings: array<string, mixed>, definition: array{nodes: array<int, array<string, mixed>>, edges: array<int, array<string, mixed>>}}
     */
    public static function export(Workflow $workflow): array
    {
        $definition = FlowBuilder::normalizeState($workflow->definition);

        foreach ($definition['nodes'] as &$node) {
            if (($node['data']['identifier'] ?? null) === Webhook::class) {
                unset($node['data']['config']['token'], $node['data']['config']['signing_secret']);
            }
        }

        $settings = [];

        foreach (self::SETTINGS as $setting) {
            if ($workflow->getAttribute($setting) !== null) {
                $settings[$setting] = $workflow->getAttribute($setting);
            }
        }

        return [
            'format' => self::FORMAT,
            'name' => (string) $workflow->name,
            'description' => $workflow->description,
            'settings' => $settings,
            'definition' => $definition,
        ];
    }

    public static function toJson(Workflow $workflow): string
    {
        return (string) json_encode(self::export($workflow), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }

    /**
     * Create a workflow from an exported document (an array or its JSON), a
     * template, or a bare {nodes, edges} definition. The workflow starts
     * inactive unless $attributes says otherwise; every node class must be
     * registered; webhook nodes get a fresh token.
     *
     * @param  array<string, mixed>|string  $data
     * @param  array<string, mixed>  $attributes  overrides: name, description, is_active, tenant_type / tenant_id, …
     *
     * @throws WorkflowException when the document is not readable or uses unregistered nodes
     */
    public static function import(array|string $data, array $attributes = []): Workflow
    {
        $document = self::decode($data);

        $definition = FlowBuilder::normalizeState(isset($document['definition']) ? $document['definition'] : $document);

        if ($definition['nodes'] === []) {
            throw new WorkflowException(__('packstub-flow::flow.transfer.empty'));
        }

        if (($problems = DefinitionValidator::problems($definition, active: false)) !== []) {
            throw new WorkflowException(implode(' ', $problems));
        }

        foreach ($definition['nodes'] as &$node) {
            if (($node['data']['identifier'] ?? null) === Webhook::class) {
                $node['data']['config']['token'] = Str::random(40);
                unset($node['data']['config']['signing_secret']);
            }
        }

        $settings = array_intersect_key((array) ($document['settings'] ?? []), array_flip(self::SETTINGS));

        $model = Flow::workflowModel();
        $workflow = new $model([
            'name' => (string) ($document['name'] ?? __('packstub-flow::flow.transfer.default_name')),
            'description' => isset($document['description']) ? (string) $document['description'] : null,
            'is_active' => false,
            ...$settings,
            'definition' => $definition,
            ...$attributes,
        ]);
        $workflow->save();

        return $workflow;
    }

    /**
     * @param  array<string, mixed>|string  $data
     * @return array<string, mixed>
     */
    protected static function decode(array|string $data): array
    {
        if (is_array($data)) {
            return $data;
        }

        $decoded = json_decode($data, true);

        if (! is_array($decoded)) {
            throw new WorkflowException(__('packstub-flow::flow.transfer.invalid_json'));
        }

        return $decoded;
    }
}
