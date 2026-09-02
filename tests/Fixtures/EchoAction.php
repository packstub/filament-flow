<?php

namespace Packstub\Flow\Tests\Fixtures;

use Filament\Forms\Components\TextInput;
use Packstub\Flow\Nodes\Action;
use Packstub\Flow\Nodes\Concerns\InterpolatesPlaceholders;

/**
 * Renders a template and exposes it as output — or throws with it — so
 * tests can see what an action saw (secrets included).
 */
class EchoAction extends Action
{
    use InterpolatesPlaceholders;

    public static ?string $last = null;

    public function getName(): string
    {
        return 'Echo';
    }

    public function getFormSchema(): array
    {
        return [TextInput::make('template')->required()];
    }

    public function handle(array $config, array $payload): void
    {
        static::$last = $this->interpolate($config['template'] ?? '', $payload);

        if ($config['throw'] ?? false) {
            throw new \RuntimeException('Echo failed with '.static::$last);
        }

        $this->output(['text' => static::$last]);
    }
}
