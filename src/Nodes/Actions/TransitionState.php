<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Model;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Spatie\ModelStates\State;

/**
 * Moves the record's spatie/laravel-model-states state to another one, going
 * through the transition class configured on the model. Available when the
 * package is installed.
 */
class TransitionState extends Action
{
    use InterpolatesPlaceholders;

    public static function isAvailable(): bool
    {
        return class_exists(State::class);
    }

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.transition_state.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.transition_state.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-arrows-right-left';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('field')
                ->label(__('packstub-flow::flow.nodes.transition_state.field'))
                ->placeholder('status')
                ->default('status')
                ->required(),
            TextInput::make('to')
                ->label(__('packstub-flow::flow.nodes.transition_state.to'))
                ->placeholder('paid')
                ->helperText(__('packstub-flow::flow.nodes.transition_state.to_help'))
                ->required(),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $model = $payload['model'] ?? null;

        if (! $model instanceof Model) {
            throw new WorkflowException('Transition state needs a record in the payload; use it after a record trigger.');
        }

        $field = trim((string) ($config['field'] ?? 'status')) ?: 'status';
        $to = $this->interpolate($config['to'] ?? '', $payload);
        $state = $model->{$field};

        if (! $state instanceof State) {
            throw new WorkflowException("[{$field}] on ".$model::class.' is not a model state.');
        }

        $from = $state->getValue();

        if (! $state->canTransitionTo($to)) {
            throw new WorkflowException("Cannot transition [{$field}] from [{$from}] to [{$to}] on ".$model::class.' #'.$model->getKey().'.');
        }

        $state->transitionTo($to);

        $this->output(['from' => $from, 'to' => $model->refresh()->{$field}?->getValue()]);
    }
}
