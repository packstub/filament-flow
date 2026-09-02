<?php

namespace Packstub\Flow\Filament\Livewire;

use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
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
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Node;

/**
 * The slide-over that edits one node's label and settings. Opened by the
 * canvas, it hands the values back through a browser event.
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
            ->fillForm(fn (array $arguments): array => $arguments['data'] ?? [])
            ->action(function (array $data): void {
                $this->dispatch('packstub-flow.node-updated', id: $this->nodeId, config: $data);
            });
    }

    public function render(): View
    {
        return view('packstub-flow::livewire.manage-node');
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
