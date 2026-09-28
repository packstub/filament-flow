<?php

namespace Packstub\Flow\Filament\Forms\Components;

use Closure;
use Filament\Forms\Components\Radio;

/**
 * A radio drawn as a row of compact cards — an icon beside the label and a
 * line under it, a check on the picked one, an optional badge — for a
 * choice that shapes the rest of the form, such as how a new workflow
 * starts. Options and descriptions work as for any radio.
 */
class ChoiceCards extends Radio
{
    /** The icon tints accents() takes. */
    public const ACCENTS = ['amber', 'blue', 'purple', 'teal'];

    /** @var array<string, string>|Closure */
    protected array|Closure $icons = [];

    /** @var array<string, string>|Closure */
    protected array|Closure $badges = [];

    /** @var array<string, string>|Closure */
    protected array|Closure $accents = [];

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

    /**
     * @param  array<string, string|int>|Closure  $badges  A short badge per option value, such as a count.
     */
    public function badges(array|Closure $badges): static
    {
        $this->badges = $badges;

        return $this;
    }

    /** @return array<string, string> */
    public function getBadges(): array
    {
        return array_map(strval(...), array_filter($this->evaluate($this->badges), filled(...)));
    }

    /**
     * @param  array<string, string>|Closure  $accents  An icon tint per option value, one of ACCENTS (the canvas's node colours); the picked option's icon takes the primary colour.
     */
    public function accents(array|Closure $accents): static
    {
        $this->accents = $accents;

        return $this;
    }

    /** @return array<string, string> */
    public function getAccents(): array
    {
        return array_filter($this->evaluate($this->accents), fn (string $accent): bool => in_array($accent, self::ACCENTS, true));
    }

    public function toEmbeddedHtml(): string
    {
        $html = view('packstub-flow::forms.components.choice-cards', [
            'options' => $this->getOptions(),
            'descriptions' => $this->getDescriptions(),
            'icons' => $this->getIcons(),
            'badges' => $this->getBadges(),
            'accents' => $this->getAccents(),
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
