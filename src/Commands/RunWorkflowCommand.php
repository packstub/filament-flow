<?php

namespace Packstub\Flow\Commands;

use Illuminate\Console\Command;
use Packstub\Flow\Facades\Flow;

class RunWorkflowCommand extends Command
{
    protected $signature = 'packstub-flow:run {workflow : The workflow id or name} {--payload= : JSON passed to the run}';

    protected $description = 'Run a workflow from its first trigger node.';

    public function handle(): int
    {
        $model = Flow::workflowModel();
        $needle = (string) $this->argument('workflow');

        $workflow = $model::query()->whereKey($needle)->first() ?? $model::query()->where('name', $needle)->first();

        if (! $workflow) {
            $this->components->error("No workflow matches [{$needle}].");

            return self::FAILURE;
        }

        if (! $workflow->is_active) {
            $this->components->error("Workflow [{$workflow->name}] is inactive.");

            return self::FAILURE;
        }

        $payload = $this->option('payload') ? (array) json_decode((string) $this->option('payload'), true) : [];

        $run = Flow::run($workflow, $payload, queue: false);

        if (! $run) {
            $this->components->error('The workflow has no trigger node to start from.');

            return self::FAILURE;
        }

        foreach ($run->steps ?? [] as $step) {
            $this->components->twoColumnDetail($step['label'], $step['message']);
        }

        $this->newLine();

        $run->status->value === 'failed'
            ? $this->components->error("Run {$run->getKey()} failed: {$run->error}")
            : $this->components->info("Run {$run->getKey()} finished with status {$run->status->value}.");

        return $run->status->value === 'failed' ? self::FAILURE : self::SUCCESS;
    }
}
