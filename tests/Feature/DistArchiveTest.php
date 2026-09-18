<?php

use Symfony\Component\Process\Process;

// What `composer require` downloads is `git archive` of the tag: .gitattributes decides what is in it.
it('ships only what an install runs in the dist archive', function (): void {
    $root = dirname(__DIR__, 2);

    $git = function (array $command, ?string $input = null) use ($root): string {
        $process = new Process(['git', ...$command], $root);
        $process->setInput($input);
        $process->run();

        return $process->isSuccessful() ? $process->getOutput() : '';
    };

    $files = array_filter(explode("\0", $git(['ls-files', '-z'])));

    if ($files === []) {
        $this->markTestSkipped('Not a git checkout.');
    }

    // A file ships unless it, or a directory above it, is export-ignore.
    $paths = [];

    foreach ($files as $file) {
        $segments = explode('/', $file);

        foreach (array_keys($segments) as $depth) {
            $paths[implode('/', array_slice($segments, 0, $depth + 1))] = true;
        }
    }

    $ignored = [];
    $attributes = explode("\0", $git(['check-attr', '-z', '--stdin', 'export-ignore'], implode("\0", array_keys($paths))));

    foreach (array_chunk($attributes, 3) as $row) {
        if (($row[2] ?? null) === 'set') {
            $ignored[] = $row[0];
        }
    }

    $shipped = array_filter($files, function (string $file) use ($ignored): bool {
        foreach ($ignored as $path) {
            if ($file === $path || str_starts_with($file, $path.'/')) {
                return false;
            }
        }

        return true;
    });

    $groups = array_unique(array_map(function (string $file): string {
        $segments = explode('/', $file);

        return $segments[0] === 'resources' ? $segments[0].'/'.$segments[1] : $segments[0];
    }, $shipped));

    sort($groups);

    expect($groups)->toBe([
        'LICENSE.md',
        'README.md',
        'composer.json',
        'config',
        'database',
        'resources/dist',
        'resources/lang',
        'resources/templates',
        'resources/views',
        'src',
    ]);
});
