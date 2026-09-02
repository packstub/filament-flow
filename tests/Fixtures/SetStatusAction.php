<?php

namespace Packstub\Flow\Tests\Fixtures;

use Filament\Forms\Components\TextInput;
use Packstub\Flow\Nodes\Action;

/**
 * A custom action registered through the plugin, used to prove the
 * extension points and to observe runs in tests.
 */
class SetStatusAction extends Action
{
    /** @var array<int, array<string, mixed>> */
    public static array $calls = [];

    public function getName(): string
    {
        return 'Set status';
    }

    public function getDescription(): string
    {
        return 'Test action.';
    }

    public function getFormSchema(): array
    {
        return [TextInput::make('status')->required()];
    }

    public function handle(array $config, array $payload): void
    {
        static::$calls[] = ['config' => $config, 'payload' => $payload];

        if (($config['status'] ?? null) === 'boom') {
            throw new \RuntimeException('Boom from the action');
        }

        if (isset($payload['model'])) {
            $payload['model']->forceFill(['status' => $config['status']])->saveQuietly();
        }
    }
}
