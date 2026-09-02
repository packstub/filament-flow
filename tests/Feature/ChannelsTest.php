<?php

use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\Secret;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Actions\SendDiscordMessage;
use Packstub\Flow\Nodes\Actions\SendSlackMessage;
use Packstub\Flow\Nodes\Actions\SendSms;
use Packstub\Flow\Nodes\Actions\SendTeamsMessage;
use Packstub\Flow\Nodes\Actions\SendTelegramMessage;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Support\Placeholders;

function runAction(string $action, array $config, array $payload = []): WorkflowRun
{
    return Flow::run(createWorkflow([triggerNode('t', Manual::class), actionNode('a', $action, $config)], [edge('t', 'a')]), $payload);
}

it('posts to Discord', function (): void {
    Http::fake(['discord.com/*' => Http::response('', 204)]);

    $run = runAction(SendDiscordMessage::class, ['webhook_url' => 'https://discord.com/api/webhooks/1/abc', 'message' => 'Order {{ ref }}', 'username' => 'Acme bot'], ['ref' => 'ORD-1']);

    expect($run->status)->toBe(RunStatus::Success);

    Http::assertSent(fn (Request $request): bool => $request->url() === 'https://discord.com/api/webhooks/1/abc' && $request['content'] === 'Order ORD-1' && $request['username'] === 'Acme bot');
});

it('posts an Adaptive Card or plain text to Teams', function (): void {
    Http::fake(['*.logic.azure.com/*' => Http::response('', 202), 'outlook.office.com/*' => Http::response('1', 200)]);

    runAction(SendTeamsMessage::class, ['webhook_url' => 'https://prod-1.logic.azure.com/workflows/x', 'title' => 'Hi', 'message' => 'Body', 'format' => 'adaptive_card']);
    runAction(SendTeamsMessage::class, ['webhook_url' => 'https://outlook.office.com/webhook/x', 'message' => 'Body', 'format' => 'text']);

    Http::assertSent(fn (Request $request): bool => str_contains($request->url(), 'logic.azure.com')
        && ($request->data()['attachments'][0]['content']['body'][0]['text'] ?? null) === 'Hi'
        && ($request->data()['attachments'][0]['content']['body'][1]['text'] ?? null) === 'Body');
    Http::assertSent(fn (Request $request): bool => str_contains($request->url(), 'outlook.office.com') && ($request->data()['text'] ?? null) === 'Body' && ! isset($request->data()['title']));
});

it('sends Telegram messages with a token from the secrets store', function (): void {
    Http::fake(['api.telegram.org/*' => Http::response(['ok' => true, 'result' => ['message_id' => 42]])]);
    Secret::query()->create(['key' => 'telegram_bot_token', 'value' => '123:ABC']);

    $run = runAction(SendTelegramMessage::class, ['bot_token' => '{{ secrets.telegram_bot_token }}', 'chat_id' => '@acme', 'message' => 'Hello', 'parse_mode' => 'HTML']);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(collect($run->steps)->last()['output'])->toBe(['message_id' => 42]);

    Http::assertSent(fn (Request $request): bool => $request->url() === 'https://api.telegram.org/bot123%3AABC/sendMessage' && $request['chat_id'] === '@acme' && $request['parse_mode'] === 'HTML');
});

it('reports API errors without the URL and masks secrets', function (): void {
    Http::fake(['api.telegram.org/*' => Http::response(['ok' => false, 'description' => 'Bad Request: chat not found'], 400)]);
    Secret::query()->create(['key' => 'telegram_bot_token', 'value' => '123:ABC']);

    $run = runAction(SendTelegramMessage::class, ['bot_token' => '{{ secrets.telegram_bot_token }}', 'chat_id' => '1', 'message' => 'Hello']);

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toBe('Telegram returned HTTP 400: Bad Request: chat not found');

    expect(runAction(SendTelegramMessage::class, ['bot_token' => '', 'chat_id' => '1', 'message' => 'x'])->error)->toContain('required');
});

it('sends SMS and WhatsApp messages through Twilio', function (): void {
    Http::fake(['api.twilio.com/*' => Http::response(['sid' => 'SM1', 'status' => 'queued'])]);

    $run = runAction(SendSms::class, ['account_sid' => 'AC1', 'auth_token' => 'tok', 'from' => '+1000', 'to' => '{{ phone }}', 'body' => 'Hi {{ name }}'], ['phone' => '+2000', 'name' => 'Ann']);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(collect($run->steps)->last()['output'])->toBe(['sid' => 'SM1', 'status' => 'queued']);

    Http::assertSent(fn (Request $request): bool => $request->url() === 'https://api.twilio.com/2010-04-01/Accounts/AC1/Messages.json'
        && $request->hasHeader('Authorization', 'Basic '.base64_encode('AC1:tok'))
        && ($request->data()['From'] ?? null) === '+1000' && $request['To'] === '+2000' && $request['Body'] === 'Hi Ann');

    runAction(SendSms::class, ['account_sid' => 'AC1', 'auth_token' => 'tok', 'from' => '+1000', 'to' => '+2000', 'body' => 'x', 'whatsapp' => true]);
    Http::assertSent(fn (Request $request): bool => ($request->data()['From'] ?? null) === 'whatsapp:+1000' && ($request->data()['To'] ?? null) === 'whatsapp:+2000');

    runAction(SendSms::class, ['account_sid' => 'AC1', 'auth_token' => 'tok', 'from' => 'MG123', 'to' => '+2000', 'body' => 'x']);
    Http::assertSent(fn (Request $request): bool => ($request->data()['MessagingServiceSid'] ?? null) === 'MG123' && ! isset($request->data()['From']));

});

it('reports Twilio errors', function (): void {
    Http::fake(['api.twilio.com/*' => Http::response(['message' => 'Invalid number'], 400)]);

    expect(runAction(SendSms::class, ['account_sid' => 'AC1', 'auth_token' => 'tok', 'from' => '+1', 'to' => '+2', 'body' => 'x'])->error)->toBe('Twilio returned HTTP 400: Invalid number');
});

it('lets the Slack webhook URL come from a secret', function (): void {
    Http::fake(['hooks.slack.com/*' => Http::response('ok')]);
    Secret::query()->create(['key' => 'slack', 'value' => 'https://hooks.slack.com/services/T/B/x']);

    $run = runAction(SendSlackMessage::class, ['webhook_url' => '{{ secrets.slack }}', 'message' => 'hi']);

    expect($run->status)->toBe(RunStatus::Success);
    Http::assertSent(fn (Request $request): bool => $request->url() === 'https://hooks.slack.com/services/T/B/x');

    expect(Placeholders::hasPlaceholders('{{ secrets.slack }}'))->toBeTrue();
});
