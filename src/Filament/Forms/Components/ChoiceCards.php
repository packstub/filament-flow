<?php

namespace Packstub\Flow\Filament\Forms\Components;

use Closure;
use Filament\Forms\Components\Radio;

/**
 * A radio drawn as a row of cards — an icon, the label and a line under it
 * — for a choice that shapes the rest of the form, such as how a new
 * workflow starts. Options and descriptions work as for any radio.
 */
class ChoiceCards extends Radio
{
    /** @var array<string, string>|Closure */
    protected array|Closure $icons = [];

    /**
     * @param  array<string, string>|Closure  $icons  An icon per option value.
     */
    public function icons(array|Closure $icons): static
    {
        $this->icons = $icons;

        return $this;
    }

    /** @return array<string, string> */
    public function getIcons(): array
    {
        return $this->evaluate($this->icons);
    }

    public function toEmbeddedHtml(): string
    {
        $html = view('packstub-flow::forms.components.choice-cards', [
            'options' => $this->getOptions(),
            'descriptions' => $this->getDescriptions(),
            'icons' => $this->getIcons(),
            'id' => $this->getId(),
            'isDisabled' => $this->isDisabled(),
            'statePath' => $this->getStatePath(),
            'wireModelAttribute' => $this->applyStateBindingModifiers('wire:model'),
            'hasError' => $this->hasErrorForPath($this->getStatePath()),
            'extraAttributes' => $this->getExtraAttributeBag(),
        ])->render();

        return $this->wrapEmbeddedHtml($html, labelTag: 'div');
    }
}
