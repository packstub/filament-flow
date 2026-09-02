<?php

namespace Packstub\Flow\Nodes\Triggers;

use Cron\CronExpression;
use Filament\Forms\Components\TextInput;
use Illuminate\Support\Facades\Date;
use Packstub\Flow\Nodes\Trigger;

/**
 * Fires when the packstub-flow:cron command runs and the expression is due.
 */
class Schedule extends Trigger
{
    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.schedule.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.schedule.description');
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-calendar-days';
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('expression')
                ->label(__('packstub-flow::flow.nodes.schedule.expression'))
                ->placeholder('0 9 * * 1-5')
                ->helperText(__('packstub-flow::flow.nodes.schedule.expression_help'))
                ->required()
                ->rule(fn () => function (string $attribute, mixed $value, \Closure $fail): void {
                    if (! is_string($value) || ! CronExpression::isValidExpression($value)) {
                        $fail(__('packstub-flow::flow.nodes.schedule.invalid'));
                    }
                }),
        ];
    }

    public function matches(array $config, array $payload): bool
    {
        $expression = $config['expression'] ?? null;

        if (! is_string($expression) || ! CronExpression::isValidExpression($expression)) {
            return false;
        }

        return (new CronExpression($expression))->isDue($payload['now'] ?? Date::now(), config('app.timezone'));
    }
}
