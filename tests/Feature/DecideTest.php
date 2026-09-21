<?php

use Filament\Forms\Components\Repeater;
use Filament\Schemas\Schema;
use GuzzleHttp\Promise\PromiseInterface;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Sleep;
use Livewire\Livewire;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Forms\Components\FlowBuilder;
use Packstub\Flow\Filament\Livewire\ManageNode;
use Packstub\Flow\Models\Secret;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Actions\Decide;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Support\Jev;
use Packstub\Flow\Support\NodeCatalog;
use Packstub\Flow\Support\WorkflowGenerator;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

beforeEach(function (): void {
    config()->set('packstub-flow.jev.key', 'ts-test-key');
    config()->set('packstub-flow.jev.attempts', 1);
    app(NodeRegistry::class)->registerActions([Decide::class]);
});

/** A Jev response with one answer under the node's question id. */
function jevAnswers(array $answer, int $status = 200): PromiseInterface
{
    return Http::response(['model' => 'jev-1.13.0', 'answers' => ['decision' => $answer], 'usage' => ['input_tokens' => 296, 'output_tokens' => 20]], $status);
}

const TEAM_OPTIONS = [
    ['value' => 'billing', 'description' => 'Payments, invoices, refunds'],
    ['value' => 'technical', 'description' => 'Bugs, outages, integrations'],
    ['value' => 'sales', 'description' => null],
];

/** Trigger → Decide → one SetStatus per branch, so the status says which branch ran. */
function decideWorkflow(array $config, array $branches): Workflow
{
    $nodes = [triggerNode('t', Manual::class), actionNode('d', Decide::class, $config)];
    $edges = [edge('t', 'd')];

    foreach ($branches as $branch) {
        $nodes[] = actionNode("s-{$branch}", SetStatusAction::class, ['status' => "{$branch}:{{ last.decision }}:{{ last.confidence }}"]);
        $edges[] = edge('d', "s-{$branch}", $branch);
    }

    return createWorkflow($nodes, $edges);
}

it('is offered once a TypeSafe key is set, or when switched on, and hidden when switched off', function (): void {
    expect(Decide::isAvailable())->toBeTrue();

    config()->set('packstub-flow.jev.key', null);
    expect(Decide::isAvailable())->toBeFalse();

    config()->set('packstub-flow.jev.enabled', true);
    expect(Decide::isAvailable())->toBeTrue();

    config()->set('packstub-flow.jev.key', 'ts-test-key');
    config()->set('packstub-flow.jev.enabled', false);
    expect(Decide::isAvailable())->toBeFalse();
});

it('sits in the AI group with branches that come from its settings', function (): void {
    $node = Decide::make();

    expect($node->getCategory())->toBe('ai')
        ->and(array_keys($node->getOutputs()))->toBe(['yes', 'no'])
        ->and(array_keys($node->getOutputsFor(['type' => 'noul', 'yes_from' => 0.8, 'no_up_to' => 0.2])))->toBe(['yes', 'no', 'unsure'])
        ->and(array_keys($node->getOutputsFor(['type' => 'choice', 'options' => TEAM_OPTIONS])))->toBe(['billing', 'technical', 'sales'])
        ->and(array_keys($node->getOutputsFor(['type' => 'choice', 'options' => TEAM_OPTIONS, 'min_confidence' => 0.6])))->toBe(['billing', 'technical', 'sales', 'unsure'])
        ->and($node->getOutputsFor(['type' => 'score', 'levels' => ['Calm', 'Frustrated', 'Very angry']]))->toBe(['level_0' => 'Calm', 'level_1' => 'Frustrated', 'level_2' => 'Very angry'])
        // A choice still without options shows what a new node shows.
        ->and(array_keys($node->getOutputsFor(['type' => 'choice', 'options' => []])))->toBe(['yes', 'no']);
});

it('leaves out option names that are handles of their own or not plain names', function (): void {
    expect(array_keys(Decide::options(['options' => [['value' => 'unsure'], ['value' => 'error'], ['value' => 'has space'], ['value' => ' refunds '], ['value' => '']]])))->toBe(['refunds']);
});

