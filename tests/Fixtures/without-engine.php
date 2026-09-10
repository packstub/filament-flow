<?php

use Packstub\Flow\Nodes\Actions\AskAi;

/*
 * Run in its own PHP process by AskAiTest: the autoloader without the test
 * stubs, so packstub/agents is genuinely missing, as on an install without it.
 */

require __DIR__.'/../../vendor/autoload.php';

echo AskAi::isAvailable() ? 'available' : 'unavailable';
