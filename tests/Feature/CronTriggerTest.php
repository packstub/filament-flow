<?php

namespace Packstub\Flow\Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\HttpRequest;
use Packstub\Flow\Nodes\Triggers\Cron;
use Packstub\Flow\Tests\TestCase;

uses(TestCase::class, RefreshDatabase::class);

test('cron workflow executes when cron is due', function () {
    Http::fake();

    // Create a workflow that runs every minute
    Workflow::create([
        'name' => 'Every Minute Workflow',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                [
                    'id' => 'trigger',
                    'type' => 'trigger',
                    'data' => [
                        'identifier' => Cron::class,
                        'config' => ['expression' => '* * * * *'],
                        'label' => 'Every Minute',
                    ],
                ],
                [
                    'id' => 'action',
                    'type' => 'action',
                    'data' => [
                        'identifier' => HttpRequest::class,
                        'config' => [
                            'method' => 'GET',
                            'url' => 'https://api.example.com/cron-triggered',
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

    // Run the cron command
    $this->artisan('flow:cron')
        ->expectsOutput('Checking cron workflows...')
        ->expectsOutput('Cron workflows dispatched.')
        ->assertExitCode(0);

    // Verify the action was executed
    Http::assertSent(function (\Illuminate\Http\Client\Request $request) {
        return $request->url() === 'https://api.example.com/cron-triggered';
    });
});

test('cron workflow does not execute when cron is not due', function () {
    Http::fake();

    // Create a workflow that runs on Jan 1st
    // Assuming today is NOT Jan 1st for the test to be reliable,
    // or we can mock the time.
    $nextYear = now()->year + 1;
    $expression = "0 0 1 1 * {$nextYear}"; // Specific point in future

    // Actually, simple way is to use a specific day of week that is not today.
    $notToday = now()->addDays(1)->format('N'); // 1 (Mon) to 7 (Sun)
    $expression = "* * * * {$notToday}";

    Workflow::create([
        'name' => 'Future Workflow',
        'is_active' => true,
        'payload' => [
            'nodes' => [
                [
                    'id' => 'trigger',
                    'type' => 'trigger',
                    'data' => [
                        'identifier' => Cron::class,
                        'config' => ['expression' => $expression],
                        'label' => 'Future Run',
                    ],
                ],
                [
                    'id' => 'action',
                    'type' => 'action',
                    'data' => [
                        'identifier' => HttpRequest::class,
                        'config' => [
                            'method' => 'GET',
                            'url' => 'https://api.example.com/should-not-run',
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

    // Run the cron command
    $this->artisan('flow:cron')
        ->assertExitCode(0);

    // Verify the action was NOT executed
    Http::assertNothingSent();
});
