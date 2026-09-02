<?php

use Livewire\Livewire;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\CreateWorkflow;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Actions\WriteLog;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Support\DefinitionValidator;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('accepts a connected workflow with its settings filled', function (): void {
    $definition = ['nodes' => [triggerNode('t', Manual::class), actionNode('a', SetStatusAction::class, ['status' => 'x'])], 'edges' => [edge('t', 'a')]];

    expect(DefinitionValidator::problems($definition))->toBe([]);
});

it('reports a missing trigger, unconnected nodes and empty required settings for an active workflow', function (): void {
    $definition = ['nodes' => [actionNode('a', SetStatusAction::class), actionNode('b', WriteLog::class, ['message' => 'hi'])], 'edges' => []];

    $problems = DefinitionValidator::problems($definition);

    expect($problems)->toContain('Add at least one trigger before activating the workflow.')
        ->toContain('Node "a" is not connected to anything before it.')
        ->toContain('Node "b" is not connected to anything before it.')
        ->toContain('Node "a": the setting "Status" is required.');
});

it('only checks node classes for an inactive workflow', function (): void {
    $definition = ['nodes' => [actionNode('a', SetStatusAction::class), actionNode('x', 'App\\Nope')], 'edges' => []];

    expect(DefinitionValidator::problems($definition, active: false))
        ->toBe(['Node "x" uses a trigger, action or condition that is not registered.']);
});

it('blocks activating an incomplete workflow from the form', function (): void {
    $this->actingAs(createUser());

    $definition = ['nodes' => [triggerNode('t', Manual::class), actionNode('a', SendEmail::class)], 'edges' => []];

    Livewire::test(CreateWorkflow::class)
        ->fillForm(['name' => 'Broken', 'is_active' => true, 'definition' => $definition])
        ->call('create')
        ->assertHasFormErrors(['definition']);

    Livewire::test(CreateWorkflow::class)
        ->fillForm(['name' => 'Draft', 'is_active' => false, 'definition' => $definition])
        ->call('create')
        ->assertHasNoFormErrors();
});
