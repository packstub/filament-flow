<?php

use Illuminate\Support\Facades\Http;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Actions\HttpRequest;
use Packstub\Flow\Nodes\Actions\SendSlackMessage;
use Packstub\Flow\Support\UrlGuard;

beforeEach(function (): void {
    config()->set('packstub-flow.http.block_private_networks', true);
});

it('refuses private, loopback and link-local addresses', function (string $url): void {
    expect(fn () => UrlGuard::assertAllowed($url))->toThrow(WorkflowException::class);
})->with([
    'http://127.0.0.1/admin',
    'http://localhost:8000/',
    'http://app.localhost/',
    'http://10.0.0.5/',
    'http://192.168.1.1/',
    'http://172.16.0.1/',
    'http://169.254.169.254/latest/meta-data/',
    'http://[::1]/',
    'http://0.0.0.0/',
]);

it('refuses schemes other than http and https', function (): void {
    expect(fn () => UrlGuard::assertAllowed('file:///etc/passwd'))->toThrow(WorkflowException::class)
        ->and(fn () => UrlGuard::assertAllowed('ftp://example.com'))->toThrow(WorkflowException::class)
        ->and(fn () => UrlGuard::assertAllowed('not a url'))->toThrow(WorkflowException::class);
});

it('allows public addresses and honours the allowed hosts list', function (): void {
    UrlGuard::assertAllowed('https://93.184.216.34/');

    config()->set('packstub-flow.http.allowed_hosts', ['api.example.com', '*.hooks.example.org']);

    UrlGuard::assertAllowed('https://api.example.com/v1');
    UrlGuard::assertAllowed('https://eu.hooks.example.org/x');
    UrlGuard::assertAllowed('https://hooks.example.org/x');

    expect(fn () => UrlGuard::assertAllowed('https://evil.example.com/'))->toThrow(WorkflowException::class)
        ->and(fn () => UrlGuard::assertAllowed('https://127.0.0.1/'))->toThrow(WorkflowException::class);
});

it('can be switched off', function (): void {
    config()->set('packstub-flow.http.block_private_networks', false);

    UrlGuard::assertAllowed('http://127.0.0.1/');

    expect(true)->toBeTrue();
});

it('guards the HTTP request and Slack actions', function (): void {
    Http::fake();

    expect(fn () => (new HttpRequest)->handle(['method' => 'GET', 'url' => 'http://169.254.169.254/'], []))->toThrow(WorkflowException::class)
        ->and(fn () => (new SendSlackMessage)->handle(['webhook_url' => 'http://localhost/hook', 'message' => 'x'], []))->toThrow(WorkflowException::class);

    Http::assertNothingSent();
});
