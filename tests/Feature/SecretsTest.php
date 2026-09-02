<?php

use Filament\Actions\Testing\TestAction;
use Illuminate\Support\Facades\DB;
use Livewire\Livewire;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Livewire\ManageNode;
use Packstub\Flow\Filament\Resources\SecretResource\Pages\ManageSecrets;
use Packstub\Flow\Models\Secret;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Conditions\CompareValues;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\Secrets;
use Packstub\Flow\Tests\Fixtures\EchoAction;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('stores secrets encrypted and hides the value', function (): void {
    $secret = Secret::query()->create(['key' => 'api_key', 'value' => 'sk-live-123']);

    $raw = DB::table($secret->getTable())->value('value');

    expect($raw)->not->toBe('sk-live-123')
        ->and($secret->fresh()->value)->toBe('sk-live-123')
        ->and($secret->toArray())->not->toHaveKey('value')
        ->and(Secrets::get('api_key'))->toBe('sk-live-123')
        ->and(Secrets::get('missing'))->toBeNull();
});

it('resolves secrets inside actions only and masks them on the run', function (): void {
    Secret::query()->create(['key' => 'api_key', 'value' => 'sk-live-123']);

    expect(Placeholders::render('key={{ secrets.api_key }}', []))->toBe('key=')
        ->and(Placeholders::resolve('secrets.api_key', []))->toBeNull();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        conditionNode('c', CompareValues::class, ['left' => '{{ secrets.api_key }}', 'operator' => '=', 'value' => 'sk-live-123']),
        actionNode('a', EchoAction::class, ['template' => 'key={{ secrets.api_key | upper }}']),
    ], [edge('t', 'c'), edge('c', 'a', 'false')]);

    $run = Flow::run($workflow);

    expect($run->status)->toBe(RunStatus::Success)
        ->and(EchoAction::$last)->toBe('key=SK-LIVE-123')
        ->and(collect($run->steps)->firstWhere('node_id', 'a')['output']['text'])->toBe('key='.Placeholders::MASK)
        ->and(Placeholders::secretsAllowed())->toBeFalse();
});

it('masks secrets in error messages', function (): void {
    Secret::query()->create(['key' => 'token', 'value' => 'abc-secret']);

    $run = Flow::run(createWorkflow(
        [triggerNode('t', Manual::class), actionNode('a', EchoAction::class, ['template' => '{{ secrets.token }}', 'throw' => true])],
        [edge('t', 'a')],
    ));

    expect($run->status)->toBe(RunStatus::Failed)
        ->and($run->error)->toBe('Echo failed with '.Placeholders::MASK)
        ->and(collect($run->steps)->last()['message'])->not->toContain('abc-secret');
});

it('forgets cached secrets when one is saved', function (): void {
    $secret = Secret::query()->create(['key' => 'k', 'value' => 'one']);

    expect(Secrets::get('k'))->toBe('one');

    $secret->update(['value' => 'two']);

    expect(Secrets::get('k'))->toBe('two');

    $secret->delete();

    expect(Secrets::get('k'))->toBeNull();
});

it('manages secrets in the panel without ever showing the value', function (): void {
    $this->actingAs(createUser());

    Livewire::test(ManageSecrets::class)
        ->assertOk()
        ->callAction('create', ['key' => 'slack_webhook', 'value' => 'https://hooks.slack.com/x', 'description' => 'Sales channel'])
        ->assertHasNoActionErrors()
        ->assertSee('{{ secrets.slack_webhook }}')
        ->assertDontSee('https://hooks.slack.com/x');

    $secret = Secret::query()->where('key', 'slack_webhook')->firstOrFail();

    expect($secret->value)->toBe('https://hooks.slack.com/x');

    // Editing without a value keeps the old one; a new value replaces it.
    Livewire::test(ManageSecrets::class)
        ->callAction(TestAction::make('edit')->table($secret), ['key' => 'slack_webhook', 'value' => '', 'description' => 'Renamed'])
        ->assertHasNoActionErrors();

    expect($secret->fresh()->value)->toBe('https://hooks.slack.com/x')
        ->and($secret->fresh()->description)->toBe('Renamed');

    Livewire::test(ManageSecrets::class)
        ->callAction(TestAction::make('edit')->table($secret), ['key' => 'slack_webhook', 'value' => 'new'])
        ->assertHasNoActionErrors();

    expect($secret->fresh()->value)->toBe('new');

    Livewire::test(ManageSecrets::class)
        ->callAction('create', ['key' => 'slack_webhook', 'value' => 'dup'])
        ->assertHasActionErrors(['key']);

    Livewire::test(ManageSecrets::class)
        ->callAction('create', ['key' => 'bad key', 'value' => 'x'])
        ->assertHasActionErrors(['key']);
});

it('documents the action-only placeholders', function (): void {
    expect(array_keys(Placeholders::actionDocumentation()))->toBe(['{{ model.url }}', '{{ secrets.api_key }}'])
        ->and((new SendEmail)->getPlaceholders())->not->toHaveKey('{{ secrets.api_key }}');

    $this->actingAs(createUser());

    Livewire::test(ManageNode::class)
        ->call('open', 'a', SetStatusAction::class, [])
        ->assertActionMounted('manageNode');
});
