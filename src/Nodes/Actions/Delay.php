<?php

namespace Xlited\LaravelFlow\Nodes\Actions;

use Xlited\LaravelFlow\Base\Action;

class Delay extends Action
{
    public function getName(): string
    {
        return 'Delay';
    }

    public function getDescription(): string
    {
        return 'Pauses execution for a specified duration.';
    }

    public function getIcon(): ?string
    {
        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
    }

    public function getSchema(): array
    {
        return [
            [
                'name' => 'duration',
                'label' => 'Duration (Seconds)',
                'type' => 'text', // Should be number but using text for simplicity/compatibility
                'placeholder' => '60',
                'required' => true,
            ],
        ];
    }

    public function handle(array $data, array $payload): void
    {
        $duration = (int) ($data['duration'] ?? 0);

        if ($duration > 0) {
            sleep($duration);
        }
    }
}
