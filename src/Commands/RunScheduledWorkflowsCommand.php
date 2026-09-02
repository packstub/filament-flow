<?php

namespace Packstub\Flow\Commands;

use Carbon\CarbonImmutable;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Date;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\Schedule;

/**
 * Evaluates the Schedule triggers for the current minute — and, when the
 * scheduler was not running for a while, for the minutes that were missed
 * (up to schedule_catch_up_minutes).
 */
class RunScheduledWorkflowsCommand extends Command
{
    public const LAST_RUN_KEY = 'packstub-flow.cron.last-run';

    protected $signature = 'packstub-flow:cron {--catch-up= : Also evaluate up to this many missed minutes}';

    protected $description = 'Start every active workflow whose Schedule or "Date on a record" trigger is due right now, and time out expired waits.';

    public function handle(): int
    {
        $now = CarbonImmutable::instance(Date::now())->startOfMinute();
        $minutes = $this->minutesToEvaluate($now);
        $started = 0;

        foreach ($minutes as $minute) {
            $started += count(Flow::dispatch(Schedule::class, ['now' => $minute]));
            $started += count(Flow::poll($minute));
        }

        Cache::forever(self::LAST_RUN_KEY, $now->getTimestamp());

        $expired = Flow::expireWaits();

        $caughtUp = count($minutes) - 1;

        $this->components->info(sprintf(
            '%d scheduled workflow run(s) started%s%s.',
            $started,
            $caughtUp > 0 ? " ({$caughtUp} missed minute(s) caught up)" : '',
            $expired > 0 ? ", {$expired} wait(s) timed out" : '',
        ));

        return self::SUCCESS;
    }

    /**
     * @return array<int, CarbonImmutable>
     */
    protected function minutesToEvaluate(CarbonImmutable $now): array
    {
        $catchUp = (int) ($this->option('catch-up') ?? config('packstub-flow.schedule_catch_up_minutes', 0));
        $last = (int) Cache::get(self::LAST_RUN_KEY, 0);

        if ($catchUp <= 0 || $last <= 0) {
            return [$now];
        }

        $from = max(CarbonImmutable::createFromTimestamp($last)->addMinute()->getTimestamp(), $now->subMinutes($catchUp)->getTimestamp());
        $minutes = [];

        for ($at = CarbonImmutable::createFromTimestamp($from)->startOfMinute(); $at->lessThan($now); $at = $at->addMinute()) {
            $minutes[] = $at;
        }

        $minutes[] = $now;

        return $minutes;
    }
}
