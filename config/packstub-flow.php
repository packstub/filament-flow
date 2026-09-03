<?php

use Packstub\Flow\Models\Secret;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Models\WorkflowRun;
use Packstub\Flow\Models\WorkflowTrigger;
use Packstub\Flow\Nodes;

return [

    /*
    |--------------------------------------------------------------------------
    | Tables
    |--------------------------------------------------------------------------
    |
    | Table names are prefixed so they never collide with a "workflows" table
    | your application may already have. Change them before running the
    | migration.
    |
    */

    'tables' => [
        'workflows' => 'flow_workflows',
        'triggers' => 'flow_workflow_triggers',
        'runs' => 'flow_workflow_runs',
        'secrets' => 'flow_secrets',
    ],

    /*
    |--------------------------------------------------------------------------
    | Models
    |--------------------------------------------------------------------------
    |
    | Swap any of these for your own subclass if you need extra columns,
    | scopes or relationships.
    |
    */

    'models' => [
        'workflow' => Workflow::class,
        'trigger' => WorkflowTrigger::class,
        'run' => WorkflowRun::class,
        'secret' => Secret::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Queue
    |--------------------------------------------------------------------------
    |
    | When enabled, a triggered workflow is pushed onto the queue instead of
    | running inside the request (or model event) that fired it. Delays always
    | use the queue, so a queue worker is needed for "Wait" steps either way.
    |
    */

    'queue' => [
        'enabled' => (bool) env('PACKSTUB_FLOW_QUEUE', false),
        'connection' => env('PACKSTUB_FLOW_QUEUE_CONNECTION'),
        'queue' => env('PACKSTUB_FLOW_QUEUE_NAME'),
        // Seconds a queued run (or a resumed branch) may take before the worker kills it.
        'timeout' => (int) env('PACKSTUB_FLOW_QUEUE_TIMEOUT', 300),
    ],

    /*
    |--------------------------------------------------------------------------
    | Execution limits
    |--------------------------------------------------------------------------
    |
    | A run stops with an error when it executes more than max_steps nodes,
    | or when a node is reached again on the same path (a cycle).
    |
    */

    'max_steps' => 1000,

    // A run may start other runs (a non-quiet record update fires a "Record
    // updated" trigger, "Call workflow" starts another workflow). Nested runs
    // deeper than this are not started.
    'max_nesting' => 5,

    // An action's output (an HTTP response, for example) is kept on the run's
    // step log up to this many bytes; larger outputs are stored as a preview.
    'max_output_bytes' => 16384,

    /*
    |--------------------------------------------------------------------------
    | Outgoing HTTP
    |--------------------------------------------------------------------------
    |
    | Applies to the "HTTP request" and "Send Slack message" actions. Private
    | and reserved addresses (localhost, 10.x, 192.168.x, 169.254.x, ...)
    | are refused unless block_private_networks is off. Set allowed_hosts to
    | restrict requests to a list of hosts ("api.example.com",
    | "*.example.com"); when it is not empty only those hosts are allowed.
    |
    */

    'http' => [
        'timeout' => (int) env('PACKSTUB_FLOW_HTTP_TIMEOUT', 15),
        'retry_after_ms' => 500,
        'block_private_networks' => (bool) env('PACKSTUB_FLOW_HTTP_BLOCK_PRIVATE', true),
        'allowed_hosts' => [],
    ],

    /*
    |--------------------------------------------------------------------------
    | Schedule
    |--------------------------------------------------------------------------
    |
    | Workflows with a "Schedule" trigger are evaluated by the
    | packstub-flow:cron command. With register_schedule enabled the command
    | is added to Laravel's scheduler every minute for you, so a running
    | `schedule:work` / cron entry is all you need.
    |
    */

    'register_schedule' => true,

    // When the scheduler was not running for a while (a deploy, a crash),
    // evaluate the minutes that were missed, up to this many, on the next
    // packstub-flow:cron run. 0 evaluates the current minute only.
    'schedule_catch_up_minutes' => (int) env('PACKSTUB_FLOW_SCHEDULE_CATCH_UP', 0),

    // Run packstub-flow:cron on one server only (needs a cache driver that
    // supports locks) when the scheduler runs on several.
    'schedule_on_one_server' => (bool) env('PACKSTUB_FLOW_SCHEDULE_ONE_SERVER', false),

    /*
    |--------------------------------------------------------------------------
    | Webhooks
    |--------------------------------------------------------------------------
    |
    | The "Webhook" trigger accepts POST requests on
    | {prefix}/{workflow}/{token}. Each trigger node carries its own token.
    |
    */

    'webhooks' => [
        'enabled' => true,
        'prefix' => 'flow/webhooks',
        'middleware' => ['api', 'throttle:60,1'],
        // Request headers that are dropped before the payload is stored on the run.
        'redacted_headers' => ['authorization', 'proxy-authorization', 'cookie', 'x-api-key', 'x-auth-token', 'x-signature', 'x-hub-signature', 'x-hub-signature-256'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Model discovery
    |--------------------------------------------------------------------------
    |
    | Models offered by the "Record created / updated / deleted" triggers.
    | Leave empty to list every model in app/Models that uses the
    | HasWorkflows trait. The plugin's ->models([...]) call adds to this list.
    |
    */

    'models_for_triggers' => [],

    /*
    |--------------------------------------------------------------------------
    | Nodes
    |--------------------------------------------------------------------------
    |
    | The triggers, actions and conditions offered in the builder. Add your
    | own classes here or through FlowPlugin::make()->triggers([...]).
    |
    */

    'triggers' => [
        Nodes\Triggers\Manual::class,
        Nodes\Triggers\Schedule::class,
        Nodes\Triggers\Webhook::class,
        Nodes\Triggers\RecordCreated::class,
        Nodes\Triggers\RecordUpdated::class,
        Nodes\Triggers\RecordDeleted::class,
        Nodes\Triggers\UserRegistered::class,
        Nodes\Triggers\EventFired::class,
        Nodes\Triggers\WorkflowCalled::class,
        // Offered only when the spatie package is installed.
        Nodes\Triggers\StateTransitioned::class,
        Nodes\Triggers\StatusChanged::class,
    ],

    'actions' => [
        Nodes\Actions\SendEmail::class,
        Nodes\Actions\SendNotification::class,
        Nodes\Actions\SendSlackMessage::class,
        Nodes\Actions\SendDiscordMessage::class,
        Nodes\Actions\SendTeamsMessage::class,
        Nodes\Actions\SendTelegramMessage::class,
        Nodes\Actions\SendSms::class,
        Nodes\Actions\HttpRequest::class,
        Nodes\Actions\UpdateRecord::class,
        Nodes\Actions\TransitionState::class,
        Nodes\Actions\Wait::class,
        Nodes\Actions\CallWorkflow::class,
        Nodes\Actions\WriteLog::class,
    ],

    'conditions' => [
        Nodes\Conditions\RecordAttribute::class,
        Nodes\Conditions\CompareValues::class,
        Nodes\Conditions\MultipleConditions::class,
        Nodes\Conditions\TimeOfDay::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Navigation
    |--------------------------------------------------------------------------
    */

    'navigation' => [
        'group' => null,
        'icon' => 'heroicon-o-bolt',
        'sort' => null,
    ],

    /*
    |--------------------------------------------------------------------------
    | Runs retention
    |--------------------------------------------------------------------------
    |
    | packstub-flow:prune deletes runs older than this many days.
    |
    */

    'prune_runs_after_days' => 30,

    /*
    |--------------------------------------------------------------------------
    | Notifications
    |--------------------------------------------------------------------------
    |
    | Panel users (by email) who receive a database notification when a
    | workflow is deactivated after failing too many times in a row.
    |
    */

    'notifications' => [
        'recipients' => array_values(array_filter(array_map('trim', explode(',', (string) env('PACKSTUB_FLOW_NOTIFY', ''))))),
    ],

    /*
    |--------------------------------------------------------------------------
    | Authorization
    |--------------------------------------------------------------------------
    |
    | Workflows can call URLs, send mail and update records, so who may
    | manage them matters. Register a policy for the Workflow model, call
    | FlowPlugin::make()->authorize(fn () => ...), or name a Gate ability
    | here that every panel user must pass to see the Workflows resource.
    |
    */

    'gate' => env('PACKSTUB_FLOW_GATE'),

];
