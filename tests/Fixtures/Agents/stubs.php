<?php

use Laravel\Ai\Responses\AgentResponse;
use Laravel\Ai\Responses\Data\Usage;
use Laravel\Ai\Responses\StructuredAgentResponse;
use Laravel\Ai\StructuredAnonymousAgent;
use Packstub\Agents\AgentsManager;
use Packstub\Agents\Contracts\AgentContext;
use Packstub\Agents\Facades\Agents;
use Packstub\Agents\Support\AgentBudget;
use Packstub\Agents\Support\AgentModels;
use Packstub\Agents\Support\AgentRuntime;
use Packstub\Agents\Support\Context\LaravelContext;

/*
 * Stand-ins for packstub/agents (Agents for Laravel) and laravel/ai, which
 * are suggested, not required: the engine needs PHP 8.4 while the plugin
 * supports 8.3. The Ask AI action is tested against these; they carry the
 * real signatures and record what the action asked of them. Each one is
 * loaded only when the real class is missing, so a machine with the engine
 * installed runs the suite against the real classes. PHPStan scans this
 * directory for the same reason (phpstan.neon).
 */

$stubs = [
    AgentContext::class => 'AgentContext.php',
    LaravelContext::class => 'LaravelContext.php',
    AgentsManager::class => 'AgentsManager.php',
    Agents::class => 'Agents.php',
    AgentRuntime::class => 'AgentRuntime.php',
    AgentModels::class => 'AgentModels.php',
    AgentBudget::class => 'AgentBudget.php',
    Usage::class => 'Usage.php',
    AgentResponse::class => 'AgentResponse.php',
    StructuredAgentResponse::class => 'StructuredAgentResponse.php',
    StructuredAnonymousAgent::class => 'StructuredAnonymousAgent.php',
];

foreach ($stubs as $class => $file) {
    if (! class_exists($class) && ! interface_exists($class)) {
        require_once __DIR__.'/'.$file;
    }
}
