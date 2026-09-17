<?php

use Filament\Facades\Filament;
use Illuminate\Support\Facades\Process;
use Laravel\Ai\StructuredAnonymousAgent;
use Livewire\Livewire;
use Packstub\Agents\Facades\Agents;
use Packstub\Agents\Support\AgentBudget;
use Packstub\Agents\Support\AgentModels;
use Packstub\Agents\Support\Context\LaravelContext;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\ListWorkflows;
use Packstub\Flow\Models\Secret;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\AskAi;
use Packstub\Flow\Nodes\Actions\HttpRequest;
use Packstub\Flow\Nodes\Actions\SendNotification;
use Packstub\Flow\Nodes\Actions\SendSlackMessage;
use Packstub\Flow\Nodes\Actions\WriteLog;
use Packstub\Flow\Nodes\Conditions\CompareValues;
use Packstub\Flow\Nodes\Triggers\RecordCreated;
use Packstub\Flow\Nodes\Triggers\Webhook;
use Packstub\Flow\Support\NodeCatalog;
use Packstub\Flow\Support\WorkflowGenerator;
use Packstub\Flow\Tests\Fixtures\FakeEngine;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\Team;
use Packstub\Flow\Tests\Fixtures\Ticket;

// These tests drive the engine stubs (tests/Fixtures/Agents); with the real packstub/agents installed they do not apply.
beforeEach(function (): void {
    if (! property_exists(StructuredAnonymousAgent::class, 'responses')) {
        $this->markTestSkipped('packstub/agents is installed: the builder tests run against the stubs only.');
    }
});

/**
 * A node of the model's answer.
 *
 * @param  array<string, string>  $settings
 * @return array<string, mixed>
 */
function answered(string $id, string $node, string $label, array $settings = [], string $note = ''): array
{
    return [
        'id' => $id,
        'node' => $node,
        'label' => $label,
        'note' => $note,
        'settings' => array_map(fn (string $key, string $value): array => ['key' => $key, 'value' => $value], array_keys($settings), $settings),
    ];
}

/**
 * What the model answers for "when an order over 500 comes in, post to
 * Slack and flag it for review": a trigger, a condition, two actions on
 * the true branch, a log on one action's error branch.
 *
 * @return array<string, mixed>
 */
function orderAlertAnswer(): array
{
    return [
        'name' => 'High-value order alert',
        'description' => 'Posts big orders to Slack and flags them.',
        'nodes' => [
            answered('trigger-1', RecordCreated::class, 'Order created', ['model_class' => 'Order', 'once' => 'true', 'dedup_days' => '', 'bogus' => 'x']),
            answered('condition-1', CompareValues::class, 'Over 500?', ['left' => '{{ model.total }}', 'operator' => 'is greater than', 'value' => '500']),
            answered('action-1', SendSlackMessage::class, 'Post to Slack', ['webhook_url' => '{{ secrets.slack_webhook }}', 'message' => 'Order {{ model.id }}: {{ model.total | number:2 }}', Runner::ON_ERROR => 'branch'], 'Pick the channel in the secret.'),
            answered('action-2', SendNotification::class, 'Flag for review', ['title' => 'Review order {{ model.id }}', 'body' => 'Over 500.', 'status' => 'Warning']),
            answered('action-3', WriteLog::class, 'Log the Slack failure', ['message' => 'Slack failed: {{ error.message }}', 'level' => 'warning']),
        ],
        'edges' => [
            ['from' => 'trigger-1', 'output' => 'output', 'to' => 'condition-1'],
            ['from' => 'condition-1', 'output' => 'true', 'to' => 'action-1'],
            ['from' => 'condition-1', 'output' => 'true', 'to' => 'action-2'],
            ['from' => 'condition-1', 'output' => 'true', 'to' => 'action-2'], // duplicate
            ['from' => 'action-1', 'output' => 'error', 'to' => 'action-3'],
            ['from' => 'action-2', 'output' => 'output', 'to' => 'nowhere'], // unknown node
            ['from' => 'action-3', 'output' => 'output', 'to' => 'trigger-1'], // into a trigger
        ],
    ];
}

