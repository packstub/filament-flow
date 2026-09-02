<?php

use Illuminate\Auth\Events\Registered;
use Packstub\Flow\Nodes\Triggers\UserRegistered;
use Packstub\Flow\Tests\Fixtures\SetStatusAction;

it('starts workflows when a user registers', function (): void {
    createWorkflow([triggerNode('t', UserRegistered::class), actionNode('a', SetStatusAction::class, ['status' => 'welcome {{ model.name }}'])], [edge('t', 'a')]);

    $user = createUser(['name' => 'Jane']);
    event(new Registered($user));

    expect(SetStatusAction::$calls)->toHaveCount(1)
        ->and(SetStatusAction::$calls[0]['payload']['model']->name)->toBe('Jane')
        ->and(SetStatusAction::$calls[0]['payload']['user']->is($user))->toBeTrue();
});
