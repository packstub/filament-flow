<?php

namespace Packstub\Flow\Nodes\Actions;

use Closure;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Illuminate\Support\Str;
use Packstub\Flow\Contracts\PicksOutput;
use Packstub\Flow\Exceptions\WorkflowException;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;
use Packstub\Flow\Support\Jev;
use Packstub\Flow\Support\Placeholders;

/**
 * A branch decided by Jev, TypeSafe's System One model: what to look at, one
 * typed question — yes / no, one of your options, a score on your levels —
 * and the run continues along the answer. The node's outputs come from its
 * settings, with a "Not sure" branch for an answer under the confidence you
 * ask for, so a person (or Ask AI) takes the close calls. Offered once a
 * TypeSafe key is configured.
 */
class Decide extends Action implements PicksOutput
{
    use InterpolatesPlaceholders;

    public const YES_NO = 'noul';

    public const CHOICE = 'choice';

    public const SCORE = 'score';

    public const UNSURE = 'unsure';

    /** Option names that are handles of their own on an action. */
    public const RESERVED_OPTIONS = [self::UNSURE, 'error', 'output'];

    /** TypeSafe takes 255 options; a node stays readable with far fewer. */
    public const MAX_OPTIONS = 30;

    public const MAX_LEVELS = 10;

    /** The id the question travels under; TypeSafe does not show it to the model. */
    protected const QUESTION = 'decision';

    public static function isAvailable(): bool
    {
        return Jev::enabled();
    }

    public function getName(): string
    {
        return __('packstub-flow::flow.nodes.decide.name');
    }

    public function getDescription(): string
    {
        return __('packstub-flow::flow.nodes.decide.description');
    }

    public function getCategory(): string
    {
        return 'ai';
    }

    public function getIcon(): ?string
    {
        return 'heroicon-o-scale';
    }

    /** A node dropped on the canvas starts as a yes / no question. */
    public function getOutputs(): array
    {
        return $this->getOutputsFor([]);
    }

    public function getOutputsFor(array $config): array
    {
        $outputs = match (static::kind($config)) {
            self::CHOICE => collect(static::options($config))->mapWithKeys(fn (?string $description, string $option): array => [$option => Str::limit($option, 28)])->all(),
            self::SCORE => collect(static::levels($config))->mapWithKeys(fn (string $level, int $index): array => ["level_{$index}" => Str::limit($level, 28)])->all(),
            default => [
                'yes' => __('packstub-flow::flow.nodes.decide.yes'),
                'no' => __('packstub-flow::flow.nodes.decide.no'),
            ],
        };

        if ($outputs === []) {
            // A choice or a score still without options: the handles a new node has.
            return $this->getOutputsFor(['type' => self::YES_NO] + array_diff_key($config, ['type' => true]));
        }

        if (static::hasUnsure($config)) {
            $outputs[self::UNSURE] = __('packstub-flow::flow.nodes.decide.unsure');
        }

        return $outputs;
    }

    public function outputOnFailure(array $config): ?string
    {
        return static::hasUnsure($config) ? self::UNSURE : null;
    }

