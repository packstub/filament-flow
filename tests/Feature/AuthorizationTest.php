<?php

use Illuminate\Support\Facades\Gate;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\FlowPlugin;

beforeEach(function (): void {
    $this->actingAs(createUser());
});

it('shows the resource to everyone by default', function (): void {
    expect(WorkflowResource::canAccess())->toBeTrue();

    $this->get('/admin/workflows')->assertOk();
});

it('hides the resource behind the plugin authorize callback', function (): void {
    FlowPlugin::get()->authorize(fn (): bool => false);

    expect(WorkflowResource::canAccess())->toBeFalse();

    $this->get('/admin/workflows')->assertForbidden();

    FlowPlugin::get()->authorize(fn (): bool => true);

    expect(WorkflowResource::canAccess())->toBeTrue();
});

it('hides the resource behind the configured gate', function (): void {
    config()->set('packstub-flow.gate', 'manage-workflows');
    Gate::define('manage-workflows', fn ($user): bool => $user->email === 'boss@example.com');

    expect(WorkflowResource::canAccess())->toBeFalse();

    $this->actingAs(createUser(['email' => 'boss@example.com']));

    expect(WorkflowResource::canAccess())->toBeTrue();
});
