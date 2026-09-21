<?php

namespace Packstub\Flow\Contracts;

/**
 * An action that is a branch: handle() names the output the run continues
 * along with continueAlong(), one of the node's getOutputsFor(). A test run
 * does not run the action, so it follows the first output.
 */
interface PicksOutput
{
    /**
     * The output to follow when the action failed and the node is set to
     * "log it and continue": no branch was picked then. Null ends the branch.
     *
     * @param  array<string, mixed>  $config
     */
    public function outputOnFailure(array $config): ?string;
}
