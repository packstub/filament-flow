<?php

use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Nodes\Triggers\Webhook;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

function webhookWorkflow(string $token = 'secret-token-1234567890', array $attributes = [])
{
    return createWorkflow([
        triggerNode('t', Webhook::class, ['token' => $token]),
        actionNode('a', SetStatusAction::class, ['status' => '{{ webhook.order.status }}']),
    ], [edge('t', 'a')], $attributes);
}

it('runs the workflow from a POST with the right token', function (): void {
    $workflow = webhookWorkflow();

    $this->postJson("/flow/webhooks/{$workflow->id}/secret-token-1234567890", ['order' => ['status' => 'shipped']])
        ->assertStatus(202)
        ->assertJson(['accepted' => true, 'status' => 'success']);

    expect(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload']['webhook'])->toBe(['order' => ['status' => 'shipped']])
        ->and(WorkflowRun::query()->first()->status)->toBe(RunStatus::Success)
        ->and(WorkflowRun::query()->first()->trigger_type)->toBe(Webhook::class);
});

it('rejects a wrong token, an inactive workflow and an unknown workflow', function (): void {
    $workflow = webhookWorkflow();
    $inactive = webhookWorkflow('another-token-1234567890', ['is_active' => false]);

    $this->postJson("/flow/webhooks/{$workflow->id}/wrong")->assertNotFound();
    $this->postJson("/flow/webhooks/{$inactive->id}/another-token-1234567890")->assertNotFound();
    $this->postJson('/flow/webhooks/00000000-0000-0000-0000-000000000000/secret-token-1234567890')->assertNotFound();

    expect(SetStatusAction::$calls)->toBe([]);
});

it('honours the configured prefix and can be disabled', function (): void {
    expect(route('packstub-flow.webhook', ['workflow' => 'w', 'token' => 't'], false))->toBe('/flow/webhooks/w/t');
});

it('the trigger compares tokens in constant time and refuses empty ones', function (): void {
    $trigger = new Webhook;

    expect($trigger->matches(['token' => 'abc'], ['webhook_token' => 'abc']))->toBeTrue()
        ->and($trigger->matches(['token' => 'abc'], ['webhook_token' => 'abd']))->toBeFalse()
        ->and($trigger->matches([], ['webhook_token' => 'abc']))->toBeFalse();
});
