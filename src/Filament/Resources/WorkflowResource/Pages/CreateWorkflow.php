<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Filament\Actions\Action;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;
use Filament\Schemas\Components\Component;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Width;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Filament\Forms\Components\ChoiceCards;
use Packstub\Flow\Filament\Forms\Components\TemplatePicker;
use Packstub\Flow\Filament\Resources\WorkflowResource;
use Packstub\Flow\Models\Workflow;
use Packstub\Flow\Nodes\Actions\AskAi;
use Packstub\Flow\Support\Templates;
use Packstub\Flow\Support\Tenancy;
use Packstub\Flow\Support\WorkflowGenerator;
use Packstub\Flow\Support\WorkflowTransfer;

/**
 * Every way to start a workflow on one card: the name, description and
 * run settings, then how it starts (a blank canvas, a template, a
 * description for a model, an export) with the fields of that way right
 * under it. The workflow is created inactive and opens in the editor.
 * `?start=template&template=<key>` opens the page with a choice made.
 */
class CreateWorkflow extends CreateRecord
{
    public const BLANK = 'blank';

    public const TEMPLATE = 'template';

    public const DESCRIBE = 'describe';

    public const IMPORT = 'import';

    /** The fields that pick and feed the start; the rest of the form is the workflow's. */
    protected const START_FIELDS = ['start', 'template', 'prompt', 'ai_model', 'file', 'json'];

    protected static string $resource = WorkflowResource::class;

    protected static bool $canCreateAnother = false;

    protected Width|string|null $maxContentWidth = Width::FiveExtraLarge;

    /** How the workflow being created started, for the notification and the redirect. */
    protected string $startedFrom = self::BLANK;

    public function getTitle(): string|Htmlable
    {
        return __('packstub-flow::flow.actions.new');
    }

    public function getSubheading(): ?string
    {
        return __('packstub-flow::flow.create.subheading');
    }

    public function form(Schema $schema): Schema
    {
        return $schema->columns(1)->components([
            Section::make()
                ->schema([
                    ...$this->detailsSchema(),
                    ChoiceCards::make('start')
                        ->label(__('packstub-flow::flow.create.start'))
                        ->options(fn (): array => array_map(fn (array $start): string => $start['label'], static::starts()))
                        ->descriptions(fn (): array => array_map(fn (array $start): string => $start['description'], static::starts()))
                        ->icons(fn (): array => array_map(fn (array $start): string => $start['icon'], static::starts()))
                        ->badges(fn (): array => array_map(fn (array $start): ?string => $start['badge'] ?? null, static::starts()))
                        ->accents([self::DESCRIBE => 'teal'])
                        ->default(self::BLANK)
                        ->required()
                        // It always has a value: no asterisk.
                        ->markAsRequired(false)
                        ->live()
                        // A template is always picked, so its preview shows from the start.
                        ->afterStateUpdated(function (Get $get, Set $set, ?string $state): void {
                            if ($state === self::TEMPLATE && blank($get('template'))) {
                                $set('template', array_key_first(Templates::all()));
                            }
                        }),
                    ...$this->startSchema(),
                ]),
        ]);
    }