it('asks a yes / no question and follows the answer', function (): void {
    Http::fake(['api.typesafe.ai/*' => jevAnswers(['type' => 'noul', 'noul' => 0.95])]);

    $run = Flow::run(decideWorkflow([
        'state' => 'Help! My payouts have been failing for 3 days.',
        'type' => 'noul',
        'question' => 'Does this convey urgency?',
        'yes_means' => 'Explicitly time-sensitive',
    ], ['yes', 'no']));

    expect($run->status)->toBe(RunStatus::Success)
        ->and(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload']['last'])->toMatchArray([
            'ok' => true, 'decision' => 'yes', 'label' => 'Yes', 'branch' => 'yes', 'sure' => true,
            'probability' => 0.95, 'confidence' => 0.9, 'probabilities' => ['yes' => 0.95, 'no' => 0.05],
            'model' => 'jev-1.13.0', 'usage' => ['input' => 296, 'output' => 20],
        ]);

    Http::assertSent(fn (Request $request): bool => $request->url() === Jev::DEFAULT_URL
        && $request->hasHeader('Authorization', 'Bearer ts-test-key')
        && $request['model'] === 'jev-latest'
        && $request['state'] === 'Help! My payouts have been failing for 3 days.'
        && $request['questions'] === ['decision' => ['type' => 'noul', 'instructions' => 'Does this convey urgency?', 'criteria' => ['true' => 'Explicitly time-sensitive']]]);
});

