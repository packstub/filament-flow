<?php

use Filament\Actions\Testing\TestAction;
use Livewire\Livewire;
use Packstub\Flow\Enums\RunStatus;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Pages\WorkflowRuns;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Filament\Widgets\RunsOverview;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Models\WorkflowStep;

beforeEach(function (): void {
    $this->actingAs(createUser());
});

it('stores one step row per executed node', function (): void {
    $run = Flow::run(manualWorkflow());

    expect(WorkflowStep::query()->where('run_id', $run->getKey())->orderBy('sequence')->pluck('node_id')->all())->toBe(['t', 'a'])
        ->and($run->steps()->count())->toBe(2)
        ->and($run->steps[1])->toMatchArray(['node_id' => 'a', 'type' => 'action', 'label' => 'a', 'status' => 'ok'])
        ->and($run->steps[1]['at'])->not->toBeEmpty();

    $run->workflow->delete();

    expect(WorkflowStep::query()->count())->toBe(0);
});

it('lists every run across workflows with filters and actions', function (): void {
    $ok = manualWorkflow(['status' => 'fine'], ['name' => 'Good one']);
    $bad = manualWorkflow(['status' => 'boom'], ['name' => 'Bad one']);

    $good = Flow::run($ok);
    $failed = Flow::run($bad);
    $test = Flow::test($ok);

    $this->get(WorkflowRuns::getUrl())->assertOk()->assertSee('Good one')->assertSee('Bad one');

    Livewire::test(WorkflowRuns::class)
        ->assertOk()
        ->assertCanSeeTableRecords([$good, $failed])
        ->assertCanNotSeeTableRecords([$test])
        ->filterTable('status', [RunStatus::Failed->value])
        ->assertCanSeeTableRecords([$failed])
        ->assertCanNotSeeTableRecords([$good])
        ->resetTableFilters()
        ->filterTable('is_test', true)
        ->assertCanSeeTableRecords([$test])
        ->assertActionHidden(TestAction::make('rerun')->table($test))
        ->resetTableFilters()
        ->assertActionExists(TestAction::make('view')->table($failed))
        ->callAction(TestAction::make('rerun')->table($good))
        ->assertNotified();

    expect(WorkflowRun::query()->real()->where('workflow_id', $ok->getKey())->count())->toBe(2);

    $canvas = Livewire::test(WorkflowRuns::class)->instance()->getTable()->getAction('canvas');
    $canvas->record($failed);

    expect($canvas->getUrl())->toBe(WorkflowResource::getUrl('edit', ['record' => $bad]).'?node=a');
});

it('shows run statistics', function (): void {
    Flow::run(manualWorkflow(['status' => 'fine']));
    Flow::run(manualWorkflow(['status' => 'boom']));

    Livewire::test(RunsOverview::class)
        ->assertOk()
        ->assertSee(__('packstub-flow::flow.runs.stats.failed_today'))
        ->assertSee('50 %');
});