it('drafts an inactive workflow from a sentence with the registered nodes, their settings coerced and the graph laid out', function (): void {
    Secret::create(['key' => 'slack_webhook', 'value' => 'https://hooks.slack.test/abc']);
    FakeEngine::answer(orderAlertAnswer());

    $workflow = WorkflowGenerator::generate('When an order over $500 comes in, post to Slack and flag it for review.', 'fast');

    // The question: the description as the prompt; the catalog, the secrets and the record types in the instructions; the graph as the shape.
    $prompt = FakeEngine::lastPrompt();

    expect($prompt['prompt'])->toBe('When an order over $500 comes in, post to Slack and flag it for review.')
        ->and($prompt['instructions'])->toContain('the secrets that exist: slack_webhook', Order::class.', '.Ticket::class, '"identifier":'.json_encode(SendSlackMessage::class), '"key":"webhook_url"', '"true":"True","false":"False"')
        ->and($prompt['provider'])->toBe(['anthropic' => 'claude-haiku-4-5', 'openai' => 'openai-model-for-fast'])
        ->and($prompt['timeout'])->toBe(60)
        ->and(array_keys($prompt['schema']['properties']))->toBe(['name', 'description', 'nodes', 'edges'])
        ->and($prompt['schema']['required'])->toBe(['name', 'description', 'nodes', 'edges'])
        ->and($prompt['schema']['properties']['nodes']['items']['properties']['node']['enum'])->toBe(array_keys(NodeCatalog::all()))
        ->and($prompt['schema']['properties']['nodes']['items']['properties']['settings']['items']['required'])->toBe(['key', 'value'])
        ->and($prompt['schema']['properties']['edges']['items']['required'])->toBe(['from', 'output', 'to'])
        ->and(AgentModels::$resolved)->toBe(['fast'])
        ->and(AgentBudget::$checks)->toHaveCount(1)
        ->and(AgentBudget::$hits)->toHaveCount(1);

    // The workflow: inactive, named by the model, the nodes typed and their settings in the shape each setting stores.
    expect($workflow->exists)->toBeTrue()
        ->and($workflow->is_active)->toBeFalse()
        ->and($workflow->name)->toBe('High-value order alert')
        ->and($workflow->description)->toBe('Posts big orders to Slack and flags them.')
        ->and($workflow->tenant_id)->toBeNull()
        ->and($workflow->nodes())->toHaveCount(5)
        ->and($workflow->edges())->toHaveCount(4);

    $nodes = collect($workflow->nodes())->keyBy('id');

    expect($nodes['trigger-1']['type'])->toBe('trigger')
        ->and($nodes['trigger-1']['data']['label'])->toBe('Order created')
        ->and($nodes['trigger-1']['data']['description'])->toBeNull()
        ->and($nodes['trigger-1']['data']['config'])->toBe(['model_class' => Order::class, 'once' => true])
        ->and($nodes['condition-1']['type'])->toBe('condition')
        ->and($nodes['condition-1']['data']['config'])->toBe(['left' => '{{ model.total }}', 'operator' => '>', 'value' => '500'])
        ->and($nodes['action-1']['type'])->toBe('action')
        ->and($nodes['action-1']['data']['description'])->toBe('Pick the channel in the secret.')
        ->and($nodes['action-1']['data']['config'])->toBe(['webhook_url' => '{{ secrets.slack_webhook }}', 'message' => 'Order {{ model.id }}: {{ model.total | number:2 }}', Runner::ON_ERROR => 'branch'])
        ->and($nodes['action-2']['data']['config']['status'])->toBe('warning')
        ->and($nodes['action-3']['data']['config'])->toBe(['message' => 'Slack failed: {{ error.message }}', 'level' => 'warning']);

    // Laid out by depth: one column per step, a row per node of the column.
    expect(collect($workflow->nodes())->mapWithKeys(fn (array $node): array => [$node['id'] => [$node['position']['x'], $node['position']['y']]])->all())->toBe([
        'trigger-1' => [40, 40],
        'condition-1' => [360, 40],
        'action-1' => [680, 40],
        'action-2' => [680, 220],
        'action-3' => [1000, 40],
    ]);

    // The edges through the outputs the nodes have; the duplicate, the one to nowhere and the one into the trigger dropped.
    expect(array_map(fn (array $edge): string => "{$edge['source']}:{$edge['sourceHandle']}>{$edge['target']}", $workflow->edges()))->toBe([
        'trigger-1:output>condition-1',
        'condition-1:true>action-1',
        'condition-1:true>action-2',
        'action-1:error>action-3',
    ]);
});

