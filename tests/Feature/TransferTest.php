<?php

use Filament\Facades\Filament;
use Illuminate\Support\Str;
use Livewire\Livewire;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Forms\Components\FlowBuilder;
use Packstub\Flow\Filament\Forms\Components\TemplatePicker;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\EditWorkflow;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\ListWorkflows;
use Packstub\Flow\FlowPlugin;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\SendSlackMessage;
use Packstub\Flow\Nodes\Actions\WriteLog;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Nodes\Triggers\Webhook;
use Packstub\Flow\Support\Templates;
use Packstub\Flow\Support\WorkflowTransfer;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;
use Packstub\Flow\Tests\Fixtures\Team;

it('exports a workflow without anything tied to the install', function (): void {
    $workflow = createWorkflow(
        [triggerNode('w', Webhook::class, ['token' => 'secret-token', 'signing_secret' => 'shh', 'signature_header' => 'X-Sig']), actionNode('a', SetStatusAction::class, ['status' => 'done'])],
        [edge('w', 'a', 'output')],
        ['name' => 'Ship it', 'description' => 'Desc', 'prune_after_days' => 7, 'is_active' => true],
    );

    $export = $workflow->export();

    expect($export['format'])->toBe(WorkflowTransfer::FORMAT)
        ->and($export['name'])->toBe('Ship it')
        ->and($export['description'])->toBe('Desc')
        ->and($export['settings'])->toBe(['prune_after_days' => 7])
        ->and($export)->not->toHaveKeys(['id', 'is_active', 'tenant_id'])
        ->and($export['definition']['nodes'][0]['data']['config'])->toBe(['signature_header' => 'X-Sig'])
        ->and($export['definition']['edges'])->toHaveCount(1)
        ->and(json_decode(WorkflowTransfer::toJson($workflow), true))->toEqual($export);
});

it('imports an export as an inactive workflow with fresh webhook tokens', function (): void {
    $source = createWorkflow(
        [triggerNode('w', Webhook::class, ['token' => 'secret-token']), actionNode('a', SetStatusAction::class, ['status' => 'done'])],
        [edge('w', 'a', 'output')],
        ['name' => 'Ship it', 'max_consecutive_failures' => 3],
    );

    $copy = Workflow::import(WorkflowTransfer::toJson($source), ['description' => 'Copied']);

    expect($copy->exists)->toBeTrue()
        ->and($copy->name)->toBe('Ship it')
        ->and($copy->description)->toBe('Copied')
        ->and($copy->is_active)->toBeFalse()
        ->and($copy->max_consecutive_failures)->toBe(3)
        ->and($copy->triggerNode(Webhook::class)['data']['config']['token'])->not->toBe('secret-token')
        ->and(strlen($copy->triggerNode(Webhook::class)['data']['config']['token']))->toBe(40)
        ->and($copy->triggers()->count())->toBe(1)
        ->and(Flow::import(['nodes' => [triggerNode('t', Manual::class)], 'edges' => []])->name)->toBe('Imported workflow');
});

it('refuses documents it cannot read or run', function (): void {
    expect(fn () => Workflow::import('not json'))->toThrow(WorkflowException::class, 'could not be read')
        ->and(fn () => Workflow::import(['definition' => ['nodes' => [], 'edges' => []]]))->toThrow(WorkflowException::class, 'no nodes')
        ->and(fn () => Workflow::import(['nodes' => [triggerNode('t', 'App\\Nope')], 'edges' => []]))->toThrow(WorkflowException::class, 'not registered')
        ->and(Workflow::query()->count())->toBe(0);
});

it('lists the built-in templates and creates workflows from them', function (): void {
    $templates = Templates::all();

    expect(array_keys($templates))->toBe(['approval', 'dunning', 'high-value-order-alert', 'sla-escalation', 'ticket-triage', 'welcome-series'])
        ->and($templates['dunning']['category'])->toBe('Finance')
        ->and(Templates::byCategory())->toHaveKey('Sales');

    $workflow = Templates::create('welcome-series', ['name' => 'Hello']);

    expect($workflow->name)->toBe('Hello')
        ->and($workflow->is_active)->toBeFalse()
        ->and($workflow->nodes())->toHaveCount(4)
        ->and($workflow->edges())->toHaveCount(3)
        ->and(fn () => Templates::create('nope'))->toThrow(InvalidArgumentException::class);
});

