<?php

namespace Packstub\Flow\Tests\Feature;

use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\HttpRequest;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Actions\UpdateModel;
use Packstub\Flow\Nodes\Conditions\ModelPropertyCheck;
use Packstub\Flow\Nodes\Triggers\ModelCreated;
use Packstub\Flow\Nodes\Triggers\ModelUpdated;
use Packstub\Flow\Nodes\Triggers\UserRegistered;
use Packstub\Flow\Tests\TestCase;
use Packstub\Flow\Tests\User;

uses(TestCase::class, RefreshDatabase::class);

test('workflow sends email when user registers', function () {
    Mail::fake();

    // Create Workflow
    $workflow = Workflow::create([
        'name' => 'Welcome Email',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                [
                    'id' => 'trigger-1',
                    'type' => 'trigger',
                    'data' => [
                        'identifier' => UserRegistered::class,
                        'config' => [],
                        'label' => 'User Registered',
                    ],
                ],
                [
                    'id' => 'action-1',
                    'type' => 'action',
                    'data' => [
                        'identifier' => SendEmail::class,
                        'config' => [
                            'subject' => 'Welcome {{ model.name }}',
                            'body' => 'Hello {{ model.email }}',
                        ],
                        'label' => 'Send Email',
                    ],
                ],
            ],
            'edges' => [
                ['id' => 'edge-1', 'source' => 'trigger-1', 'target' => 'action-1'],
            ],
        ],
    ]);

    // triggers automatically synced via observer

    // Create User (simulating registration)
    $user = User::create([
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
    ]);

    // Manually fire the Registered event
    event(new Registered($user));

    // Assert GenericEmail Sent
    Mail::assertSent(function (\Packstub\Flow\Mail\GenericEmail $mail) use ($user) {
        return $mail->hasTo($user->email) &&
            $mail->subject === 'Welcome Test User' &&
            $mail->body === 'Hello test@example.com';
    });
});

test('workflow updates model when condition met', function () {
    $workflow = Workflow::create([
        'name' => 'Update VIP Status',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                [
                    'id' => 'trigger',
                    'type' => 'trigger',
                    'data' => [
                        'identifier' => ModelUpdated::class,
                        'config' => ['model_class' => User::class],
                        'label' => 'User Updated',
                    ],
                ],
                [
                    'id' => 'condition',
                    'type' => 'condition',
                    'data' => [
                        'identifier' => ModelPropertyCheck::class,
                        'config' => [
                            'model_class' => User::class,
                            'property' => 'name',
                            'operator' => '*',
                            'value' => 'VIP',
                        ],
                        'label' => 'Check Name',
                    ],
                ],
                [
                    'id' => 'action',
                    'type' => 'action',
                    'data' => [
                        'identifier' => UpdateModel::class,
                        'config' => [
                            'model_class' => User::class,
                            'attributes' => ['email' => 'vip@example.com'],
                        ],
                        'label' => 'Update Email',
                    ],
                ],
            ],
            'edges' => [
                ['id' => 'e1', 'source' => 'trigger', 'target' => 'condition'],
                ['id' => 'e2', 'source' => 'condition', 'sourceHandle' => 'true', 'target' => 'action'],
            ],
        ],
    ]);

    // triggers automatically synced via observer

    // Create User
    $user = User::create([
        'name' => 'Normal User',
        'email' => 'normal@example.com',
        'password' => 'password',
    ]);

    // Update User (should trigger workflow)
    $user->update(['name' => 'Super VIP User']);

    // Assert Logic
    $user->refresh();
    expect($user->email)->toBe('vip@example.com');
});

test('workflow sends http request on model creation', function () {
    Http::fake();

    $workflow = Workflow::create([
        'name' => 'Webhook Trigger',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                [
                    'id' => 'trigger',
                    'type' => 'trigger',
                    'data' => [
                        'identifier' => ModelCreated::class,
                        'config' => ['model_class' => User::class],
                        'label' => 'User Created',
                    ],
                ],
                [
                    'id' => 'action',
                    'type' => 'action',
                    'data' => [
                        'identifier' => HttpRequest::class,
                        'config' => [
                            'method' => 'POST',
                            'url' => 'https://api.example.com/webhook',
                            'body' => json_encode(['id' => '{{ model.id }}', 'name' => '{{ model.name }}']),
                        ],
                        'label' => 'Call Webhook',
                    ],
                ],
            ],
            'edges' => [
                ['id' => 'e1', 'source' => 'trigger', 'target' => 'action'],
            ],
        ],
    ]);

    // triggers automatically synced via observer


    // Create User
    $user = User::create([
        'name' => 'Webhook User',
        'email' => 'webhook@example.com',
        'password' => 'password',
    ]);

    Http::assertSentCount(1);

    Http::assertSent(function (\Illuminate\Http\Client\Request $request) use ($user) {
        $data = $request->data();
        return $request->url() === 'https://api.example.com/webhook' &&
            $request->method() === 'POST' &&
            ($data['id'] ?? null) == (string) $user->id &&
            ($data['name'] ?? null) == 'Webhook User';
    });
});
