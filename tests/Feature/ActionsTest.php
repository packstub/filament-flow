<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Mail\WorkflowMail;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Actions\HttpRequest;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Actions\SendNotification;
use Packstub\Flow\Nodes\Actions\SendSlackMessage;
use Packstub\Flow\Nodes\Actions\UpdateRecord;
use Packstub\Flow\Nodes\Actions\WriteLog;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\RecordUpdated;
use Packstub\Flow\Tests\Fixtures\Order;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('sends an email with placeholders filled in', function (): void {
    Mail::fake();

    $user = createUser(['name' => 'Jane', 'email' => 'jane@example.com']);

    (new SendEmail)->handle([
        'recipient' => '{{ model.email }}, ops@example.com',
        'subject' => 'Welcome, {{ model.name }}!',
        'body' => "Hi {{ model.name }},\nthanks.",
    ], ['model' => $user]);

    Mail::assertSent(WorkflowMail::class, function (WorkflowMail $mail): bool {
        return $mail->hasTo('jane@example.com')
            && $mail->hasTo('ops@example.com')
            && $mail->mailSubject === 'Welcome, Jane!'
            && $mail->body === "Hi Jane,\nthanks.";
    });

    (new SendEmail)->handle(['recipient' => '{{ model.email }}', 'subject' => 'x', 'body' => 'y'], []);
    Mail::assertSentCount(1);
});

it('renders the mail as markdown', function (): void {
    $html = (new WorkflowMail('Subject', "Line one\nLine two"))->render();

    expect($html)->toContain('Line one<br')->toContain('Line two');
});

it('posts to a Slack webhook', function (): void {
    Http::fake();

    (new SendSlackMessage)->handle(['webhook_url' => 'https://hooks.slack.com/services/x', 'message' => 'Order {{ model.reference }}'], ['model' => createOrder()]);

    Http::assertSent(fn ($request) => $request->url() === 'https://hooks.slack.com/services/x' && str_starts_with($request['text'], 'Order ORD-'));
});

it('sends HTTP requests with an interpolated JSON body and headers', function (): void {
    Http::fake(['api.example.com/*' => Http::response(['ok' => true])]);

    $order = createOrder(['total' => 12.5]);
    $reference = $order->reference;

    (new HttpRequest)->handle([
        'method' => 'POST',
        'url' => 'https://api.example.com/orders/{{ model.id }}',
        'headers' => ['X-Ref' => '{{ model.reference }}'],
        'body' => '{"total": "{{ model.total }}", "nested": {"status": "{{ model.status }}"}}',
    ], ['model' => $order]);

    Http::assertSent(function ($request) use ($order, $reference): bool {
        return $request->url() === "https://api.example.com/orders/{$order->id}"
            && $request->method() === 'POST'
            && $request->hasHeader('X-Ref', $reference)
            && $request['total'] === '12.5'
            && $request['nested'] === ['status' => 'pending'];
    });
});

it('accepts placeholders in the JSON body validation rule', function (): void {
    $rule = collect((new HttpRequest)->getFormSchema())->first(fn ($component) => $component->getName() === 'body');
    $closure = collect($rule->getValidationRules())->first(fn ($r) => $r instanceof Closure);

    expect($closure)->toBeInstanceOf(Closure::class);

    $errors = [];
    $closure('body', '{"total": {{ model.total }}, "name": "{{ model.name }}"}', function (string $message) use (&$errors): void {
        $errors[] = $message;
    });
    $closure('body', '{not json', function (string $message) use (&$errors): void {
        $errors[] = $message;
    });

    expect($errors)->toHaveCount(1);
});

it('sends GET requests without a body and can fail the run on errors', function (): void {
    Http::fake(['api.example.com/ok' => Http::response('', 200), 'api.example.com/bad' => Http::response('', 500)]);

    (new HttpRequest)->handle(['method' => 'GET', 'url' => 'https://api.example.com/ok', 'body' => '{"x": 1}'], []);
    Http::assertSent(fn ($request) => $request->method() === 'GET' && $request->body() === '');

    (new HttpRequest)->handle(['method' => 'GET', 'url' => 'https://api.example.com/bad', 'throw_on_error' => false], []);

    expect(fn () => (new HttpRequest)->handle(['method' => 'GET', 'url' => 'https://api.example.com/bad'], []))
        ->toThrow(WorkflowException::class, 'returned 500');

    expect(fn () => (new HttpRequest)->handle(['method' => 'POST', 'url' => 'https://api.example.com/ok', 'body' => '{not json'], []))
        ->toThrow(WorkflowException::class, 'not valid JSON');
});

it('updates the record silently so it does not retrigger itself', function (): void {
    createWorkflow([
        triggerNode('t', RecordUpdated::class, ['model_class' => Order::class]),
        actionNode('u', UpdateRecord::class, ['attributes' => ['status' => 'reviewed-{{ model.reference }}']]),
    ], [edge('t', 'u')]);

    $order = createOrder();
    $order->update(['total' => 5]);

    expect($order->fresh()->status)->toBe("reviewed-{$order->reference}")
        ->and(WorkflowRun::query()->count())->toBe(1);

    expect(fn () => (new UpdateRecord)->handle(['attributes' => ['status' => 'x']], []))->toThrow(WorkflowException::class);
});

it('writes to the log', function (): void {
    $order = createOrder();

    Log::shouldReceive('log')->once()->with('warning', "[flow] Order {$order->reference} changed");

    (new WriteLog)->handle(['level' => 'warning', 'message' => 'Order {{ model.reference }} changed'], ['model' => $order]);
});

it('sends a Filament database notification to panel users', function (): void {
    $jane = createUser(['email' => 'jane@example.com']);
    createUser(['email' => 'other@example.com']);

    $order = createOrder(['user_id' => $jane->id]);

    (new SendNotification)->handle([
        'title' => 'Order {{ model.reference }}',
        'body' => 'Total {{ model.total }}',
        'status' => 'success',
        'recipients' => 'jane@example.com, {{ model.user.email }}',
    ], ['model' => $order]);

    expect($jane->notifications()->count())->toBe(1)
        ->and($jane->notifications()->first()->data['title'])->toBe("Order {$order->reference}")
        ->and($jane->notifications()->first()->data['status'])->toBe('success')
        ->and(DB::table('notifications')->count())->toBe(1);
});

it('lets a custom action registered through the plugin run inside a workflow', function (): void {
    $run = Flow::run(createWorkflow([triggerNode('t', Manual::class), actionNode('a', SetStatusAction::class, ['status' => 'custom'])], [edge('t', 'a')]));

    expect($run->status)->toBe(RunStatus::Success)
        ->and(SetStatusAction::$calls[0]['config'])->toBe(['status' => 'custom']);
});
