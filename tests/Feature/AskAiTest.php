<?php

use Illuminate\Support\Facades\Process;
use Laravel\Ai\StructuredAnonymousAgent;
use Packstub\Agents\Facades\Agents;
use Packstub\Agents\Support\AgentBudget;
use Packstub\Agents\Support\AgentModels;
use Packstub\Agents\Support\Context\LaravelContext;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\Secret;
use Packstub\Flow\Nodes\Actions\AskAi;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\RecordCreated;
use Packstub\Flow\Support\Templates;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\FakeEngine;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\Team;

// These tests drive the engine stubs (tests/Fixtures/Agents); with the real packstub/agents installed they do not apply.
beforeEach(function (): void {
    if (! property_exists(StructuredAnonymousAgent::class, 'responses')) {
        $this->markTestSkipped('packstub/agents is installed: the Ask AI tests run against the stubs only.');
    }
});

/**
 * The settings of an Ask AI node: a question about the order and two fields.
 *
 * @param  array<string, mixed>  $overrides
 * @return array<string, mixed>
 */
function askAi(array $overrides = []): array
{
    return [
        'prompt' => 'Classify {{ model.reference }}',
        'shape' => 'fields',
        'fields' => [
            ['name' => 'urgency', 'type' => 'enum', 'options' => 'low, high', 'description' => 'How urgent it is', 'required' => true],
            ['name' => 'summary', 'type' => 'string', 'required' => false],
        ],
        'model' => 'default',
        ...$overrides,
    ];
}

it('asks the model the rendered question in the shape asked for and exposes the answer as last.*', function (): void {
    Secret::create(['key' => 'hint', 'value' => 'shh-secret']);
    FakeEngine::answer(['urgency' => 'high', 'summary' => 'Card declined']);
    $order = createOrder();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('ask', AskAi::class, askAi(['prompt' => 'Classify {{ model.reference }} ({{ secrets.hint }})', 'instructions' => 'Be terse about {{ model.reference }}', 'model' => 'fast', 'timeout' => 30])),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.urgency }}|{{ last.summary }}|{{ last.ok }}|{{ last.model }}|{{ last.provider }}|{{ last.usage.input }}']),
    ], [edge('t', 'ask'), edge('ask', 'echo')]);

    $run = Flow::run($workflow, ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('high|Card declined|1|claude-haiku-4-5|anthropic|120')
        ->and(FakeEngine::lastPrompt())->toBe([
            'prompt' => 'Classify ORD-0001 (shh-secret)',
            'instructions' => 'Be terse about ORD-0001',
            'provider' => ['anthropic' => 'claude-haiku-4-5', 'openai' => 'openai-model-for-fast'],
            'model' => null,
            'timeout' => 30,
            'schema' => [
                'properties' => [
                    'urgency' => ['description' => 'How urgent it is', 'enum' => ['low', 'high'], 'type' => 'string'],
                    'summary' => ['type' => 'string'],
                ],
                'type' => 'object',
                'required' => ['urgency'],
            ],
        ])
        ->and(AgentModels::$resolved)->toBe(['fast'])
        ->and(AgentBudget::$checks)->toBe([['tenant' => null, 'prompt' => 'Classify ORD-0001 (shh-secret)']])
        ->and(AgentBudget::$hits)->toHaveCount(1);

    $step = collect($run->steps)->firstWhere('node_id', 'ask');

    expect($step['status'])->toBe('ok')
        ->and($step['output']['urgency'])->toBe('high')
        ->and($step['output']['raw'])->toBe('{"urgency":"high","summary":"Card declined"}')
        ->and($step['output']['usage'])->toBe(['input' => 120, 'output' => 18])
        ->and(json_encode($run->steps))->not->toContain('shh-secret');
});