    public function getFormSchema(): array
    {
        $is = fn (string $kind): Closure => fn (Get $get): bool => ($get('type') ?? self::YES_NO) === $kind;
        $isNot = fn (string $kind): Closure => fn (Get $get): bool => ($get('type') ?? self::YES_NO) !== $kind;

        return [
            Textarea::make('state')
                ->label(__('packstub-flow::flow.nodes.decide.state'))
                ->placeholder(__('packstub-flow::flow.nodes.decide.state_placeholder'))
                ->helperText(__('packstub-flow::flow.nodes.decide.state_help'))
                ->rows(5)
                ->required(),
            Select::make('type')
                ->label(__('packstub-flow::flow.nodes.decide.type'))
                ->options([
                    self::YES_NO => __('packstub-flow::flow.nodes.decide.types.noul'),
                    self::CHOICE => __('packstub-flow::flow.nodes.decide.types.choice'),
                    self::SCORE => __('packstub-flow::flow.nodes.decide.types.score'),
                ])
                ->default(self::YES_NO)
                ->required()
                ->live(),
            Textarea::make('question')
                ->label(__('packstub-flow::flow.nodes.decide.question'))
                ->placeholder(__('packstub-flow::flow.nodes.decide.question_placeholder'))
                ->helperText(__('packstub-flow::flow.nodes.decide.question_help'))
                ->rows(2)
                ->required(),
            TextInput::make('yes_means')
                ->label(__('packstub-flow::flow.nodes.decide.yes_means'))
                ->placeholder(__('packstub-flow::flow.nodes.decide.yes_means_placeholder'))
                ->visible($is(self::YES_NO)),
            TextInput::make('no_means')
                ->label(__('packstub-flow::flow.nodes.decide.no_means'))
                ->placeholder(__('packstub-flow::flow.nodes.decide.no_means_placeholder'))
                ->visible($is(self::YES_NO)),
            TextInput::make('yes_from')
                ->label(__('packstub-flow::flow.nodes.decide.yes_from'))
                ->helperText(__('packstub-flow::flow.nodes.decide.yes_from_help'))
                ->numeric()
                ->minValue(0)
                ->maxValue(1)
                ->step(0.01)
                ->default(0.5)
                ->visible($is(self::YES_NO)),
            TextInput::make('no_up_to')
                ->label(__('packstub-flow::flow.nodes.decide.no_up_to'))
                ->helperText(__('packstub-flow::flow.nodes.decide.no_up_to_help'))
                ->numeric()
                ->minValue(0)
                ->maxValue(1)
                ->step(0.01)
                ->lte('yes_from')
                ->visible($is(self::YES_NO)),
            Repeater::make('options')
                ->label(__('packstub-flow::flow.nodes.decide.options'))
                ->schema([
                    TextInput::make('value')
                        ->label(__('packstub-flow::flow.nodes.decide.option'))
                        ->placeholder('billing')
                        ->regex('/^[A-Za-z0-9_-]+$/')
                        ->notIn(self::RESERVED_OPTIONS)
                        ->distinct()
                        ->maxLength(40)
                        ->required(),
                    TextInput::make('description')
                        ->label(__('packstub-flow::flow.nodes.decide.option_description'))
                        ->placeholder(__('packstub-flow::flow.nodes.decide.option_description_placeholder')),
                ])
                ->columns(2)
                ->defaultItems(2)
                ->minItems(2)
                ->maxItems(self::MAX_OPTIONS)
                ->addActionLabel(__('packstub-flow::flow.nodes.decide.add_option'))
                ->helperText(__('packstub-flow::flow.nodes.decide.options_help'))
                ->visible($is(self::CHOICE)),
            Repeater::make('levels')
                ->label(__('packstub-flow::flow.nodes.decide.levels'))
                ->simple(
                    TextInput::make('description')
                        ->placeholder(__('packstub-flow::flow.nodes.decide.level_placeholder'))
                        ->maxLength(200)
                        ->required(),
                )
                ->defaultItems(3)
                ->minItems(2)
                ->maxItems(self::MAX_LEVELS)
                ->addActionLabel(__('packstub-flow::flow.nodes.decide.add_level'))
                ->helperText(__('packstub-flow::flow.nodes.decide.levels_help'))
                ->visible($is(self::SCORE)),
            TextInput::make('min_confidence')
                ->label(__('packstub-flow::flow.nodes.decide.min_confidence'))
                ->helperText(__('packstub-flow::flow.nodes.decide.min_confidence_help'))
                ->placeholder('0.6')
                ->numeric()
                ->minValue(0)
                ->maxValue(1)
                ->step(0.01)
                ->visible($isNot(self::YES_NO)),
            TextInput::make('model')
                ->label(__('packstub-flow::flow.nodes.decide.model'))
                ->placeholder(Jev::model())
                ->helperText(__('packstub-flow::flow.nodes.decide.model_help')),
            TextInput::make('api_key')
                ->label(__('packstub-flow::flow.nodes.decide.api_key'))
                ->placeholder('{{ secrets.typesafe }}')
                ->helperText(__('packstub-flow::flow.nodes.decide.api_key_help')),
            TextInput::make('timeout')
                ->label(__('packstub-flow::flow.nodes.decide.timeout'))
                ->helperText(__('packstub-flow::flow.nodes.http.timeout_help', ['default' => Jev::timeout()]))
                ->numeric()
                ->minValue(1)
                ->maxValue(120),
        ];
    }

    public function getPlaceholders(): array
    {
        return [
            ...Placeholders::documentation(),
            '{{ last.decision }}' => __('packstub-flow::flow.placeholders.decide_decision'),
            '{{ last.branch }}' => __('packstub-flow::flow.placeholders.decide_branch'),
            '{{ last.confidence }}' => __('packstub-flow::flow.placeholders.decide_confidence'),
            '{{ last.probability }}' => __('packstub-flow::flow.placeholders.decide_probability'),
            '{{ last.score }}' => __('packstub-flow::flow.placeholders.decide_score'),
            '{{ last.probabilities.billing }}' => __('packstub-flow::flow.placeholders.decide_probabilities'),
        ];
    }

