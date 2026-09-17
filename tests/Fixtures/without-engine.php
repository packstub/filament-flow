<?php

use Packstub\Flow\Nodes\Actions\AskAi;
use Packstub\Flow\Support\WorkflowGenerator;

/*
 * Run in its own PHP process by AskAiTest and DescribeWorkflowTest: the autoloader without the test
 * stubs, so packstub/agents is genuinely missing, as on an install without it.
 */

require __DIR__.'/../../vendor/autoload.php';

echo 'ask_ai='.(AskAi::isAvailable() ? 'available' : 'unavailable').' describe='.(WorkflowGenerator::isAvailable() ? 'available' : 'unavailable');
