# packstub/filament-flow

Free Filament v4/v5 plugin: visual workflow automation — triggers, conditions and actions drawn on a Svelte Flow canvas inside a Filament resource, executed by a runner, optionally through the queue (Wait steps always use it).

## Commands

```bash
composer test               # Pest suite
composer test:filter <name>
composer lint               # Pint
composer analyse            # PHPStan level 6 (phpstan.neon)
bun run build               # rebuilds resources/dist (flow.js, flow.css) — commit the built files
bun run check               # svelte-check
bun run test                # vitest, tests/js
bun run test:e2e            # Playwright, tests/e2e, boots `vendor/bin/testbench serve` (testbench.yaml + workbench/) itself; run `vendor/bin/testbench filament:assets` once first
composer require packstub/agents --dev   # optional, PHP 8.4: the workbench then offers the real Ask AI node and the e2e suite covers it (skipped otherwise); CI's canvas job does this — never commit the composer.json change
DB_CONNECTION=mysql DB_DATABASE=... composer test   # the suite on a MySQL server (schema built once, a transaction per test)
```

## Layout

- `src/` package code: `Engine/` (Dispatcher, Graph, Runner), `Nodes/` (Trigger / Action / Condition base classes and the built-ins), `Filament/` (WorkflowResource, RunsRelationManager, FlowBuilder field, ManageNode slide-over), models, jobs, listeners, commands, `Http/Controllers/WebhookController`.
- `resources/js/` the Svelte 5 canvas (`@xyflow/svelte`, Tailwind v4), built with Vite into `resources/dist/` and registered with `FilamentAsset`.
- `resources/lang/en/flow.php` every UI string, node name and description.
- `config/packstub-flow.php`, `database/migrations/create_flow_tables.php.stub`.
- `docs/` customer docs and `docs/images/` screenshots.
- `art/` brand/listing art sources.

## Conventions

- Every change needs a test and a `CHANGELOG.md` line.