    public function handle(array $config, array $payload): void
    {
        $state = static::state($this->interpolate($config['state'] ?? '', $payload));

        if ($state === '' || $state === []) {
            throw new WorkflowException('Decide has nothing to look at: the state is empty.');
        }

        $response = Jev::ask(
            $state,
            [self::QUESTION => $this->question($config, $payload)],
            $this->interpolate($config['model'] ?? '', $payload),
            $this->interpolate($config['api_key'] ?? '', $payload),
            ($config['timeout'] ?? null) ? (int) $config['timeout'] : null,
        );

        $answer = $response['answers'][self::QUESTION] ?? null;

        if (! is_array($answer)) {
            throw new WorkflowException('Jev did not answer the question.');
        }

        $decision = static::decision($config, $answer);

        $this->output([
            'ok' => true,
            ...$decision,
            'model' => $response['model'],
            'usage' => $response['usage'],
        ]);

        $this->continueAlong($decision['branch']);
    }

    /**
     * What a test run shows instead of asking: the state and the question as
     * they would be sent (never the key), and the branch the test follows.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public function preview(array $config, array $payload): array
    {
        try {
            $question = $this->question($config, $payload);
        } catch (WorkflowException $exception) {
            $question = ['error' => $exception->getMessage()];
        }

        return [
            'would_ask' => trim($this->interpolate($config['model'] ?? '', $payload)) ?: Jev::model(),
            'state' => static::state($this->interpolate($config['state'] ?? '', $payload)),
            'question' => $question,
            'continues_along' => (string) array_key_first($this->getOutputsFor($config)),
        ];
    }

    /**
     * The typed question as TypeSafe takes it: a noul with what yes and no
     * mean, a choice with its options, a score with its levels in order.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public function question(array $config, array $payload = []): array
    {
        $instructions = trim($this->interpolate($config['question'] ?? '', $payload));

        if ($instructions === '') {
            throw new WorkflowException('Decide has no question.');
        }

        $kind = static::kind($config);

        $criteria = match ($kind) {
            self::CHOICE => static::options($config),
            self::SCORE => static::levels($config),
            default => array_filter([
                'true' => trim($this->interpolate($config['yes_means'] ?? '', $payload)),
                'false' => trim($this->interpolate($config['no_means'] ?? '', $payload)),
            ], fn (string $text): bool => $text !== ''),
        };

        if ($kind !== self::YES_NO && count($criteria) < 2) {
            throw new WorkflowException($kind === self::CHOICE ? 'Decide needs at least two options.' : 'Decide needs at least two levels.');
        }

        return array_filter(['type' => $kind, 'instructions' => $instructions, 'criteria' => $criteria], fn (mixed $value): bool => $value !== []);
    }

    /**
     * An answer as the node's output: the decision, the branch it takes and
     * how sure the model is. A yes / no answer carries no confidence of its
     * own, so it gets the two-option form of TypeSafe's measure: 0 at an even
     * split, 1 at a certain yes or no.
     *
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $answer
     * @return array{decision: string|int, label: string, branch: string, sure: bool, confidence: float, probabilities: array<string, float>, probability?: float, score?: float}
     */
    public static function decision(array $config, array $answer): array
    {
        $kind = static::kind($config);

        if (($answer['type'] ?? $kind) !== $kind) {
            throw new WorkflowException("Jev answered a {$answer['type']} question; the node asks a {$kind} one.");
        }

        $probabilities = array_map('floatval', (array) ($answer['probabilities'] ?? []));
        $confidence = round((float) ($answer['confidence'] ?? 0), 4);
        $sure = $confidence >= static::minConfidence($config);

        if ($kind === self::CHOICE) {
            $choice = (string) ($answer['choice'] ?? '');

            if (! array_key_exists($choice, static::options($config))) {
                throw new WorkflowException("Jev chose [{$choice}], which is not one of the options.");
            }

            return ['decision' => $choice, 'label' => $choice, 'branch' => $sure ? $choice : self::UNSURE, 'sure' => $sure, 'confidence' => $confidence, 'probabilities' => $probabilities];
        }

        if ($kind === self::SCORE) {
            $levels = static::levels($config);
            $score = (float) ($answer['score'] ?? 0);
            $level = max(0, min(count($levels) - 1, (int) round($score)));

            return ['decision' => $level, 'label' => $levels[$level] ?? (string) $level, 'branch' => $sure ? "level_{$level}" : self::UNSURE, 'sure' => $sure, 'confidence' => $confidence, 'probabilities' => $probabilities, 'score' => round($score, 4)];
        }

        $probability = max(0.0, min(1.0, (float) ($answer['noul'] ?? 0)));
        [$yesFrom, $noUpTo] = static::thresholds($config);
        $yes = $probability >= $yesFrom;
        $sure = $yes || $probability <= $noUpTo;

        return [
            'decision' => $yes ? 'yes' : 'no',
            'label' => __('packstub-flow::flow.nodes.decide.'.($yes ? 'yes' : 'no')),
            'branch' => $sure ? ($yes ? 'yes' : 'no') : self::UNSURE,
            'sure' => $sure,
            'confidence' => round(abs(2 * $probability - 1), 4),
            'probabilities' => ['yes' => round($probability, 4), 'no' => round(1 - $probability, 4)],
            'probability' => round($probability, 4),
        ];
    }