it('makes do with what the model got wrong: ids, outputs, options, values and names', function (): void {
    FakeEngine::answer([
        'name' => '',
        'description' => '',
        'nodes' => [
            answered('Order hook!', Webhook::class, '', ['token' => 'leaked-token']),
            answered('Order hook!', CompareValues::class, 'Big?', ['left' => '{{ webhook.total }}', 'operator' => 'nope', 'value' => '500']),
            answered('', HttpRequest::class, 'Call the API', ['method' => 'put', 'url' => 'https://api.example.test/hook', 'headers' => '{"X-Key": "{{ secrets.api_key }}"}', 'timeout' => 'soon', 'retries' => '2', 'throw_on_error' => 'no']),
            'not a node',
        ],
        'edges' => [
            ['from' => 'Order hook!', 'output' => 'yes', 'to' => 'Order hook!-2'],
            ['from' => 'Order hook!-2', 'output' => 'maybe', 'to' => 'node-3'],
            ['from' => 'Order hook!-2', 'output' => 'yes', 'to' => 'Order hook!-2'], // self
        ],
    ]);

    $workflow = WorkflowGenerator::generate('Ping the API for big orders');
    $nodes = collect($workflow->nodes())->keyBy('id');

    expect($workflow->name)->toBe('Drafted workflow')
        ->and($workflow->description)->toBeNull()
        ->and(array_keys($nodes->all()))->toBe(['Order-hook', 'Order-hook-2', 'node-3'])
        ->and($nodes['Order-hook']['data']['label'])->toBe('Webhook')
        ->and(strlen($nodes['Order-hook']['data']['config']['token']))->toBe(40)
        ->and($nodes['Order-hook-2']['data']['config'])->toBe(['left' => '{{ webhook.total }}', 'value' => '500'])
        ->and($nodes['node-3']['data']['config'])->toBe(['method' => 'PUT', 'url' => 'https://api.example.test/hook', 'headers' => ['X-Key' => '{{ secrets.api_key }}'], 'retries' => 2, 'throw_on_error' => false])
        ->and(array_map(fn (array $edge): string => "{$edge['source']}:{$edge['sourceHandle']}>{$edge['target']}", $workflow->edges()))->toBe([
            'Order-hook:output>Order-hook-2',
            'Order-hook-2:true>node-3',
        ]);
});

it('refuses when the workspace\'s limits do, when the provider fails, and when the answer is not a workflow', function (): void {
    expect(fn () => WorkflowGenerator::generate('  '))->toThrow(WorkflowException::class, 'Describe the workflow first.');

    AgentBudget::$refusal = 'Over the monthly budget.';

    expect(fn () => WorkflowGenerator::generate('Do a thing'))->toThrow(WorkflowException::class, 'Over the monthly budget.')
        ->and(AgentBudget::$hits)->toBe([])
        ->and(FakeEngine::lastPrompt())->toBeNull();

    AgentBudget::$refusal = null;
    FakeEngine::answer(new RuntimeException('provider down'));

    expect(fn () => WorkflowGenerator::generate('Do a thing'))->toThrow(WorkflowException::class, 'The workflow could not be drafted: provider down')
        ->and(AgentBudget::$hits)->toBe([]);

    FakeEngine::answer(['name' => 'Nothing', 'description' => '', 'nodes' => [], 'edges' => []]);

    expect(fn () => WorkflowGenerator::generate('Do a thing'))->toThrow(WorkflowException::class, 'did not produce a workflow');

    // A node the install does not have is refused by the import, like any document.
    FakeEngine::answer(['name' => 'Nope', 'description' => '', 'nodes' => [answered('a', 'App\\Nope', 'Nope')], 'edges' => []]);

    expect(fn () => WorkflowGenerator::generate('Do a thing'))->toThrow(WorkflowException::class, 'not registered')
        ->and(Workflow::query()->count())->toBe(0);
});

