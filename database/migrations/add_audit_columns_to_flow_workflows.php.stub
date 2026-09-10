<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Adds created_by / updated_by to workflows created before 1.2. Fresh
 * installs get them from create_flow_tables; every column is guarded so
 * running this twice is safe.
 */
return new class extends Migration
{
    public function up(): void
    {
        $workflows = config('packstub-flow.tables.workflows', 'flow_workflows');

        Schema::table($workflows, function (Blueprint $table) use ($workflows): void {
            if (! Schema::hasColumn($workflows, 'created_by')) {
                $table->string('created_by')->nullable()->after('on_failure_workflow_id');
            }

            if (! Schema::hasColumn($workflows, 'updated_by')) {
                $table->string('updated_by')->nullable()->after('created_by');
            }
        });
    }

    public function down(): void
    {
        // Additive within the major; nothing to undo.
    }
};
