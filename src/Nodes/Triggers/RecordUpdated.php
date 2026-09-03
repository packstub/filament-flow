<?php

namespace Packstub\Flow\Nodes\Triggers;

use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Packstub\Flow\Support\Placeholders;

/**
 * Fires when a record is saved with changes; optionally only when one of a
 * list of attributes changed ("when status changes").
 */
class RecordUpdated extends RecordTrigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.record_updated.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.record_updated.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-pencil-square';
    }

    public function getFormSchema(): array
    {
        return [
            ...parent::getFormSchema(),
            TagsInput::make('watch')
                ->label(__('packstub-flow::flow.nodes.record_updated.watch'))
                ->placeholder('status')
                ->helperText(__('packstub-flow::flow.nodes.record_updated.watch_help'))
                ->live(),
            TextInput::make('from')
                ->label(__('packstub-flow::flow.nodes.record_updated.from'))
                ->placeholder('pending')
                ->helperText(__('packstub-flow::flow.nodes.record_updated.from_help'))
                ->visible(fn (Get $get): bool => filled($get('watch'))),
            TextInput::make('to')
                ->label(__('packstub-flow::flow.nodes.record_updated.to'))
                ->placeholder('paid')
                ->visible(fn (Get $get): bool => filled($get('watch'))),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        if (! parent::matches($config, $payload)) {
            return false;
        }

        $watch = array_values(array_filter(array_map('trim', (array) ($config['watch'] ?? []))));

        if ($watch === []) {
            return true;
        }

        $changes = (array) ($payload['changes'] ?? []);
        $original = (array) ($payload['original'] ?? []);
        $from = trim((string) ($config['from'] ?? ''));
        $to = trim((string) ($config['to'] ?? ''));

        foreach ($watch as $attribute) {
            if (! array_key_exists($attribute, $changes)) {
                continue;
            }

            if ($from !== '' && ! $this->same($original[$attribute] ?? null, $from)) {
                continue;
            }

            if ($to !== '' && ! $this->same($changes[$attribute], $to)) {
                continue;
            }

            return true;
        }

        return false;
    }

    protected function same(mixed $actual, string $expected): bool
    {
        return strcasecmp(Placeholders::stringify($actual), $expected) === 0;
    }

    public function getPlaceholders(): array
    {
        return [
            ...parent::getPlaceholders(),
            '{{ original.status }}' => __('packstub-flow::flow.placeholders.original'),
            '{{ changes.status }}' => __('packstub-flow::flow.placeholders.changes'),
        ];
    }
}