it('offers custom templates from the config and the plugin, and only usable ones', function (): void {
    $dir = sys_get_temp_dir().'/flow-templates-'.Str::random(6);
    mkdir($dir);
    file_put_contents($dir.'/custom-log.json', json_encode(['name' => 'Custom log', 'category' => 'Ops', 'definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('a', WriteLog::class, ['message' => 'hi'])], 'edges' => [edge('t', 'a')]]]));
    file_put_contents($dir.'/broken.json', json_encode(['name' => 'Broken', 'definition' => ['nodes' => [triggerNode('t', 'App\\Missing')], 'edges' => []]]));
    file_put_contents($dir.'/garbage.json', '{');

    config()->set('packstub-flow.templates', [$dir]);
    Templates::register([['key' => 'inline', 'name' => 'Inline', 'definition' => ['nodes' => [triggerNode('t', Manual::class)], 'edges' => []]]]);

    $keys = array_keys(Templates::all());

    expect($keys)->toContain('custom-log')->toContain('inline')->toContain('welcome-series')
        ->and($keys)->not->toContain('broken')->not->toContain('garbage')
        ->and(Templates::find('inline')['category'])->toBe('Other');

    Templates::withoutBuiltIn();

    expect(array_keys(Templates::all()))->toBe(['custom-log', 'inline']);

    array_map('unlink', glob($dir.'/*.json') ?: []);
    rmdir($dir);
});

it('offers the templates as cards with their steps, and the categories as a filter when there is more than one', function (): void {
    $this->actingAs(createUser());

    $dir = sys_get_temp_dir().'/flow-templates-'.Str::random(6);
    mkdir($dir);
    file_put_contents($dir.'/custom-log.json', json_encode(['name' => 'Custom log', 'category' => 'Ops', 'definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('a', WriteLog::class, ['message' => 'hi'])], 'edges' => [edge('t', 'a')]]]));
    config()->set('packstub-flow.templates', [$dir]);

    $picker = function (): TemplatePicker {
        $page = Livewire::test(ListWorkflows::class)->mountAction('template')->instance();

        return $page->getSchema($page->getMountedActionSchemaName())->getComponent('template');
    };

    // Several categories: the cards carry theirs, and the filter lists them.
    expect($picker()->getOptions()['custom-log'])->toBe('Custom log')
        ->and($picker()->getCategories())->toContain('Ops', 'Finance', 'Sales');

    $cards = collect($picker()->getCards())->keyBy('key');

    expect($cards['custom-log']['category'])->toBe('Ops')
        ->and(array_column($cards['custom-log']['steps'], 'label'))->toBe(['t', 'a'])
        ->and(array_column($cards['custom-log']['steps'], 'theme'))->toBe(['trigger', 'action'])
        ->and(array_column($cards['welcome-series']['steps'], 'label'))->toBe(['User registered', 'Welcome email', 'Wait 2 days', 'Follow-up tip']);

    // The rendered field: the filter, a card per template, its steps.
    $html = $picker()->toEmbeddedHtml();

    expect($html)->toContain('fi-flow-template-picker', 'Custom log', 'Welcome email', __('packstub-flow::flow.templates.all'), 'value="welcome-series"');

    // One category left: no filter to show.
    Templates::withoutBuiltIn();

    expect($picker()->getOptions())->toBe(['custom-log' => 'Custom log'])
        ->and($picker()->getCategories())->toBe(['Ops']);

    array_map('unlink', glob($dir.'/*.json') ?: []);
    rmdir($dir);
});

it('exports, imports and starts from a template in the panel', function (): void {
    $this->actingAs(createUser());

    $workflow = createWorkflow([triggerNode('t', Manual::class), actionNode('a', SetStatusAction::class, ['status' => 'x'])], [edge('t', 'a')], ['name' => 'Panel export']);

    Livewire::test(EditWorkflow::class, ['record' => $workflow->getKey()])
        ->callAction('export')
        ->assertFileDownloaded('panel-export.flow.json');

    Livewire::test(ListWorkflows::class)
        ->callAction('import', data: ['json' => WorkflowTransfer::toJson($workflow)])
        ->assertHasNoActionErrors()
        ->assertNotified()
        ->assertRedirect();

    expect(Workflow::query()->where('name', 'Panel export')->count())->toBe(2);

    Livewire::test(ListWorkflows::class)
        ->callAction('import', data: ['json' => '{"nodes": []}'])
        ->assertNotified('The export has no nodes.');

    Livewire::test(ListWorkflows::class)
        ->callAction('template', data: ['template' => 'approval', 'name' => 'Sign-off'])
        ->assertHasNoActionErrors()
        ->assertRedirect();

    $created = Workflow::query()->where('name', 'Sign-off')->first();

    expect($created)->not->toBeNull()
        ->and($created->is_active)->toBeFalse()
        ->and($created->triggerNodes())->toHaveCount(1);
});

it('opens a workflow created from a template or an import for review, with the nodes still to fill in marked', function (): void {
    $this->actingAs(createUser());

    // The template's choices left to the person: the record type of the trigger, the recipients of the notification.
    Livewire::test(ListWorkflows::class)
        ->callAction('template', data: ['template' => 'high-value-order-alert'])
        ->assertRedirect(ListWorkflows::reviewUrl($template = Workflow::query()->where('name', 'High-value order alert')->firstOrFail()));

    expect(ListWorkflows::reviewUrl($template))->toEndWith('/edit?'.FlowBuilder::REVIEW_QUERY.'=1');

    Livewire::withQueryParams([FlowBuilder::REVIEW_QUERY => '1'])
        ->test(EditWorkflow::class, ['record' => $template->getKey()])
        ->assertSee('problems: JSON.parse(', escape: false)
        ->assertSee('Record type\\\\u0022 is required.', escape: false)
        ->assertSee('Recipients\\\\u0022 is required.', escape: false);

    // A plain visit shows no badges, as before; the field can be told to review every time, or never.
    Livewire::withQueryParams([])
        ->test(EditWorkflow::class, ['record' => $template->getKey()])
        ->assertSee('problems: []', escape: false)
        ->assertDontSee('is required.', escape: false);

    expect(FlowBuilder::make('definition')->reviewsOnOpen())->toBeFalse()
        ->and(FlowBuilder::make('definition')->reviewOnOpen()->reviewsOnOpen())->toBeTrue()
        ->and(FlowBuilder::make('definition')->reviewOnOpen(fn (): bool => false)->reviewsOnOpen())->toBeFalse();

    // An import opens the same way.
    $source = createWorkflow([triggerNode('t', Manual::class), actionNode('a', SetStatusAction::class, ['status' => 'x'])], [edge('t', 'a')], ['name' => 'Copied']);

    Livewire::test(ListWorkflows::class)
        ->callAction('import', data: ['json' => WorkflowTransfer::toJson($source)])
        ->assertRedirect(ListWorkflows::reviewUrl(Workflow::query()->where('name', 'Copied')->latest('id')->firstOrFail()));
});

it('attaches imported and templated workflows to the panel tenant', function (): void {
    $team = Team::query()->create(['name' => 'Acme', 'slug' => 'acme']);
    $user = createUser(['team_id' => $team->getKey()]);
    $this->actingAs($user);

    Filament::setCurrentPanel(Filament::getPanel('app'));
    Filament::setTenant($team, true);

    Livewire::test(ListWorkflows::class)
        ->callAction('template', data: ['template' => 'welcome-series'])
        ->assertHasNoActionErrors();

    $workflow = Workflow::query()->where('name', 'Welcome series')->first();

    expect($workflow->tenant_type)->toBe($team->getMorphClass())
        ->and($workflow->tenant_id)->toBe((string) $team->getKey());

    Filament::setTenant(null);
    Filament::setCurrentPanel(Filament::getPanel('admin'));
});

it('hides the template action when no template is usable', function (): void {
    $this->actingAs(createUser());
    Templates::withoutBuiltIn();

    Livewire::test(ListWorkflows::class)->assertActionHidden('template');

    FlowPlugin::get()->templates([['key' => 'x', 'name' => 'X', 'definition' => ['nodes' => [triggerNode('t', Manual::class)], 'edges' => []]]]);
    FlowPlugin::get()->register(Filament::getPanel('admin'));

    Livewire::test(ListWorkflows::class)->assertActionVisible('template');
});

it('seeds from a template file with the model helper', function (): void {
    $workflow = Workflow::import(file_get_contents(__DIR__.'/../../resources/templates/high-value-order-alert.json'), ['is_active' => false, 'name' => 'Alerts']);

    expect($workflow->name)->toBe('Alerts')
        ->and($workflow->fresh()->latestVersion)->not->toBeNull()
        ->and(collect($workflow->nodes())->pluck('data.identifier'))->toContain(SendEmail::class === '' ? '' : SendSlackMessage::class);
});
