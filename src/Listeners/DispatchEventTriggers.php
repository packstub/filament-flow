<?php

namespace Packstub\Flow\Listeners;

use Illuminate\Support\Facades\Cache;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\EventFired;
use Throwable;

/**
 * Wildcard listener behind the "Event" trigger. The set of watched event
 * classes is read once per request (and cached), so the per-event cost is a
 * hash lookup.
 */
class DispatchEventTriggers
{
    public const CACHE_KEY = 'packstub-flow.event-triggers';

    /** @var array<string, true>|null */
    protected static ?array $watched = null;

    protected static bool $dispatching = false;

    protected static bool $loading = false;

    public function handle(string $eventName, array $data): void
    {
        if (static::$dispatching || ! isset(static::watched()[$eventName])) {
            return;
        }

        $event = $data[0] ?? null;

        if (! is_object($event)) {
            return;
        }

        static::$dispatching = true;

        try {
            Flow::dispatch(EventFired::class, ['event' => $event]);
        } finally {
            static::$dispatching = false;
        }
    }

    public static function flush(): void
    {
        static::$watched = null;
        Cache::forget(self::CACHE_KEY);
    }

    /**
     * @return array<string, true>
     */
    protected static function watched(): array
    {
        if (static::$watched !== null) {
            return static::$watched;
        }

        // Loading the list runs queries, which fire Eloquent events that land
        // back here; ignore them until the list is ready.
        if (static::$loading) {
            return [];
        }

        static::$loading = true;

        try {
            $classes = Cache::remember(self::CACHE_KEY, now()->addHour(), function (): array {
                return Flow::triggerModel()::query()
                    ->where('type', EventFired::class)
                    ->get()
                    ->map(fn ($trigger): ?string => $trigger->config['event_class'] ?? null)
                    ->filter()
                    ->map(fn (string $class): string => ltrim($class, '\\'))
                    ->unique()
                    ->values()
                    ->all();
            });
        } catch (Throwable) {
            // Tables not migrated yet (fresh install, migrations running).
            return [];
        } finally {
            static::$loading = false;
        }

        return static::$watched = array_fill_keys($classes, true);
    }
}
