<?php

namespace Packstub\Flow\Filament\Forms\Components;

use Closure;
use Filament\Forms\Components\Radio;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Support\DefinitionPreview;

/**
 * The templates as a grid of cards — a small diagram of the workflow, its
 * category, name and description — with the categories as a filter when
 * there is more than one, and the picked one drawn large underneath. A
 * Radio underneath: the cards are its options, so validation and the
 * state work as for any radio.
 */
class TemplatePicker extends Radio
{
    /** @var array<string, array<string, mixed>>|Closure */
    protected array|Closure $templates = [];

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
     * The cards: each template with its steps read off the definition,
     * left to right as on the canvas, coloured like the nodes, and the
     * definition laid out for its diagram (DefinitionPreview).
     *
     * @return array<int, array{key: string, name: string, category: string, description: string, steps: array<int, array{label: string, theme: string}>, preview: array<string, mixed>}>
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

            $cards[] = [
                'key' => (string) $key,
                'name' => (string) $template['name'],
                'category' => (string) ($template['category'] ?? ''),
                'description' => (string) ($template['description'] ?? ''),
                'steps' => $steps,
                'preview' => DefinitionPreview::make((array) ($template['definition'] ?? []), $registry),
            ];
        }

        return $cards;
    }

    public function toEmbeddedHtml(): string
    {
        $html = view('packstub-flow::forms.components.template-picker', [
            'cards' => $this->getCards(),
            'categories' => $this->getCategories(),
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
