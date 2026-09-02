<?php

namespace Packstub\Flow\Tests\Fixtures;

use Filament\Forms\Components\TextInput;
use Packstub\Flow\Nodes\Action;

/**
 * Fails the first `fail_times` calls, then succeeds and exposes an output.
 */
class FlakyAction extends Action
{
    public static int $attempts = 0;

    public function getName(): string
    {
        return 'Flaky';
    }

    public function getFormSchema(): array
    {
        return [TextInput::make('fail_times')->numeric()];
    }

    public function handle(array $config, array $payload): void
    {
        static::$attempts++;

        if (static::$attempts <= (int) ($config['fail_times'] ?? 0)) {
            throw new \RuntimeException("Attempt {$config['fail_times']} not reached yet");
        }

        $this->output(['attempts' => static::$attempts, 'seen' => $payload['last']['attempts'] ?? null, 'value' => $config['value'] ?? 'v']);
    }
}
