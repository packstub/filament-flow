<?php

use Filament\Facades\Filament;
use Livewire\Livewire;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Filament\Pages\WorkflowRuns;
use Packstub\Flow\Filament\Widgets\RunsChart;
use Packstub\Flow\Filament\Widgets\RunsOverview;
use Packstub\Flow\Filament\Widgets\SlowestWorkflows;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Models\WorkflowStep;
use Packstub\Flow\Tests\Fixtures\Team;

it('charts succeeded and failed runs per day', function (): void {
    $this->actingAs(createUser());

    $ok = manualWorkflow(['status' => 'fine'], ['name' => 'Fine']);
    $bad = manualWorkflow(['status' => 'boom'], ['name' => 'Boom']);

    Flow::run($ok);
    Flow::run($ok);
    Flow::run($bad);
    Flow::test($ok); // test runs are not charted

    $yesterday = Flow::run($ok);
    $yesterday->forceFill(['started_at' => now()->subDay()])->save();

    $component = Livewire::test(RunsChart::class, ['filter' => '7']);
    $data = (fn () => $this->getData())->call($component->instance());

    expect($data['labels'])->toHaveCount(7)
        ->and(array_sum($data['datasets'][0]['data']))->toBe(3)
        ->and(array_sum($data['datasets'][1]['data']))->toBe(1)
        ->and($data['datasets'][0]['data'][6])->toBe(2)
        ->and($data['datasets'][0]['data'][5])->toBe(1)
        ->and($data['datasets'][0]['label'])->toBe('Succeeded');

    $component->assertSee('Runs per day');
});

it('lists the slowest workflows with their average duration and failure rate', function (): void {
    $this->actingAs(createUser());

    $quick = manualWorkflow(['status' => 'fine'], ['name' => 'Quick']);
    $slow = manualWorkflow(['status' => 'boom'], ['name' => 'Slow']);
    $idle = manualWorkflow(['status' => 'fine'], ['name' => 'Idle']);

    Flow::run($quick);
    Flow::run($quick);
    Flow::run($slow);
    Flow::run($slow);
    $fineSlow = manualWorkflow(['status' => 'fine']);

    // Pretend the slow workflow's steps took a while.
    WorkflowStep::query()->whereIn('run_id', WorkflowRun::query()->where('workflow_id', $slow->getKey())->pluck('id'))->update(['duration_ms' => 1500]);
    WorkflowStep::query()->whereIn('run_id', WorkflowRun::query()->where('workflow_id', $quick->getKey())->pluck('id'))->update(['duration_ms' => 10]);

    $component = Livewire::test(SlowestWorkflows::class);
    $rows = $component->instance()->getTable()->getQuery()->get();

    expect($rows->pluck('name')->all())->toBe(['Slow', 'Quick'])
        ->and((int) $rows[0]->runs_count)->toBe(2)
        ->and((float) $rows[0]->average_ms)->toBe(3000.0)
        ->and((float) $rows[0]->failure_rate)->toBe(1.0)
        ->and((float) $rows[1]->failure_rate)->toBe(0.0)
        ->and($rows->pluck('name'))->not->toContain('Idle');

    $component->assertSee('Slowest workflows')->assertSee('Slow')->assertSee('3 s')->assertSee('100 %');

    expect(SlowestWorkflows::duration(250))->toBe('250 ms')
        ->and(SlowestWorkflows::duration(90_000))->toBe('1.5 min');
});

it('shows the widgets on the Runs page and scopes them to the tenant', function (): void {
    $acme = Team::query()->create(['name' => 'Acme', 'slug' => 'acme']);
    $globex = Team::query()->create(['name' => 'Globex', 'slug' => 'globex']);
    $user = createUser(['team_id' => $acme->getKey()]);
    $this->actingAs($user);

    $mine = manualWorkflow(['status' => 'fine'], ['name' => 'Mine', 'tenant_type' => $acme->getMorphClass(), 'tenant_id' => (string) $acme->getKey()]);
    $theirs = manualWorkflow(['status' => 'boom'], ['name' => 'Theirs', 'tenant_type' => $globex->getMorphClass(), 'tenant_id' => (string) $globex->getKey()]);

    Flow::run($mine, ['tenant' => $acme]);
    Flow::run($theirs, ['tenant' => $globex]);

    expect(WorkflowRun::query()->withoutGlobalScopes()->where('tenant_id', $acme->getKey())->count())->toBe(1);

    Filament::setCurrentPanel(Filament::getPanel('app'));
    Filament::setTenant($acme, true);

    Livewire::test(WorkflowRuns::class)->assertOk()->assertSeeLivewire(RunsChart::class)->assertSeeLivewire(SlowestWorkflows::class);

    $chart = (fn () => $this->getData())->call(Livewire::test(RunsChart::class)->instance());
    $rows = Livewire::test(SlowestWorkflows::class)->instance()->getTable()->getQuery()->get();

    expect(array_sum($chart['datasets'][0]['data']) + array_sum($chart['datasets'][1]['data']))->toBe(1)
        ->and($rows->pluck('name')->all())->toBe(['Mine']);

    Livewire::test(RunsOverview::class)->assertSee('100 %');

    Filament::setTenant(null);
    Filament::setCurrentPanel(Filament::getPanel('admin'));
});
