<?php

test('can access workflow builder and see new nodes', function () {

    $page = visit('/admin/login');

    $page->fill('email', 'admin@example.com')
        ->fill('password', 'password')
        ->click('button[type="submit"]')
        ->assertSee('Dashboard');

    $page->navigate('/admin/workflows/create')
        ->assertSee('Flow Builder')
        // Open sidebar
        ->click('.add-node-btn')
        // Verify new nodes exist in list
        ->assertSee('Model Created')
        ->assertSee('Send Slack Notification')
        ->assertSee('Time of Day');
})->todo();
