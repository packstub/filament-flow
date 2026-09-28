<?php

namespace Packstub\Flow\Filament\Forms\Components;

use Closure;
use Filament\Forms\Components\Radio;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Support\DefinitionPreview;
use Packstub\Flow\Support\DefinitionValidator;

/**
 * The templates as a list beside a preview: the list (name, category,
 * steps) filtered by category and, once there are enough of them, a
 * search; the preview draws the picked one large with its description
 * and the settings it leaves for you, and full screen on demand. A Radio
 * underneath: the rows are its options, so validation, the state and the
 * arrow keys work as for any radio.
 */
class TemplatePicker extends Radio
{
    /** From this many templates on, the list gets a search box. */
    public const SEARCH_FROM = 8;

    /** @var array<string, array<string, mixed>>|Closure */
    protected array|Closure $templates = [];

    protected bool|Closure|null $isSearchable = null;

    /**
     * @param  array<string, array<string, mixed>>|Closure  $templates  Templates keyed by their key (Templates::all()).
     */
    public function templates(array|Closure $templates): static
    {
        $this->templates = $templates;

        $this->options(fn (): array => array_map(fn (array $template): string => (string) $template['name'], $this->getTemplates()));
        $this->descriptions(fn (): array => array_map(fn (array $template): string => (string) ($template['description'] ?? ''), $this->getTemplates()));

        return $this;
    }

    /**
     * Offer a search above the list; by default it shows from
     * SEARCH_FROM templates on.
     */
    public function searchable(bool|Closure|null $condition = true): static
    {
        $this->isSearchable = $condition;

        return $this;
    }

    public function isSearchable(): bool
    {
        return $this->evaluate($this->isSearchable) ?? count($this->getTemplates()) >= self::SEARCH_FROM;
    }

    /** @return array<string, array<string, mixed>> */
    public function getTemplates(): array
    {
        return $this->evaluate($this->templates);
    }

    /**
     * The categories offered, in the order they first appear.
     *
     * @return array<int, string>
     */
    public function getCategories(): array
    {
        return array_values(array_unique(array_map(fn (array $template): string => (string) ($template['category'] ?? ''), $this->getTemplates())));
    }

    /**
     * The templates as the list and the preview show them: the steps read
     * off the definition, left to right as on the canvas, coloured like
     * the nodes; the settings it leaves blank; the definition laid out for
     * its diagram (DefinitionPreview), those nodes marked; and the text
     * the search looks in.
     *
     * @return array<int, array{key: string, name: string, category: string, description: string, steps: array<int, array{label: string, theme: string}>, todo: array<int, array{node: string, setting: string}>, preview: array<string, mixed>, search: string}>
     */
    public function getCards(): array
    {
        $registry = app(NodeRegistry::class);
        $cards = [];

        foreach ($this->getTemplates() as $key => $template) {
            $nodes = (array) ($template['definition']['nodes'] ?? []);

            usort($nodes, fn (array $a, array $b): int => [(float) ($a['position']['x'] ?? 0), (float) ($a['position']['y'] ?? 0)] <=> [(float) ($b['position']['x'] ?? 0), (float) ($b['position']['y'] ?? 0)]);

            $steps = [];

            foreach ($nodes as $node) {
                $registered = is_string($node['data']['identifier'] ?? null) ? $registry->node($node['data']['identifier']) : null;
                $label = (string) ($node['data']['label'] ?? $registered?->getName() ?? '');

                if ($label === '') {
                    continue;
                }

                $steps[] = [
                    'label' => $label,
                    'theme' => $registered === null ? 'default' : ($registered->getCategory() === 'ai' ? 'ai' : $registered->getType()->value),
                ];
            }

            $definition = (array) ($template['definition'] ?? []);
            $missing = DefinitionValidator::missingSettingsByNode($definition);
            $labels = array_column(array_map(fn (array $node): array => [(string) ($node['id'] ?? ''), (string) ($node['data']['label'] ?? '')], (array) ($definition['nodes'] ?? [])), 1, 0);
            $todo = [];

            foreach ($missing as $id => $settings) {
                foreach ($settings as $setting) {
                    $todo[] = ['node' => $labels[$id] ?? $id, 'setting' => $setting];
                }
            }

            $cards[] = [
                'key' => (string) $key,
                'name' => (string) $template['name'],
                'category' => (string) ($template['category'] ?? ''),
                'description' => (string) ($template['description'] ?? ''),
                'steps' => $steps,
                'todo' => $todo,
                'preview' => DefinitionPreview::make($definition, $registry, array_keys($missing)),
                'search' => mb_strtolower(implode(' ', [$template['name'], $template['category'] ?? '', $template['description'] ?? '', ...array_column($steps, 'label')])),
            ];
        }

        return $cards;
    }

    public function toEmbeddedHtml(): string
    {
        $html = view('packstub-flow::forms.components.template-picker', [
            'cards' => $this->getCards(),
            'categories' => $this->getCategories(),
            'isSearchable' => $this->isSearchable(),
            'id' => $this->getId(),
            'isDisabled' => $this->isDisabled(),
            'state' => is_string($state = $this->getState()) ? $state : null,
            'statePath' => $this->getStatePath(),
            'wireModelAttribute' => $this->applyStateBindingModifiers('wire:model'),
            'hasError' => $this->hasErrorForPath($this->getStatePath()),
            'extraAttributes' => $this->getExtraAttributeBag(),
        ])->render();

        return $this->wrapEmbeddedHtml($html, labelTag: 'div');
    }
}
