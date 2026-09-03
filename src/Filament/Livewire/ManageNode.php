<?php

namespace Packstub\Flow\Filament\Livewire;

use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Width;
use Illuminate\Contracts\View\View;
use Livewire\Attributes\On;
use Livewire\Component;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Node;

/**
 * The slide-over that edits one node's label and settings. Opened by the
 * canvas, it hands the values back through a browser event. Event names
 * stay free of dots: Alpine's x-on reads everything after a dot as a
 * modifier, so a dotted name is never matched by the canvas listener.
 */
class ManageNode extends Component implements HasActions, HasForms
{
    use InteractsWithActions;
    use InteractsWithForms;

    public ?string $nodeId = null;

    public ?string $nodeClass = null;

    /**
     * @param  array<string, mixed>  $config
     */
    #[On('packstub-flow.open-node')]
    public function open(string $id, string $identifier, array $config = []): void
    {
        if (! app(NodeRegistry::class)->has($identifier)) {
            return;
        }

        $this->nodeId = $id;
        $this->nodeClass = $identifier;

        $this->mountAction('manageNode', ['data' => $config]);
    }

    public function manageNodeAction(): Action
    {
        return Action::make('manageNode')
            ->label(__('packstub-flow::flow.node_settings.title'))
            ->modalHeading(fn (): string => $this->node()?->getName() ?? __('packstub-flow::flow.node_settings.title'))
            ->modalDescription(fn (): ?string => $this->node()?->getDescription())
            ->slideOver()
            ->modalWidth(Width::TwoExtraLarge)
            ->modalSubmitActionLabel(__('packstub-flow::flow.node_settings.apply'))
            ->schema(fn (Schema $schema): Schema => $this->nodeSchema($schema))
            ->fillForm(fn (array $arguments): array => $this->defaults() + ($arguments['data'] ?? []))
            ->action(function (array $data): void {
                $this->dispatch('packstub-flow-node-updated', id: $this->nodeId, config: $data);
            });
    }

    public function render(): View
    {
        return view('packstub-flow::livewire.manage-node');
    }

    /**
     * Values a node config starts from when it has never been saved with them.
     * fill() does not apply component defaults, so the error handling fields
     * would otherwise show up empty on nodes created before they existed.
     *
     * @return array<string, mixed>
     */
    protected function defaults(): array
    {
        if ($this->node()?->getType() !== NodeType::Action) {
            return [];
        }

        return [Runner::RETRIES => 0, Runner::RETRY_AFTER => 0, Runner::ON_ERROR => 'fail'];
    }

    protected function node(): ?Node
    {
        return $this->nodeClass ? app(NodeRegistry::class)->node($this->nodeClass) : null;
    }

    protected function nodeSchema(Schema $schema): Schema
    {
        $node = $this->node();
        $settings = $node?->getFormSchema() ?? [];
        $placeholders = $node?->getPlaceholders() ?? [];

        $components = [
            Section::make(__('packstub-flow::flow.node_settings.general'))
                ->schema([
                    TextInput::make('label')
                        ->label(__('packstub-flow::flow.node_settings.label'))
                        ->required()
                        ->maxLength(80),
                    Textarea::make('description')
                        ->label(__('packstub-flow::flow.node_settings.description'))
                        ->rows(2)
                        ->maxLength(255),
                ]),
        ];

        if ($settings !== []) {
            $components[] = Section::make(__('packstub-flow::flow.node_settings.settings'))
                ->description($placeholders !== [] ? __('packstub-flow::flow.node_settings.placeholders_hint') : null)
                ->schema($settings);
        }

        if ($node?->getType() === NodeType::Action) {
            $components[] = Section::make(__('packstub-flow::flow.node_settings.error_handling'))
                ->description(__('packstub-flow::flow.node_settings.error_handling_help'))
                ->collapsed()
                ->columns(3)
                ->schema([
                    TextInput::make(Runner::RETRIES)
                        ->label(__('packstub-flow::flow.node_settings.retries'))
                        ->numeric()
                        ->minValue(0)
                        ->maxValue(10)
                        ->default(0),
                    TextInput::make(Runner::RETRY_AFTER)
                        ->label(__('packstub-flow::flow.node_settings.retry_after'))
                        ->numeric()
                        ->minValue(0)
                        ->maxValue(300)
                        ->default(0),
                    Select::make(Runner::ON_ERROR)
                        ->label(__('packstub-flow::flow.node_settings.on_error'))
                        ->options([
                            'fail' => __('packstub-flow::flow.node_settings.on_error_fail'),
                            'continue' => __('packstub-flow::flow.node_settings.on_error_continue'),
                        ])
                        ->default('fail'),
                ]);
        }

        if ($placeholders !== []) {
            $components[] = Section::make(__('packstub-flow::flow.node_settings.placeholders'))
                ->collapsed()
                ->schema([
                    \Filament\Schemas\Components\View::make('packstub-flow::forms.placeholders')
                        ->viewData(['placeholders' => $placeholders]),
                ]);
        }

        return $schema->components($components);
    }
}
