<?php

use Filament\Actions\Testing\TestAction;
use Livewire\Livewire;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\EditWorkflow;
use Packstub\Flow\Filament\Resources\WorkflowResource\RelationManagers\VersionsRelationManager;
use Packstub\Flow\Models\WorkflowVersion;
use Packstub\Flow\Nodes\Actions\WriteLog;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Support\DefinitionDiff;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('snapshots a version whenever the definition changes and pins runs to it', function (): void {
    $this->actingAs(createUser(['email' => 'editor@example.com']));

    $workflow = manualWorkflow();

    expect($workflow->versions()->count())->toBe(1)
        ->and($workflow->latestVersion->number)->toBe(1)
        ->and($workflow->latestVersion->created_by)->toBe('editor@example.com');

    $workflow->update(['name' => 'Renamed']);
    expect($workflow->versions()->count())->toBe(1);

    $workflow->update(['definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('a', SetStatusAction::class, ['status' => 'v2']), actionNode('log', WriteLog::class, ['message' => 'hi'])], 'edges' => [edge('t', 'a'), edge('a', 'log')]]]);

    $latest = $workflow->fresh()->latestVersion;

    expect($workflow->versions()->count())->toBe(2)
        ->and($latest->number)->toBe(2)
        ->and($latest->diff())->toBe(['added' => ['log'], 'removed' => [], 'changed' => ['a'], 'edges' => 1])
        ->and(DefinitionDiff::summary($latest->diff()))->toBe('1 added (log); 1 changed (a); connections: +1');

    $run = Flow::run($workflow->fresh());

    expect($run->version_id)->toBe($latest->id)
        ->and($run->version->number)->toBe(2);

    // Moving a node is not a change.
    $definition = $workflow->fresh()->definition;
    $definition['nodes'][0]['position'] = ['x' => 500, 'y' => 500];
    $workflow->fresh()->update(['definition' => $definition]);

    expect($workflow->versions()->count())->toBe(3)
        ->and(DefinitionDiff::summary($workflow->fresh()->latestVersion->diff()))->toBe('No changes to the nodes.');
});

it('prunes old versions', function (): void {
    config()->set('packstub-flow.versions.keep', 3);
    $workflow = manualWorkflow();

    foreach (range(1, 5) as $i) {
        $workflow->update(['definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('a', SetStatusAction::class, ['status' => "v{$i}"])], 'edges' => [edge('t', 'a')]]]);
    }

    expect($workflow->versions()->pluck('number')->all())->toBe([6, 5, 4]);
});

it('lists, compares and restores versions in the panel', function (): void {
    $this->actingAs(createUser());

    $workflow = manualWorkflow(['status' => 'one']);
    $workflow->update(['definition' => ['nodes' => [triggerNode('t', Manual::class), actionNode('a', SetStatusAction::class, ['status' => 'two'])], 'edges' => [edge('t', 'a')]]]);

    $first = WorkflowVersion::query()->where('workflow_id', $workflow->id)->where('number', 1)->sole();
    $second = WorkflowVersion::query()->where('workflow_id', $workflow->id)->where('number', 2)->sole();

    Livewire::test(VersionsRelationManager::class, ['ownerRecord' => $workflow, 'pageClass' => EditWorkflow::class])
        ->assertOk()
        ->assertCanSeeTableRecords([$first, $second])
        ->assertSee('1 changed (a)')
        ->assertActionHidden(TestAction::make('restore')->table($second))
        ->assertActionExists(TestAction::make('compare')->table($second))
        ->callAction(TestAction::make('restore')->table($first))
        ->assertNotified();

    $fresh = $workflow->fresh();

    expect($fresh->nodes()[1]['data']['config']['status'])->toBe('one')
        ->and($fresh->versions()->count())->toBe(3)
        ->and($fresh->latestVersion->number)->toBe(3);
});
