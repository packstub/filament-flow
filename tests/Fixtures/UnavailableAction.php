<?php

namespace Packstub\Flow\Tests\Fixtures;

use Packstub\Flow\Nodes\Action;

class UnavailableAction extends Action
{
    public static function isAvailable(): bool
    {
        return false;
    }

    public function getName(): string
    {
        return 'Needs a package';
    }

    public function handle(array $config, array $payload): void {}
}
