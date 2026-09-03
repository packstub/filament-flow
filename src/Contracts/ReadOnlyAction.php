<?php

namespace Packstub\Flow\Contracts;

/**
 * Marks an action that changes nothing outside the run (a query, a
 * calculation), so a dry run executes it for real instead of simulating it.
 */
interface ReadOnlyAction {}