it('takes a raw JSON Schema with nested objects, lists, nullable and enum types, and refuses what it cannot express', function (): void {
    FakeEngine::answer(['tags' => ['vip'], 'score' => null, 'customer' => ['vip' => true], 'category' => 'a']);

    $schema = json_encode([
        'type' => 'object',
        'properties' => [
            'tags' => ['type' => 'array', 'items' => ['type' => 'string']],
            'score' => ['type' => ['integer', 'null'], 'description' => '0 to 10'],
            'customer' => ['type' => 'object', 'properties' => ['vip' => ['type' => 'boolean']], 'required' => ['vip']],
            'category' => ['enum' => ['a', 'b']],
        ],
        'required' => ['tags', 'customer'],
    ]);

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('ask', AskAi::class, askAi(['shape' => 'schema', 'schema' => $schema])),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.tags | join:+ }}|{{ last.customer.vip }}|{{ last.category }}']),
    ], [edge('t', 'ask'), edge('ask', 'echo')]);

    expect(Flow::run($workflow)->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('vip|1|a')
        ->and(FakeEngine::lastPrompt()['schema'])->toBe([
            'properties' => [
                'tags' => ['items' => ['type' => 'string'], 'type' => 'array'],
                'score' => ['description' => '0 to 10', 'type' => ['integer', 'null']],
                'customer' => ['properties' => ['vip' => ['type' => 'boolean']], 'type' => 'object', 'required' => ['vip']],
                'category' => ['enum' => ['a', 'b'], 'type' => 'string'],
            ],
            'type' => 'object',
            'required' => ['tags', 'customer'],
        ]);

    expect(fn () => AskAi::shape(['shape' => 'schema', 'schema' => '["a"]']))->toThrow(WorkflowException::class, 'object with at least one property')
        ->and(fn () => AskAi::shape(['shape' => 'schema', 'schema' => '{"properties": {"raw": {"type": "string"}}}']))->toThrow(WorkflowException::class, '"raw" is reserved')
        ->and(fn () => AskAi::shape(['shape' => 'schema', 'schema' => '{"properties": {"x": {"format": "date"}}}']))->toThrow(WorkflowException::class, 'every field needs a type')
        ->and(fn () => AskAi::shape(['shape' => 'schema', 'schema' => 'not json']))->toThrow(WorkflowException::class, 'not a JSON object')
        ->and(fn () => AskAi::shape(['shape' => 'fields', 'fields' => []]))->toThrow(WorkflowException::class, 'no fields');

    // A broken shape fails the run before the model is asked.
    $broken = createWorkflow([triggerNode('t', Manual::class), actionNode('ask', AskAi::class, askAi(['fields' => []]))], [edge('t', 'ask')]);

    expect(Flow::run($broken)->status)->toBe(RunStatus::Failed)
        ->and(Flow::run($broken)->error)->toContain('no fields')
        ->and(FakeEngine::lastPrompt()['prompt'])->toBe('Classify');
});

it('lets refusals and provider errors take the node\'s error path', function (): void {
    // A refusal by the workspace's limits: the engine's message is the step error, nothing was asked.
    AgentBudget::$refusal = 'This workspace used its AI budget for today. It resets at midnight.';

    $strict = createWorkflow([triggerNode('t', Manual::class), actionNode('ask', AskAi::class, askAi())], [edge('t', 'ask')]);

    $run = Flow::run($strict);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toBe('This workspace used its AI budget for today. It resets at midnight.')
        ->and(FakeEngine::lastPrompt())->toBeNull()
        ->and(AgentBudget::$hits)->toBe([]);

    // "Fail the run when there is no answer" off: the run continues with ok false and the reason.
    $lenient = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('ask', AskAi::class, askAi(['throw_on_error' => false])),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.ok }}|{{ last.error }}|{{ last.urgency }}']),
    ], [edge('t', 'ask'), edge('ask', 'echo')]);

    expect(Flow::run($lenient)->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('0|This workspace used its AI budget for today. It resets at midnight.|');

    AgentBudget::$refusal = null;

    // A provider error is retried like any other failure; the second attempt answers.
    FakeEngine::answer(new RuntimeException('Provider overloaded'), ['urgency' => 'low']);

    $retrying = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('ask', AskAi::class, askAi(['_retries' => 1, '_retry_after' => 0])),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.urgency }}']),
    ], [edge('t', 'ask'), edge('ask', 'echo')]);

    $run = Flow::run($retrying);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('low')
        ->and(collect($run->steps)->firstWhere('status', 'retry')['message'])->toContain('Ask AI: Provider overloaded')
        ->and(AgentBudget::$hits)->toHaveCount(1);

    // The error branch carries the message.
    FakeEngine::answer(new RuntimeException('Model refused the content'));

    $branching = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('ask', AskAi::class, askAi(['_on_error' => 'branch'])),
        actionNode('echo', EchoAction::class, ['template' => '{{ error.message }}']),
    ], [edge('t', 'ask'), edge('ask', 'echo', 'error')]);

    expect(Flow::run($branching)->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('Ask AI: Model refused the content');
});

it('never asks the model in a test run and logs what it would ask', function (): void {
    $order = createOrder();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('ask', AskAi::class, askAi(['model' => 'fast', 'instructions' => 'Terse.'])),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.urgency }}']),
    ], [edge('t', 'ask'), edge('ask', 'echo')]);

    $run = Flow::test($workflow, ['model' => $order]);
    $step = collect($run->steps)->firstWhere('node_id', 'ask');

    expect($run->status)->toBe(RunStatus::Success)
        ->and($step['status'])->toBe('simulated')
        ->and($step['output']['would_ask'])->toBe('Claude Haiku 4.5')
        ->and($step['output']['prompt'])->toBe('Classify ORD-0001')
        ->and($step['output']['instructions'])->toBe('Terse.')
        ->and($step['output']['answer']['properties']['urgency']['enum'])->toBe(['low', 'high'])
        ->and(FakeEngine::lastPrompt())->toBeNull()
        ->and(AgentBudget::$checks)->toBe([])
        ->and(AgentBudget::$hits)->toBe([]);

    // The default model is named after the engine's current pick.
    $run = Flow::test(createWorkflow([triggerNode('t', Manual::class), actionNode('ask', AskAi::class, askAi())], [edge('t', 'ask')]));

    expect(collect($run->steps)->firstWhere('node_id', 'ask')['output']['would_ask'])->toBe('Claude Opus 5');
});

