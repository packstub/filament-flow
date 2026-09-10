<?php

use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\Secret;
use Packstub\Flow\Nodes\Actions\SendToAutomation;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\Order;

it('posts the whole run, signed, to an automation platform', function (): void {
    Http::fake(['hooks.zapier.com/*' => Http::response(['status' => 'success', 'id' => 'req-1'], 200)]);
    Secret::create(['key' => 'zapier_secret', 'value' => 'top-secret']);

    $workflow = createWorkflow([
        triggerNode('t', RecordUpdated::class, ['model_class' => Order::class]),
        actionNode('z', SendToAutomation::class, ['service' => 'zapier', 'url' => 'https://hooks.zapier.com/hooks/catch/1/abc', 'payload' => 'run', 'signing_secret' => '{{ secrets.zapier_secret }}']),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.status }} {{ last.body.id }}']),
    ], [edge('t', 'z'), edge('z', 'echo')], ['name' => 'Ship it']);

    $order = createOrder(['status' => 'paid']);
    $order->update(['status' => 'shipped']);

    $run = $workflow->runs()->sole();

    expect($run->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('200 req-1');

    Http::assertSent(function (Request $request) use ($order, $workflow, $run): bool {
        $body = $request->data();
        $raw = $request->body();

        expect($request->url())->toBe('https://hooks.zapier.com/hooks/catch/1/abc')
            ->and($request->hasHeader('Content-Type', 'application/json'))->toBeTrue()
            ->and($body['event'])->toBe('record.updated')
            ->and($body['workflow'])->toBe(['id' => (string) $workflow->getKey(), 'name' => 'Ship it'])
            ->and($body['run']['id'])->toBe((string) $run->getKey())
            ->and($body['run']['trigger'])->toBe(RecordUpdated::class)
            ->and($body['model']['type'])->toBe(Order::class)
            ->and($body['model']['id'])->toBe($order->getKey())
            ->and($body['model']['url'])->toBe(url("/admin/orders/{$order->getKey()}/edit"))
            ->and($body['model']['attributes']['reference'])->toBe($order->reference)
            ->and($body['changes']['status'])->toBe('shipped')
            ->and($body['original']['status'])->toBe('paid')
            ->and($body)->not->toHaveKeys(['secrets', 'last', 'tenant'])
            ->and($body['sent_at'])->not->toBeEmpty();

        $timestamp = $request->header(SendToAutomation::TIMESTAMP_HEADER)[0];
        $signature = $request->header(SendToAutomation::SIGNATURE_HEADER)[0];

        expect(abs(time() - (int) $timestamp))->toBeLessThan(5)
            ->and($signature)->toBe(hash_hmac('sha256', $timestamp.'.'.$raw, 'top-secret'))
            ->and($raw)->not->toContain('top-secret');

        return true;
    });
});

it('sends a custom JSON body without a signature and hides passwords', function (): void {
    Http::fake(['n8n.example.com/*' => Http::response('', 204)]);

    $user = createUser(['name' => 'Jane']);
    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('z', SendToAutomation::class, ['service' => 'n8n', 'url' => 'https://n8n.example.com/webhook/x', 'payload' => 'custom', 'body' => '{"who": "{{ model.name }}", "record": {{ model }}}']),
    ], [edge('t', 'z')]);

    $run = Flow::run($workflow, ['model' => $user]);

    expect($run->status)->toBe(RunStatus::Success);

    Http::assertSent(function (Request $request): bool {
        expect($request->data()['who'])->toBe('Jane')
            ->and($request->data()['record']['name'])->toBe('Jane')
            ->and($request->data()['record'])->not->toHaveKey('password')
            ->and($request->hasHeader(SendToAutomation::SIGNATURE_HEADER))->toBeFalse();

        return true;
    });

    // The run body of a manual run: a "manual" event, no record, hidden attributes never leave.
    Http::fake(['n8n.example.com/*' => Http::response('', 204)]);
    $workflow->update(['definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('z', SendToAutomation::class, ['url' => 'https://n8n.example.com/webhook/x', 'payload' => 'run'])], 'edges' => [edge('t', 'z')]]]);
    Flow::run($workflow, ['model' => $user, 'note' => 'hello']);

    Http::assertSent(fn (Request $request): bool => $request->data()['event'] === 'manual'
        && $request->data()['note'] === 'hello'
        && ! isset($request->data()['model']['attributes']['password']));
});

it('fails the run on an error response unless told otherwise', function (): void {
    Http::fake(['hook.eu1.make.com/*' => Http::response('Scenario is off', 410)]);

    $strict = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('z', SendToAutomation::class, ['service' => 'make', 'url' => 'https://hook.eu1.make.com/abc', 'payload' => 'run']),
    ], [edge('t', 'z')]);

    $lenient = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('z', SendToAutomation::class, ['service' => 'make', 'url' => 'https://hook.eu1.make.com/abc', 'payload' => 'run', 'throw_on_error' => false]),
        actionNode('echo', EchoAction::class, ['template' => '{{ last.status }} {{ last.ok }} {{ last.body }}']),
    ], [edge('t', 'z'), edge('z', 'echo')]);

    expect(Flow::run($strict)->status)->toBe(RunStatus::Failed)
        ->and(Flow::run($strict)->error)->toContain('returned 410')
        ->and(Flow::run($lenient)->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('410 0 Scenario is off');
});

it('previews the request in a dry run and refuses a body that is not an object', function (): void {
    Http::fake();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('z', SendToAutomation::class, ['url' => 'https://hooks.zapier.com/hooks/catch/1/abc', 'payload' => 'run', 'signing_secret' => 's']),
    ], [edge('t', 'z')]);

    $test = Flow::test($workflow, ['note' => 'x']);
    $step = collect($test->steps)->firstWhere('node_id', 'z');

    expect($test->status)->toBe(RunStatus::Success)
        ->and($step['output']['url'])->toBe('https://hooks.zapier.com/hooks/catch/1/abc')
        ->and($step['output']['signed'])->toBeTrue()
        ->and($step['output']['payload']['note'])->toBe('x');

    Http::assertNothingSent();

    $workflow->update(['definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('z', SendToAutomation::class, ['url' => 'https://hooks.zapier.com/x', 'payload' => 'custom', 'body' => '"just a string"'])], 'edges' => [edge('t', 'z')]]]);

    expect(Flow::run($workflow)->error)->toContain('not a JSON object');
});

it('is registered and documents its outputs', function (): void {
    $node = app(SendToAutomation::class);

    expect(Flow::registry()->has(SendToAutomation::class))->toBeTrue()
        ->and($node->getPlaceholders())->toHaveKey('{{ last.status }}')
        ->and(SendToAutomation::sign('s', '1', '{}'))->toBe(hash_hmac('sha256', '1.{}', 's'));
});