    /**
     * The fields of each way to start, shown under the choice while it is
     * picked.
     *
     * @return array<int, Component|Field>
     */
    protected function startSchema(): array
    {
        $picked = fn (string $start): \Closure => fn (Get $get): bool => $get('start') === $start;

        return [
            TemplatePicker::make('template')
                ->hiddenLabel()
                ->templates(fn (): array => Templates::all())
                ->visible($picked(self::TEMPLATE))
                ->required()
                ->live(),
            Group::make([
                Textarea::make('prompt')
                    ->label(__('packstub-flow::flow.describe.field'))
                    ->placeholder(__('packstub-flow::flow.describe.placeholder'))
                    ->helperText(__('packstub-flow::flow.describe.help'))
                    ->rows(4)
                    ->required()
                    ->maxLength(2000),
                Select::make('ai_model')
                    ->label(__('packstub-flow::flow.nodes.ask_ai.model'))
                    ->options(fn (): array => [AskAi::DEFAULT_MODEL => __('packstub-flow::flow.nodes.ask_ai.default_model')] + AskAi::modelOptions())
                    ->default(AskAi::DEFAULT_MODEL)
                    ->selectablePlaceholder(false),
            ])->visible($picked(self::DESCRIBE)),
            Group::make([
                FileUpload::make('file')
                    ->label(__('packstub-flow::flow.transfer.file'))
                    ->acceptedFileTypes(['application/json', 'text/plain', '.json'])
                    ->storeFiles(false)
                    ->maxSize(1024),
                Textarea::make('json')
                    ->label(__('packstub-flow::flow.transfer.json'))
                    ->placeholder('{ "format": "'.WorkflowTransfer::FORMAT.'", … }')
                    ->rows(6)
                    ->requiredWithout('file'),
            ])->visible($picked(self::IMPORT)),
        ];
    }

    /**
     * WorkflowResource::detailsSchema() without Active: the name is only
     * required for a blank canvas; the other ways bring one, and the
     * placeholder says which.
     *
     * @return array<int, Component|Field>
     */
    protected function detailsSchema(): array
    {
        $components = WorkflowResource::detailsSchema(withActive: false);

        foreach ($components as $component) {
            if ($component instanceof TextInput && $component->getName() === 'name') {
                $component
                    ->autofocus(false)
                    ->required(fn (Get $get): bool => $get('start') === self::BLANK)
                    ->placeholder(fn (Get $get): ?string => match ($get('start')) {
                        self::TEMPLATE => Templates::find((string) $get('template'))['name'] ?? __('packstub-flow::flow.create.name_from_template'),
                        self::DESCRIBE => __('packstub-flow::flow.create.name_from_model'),
                        self::IMPORT => __('packstub-flow::flow.create.name_from_file'),
                        default => null,
                    });
            }
        }

        return $components;
    }

    /**
     * The ways to start offered here: a template when one is usable, a
     * description when packstub/agents is installed.
     *
     * @return array<string, array{label: string, description: string, icon: string, badge?: string}>
     */
    public static function starts(): array
    {
        return array_filter([
            self::BLANK => ['label' => __('packstub-flow::flow.create.blank'), 'description' => __('packstub-flow::flow.create.blank_description'), 'icon' => 'heroicon-o-squares-plus'],
            self::TEMPLATE => ($count = count(Templates::all())) === 0 ? null : ['label' => __('packstub-flow::flow.create.template'), 'description' => __('packstub-flow::flow.create.template_description'), 'icon' => 'heroicon-o-rectangle-stack', 'badge' => (string) $count],
            self::DESCRIBE => WorkflowGenerator::isAvailable() ? ['label' => __('packstub-flow::flow.create.describe'), 'description' => __('packstub-flow::flow.create.describe_description'), 'icon' => 'heroicon-o-sparkles'] : null,
            self::IMPORT => ['label' => __('packstub-flow::flow.create.import'), 'description' => __('packstub-flow::flow.create.import_description'), 'icon' => 'heroicon-o-arrow-up-tray'],
        ]);
    }

    /** The page's URL with a way to start (and a template) picked. */
    public static function startUrl(string $start, ?string $template = null): string
    {
        return WorkflowResource::getUrl('create', array_filter(['start' => $start, 'template' => $template]));
    }

    /** `?start=` and `?template=` pick the way to start when the page opens. */
    protected function afterFill(): void
    {
        $start = request()->query('start');

        if (is_string($start) && array_key_exists($start, static::starts())) {
            $this->data['start'] = $start;
        }

        if (($this->data['start'] ?? null) === self::TEMPLATE) {
            $this->data['template'] = array_key_first(Templates::all());
        }

        $template = request()->query('template');

        if (is_string($template) && Templates::find($template) !== null) {
            $this->data['start'] = self::TEMPLATE;
            $this->data['template'] = $template;
        }
    }

