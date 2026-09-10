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
use Packstub\Flow\Tests\Fixtures\GuardedOrder;
use Packstub\Flow\Tests\Fixtures\Ticket;

it('resolves {{ model.url }} to the record page of its Filament resource', function (): void {
    $order = createOrder();

    expect(ResourceUrl::for($order))->toBe(url("/admin/orders/{$order->id}/edit"))
        ->and(Placeholders::render('{{ model.url }}', ['model' => $order]))->toBe(url("/admin/orders/{$order->id}/edit"))
        ->and(Placeholders::render('{{ record.url }}', ['model' => $order]))->toBe(url("/admin/orders/{$order->id}/edit"))
        ->and(ResourceUrl::for(Ticket::query()->create(['title' => 'x'])))->toBe(url('/admin/tickets'))
        ->and(ResourceUrl::for(GuardedOrder::query()->create(['reference' => 'g'])))->toBeNull()
        ->and(Placeholders::render('[{{ model.url }}]', ['model' => GuardedOrder::query()->create(['reference' => 'h'])]))->toBe('[]');
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

    // Both rows share a created_at second, so pick them by title rather than by order.
    $notifications = DB::table('notifications')->where('notifiable_id', $user->id)->get()->map(fn ($row) => json_decode($row->data, true))->keyBy('title');

    expect($notifications)->toHaveCount(2)
        ->and($notifications["Order {$order->reference}"]['actions'][0]['url'])->toBe(url("/admin/orders/{$order->id}/edit"))
        ->and($notifications["Order {$order->reference}"]['actions'][0]['label'])->toBe('View order')
        ->and($notifications['No button']['actions'] ?? [])->toBe([]);

    Mail::assertSent(WorkflowMail::class, function (WorkflowMail $mail) use ($order): bool {
        return $mail->actionLabel === 'Open'
            && $mail->actionUrl === url("/admin/orders/{$order->id}/edit")
            && str_contains($mail->render(), 'Open');
    });
});
