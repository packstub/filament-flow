<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Mail\WorkflowMail;
use Packstub\Flow\Nodes\Actions\SendEmail;
use Packstub\Flow\Nodes\Actions\SendNotification;
use Packstub\Flow\Nodes\Triggers\Manual;
use Packstub\Flow\Support\Placeholders;
use Packstub\Flow\Support\ResourceUrl;
use Packstub\Flow\Tests\Fixtures\Ticket;

it('resolves {{ model.url }} to the record page of its Filament resource', function (): void {
    $order = createOrder();

    expect(ResourceUrl::for($order))->toBe(url("/admin/orders/{$order->id}/edit"))
        ->and(Placeholders::render('{{ model.url }}', ['model' => $order]))->toBe(url("/admin/orders/{$order->id}/edit"))
        ->and(Placeholders::render('{{ record.url }}', ['model' => $order]))->toBe(url("/admin/orders/{$order->id}/edit"))
        ->and(ResourceUrl::for(Ticket::query()->create(['title' => 'x'])))->toBeNull()
        ->and(Placeholders::render('[{{ model.url }}]', ['model' => Ticket::query()->create(['title' => 'y'])]))->toBe('[]');
});

it('adds a button to notifications and mails when a label and URL are set', function (): void {
    Mail::fake();

    $user = createUser(['email' => 'ops@example.com']);
    $order = createOrder();

    $workflow = createWorkflow([
        triggerNode('t', Manual::class),
        actionNode('n', SendNotification::class, ['title' => 'Order {{ model.reference }}', 'recipients' => 'ops@example.com', 'action_label' => 'View order', 'action_url' => '{{ model.url }}']),
        actionNode('m', SendEmail::class, ['recipient' => 'ops@example.com', 'subject' => 's', 'body' => 'b', 'action_label' => 'Open', 'action_url' => '{{ model.url }}']),
        actionNode('plain', SendNotification::class, ['title' => 'No button', 'recipients' => 'ops@example.com', 'action_label' => 'View', 'action_url' => '']),
    ], [edge('t', 'n'), edge('n', 'm'), edge('m', 'plain')]);

    Flow::run($workflow, ['model' => $order]);

    $notifications = DB::table('notifications')->where('notifiable_id', $user->id)->orderBy('created_at')->get()->map(fn ($row) => json_decode($row->data, true));

    expect($notifications)->toHaveCount(2)
        ->and($notifications[0]['actions'][0]['url'])->toBe(url("/admin/orders/{$order->id}/edit"))
        ->and($notifications[0]['actions'][0]['label'])->toBe('View order')
        ->and($notifications[1]['actions'] ?? [])->toBe([]);

    Mail::assertSent(WorkflowMail::class, function (WorkflowMail $mail) use ($order): bool {
        return $mail->actionLabel === 'Open'
            && $mail->actionUrl === url("/admin/orders/{$order->id}/edit")
            && str_contains($mail->render(), 'Open');
    });
});