    protected function getCreateFormAction(): Action
    {
        return parent::getCreateFormAction()
            ->label(fn (): string => match ($this->data['start'] ?? self::BLANK) {
                self::TEMPLATE => __('packstub-flow::flow.templates.submit'),
                self::DESCRIBE => __('packstub-flow::flow.describe.submit'),
                self::IMPORT => __('packstub-flow::flow.transfer.submit'),
                default => __('packstub-flow::flow.create.submit'),
            });
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    protected function mutateFormDataBeforeCreate(array $data): array
    {
        if ($tenant = Tenancy::panelTenant()) {
            $data['tenant_type'] = $tenant->getMorphClass();
            $data['tenant_id'] = (string) $tenant->getKey();
        }

        return $data;
    }

    protected function beforeCreate(): void
    {
        $limit = ListWorkflows::workflowLimit();

        if ($limit !== null && ListWorkflows::workflowCount() >= $limit) {
            Notification::make()->title(__('packstub-flow::flow.actions.limit_reached', ['limit' => $limit]))->danger()->send();

            $this->halt();
        }
    }

    /**
     * A blank canvas is an ordinary create; the other ways build the
     * workflow from their document, with the name, description and
     * settings filled in here taking precedence over the document's.
     *
     * @param  array<string, mixed>  $data
     */
    protected function handleRecordCreation(array $data): Model
    {
        $this->startedFrom = (string) ($data['start'] ?? self::BLANK);
        $attributes = Arr::except($data, self::START_FIELDS);

        if ($this->startedFrom === self::BLANK) {
            return parent::handleRecordCreation($attributes);
        }

        $attributes = array_filter($attributes, fn (mixed $value): bool => $value !== null && $value !== '');

        try {
            return match ($this->startedFrom) {
                self::TEMPLATE => Templates::create((string) ($data['template'] ?? ''), $attributes),
                self::DESCRIBE => WorkflowGenerator::isAvailable()
                    ? WorkflowGenerator::generate((string) ($data['prompt'] ?? ''), $data['ai_model'] ?? null, $attributes)
                    : throw new WorkflowException(__('packstub-flow::flow.create.unavailable')),
                self::IMPORT => WorkflowTransfer::import($this->importedJson($data), $attributes),
                default => throw new WorkflowException(__('packstub-flow::flow.create.unavailable')),
            };
        } catch (WorkflowException|\InvalidArgumentException $e) {
            Notification::make()->title($e->getMessage())->danger()->send();

            $this->halt();

            throw $e;
        }
    }

    /**
     * The uploaded file's contents, or the pasted JSON.
     *
     * @param  array<string, mixed>  $data
     */
    protected function importedJson(array $data): string
    {
        $file = $data['file'] ?? null;
        $file = is_array($file) ? Arr::first($file) : $file;
        $json = $file instanceof TemporaryUploadedFile ? (string) $file->get() : (string) ($data['json'] ?? '');

        if (trim($json) === '') {
            throw new WorkflowException(__('packstub-flow::flow.transfer.nothing'));
        }

        return $json;
    }

    protected function getCreatedNotificationTitle(): ?string
    {
        /** @var Workflow $workflow */
        $workflow = $this->getRecord();

        return match ($this->startedFrom) {
            self::TEMPLATE => __('packstub-flow::flow.templates.created', ['name' => $workflow->name]),
            self::DESCRIBE => __('packstub-flow::flow.describe.created', ['name' => $workflow->name]),
            self::IMPORT => __('packstub-flow::flow.transfer.imported', ['name' => $workflow->name]),
            default => parent::getCreatedNotificationTitle(),
        };
    }

    /**
     * A blank canvas opens as it is; a workflow from a template, a
     * description or an export opens with the nodes still to fill in
     * marked.
     */
    protected function getRedirectUrl(): string
    {
        /** @var Workflow $workflow */
        $workflow = $this->getRecord();

        return $this->startedFrom === self::BLANK
            ? static::getResource()::getUrl('edit', ['record' => $workflow])
            : ListWorkflows::reviewUrl($workflow);
    }
}