it('asks inside the run\'s tenant so the engine\'s budget and credentials are that workspace\'s', function (): void {
    $team = Team::query()->create(['name' => 'Acme', 'slug' => 'acme']);
    $order = createOrder(['team_id' => $team->id]);
    $hooks = [];
    Agents::tenantModel(Team::class, 'slug');
    Agents::enteringTenant(function (Team $tenant) use (&$hooks): Closure {
        $hooks[] = 'enter '.$tenant->slug;

        return function () use (&$hooks, $tenant): void {
            $hooks[] = 'leave '.$tenant->slug;
        };
    });
    FakeEngine::answer(['urgency' => 'high']);

    $workflow = createWorkflow([
        triggerNode('t', RecordCreated::class, ['model_class' => Order::class]),
        actionNode('ask', AskAi::class, askAi()),
    ], [edge('t', 'ask')]);

    $run = Flow::run($workflow, ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Success)
        ->and($run->tenant?->is($team))->toBeTrue()
        ->and(AgentBudget::$checks)->toBe([['tenant' => $team->id, 'prompt' => 'Classify ORD-0001']])
        ->and(AgentBudget::$hits)->toBe([$team->id])
        ->and(LaravelContext::$entered)->toBe([['tenant' => $team->id]])
        ->and(LaravelContext::$left)->toBe(1)
        ->and($hooks)->toBe(['enter acme', 'leave acme'])
        ->and(Agents::tenant())->toBeNull();

    // Already on that workspace (a sync run inside a request): nothing to enter.
    FakeEngine::reset();
    FakeEngine::answer(['urgency' => 'low']);
    Agents::tenantUsing(fn (): Team => $team);

    Flow::run($workflow, ['model' => $order]);

    expect(AgentBudget::$checks)->toBe([['tenant' => $team->id, 'prompt' => 'Classify ORD-0001']])
        ->and(LaravelContext::$entered)->toBe([]);
});

it('checks the budget centrally when the engine does not know the run\'s workspace', function (): void {
    $team = Team::query()->create(['name' => 'Acme', 'slug' => 'acme']);
    $order = createOrder(['team_id' => $team->id]);
    FakeEngine::answer(['urgency' => 'high']);

    // A single-workspace engine (no tenant model registered), a run that belongs to a team.
    $workflow = createWorkflow([triggerNode('t', Manual::class), actionNode('ask', AskAi::class, askAi())], [edge('t', 'ask')]);

    expect(Flow::run($workflow, ['model' => $order])->status)->toBe(RunStatus::Success)
        ->and(AgentBudget::$checks)->toBe([['tenant' => null, 'prompt' => 'Classify ORD-0001']])
        ->and(LaravelContext::$entered)->toBe([]);

    // The engine's workspace model is another one than Flow scopes by: keys are not comparable, stay central.
    FakeEngine::reset();
    FakeEngine::answer(['urgency' => 'high']);
    Agents::tenantModel(Order::class);

    expect(Flow::run($workflow, ['model' => $order])->status)->toBe(RunStatus::Success)
        ->and(AgentBudget::$checks[0]['tenant'])->toBeNull()
        ->and(LaravelContext::$entered)->toBe([]);
});

it('is offered in the AI group, with its template, only when the engine is installed', function (): void {
    expect(AskAi::isAvailable())->toBeTrue()
        ->and(Flow::registry()->has(AskAi::class))->toBeTrue()
        ->and(collect(Flow::registry()->toArray()['actions'])->firstWhere('identifier', AskAi::class))
        ->toMatchArray(['type' => 'action', 'category' => 'ai']);

    $template = Templates::find('ticket-triage');

    expect($template)->not->toBeNull()
        ->and($template['category'])->toBe('Support')
        ->and(collect($template['definition']['nodes'])->pluck('data.identifier')->all())->toContain(AskAi::class);

    $workflow = Templates::create('ticket-triage');

    expect($workflow->is_active)->toBeFalse()
        ->and($workflow->nodes())->toHaveCount(5);

    // Without the engine's classes on the autoloader — the test stubs are not loaded there — the node is unavailable,
    // so it is never registered, never offered and the template that uses it is hidden.
    $result = Process::path(dirname(__DIR__, 2))->run([PHP_BINARY, 'tests/Fixtures/without-engine.php']);

    expect($result->successful())->toBeTrue()
        ->and($result->output())->toBe('unavailable');

    Flow::registry()->forget([AskAi::class]);

    expect(Templates::find('ticket-triage'))->toBeNull();
});
