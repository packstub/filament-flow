<?php

namespace Packstub\Flow\Support;

use Packstub\Flow\Exceptions\WorkflowException;

/**
 * Decides which URLs the HTTP actions may call. Workflows are edited in the
 * panel, so without a guard anyone who can edit one could point a request at
 * localhost, a private network or a cloud metadata endpoint.
 */
class UrlGuard
{
    /**
     * @throws WorkflowException when the URL must not be called
     */
    public static function assertAllowed(string $url): void
    {
        $parts = parse_url($url);
        $scheme = strtolower((string) ($parts['scheme'] ?? ''));
        $host = strtolower(trim((string) ($parts['host'] ?? ''), '[]'));

        if (! in_array($scheme, ['http', 'https'], true) || $host === '') {
            throw new WorkflowException("URL [{$url}] is not an http(s) URL.");
        }

        $allowed = array_values(array_filter(array_map('strtolower', (array) config('packstub-flow.http.allowed_hosts', []))));

        if ($allowed !== []) {
            foreach ($allowed as $pattern) {
                if (self::hostMatches($host, $pattern)) {
                    return;
                }
            }

            throw new WorkflowException("Host [{$host}] is not in packstub-flow.http.allowed_hosts.");
        }

        if (! config('packstub-flow.http.block_private_networks', true)) {
            return;
        }

        foreach (self::addressesOf($host) as $ip) {
            if (self::isPrivate($ip)) {
                throw new WorkflowException("Host [{$host}] resolves to a private or reserved address and cannot be called.");
            }
        }
    }

    protected static function hostMatches(string $host, string $pattern): bool
    {
        if (str_starts_with($pattern, '*.')) {
            $suffix = substr($pattern, 1);

            return str_ends_with($host, $suffix) || $host === substr($pattern, 2);
        }

        return $host === $pattern;
    }

    /**
     * @return array<int, string>
     */
    protected static function addressesOf(string $host): array
    {
        if ($host === 'localhost' || str_ends_with($host, '.localhost') || str_ends_with($host, '.internal')) {
            return ['127.0.0.1'];
        }

        if (filter_var($host, FILTER_VALIDATE_IP)) {
            return [$host];
        }

        $records = @dns_get_record($host, DNS_A | DNS_AAAA) ?: [];

        return array_values(array_filter(array_map(
            fn (array $record): ?string => $record['ip'] ?? $record['ipv6'] ?? null,
            $records,
        )));
    }

    public static function isPrivate(string $ip): bool
    {
        return filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false;
    }
}