it('sends a yes / no answer between the two thresholds to Not sure', function (float $probability, string $branch): void {
    Http::fake(['api.typesafe.ai/*' => jevAnswers(['type' => 'noul', 'noul' => $probability])]);

    Flow::run(decideWorkflow(['state' => 'Are you a bot?', 'type' => 'noul', 'question' => 'Does the customer ask for a person?', 'yes_from' => 0.7, 'no_up_to' => 0.3], ['yes', 'no', 'unsure']));

    expect(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload']['last']['branch'])->toBe($branch);
})->with([[0.7, 'yes'], [0.69, 'unsure'], [0.4, 'unsure'], [0.3, 'no'], [0.02, 'no']]);

it('follows the option Jev chose, with the state sent as structure when it is JSON', function (): void {
    Http::fake(['api.typesafe.ai/*' => jevAnswers(['type' => 'choice', 'choice' => 'billing', 'probabilities' => ['billing' => 0.88, 'technical' => 0.12, 'sales' => 0.0], 'confidence' => 0.81])]);

    $order = Order::create(['reference' => 'A-104', 'status' => 'new']);

    $run = Flow::run(decideWorkflow([
        'state' => '{"order": "{{ model.reference }}", "message": "I was charged twice."}',
        'type' => 'choice',
        'question' => 'Which team should handle this?',
        'options' => TEAM_OPTIONS,
        'min_confidence' => 0.6,
        'model' => 'jev-1.13.0',
    ], ['billing', 'technical', 'sales', 'unsure']), ['model' => $order]);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload']['last'])->toMatchArray(['decision' => 'billing', 'branch' => 'billing', 'sure' => true, 'confidence' => 0.81])
        ->and(SetStatusAction::$calls[0]['payload']['last']['probabilities']['technical'])->toBe(0.12);

    Http::assertSent(fn (Request $request): bool => $request['state'] === ['order' => 'A-104', 'message' => 'I was charged twice.']
        && $request['model'] === 'jev-1.13.0'
        && $request['questions']['decision']['criteria'] === ['billing' => 'Payments, invoices, refunds', 'technical' => 'Bugs, outages, integrations', 'sales' => null]);
});

it('follows Not sure when the confidence is under the minimum, keeping what Jev leaned towards', function (): void {
    Http::fake(['api.typesafe.ai/*' => jevAnswers(['type' => 'choice', 'choice' => 'technical', 'probabilities' => ['billing' => 0.4, 'technical' => 0.45, 'sales' => 0.15], 'confidence' => 0.18])]);

    Flow::run(decideWorkflow(['state' => 'It is broken and I want my money back', 'type' => 'choice', 'question' => 'Which team?', 'options' => TEAM_OPTIONS, 'min_confidence' => 0.6], ['billing', 'technical', 'sales', 'unsure']));

    expect(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload']['last'])->toMatchArray(['decision' => 'technical', 'branch' => 'unsure', 'sure' => false]);
});

it('follows the level nearest to the score', function (): void {
    Http::fake(['api.typesafe.ai/*' => jevAnswers(['type' => 'score', 'score' => 1.62, 'legend' => ['0' => 'Calm', '1' => 'Frustrated', '2' => 'Very angry'], 'probabilities' => ['0' => 0.0, '1' => 0.38, '2' => 0.62], 'confidence' => 0.7])]);

    Flow::run(decideWorkflow(['state' => 'This is the third time I write!', 'type' => 'score', 'question' => 'How frustrated is the customer?', 'levels' => ['Calm', 'Frustrated', 'Very angry']], ['level_0', 'level_1', 'level_2']));

    expect(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload']['last'])->toMatchArray(['decision' => 2, 'label' => 'Very angry', 'branch' => 'level_2', 'score' => 1.62]);

    Http::assertSent(fn (Request $request): bool => $request['questions']['decision'] === ['type' => 'score', 'instructions' => 'How frustrated is the customer?', 'criteria' => ['Calm', 'Frustrated', 'Very angry']]);
});

it('ends the branch when the picked output has no edge', function (): void {
    Http::fake(['api.typesafe.ai/*' => jevAnswers(['type' => 'noul', 'noul' => 0.1])]);

    $run = Flow::run(decideWorkflow(['state' => 'Thanks, all good!', 'type' => 'noul', 'question' => 'Is it urgent?'], ['yes']));

    expect($run->status)->toBe(RunStatus::Success)
        ->and(SetStatusAction::$calls)->toBeEmpty();
});

it('uses the key of the node, from a secret, over the app\'s', function (): void {
    Http::fake(['api.typesafe.ai/*' => jevAnswers(['type' => 'noul', 'noul' => 0.9])]);
    Secret::query()->create(['key' => 'typesafe', 'value' => 'ts-workspace-key']);

    $run = Flow::run(decideWorkflow(['state' => 'x', 'type' => 'noul', 'question' => 'Is it urgent?', 'api_key' => '{{ secrets.typesafe }}'], ['yes']));

    expect($run->status)->toBe(RunStatus::Success);
    Http::assertSent(fn (Request $request): bool => $request->hasHeader('Authorization', 'Bearer ts-workspace-key'));
    expect(json_encode($run->steps))->not->toContain('ts-workspace-key');
});

it('fails the run with what TypeSafe said, and never sends without a key', function (): void {
    Http::fake(['api.typesafe.ai/*' => Http::response(['message' => 'questions.decision.criteria: field required'], 422)]);

    $run = Flow::run(decideWorkflow(['state' => 'x', 'type' => 'noul', 'question' => 'Is it urgent?'], ['yes']));

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toContain('Jev returned HTTP 422')->toContain('field required');

    config()->set('packstub-flow.jev.key', '');
    Http::fake();

    expect(fn () => Jev::ask('x', ['q' => ['type' => 'noul', 'instructions' => 'y']]))->toThrow(WorkflowException::class, 'no API key');
    Http::assertNothingSent();
});

it('retries when TypeSafe is busy', function (): void {
    config()->set('packstub-flow.jev.attempts', 3);
    Http::fake(['api.typesafe.ai/*' => Http::sequence()->pushStatus(429)->pushStatus(529)->push(['model' => 'jev-1.13.0', 'answers' => ['q' => ['type' => 'noul', 'noul' => 0.5]], 'usage' => []])]);
    Sleep::fake();

    expect(Jev::ask('x', ['q' => ['type' => 'noul', 'instructions' => 'y']])['answers']['q']['noul'])->toBe(0.5);
    Http::assertSentCount(3);
});

it('refuses an empty state, a missing question and a choice without options before asking', function (array $config, string $message): void {
    Http::fake();

    $run = Flow::run(decideWorkflow($config, ['yes']));

    expect($run->status)->toBe(RunStatus::Failed)->and($run->error)->toContain($message);
    Http::assertNothingSent();
})->with([
    [['state' => '{{ model.missing }}', 'question' => 'Is it urgent?'], 'the state is empty'],
    [['state' => 'x', 'question' => ' '], 'no question'],
    [['state' => 'x', 'question' => 'Which team?', 'type' => 'choice', 'options' => [['value' => 'billing']]], 'at least two options'],
]);

it('follows Not sure, or nothing, when it fails and the node is set to continue', function (array $config, array $expected): void {
    Http::fake(['api.typesafe.ai/*' => Http::response('down', 500)]);

    $run = Flow::run(decideWorkflow(['state' => 'x', 'type' => 'noul', 'question' => 'Is it urgent?', '_on_error' => 'continue'] + $config, ['yes', 'no', 'unsure']));

    expect($run->status)->toBe(RunStatus::Success)
        ->and(array_map(fn (array $call): string => strtok($call['config']['status'], ':'), SetStatusAction::$calls))->toBe($expected);
})->with([
    'with a Not sure branch' => [['yes_from' => 0.8, 'no_up_to' => 0.2], ['unsure']],
    'without one' => [[], []],
]);

it('is not asked in a test run, which shows the request and follows the first branch', function (): void {
    Http::fake();

    $run = Flow::test(decideWorkflow(['state' => 'Help!', 'type' => 'choice', 'question' => 'Which team?', 'options' => TEAM_OPTIONS, 'api_key' => 'ts-secret'], ['billing', 'technical']));

    $step = collect($run->steps)->firstWhere('node_id', 'd');

    Http::assertNothingSent();
    expect($step['status'])->toBe('simulated')
        ->and($step['output'])->toMatchArray(['would_ask' => 'jev-latest', 'state' => 'Help!', 'continues_along' => 'billing'])
        ->and($step['output']['question']['criteria'])->toHaveKeys(['billing', 'technical', 'sales'])
        ->and(json_encode($step))->not->toContain('ts-secret')
        ->and(collect($run->steps)->pluck('node_id')->all())->toContain('s-billing')->not->toContain('s-technical');
});

it('hands the canvas the branches of the settings it applies', function (): void {
    $undoRepeaterFake = Repeater::fake();

    Livewire::test(ManageNode::class)
        ->call('open', 'n1', Decide::class, [], 'Decide')
        ->assertActionDataSet(['config.type' => 'noul', 'config.yes_from' => 0.5])
        ->setActionData(['config.state' => '{{ model.body }}', 'config.question' => 'Which team?', 'config.type' => 'choice', 'config.min_confidence' => 0.6])
        ->setActionData(['config.options' => [['value' => 'billing', 'description' => 'Payments'], ['value' => 'technical', 'description' => null]]])
        ->callMountedAction()
        ->assertHasNoActionErrors()
        ->assertDispatched('packstub-flow-node-updated', id: 'n1', outputs: [
            ['id' => 'billing', 'label' => 'billing'],
            ['id' => 'technical', 'label' => 'technical'],
            ['id' => 'unsure', 'label' => 'Not sure'],
        ]);

    $undoRepeaterFake();
});

it('takes a gap between no and yes as a Not sure branch, and refuses a no above the yes', function (): void {
    Livewire::test(ManageNode::class)
        ->call('open', 'n1', Decide::class, [], 'Decide')
        ->setActionData(['config.state' => '{{ model.body }}', 'config.question' => 'Is it urgent?', 'config.yes_from' => 0.7, 'config.no_up_to' => 0.9])
        ->callMountedAction()
        ->assertHasActionErrors(['config.no_up_to'])
        ->setActionData(['config.no_up_to' => 0.3])
        ->callMountedAction()
        ->assertHasNoActionErrors()
        ->assertDispatched('packstub-flow-node-updated', id: 'n1', outputs: [
            ['id' => 'yes', 'label' => 'Yes'],
            ['id' => 'no', 'label' => 'No'],
            ['id' => 'unsure', 'label' => 'Not sure'],
        ]);
});

it('opens the canvas with the branches of each node, and stores none of them', function (): void {
    $definition = [
        'nodes' => [
            triggerNode('t', Manual::class),
            actionNode('d', Decide::class, ['type' => 'choice', 'options' => TEAM_OPTIONS]),
            actionNode('plain', Decide::class, ['type' => 'noul']),
        ],
        'edges' => [],
    ];
    $definition['nodes'][1]['data']['outputs'] = [['id' => 'billing', 'label' => 'billing']];

    $field = FlowBuilder::make('definition')->container(Schema::make(Livewire::test(ManageNode::class)->instance())->statePath('data'));
    $field->state($definition);

    expect($field->getNodeOutputs())->toBe(['d' => [['id' => 'billing', 'label' => 'billing'], ['id' => 'technical', 'label' => 'technical'], ['id' => 'sales', 'label' => 'sales']]])
        ->and(FlowBuilder::normalizeState($definition)['nodes'][1]['data'])->not->toHaveKey('outputs');
});

it('lets a described workflow leave a Decide node through its own options', function (): void {
    $document = WorkflowGenerator::document([
        'name' => 'Route tickets',
        'nodes' => [
            ['id' => 'start', 'node' => Manual::class],
            ['id' => 'route', 'node' => Decide::class, 'settings' => [
                ['key' => 'type', 'value' => 'choice'],
                ['key' => 'options', 'value' => json_encode(TEAM_OPTIONS)],
            ]],
            ['id' => 'bill', 'node' => SetStatusAction::class],
            ['id' => 'other', 'node' => SetStatusAction::class],
        ],
        'edges' => [
            ['from' => 'start', 'to' => 'route'],
            ['from' => 'route', 'output' => 'technical', 'to' => 'bill'],
            ['from' => 'route', 'output' => 'nonsense', 'to' => 'other'],
        ],
    ], NodeCatalog::all());

    expect(collect($document['definition']['edges'])->pluck('sourceHandle', 'target')->all())->toMatchArray(['bill' => 'technical', 'other' => 'billing']);
});
