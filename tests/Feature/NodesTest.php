<?php

use Xlited\LaravelFlow\Nodes\Triggers\ModelCreated;
use Xlited\LaravelFlow\Nodes\Actions\SendSlackNotification;
use Xlited\LaravelFlow\Nodes\Conditions\TimeOfDay;
use Xlited\LaravelFlow\Nodes\Conditions\ModelPropertyCheck;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use Xlited\LaravelFlow\Tests\TestCase;

uses(TestCase::class);

test('ModelCreated trigger has correct metadata', function () {
    $trigger = new ModelCreated();
    expect($trigger->getName())->toBe('Model Created')
        ->and($trigger->getDescription())->not->toBeEmpty()
        ->and($trigger->getFormSchema())->toBeArray();
});

test('SendSlackNotification action sends request', function () {
    Http::fake();

    $action = new SendSlackNotification();
    $data = ['webhook_url' => 'https://hooks.slack.com', 'message' => 'test'];

    $action->handle($data, []);

    Http::assertSent(function ($request) {
        return $request->url() == 'https://hooks.slack.com' &&
            $request['text'] == 'test';
    });
});

test('TimeOfDay condition evaluates correctly', function () {
    $condition = new TimeOfDay();

    // Test within range
    Carbon::setTestNow('2023-01-01 10:00:00');
    $data = ['start_time' => '09:00', 'end_time' => '17:00', 'timezone' => 'UTC'];
    expect($condition->evaluate($data, []))->toBeTrue();

    // Test outside range
    Carbon::setTestNow('2023-01-01 20:00:00');
    expect($condition->evaluate($data, []))->toBeFalse();

    // Test midnight crossover
    Carbon::setTestNow('2023-01-01 23:00:00');
    $data = ['start_time' => '22:00', 'end_time' => '05:00', 'timezone' => 'UTC'];
    expect($condition->evaluate($data, []))->toBeTrue();
});

test('ModelPropertyCheck evaluates correctly', function () {
    $condition = new ModelPropertyCheck();
    $model = new class extends Model {
        protected $attributes = ['status' => 'active'];
        protected $fillable = ['status'];
    };

    $data = ['property' => 'status', 'operator' => '=', 'value' => 'active'];
    expect($condition->evaluate($data, ['model' => $model]))->toBeTrue();

    $data['value'] = 'inactive';
    expect($condition->evaluate($data, ['model' => $model]))->toBeFalse();
});
