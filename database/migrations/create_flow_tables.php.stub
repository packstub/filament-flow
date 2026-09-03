<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        $workflows = config('packstub-flow.tables.workflows', 'flow_workflows');
        $triggers = config('packstub-flow.tables.triggers', 'flow_workflow_triggers');
        $runs = config('packstub-flow.tables.runs', 'flow_workflow_runs');
        $secrets = config('packstub-flow.tables.secrets', 'flow_secrets');
        $steps = config('packstub-flow.tables.steps', 'flow_workflow_steps');
        $waits = config('packstub-flow.tables.waits', 'flow_workflow_waits');
        $versions = config('packstub-flow.tables.versions', 'flow_workflow_versions');

        Schema::create($workflows, function (Blueprint $table): void {
            $table->uuid('id')->primary();
            // The tenant (team, company...) the workflow belongs to; null = global, runs for every tenant.
            $table->string('tenant_type')->nullable();
            $table->string('tenant_id', 64)->nullable();
            $table->string('name');
            $table->text('description')->nullable();
            $table->json('definition')->nullable();
            $table->boolean('is_active')->default(false)->index();
            // Per-workflow run retention (null = the global prune_runs_after_days).
            $table->unsignedInteger('prune_after_days')->nullable();
            // Switch the workflow off after this many failed runs in a row (null = never).
            $table->unsignedSmallInteger('max_consecutive_failures')->nullable();
            $table->unsignedInteger('consecutive_failures')->default(0);
            // A workflow (with a "Called by another workflow" trigger) to run when a run of this one fails.
            $table->uuid('on_failure_workflow_id')->nullable();
            $table->timestamps();

            $table->index(['tenant_type', 'tenant_id'], 'flow_workflows_tenant_index');
        });

        // A snapshot of the definition every time it changes; runs pin the
        // version they started from.
        Schema::create($versions, function (Blueprint $table) use ($workflows): void {
            $table->uuid('id')->primary();
            $table->foreignUuid('workflow_id')->constrained($workflows)->cascadeOnDelete();
            $table->unsignedInteger('number');
            $table->json('definition')->nullable();
            $table->string('created_by')->nullable();
            $table->timestamp('created_at')->nullable();

            $table->unique(['workflow_id', 'number']);
        });

        Schema::create($triggers, function (Blueprint $table) use ($workflows): void {
            $table->uuid('id')->primary();
            $table->foreignUuid('workflow_id')->constrained($workflows)->cascadeOnDelete();
            $table->string('node_id', 64);
            $table->string('type')->index();
            $table->json('config')->nullable();
            $table->timestamps();
        });

        Schema::create($runs, function (Blueprint $table) use ($workflows): void {
            $table->uuid('id')->primary();
            $table->foreignUuid('workflow_id')->constrained($workflows)->cascadeOnDelete();
            $table->uuid('version_id')->nullable();
            $table->string('tenant_type')->nullable();
            $table->string('tenant_id', 64)->nullable();
            $table->string('trigger_type')->nullable();
            $table->string('subject_type')->nullable();
            $table->string('subject_id', 64)->nullable();
            $table->string('status', 16)->index();
            // A dry run from the "Test" button: side-effecting actions were simulated.
            $table->boolean('is_test')->default(false);
            $table->json('context')->nullable();
            $table->text('error')->nullable();
            $table->unsignedInteger('pending_resumes')->default(0);
            $table->timestamp('started_at')->nullable();
            $table->timestamp('finished_at')->nullable();
            $table->timestamps();

            $table->index(['workflow_id', 'started_at']);
            $table->index(['workflow_id', 'subject_type', 'subject_id'], 'flow_runs_subject_index');
            $table->index(['tenant_type', 'tenant_id'], 'flow_runs_tenant_index');
            $table->index('started_at');
        });

        // One row per executed node (the step log), instead of a JSON column
        // rewritten on every step.
        Schema::create($steps, function (Blueprint $table) use ($runs, $workflows): void {
            $table->id();
            $table->foreignUuid('run_id')->constrained($runs)->cascadeOnDelete();
            $table->foreignUuid('workflow_id')->constrained($workflows)->cascadeOnDelete();
            $table->unsignedInteger('sequence');
            $table->string('node_id', 64);
            $table->string('node_type', 16)->nullable();
            $table->string('label')->nullable();
            // ok | retry | failed | simulated | waiting
            $table->string('status', 16)->default('ok');
            $table->text('message')->nullable();
            $table->unsignedInteger('duration_ms')->nullable();
            $table->json('output')->nullable();
            $table->timestamp('created_at')->nullable();

            $table->index(['run_id', 'sequence']);
            $table->index(['workflow_id', 'node_id', 'status'], 'flow_steps_node_index');
        });

        // Runs paused on an approval or an external signal.
        Schema::create($waits, function (Blueprint $table) use ($runs, $workflows): void {
            $table->uuid('id')->primary();
            $table->foreignUuid('workflow_id')->constrained($workflows)->cascadeOnDelete();
            $table->foreignUuid('run_id')->constrained($runs)->cascadeOnDelete();
            $table->string('tenant_type')->nullable();
            $table->string('tenant_id', 64)->nullable();
            $table->string('node_id', 64);
            // approval | event
            $table->string('type', 16);
            // For "event" waits: the key Flow::signal() resolves.
            $table->string('key')->nullable()->index();
            $table->string('token', 64)->unique();
            // pending | resolved | expired | cancelled
            $table->string('status', 16)->default('pending')->index();
            $table->string('outcome', 32)->nullable();
            $table->json('outcomes')->nullable();
            $table->json('meta')->nullable();
            $table->json('payload')->nullable();
            $table->json('graph')->nullable();
            $table->json('result')->nullable();
            $table->string('resolved_by')->nullable();
            $table->timestamp('expires_at')->nullable()->index();
            $table->timestamp('resolved_at')->nullable();
            $table->timestamps();

            $table->index(['tenant_type', 'tenant_id'], 'flow_waits_tenant_index');
        });

        Schema::create($secrets, function (Blueprint $table): void {
            $table->uuid('id')->primary();
            // A tenant's secret shadows a global one with the same key.
            $table->string('tenant_type')->nullable();
            $table->string('tenant_id', 64)->nullable();
            $table->string('key', 80);
            $table->text('value');
            $table->string('description')->nullable();
            $table->timestamps();

            $table->index(['tenant_type', 'tenant_id', 'key'], 'flow_secrets_tenant_key_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists(config('packstub-flow.tables.waits', 'flow_workflow_waits'));
        Schema::dropIfExists(config('packstub-flow.tables.steps', 'flow_workflow_steps'));
        Schema::dropIfExists(config('packstub-flow.tables.secrets', 'flow_secrets'));
        Schema::dropIfExists(config('packstub-flow.tables.runs', 'flow_workflow_runs'));
        Schema::dropIfExists(config('packstub-flow.tables.versions', 'flow_workflow_versions'));
        Schema::dropIfExists(config('packstub-flow.tables.triggers', 'flow_workflow_triggers'));
        Schema::dropIfExists(config('packstub-flow.tables.workflows', 'flow_workflows'));
    }
};
