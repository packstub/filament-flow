<?php

namespace Packstub\Flow\Filament\Livewire;

use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Width;
use Livewire\Component;
use Filament\Forms\Form;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Actions\Action;
use Packstub\Flow\FlowManager;

class ManageNode extends Component implements HasForms, HasActions
{
    use InteractsWithForms;
    use InteractsWithActions;

    public ?string $nodeId = null;
    public ?string $nodeClass = null;

    protected $listeners = ['open-manage-node-modal' => 'open'];

    public function open(string $id, string $identifier, array $config)
    {
        $this->nodeId = $id;
        $this->nodeClass = $identifier;
        $this->mountAction('manageNode', ['nodeId' => $id, 'nodeClass' => $identifier, 'data' => $config]);
    }

    public function close()
    {
        $this->nodeId = null;
        $this->nodeClass = null;
    }

    public function save(array $data)
    {
        $this->dispatch(
            'node-updated',
            id: $this->nodeId,
            config: $data
        );
    }

    public function form(Schema $form): Schema
    {
        if (!$this->nodeClass) {
            return $form->schema([]);
        }

        // Resolve the node class to get its schema
        // $manager = app('packstub-flow.registry');
        // We need a way to get the instance or class. Accessing static method if possible or creating instance.

        $schema = [];
        if (class_exists($this->nodeClass)) {
            $instance = new $this->nodeClass();
            if (method_exists($instance, 'getFormSchema')) {
                $schema = $instance->getFormSchema();
            }
        }

        return $form
            ->schema([
                Section::make('General Settings')
                    ->schema([
                        \Filament\Forms\Components\TextInput::make('label')
                            ->label('Node Label')
                            ->required(),
                        \Filament\Forms\Components\Textarea::make('description')
                            ->label('Description')
                            ->rows(2),
                    ]),
                Section::make('Configuration')
                    ->schema($schema),
            ]);
    }

    public function render()
    {
        return view('packstub-flow::livewire.manage-node');
    }

    public function manageNodeAction(): Action
    {
        return Action::make('manageNode')
            ->slideOver()
            ->modalWidth(Width::TwoExtraLarge)
            ->form(fn(Schema $form) => $this->form($form))
            ->fillForm(fn(array $arguments) => $arguments['data'] ?? [])
            ->action(fn($data) => $this->save($data));
    }
}