    /**
     * What Jev looks at: the text, or the structure when the text is a JSON
     * object or array — TypeSafe reads named fields best.
     *
     * @return string|array<mixed>
     */
    public static function state(string $text): string|array
    {
        $text = trim($text);

        if ($text !== '' && in_array($text[0], ['{', '['], true)) {
            $decoded = json_decode($text, true);

            if (is_array($decoded)) {
                return $decoded;
            }
        }

        return $text;
    }

    /** @param array<string, mixed> $config */
    public static function kind(array $config): string
    {
        $kind = (string) ($config['type'] ?? self::YES_NO);

        return in_array($kind, [self::YES_NO, self::CHOICE, self::SCORE], true) ? $kind : self::YES_NO;
    }

    /**
     * The options of a choice, name => what it covers (null when the name says it all).
     *
     * @param  array<string, mixed>  $config
     * @return array<string, string|null>
     */
    public static function options(array $config): array
    {
        $options = [];

        foreach ((array) ($config['options'] ?? []) as $option) {
            $value = trim((string) (is_array($option) ? ($option['value'] ?? '') : $option));

            if ($value === '' || ! preg_match('/^[A-Za-z0-9_-]+$/', $value) || in_array($value, self::RESERVED_OPTIONS, true)) {
                continue;
            }

            $description = is_array($option) ? trim((string) ($option['description'] ?? '')) : '';
            $options[$value] = $description !== '' ? $description : null;
        }

        return array_slice($options, 0, self::MAX_OPTIONS, true);
    }

    /**
     * The levels of a score, lowest first.
     *
     * @param  array<string, mixed>  $config
     * @return array<int, string>
     */
    public static function levels(array $config): array
    {
        $levels = [];

        foreach ((array) ($config['levels'] ?? []) as $level) {
            $text = trim((string) (is_array($level) ? ($level['description'] ?? '') : $level));

            if ($text !== '') {
                $levels[] = $text;
            }
        }

        return array_slice($levels, 0, self::MAX_LEVELS);
    }

    /**
     * Yes from this probability, no up to that one; between them nobody is sure.
     *
     * @param  array<string, mixed>  $config
     * @return array{0: float, 1: float}
     */
    public static function thresholds(array $config): array
    {
        $yesFrom = is_numeric($config['yes_from'] ?? null) ? max(0.0, min(1.0, (float) $config['yes_from'])) : 0.5;
        $noUpTo = is_numeric($config['no_up_to'] ?? null) ? max(0.0, min(1.0, (float) $config['no_up_to'])) : $yesFrom;

        return [$yesFrom, min($noUpTo, $yesFrom)];
    }

    /** @param array<string, mixed> $config */
    public static function minConfidence(array $config): float
    {
        return is_numeric($config['min_confidence'] ?? null) ? max(0.0, min(1.0, (float) $config['min_confidence'])) : 0.0;
    }

    /**
     * Whether the node has a "Not sure" branch: a gap between no and yes, or
     * a minimum confidence on a choice or a score.
     *
     * @param  array<string, mixed>  $config
     */
    public static function hasUnsure(array $config): bool
    {
        if (static::kind($config) === self::YES_NO) {
            [$yesFrom, $noUpTo] = static::thresholds($config);

            return $noUpTo < $yesFrom;
        }

        return static::minConfidence($config) > 0;
    }
}