it('describes every registered node for the model and coerces answers back into settings', function (): void {
    $catalog = NodeCatalog::all();

    expect(array_keys($catalog))->toBe([...Flow::registry()->triggers(), ...Flow::registry()->actions(), ...Flow::registry()->conditions()]);

    $trigger = $catalog[RecordCreated::class];
    $settings = collect($trigger['settings'])->keyBy('key');

    expect($trigger)->toMatchArray(['type' => 'trigger', 'name' => 'Record created', 'outputs' => ['output' => 'Next']])
        ->and($settings['model_class'])->toMatchArray(['label' => 'Record type', 'kind' => 'select', 'required' => true, 'options' => [Order::class => 'Order', Ticket::class => 'Ticket']])
        ->and($settings['model_class']['help'])->toContain('HasWorkflows')
        ->and($settings['once'])->toMatchArray(['kind' => 'boolean', 'required' => false, 'default' => false])
        ->and($settings['dedup_days'])->toMatchArray(['kind' => 'number', 'min' => 1, 'max' => 3650])
        ->and($trigger['placeholders'])->toBe([]);

    $condition = $catalog[CompareValues::class];

    expect($condition['outputs'])->toBe(['true' => 'True', 'false' => 'False'])
        ->and(collect($condition['settings'])->firstWhere('key', 'operator'))->toMatchArray(['kind' => 'select', 'required' => true, 'default' => '=']);

    $http = collect($catalog[HttpRequest::class]['settings'])->keyBy('key');

    expect($catalog[HttpRequest::class]['outputs'])->toBe(['output' => 'Next', 'error' => 'Error'])
        ->and($http['headers']['kind'])->toBe('map')
        ->and($http['method'])->toMatchArray(['kind' => 'select', 'default' => 'POST'])
        ->and($http['url']['example'])->toBe('https://api.example.com/hooks/{{ model.id }}')
        ->and($http[Runner::ON_ERROR]['options'])->toHaveKeys(['fail', 'continue', 'branch'])
        ->and($http[Runner::RETRIES]['kind'])->toBe('number')
        ->and($catalog[HttpRequest::class]['placeholders'])->toHaveKey('{{ last.status }}')
        ->and($catalog[HttpRequest::class]['placeholders'])->not->toHaveKeys(['{{ model.name }}', '{{ secrets.api_key }}']);

    $fields = collect($catalog[AskAi::class]['settings'])->firstWhere('key', 'fields');

    expect($fields['kind'])->toBe('items')
        ->and(collect($fields['fields'])->pluck('kind', 'key')->all())->toBe(['name' => 'text', 'type' => 'select', 'options' => 'text', 'description' => 'text', 'required' => 'boolean'])
        ->and($fields)->not->toHaveKey('default');

    expect(NodeCatalog::coerce($settings['model_class'], 'Ticket'))->toBe(Ticket::class)
        ->and(NodeCatalog::coerce($settings['model_class'], Order::class))->toBe(Order::class)
        ->and(NodeCatalog::coerce($settings['model_class'], 'Invoice'))->toBeNull()
        ->and(NodeCatalog::coerce(['kind' => 'select', 'options' => []], 'anything'))->toBe('anything')
        ->and(NodeCatalog::coerce($settings['once'], 'yes'))->toBeTrue()
        ->and(NodeCatalog::coerce($settings['once'], 'False'))->toBeFalse()
        ->and(NodeCatalog::coerce($settings['dedup_days'], '12'))->toBe(12)
        ->and(NodeCatalog::coerce($settings['dedup_days'], '1.5'))->toBe(1.5)
        ->and(NodeCatalog::coerce($settings['dedup_days'], 'soon'))->toBeNull()
        ->and(NodeCatalog::coerce($settings['dedup_days'], ''))->toBeNull()
        ->and(NodeCatalog::coerce(['kind' => 'list'], '["a", "b"]'))->toBe(['a', 'b'])
        ->and(NodeCatalog::coerce(['kind' => 'list'], 'a, b'))->toBe(['a', 'b'])
        ->and(NodeCatalog::coerce(['kind' => 'multiselect', 'options' => ['a' => 'Alpha', 'b' => 'Beta']], 'Alpha, b, zeta'))->toBe(['a', 'b'])
        ->and(NodeCatalog::coerce(['kind' => 'map'], '{"X-Key": "1"}'))->toBe(['X-Key' => '1'])
        ->and(NodeCatalog::coerce(['kind' => 'map'], "X-Key: 1\nAccept: json"))->toBe(['X-Key' => '1', 'Accept' => 'json'])
        ->and(NodeCatalog::coerce($fields, '[{"name": "urgency", "type": "enum", "options": "low, high", "required": "no"}, "junk"]'))->toBe([['name' => 'urgency', 'type' => 'enum', 'options' => 'low, high', 'description' => null, 'required' => false]])
        ->and(NodeCatalog::coerce(['kind' => 'text'], ' hello '))->toBe('hello');
});

