<?php

namespace Packstub\Flow\Nodes\Actions;

use Carbon\Carbon;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Illuminate\Support\Facades\Date;
use Packstub\Flow\Contracts\Delayable;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Placeholders;
use Throwable;

/**
 * Pauses the run; the nodes after it continue through the queue. Either for
 * a fixed duration or until a date taken from the payload, with an optional
 * offset ("1 day before {{ model.starts_at }}").
 */
class Wait extends Action implements Delayable
{
    use InterpolatesPlaceholders;

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.wait.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.wait.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-clock';
    }

    public function getFormSchema(): array
    {
        $units = [
            'seconds' => __('packstub-flow::flow.nodes.wait.units.seconds'),
            'minutes' => __('packstub-flow::flow.nodes.wait.units.minutes'),
            'hours' => __('packstub-flow::flow.nodes.wait.units.hours'),
            'days' => __('packstub-flow::flow.nodes.wait.units.days'),
        ];

        return [
            Select::make('mode')
                ->label(__('packstub-flow::flow.nodes.wait.mode'))
                ->options([
                    'duration' => __('packstub-flow::flow.nodes.wait.modes.duration'),
                    'until' => __('packstub-flow::flow.nodes.wait.modes.until'),
                ])
                ->default('duration')
                ->required()
                ->live(),
            TextInput::make('duration')
                ->label(__('packstub-flow::flow.nodes.wait.duration'))
                ->numeric()
                ->minValue(0)
                ->default(1)
                ->required(),
            Select::make('unit')
                ->label(__('packstub-flow::flow.nodes.wait.unit'))
                ->options($units)
                ->default('minutes')
                ->required(),
            TextInput::make('until')
                ->label(__('packstub-flow::flow.nodes.wait.until'))
                ->placeholder('{{ model.starts_at }}')
                ->helperText(__('packstub-flow::flow.nodes.wait.until_help'))
                ->visible(fn (Get $get): bool => $get('mode') === 'until')
                ->required(fn (Get $get): bool => $get('mode') === 'until'),
            Select::make('direction')
                ->label(__('packstub-flow::flow.nodes.wait.direction'))
                ->options([
                    'before' => __('packstub-flow::flow.nodes.wait.directions.before'),
                    'after' => __('packstub-flow::flow.nodes.wait.directions.after'),
                ])
                ->default('before')
                ->visible(fn (Get $get): bool => $get('mode') === 'until'),
        ];
    }

    public function getDelaySeconds(array $config, array $payload): ?int
    {
        $offset = $this->durationSeconds($config);

        if (($config['mode'] ?? 'duration') !== 'until') {
            return $offset > 0 ? $offset : null;
        }

        $target = $this->targetDate($config, $payload);

        if (! $target) {
            return null;
        }

        $target = ($config['direction'] ?? 'before') === 'before'
            ? $target->subSeconds($offset)
            : $target->addSeconds($offset);

        $seconds = (int) Date::now()->diffInSeconds($target, false);

        return $seconds > 0 ? $seconds : null;
    }

    /**
     * @param  array<string, mixed>  $config
     */
    protected function durationSeconds(array $config): int
    {
        $duration = (int) ($config['duration'] ?? 0);

        $multiplier = match ($config['unit'] ?? 'seconds') {
            'minutes' => 60,
            'hours' => 3600,
            'days' => 86400,
            default => 1,
        };

        return max(0, $duration * $multiplier);
    }

    /**
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     */
    protected function targetDate(array $config, array $payload): ?Carbon
    {
        $template = (string) ($config['until'] ?? '');

        $value = Placeholders::isSingle($template) ? Placeholders::raw($template, $payload) : $this->interpolate($template, $payload);

        if (blank($value)) {
            return null;
        }

        try {
            return $value instanceof \DateTimeInterface ? Carbon::instance($value) : Carbon::parse(Placeholders::stringify($value));
        } catch (Throwable) {
            return null;
        }
    }

    public function handle(array $config, array $payload): void
    {
        // The runner never calls this: the delay is served by the queue.
    }
}
