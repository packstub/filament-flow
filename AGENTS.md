# packstub/filament-flow

Free Filament v4/v5 plugin: visual workflow automation — triggers, conditions and actions drawn on a Svelte Flow canvas inside a Filament resource, executed by a runner, optionally through the queue (Wait steps always use it). Published on Packagist; listed on packstub.dev and filamentphp.com under the same name.

## Commands

```bash
composer test               # Pest suite
composer test:filter <name>
composer lint               # Pint
bun run build               # rebuilds resources/dist (flow.js, flow.css) — commit the built files
```

## Layout

- `src/` package code: `Engine/` (Dispatcher, Graph, Runner), `Nodes/` (Trigger / Action / Condition base classes and the built-ins), `Filament/` (WorkflowResource, RunsRelationManager, FlowBuilder field, ManageNode slide-over), models, jobs, listeners, commands, `Http/Controllers/WebhookController`.
- `resources/js/` the Svelte 5 canvas (`@xyflow/svelte`, Tailwind v4), built with Vite into `resources/dist/` and registered with `FilamentAsset`.
- `resources/lang/en/flow.php` every UI string, node name and description.
- `config/packstub-flow.php`, `database/migrations/create_flow_tables.php.stub`.
- `docs/` customer docs (synced to the store on release); `docs/images/` screenshots produced from `../../demos/filament-flow-demo/scripts/screenshots.mjs`.
- `art/` brand/listing art sources.
- Demo app: `../../demos/filament-flow-demo`.

## Conventions

- PHP 8.3+, Pint, Pest; every change needs a test. Keep `CHANGELOG.md` current.
- Listing assets/copy: use the `filament-plugin-listing` skill from the workspace root.
