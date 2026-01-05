<?php

namespace Xlited\LaravelFlow\Filament\Livewire;

use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Livewire\Component;
use Filament\Forms\Form;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Actions\Action;
use Xlited\LaravelFlow\FlowManager;

class ManageNode extends Component implements HasForms, HasActions
{
    use InteractsWithForms;
    use InteractsWithActions;

    public ?string $nodeId = null;
    public ?string $nodeClass = null;
    public array $data = [];
    public bool $visible = false;

    protected $listeners = ['open-node-settings' => 'open'];

    public function open(string $id, string $identifier, array $config)
    {
        $this->nodeId = $id;
        $this->nodeClass = $identifier;
        $this->form->fill($config);
        $this->visible = true;
    }

    public function close()
    {
        $this->visible = false;
        $this->nodeId = null;
        $this->nodeClass = null;
        $this->reset('data');
    }

    public function save()
    {
        $data = $this->form->getState();

        $this->dispatch(
            'node-updated',
            id: $this->nodeId,
            config: $data
        );

        $this->close();
    }

    public function form(Schema $form): Schema
    {
        if (!$this->nodeClass) {
            return $form->schema([]);
        }

        // Resolve the node class to get its schema
        $manager = app('laravel-flow-manager');
        // We need a way to get the instance or class. Accessing static method if possible or creating instance.
        // The previous implementation used new $class().

        $schema = [];
        if (class_exists($this->nodeClass)) {
            $instance = new $this->nodeClass();
            if (method_exists($instance, 'getFormSchema')) {
                $schema = $instance->getFormSchema();
            }
        }

        return $form->schema($schema)->statePath('data');
    }

    public function render()
    {
        return view('laravel-flow::livewire.manage-node');
    }

    public function saveAction(): Action
    {
        return Action::make('save')
            ->label('Save Changes')
            ->action(fn() => $this->save());
    }

    public function cancelAction(): Action
    {
        return Action::make('cancel')
            ->label('Cancel')
            ->color('gray')
            ->action(fn() => $this->close());
    }
}
