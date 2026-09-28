<?php

use Livewire\Livewire;
use Packstub\Flow\Filament\Forms\Components\ChoiceCards;
use Packstub\Flow\Filament\Resources\WorkflowResource\Pages\CreateWorkflow;

it('keeps the badges that are set and the tints it knows', function (): void {
    $field = ChoiceCards::make('plan')
        ->options(['basic' => 'Basic', 'pro' => 'Pro'])
        ->badges(['basic' => '', 'pro' => 3])
        ->accents(['basic' => 'teal', 'pro' => 'pink']);

    expect($field->getBadges())->toBe(['pro' => '3'])
        ->and($field->getAccents())->toBe(['basic' => 'teal']);
});

it('draws the ways to start as cards: icon, label, line, badge, tint and a check on the picked one', function (): void {
    $this->actingAs(createUser());

    $page = Livewire::test(CreateWorkflow::class)->instance();
    $html = $page->getSchema('form')->getComponent('start')->toEmbeddedHtml();

    expect($html)->toContain('fi-flow-choice-card', 'Blank canvas', 'Draw it node by node.', 'value="template"', 'peer-checked:block', '<svg')
        ->and(substr_count($html, 'fi-flow-choice-card '))->toBe(count(CreateWorkflow::starts()))
        // Describe it, in the AI teal, only where packstub/agents is installed.
        ->and(str_contains($html, 'bg-teal-50'))->toBe(array_key_exists('describe', CreateWorkflow::starts()));
});