it('drafts inside the panel\'s tenant and attaches the workflow to it', function (): void {
    $team = Team::query()->create(['name' => 'Acme', 'slug' => 'acme']);
    $user = createUser(['team_id' => $team->getKey()]);
    $this->actingAs($user);
    Filament::setCurrentPanel(Filament::getPanel('app'));
    Filament::setTenant($team, true);
    Agents::tenantModel(Team::class, 'slug');
    Secret::create(['key' => 'team_hook', 'value' => 'x', 'tenant_type' => $team->getMorphClass(), 'tenant_id' => $team->getKey()]);
    FakeEngine::answer(orderAlertAnswer());

    Livewire::test(ListWorkflows::class)
        ->callAction('describe', data: ['description' => 'Alert on big orders'])
        ->assertHasNoActionErrors()
        ->assertNotified()
        ->assertRedirect();

    $workflow = Workflow::query()->where('name', 'High-value order alert')->first();

    expect($workflow->tenant_type)->toBe($team->getMorphClass())
        ->and($workflow->tenant_id)->toBe((string) $team->getKey())
        ->and($workflow->is_active)->toBeFalse()
        ->and(LaravelContext::$entered)->toBe([['tenant' => $team->getKey()]])
        ->and(LaravelContext::$left)->toBe(1)
        ->and(AgentBudget::$checks[0]['tenant'])->toBe($team->getKey())
        ->and(FakeEngine::lastPrompt()['instructions'])->toContain('team_hook');

    Filament::setTenant(null);
    Filament::setCurrentPanel(Filament::getPanel('admin'));
});

it('offers Describe a workflow on the Workflows page and opens the draft with the nodes to fill in marked', function (): void {
    $this->actingAs(createUser());
    FakeEngine::answer([
        'name' => 'Ticket triage',
        'description' => 'Flags urgent tickets.',
        'nodes' => [
            answered('trigger-1', RecordCreated::class, 'Ticket created', [], 'Pick the ticket model.'),
            answered('action-1', SendSlackMessage::class, 'Tell support', ['message' => 'New ticket {{ model.id }}'], 'Add the Slack webhook as a secret.'),
        ],
        'edges' => [['from' => 'trigger-1', 'output' => 'output', 'to' => 'action-1']],
    ]);

    Livewire::test(ListWorkflows::class)
        ->assertActionVisible('describe')
        ->callAction('describe', data: ['description' => ''])
        ->assertHasActionErrors(['description' => 'required']);

    expect(FakeEngine::lastPrompt())->toBeNull();

    $page = Livewire::test(ListWorkflows::class)
        ->callAction('describe', data: ['description' => 'When a ticket comes in, tell support in Slack', 'model' => 'fast'])
        ->assertHasNoActionErrors()
        ->assertNotified('"Ticket triage" drafted. Fill in the marked nodes, then switch it on.');

    $workflow = Workflow::query()->where('name', 'Ticket triage')->first();

    expect($workflow)->not->toBeNull()
        ->and($workflow->is_active)->toBeFalse()
        ->and(AgentModels::$resolved)->toBe(['fast']);

    // The draft opens for review: the canvas marks the record type and the webhook URL still to fill in (see TransferTest).
    $page->assertRedirect(ListWorkflows::reviewUrl($workflow));
});

it('is offered only when the engine is installed', function (): void {
    expect(WorkflowGenerator::isAvailable())->toBeTrue();

    // Without the engine's classes on the autoloader — the test stubs are not loaded there — the builder is unavailable and the action hidden.
    $result = Process::path(dirname(__DIR__, 2))->run([PHP_BINARY, 'tests/Fixtures/without-engine.php']);

    expect($result->successful())->toBeTrue()
        ->and($result->output())->toBe('ask_ai=unavailable describe=unavailable');
});
