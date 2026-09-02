<?php

namespace Packstub\Flow\Nodes\Actions;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Utilities\Get;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Flow;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;

/**
 * Sets the owner of the record that started the run: a fixed user, or the
 * next one of a list in turn (round robin).
 */
class AssignOwner extends Action
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.assign_owner.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.assign_owner.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-user-circle';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('attribute')
                ->label(__('packstub-flow::flow.nodes.assign_owner.attribute'))
                ->placeholder('user_id')
                ->default('user_id')
                ->required(),
            Select::make('mode')
                ->label(__('packstub-flow::flow.nodes.assign_owner.mode'))
                ->options([
                    'user' => __('packstub-flow::flow.nodes.assign_owner.modes.user'),
                    'round_robin' => __('packstub-flow::flow.nodes.assign_owner.modes.round_robin'),
                ])
                ->default('user')
                ->required()
                ->live(),
            TextInput::make('user')
                ->label(__('packstub-flow::flow.nodes.assign_owner.user'))
                ->placeholder('sales@example.com or {{ model.team.lead.email }}')
                ->visible(fn (Get $get): bool => ($get('mode') ?? 'user') === 'user')
                ->required(fn (Get $get): bool => ($get('mode') ?? 'user') === 'user'),
            Textarea::make('users')
                ->label(__('packstub-flow::flow.nodes.assign_owner.users'))
                ->placeholder("ann@example.com, ben@example.com\ncara@example.com")
                ->helperText(__('packstub-flow::flow.nodes.assign_owner.users_help'))
                ->rows(3)
                ->visible(fn (Get $get): bool => $get('mode') === 'round_robin')
                ->required(fn (Get $get): bool => $get('mode') === 'round_robin'),
            Toggle::make('silently')
                ->label(__('packstub-flow::flow.nodes.update_record.silently'))
                ->helperText(__('packstub-flow::flow.nodes.update_record.silently_help'))
                ->default(true),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $model = $payload['model'] ?? null;

        if (! $model instanceof Model) {
            throw new WorkflowException('Assign owner needs a record in the payload; use it after a record trigger.');
        }

        $attribute = trim((string) ($config['attribute'] ?? '')) ?: 'user_id';
        $owner = ($config['mode'] ?? 'user') === 'round_robin'
            ? $this->nextInTurn($this->emails($this->interpolate($config['users'] ?? '', $payload)))
            : $this->user($this->interpolate($config['user'] ?? '', $payload));

        if (! $owner) {
            throw new WorkflowException('Assign owner: no matching user was found.');
        }

        $model->forceFill([$attribute => $owner->getKey()]);

        ($config['silently'] ?? true) ? $model->saveQuietly() : $model->save();

        $this->output(['owner_id' => $owner->getKey(), 'owner_email' => $owner->getAttribute('email'), 'owner_name' => $owner->getAttribute('name')]);
    }

    protected function user(string $emailOrId): ?Model
    {
        $emailOrId = trim($emailOrId);

        if ($emailOrId === '') {
            return null;
        }

        $query = Flow::userModel()::query();

        return str_contains($emailOrId, '@') ? $query->where('email', $emailOrId)->first() : $query->find($emailOrId);
    }

    /**
     * @param  array<int, string>  $emails
     */
    protected function nextInTurn(array $emails): ?Model
    {
        if ($emails === []) {
            return null;
        }

        $users = Flow::userModel()::query()->whereIn('email', $emails)->get()->sortBy(fn (Model $user): int => (int) array_search($user->getAttribute('email'), $emails, true))->values();

        if ($users->isEmpty()) {
            return null;
        }

        $key = 'packstub-flow.round-robin.'.md5(implode(',', $emails));
        $turn = (int) Cache::increment($key);

        return $users[($turn - 1) % $users->count()];
    }

    /** @return array<int, string> */
    protected function emails(string $list): array
    {
        return array_values(array_unique(array_filter(array_map(fn (string $email): string => strtolower(trim($email)), preg_split('/[\s,;]+/', $list) ?: []))));
    }
}
