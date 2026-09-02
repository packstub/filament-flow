<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Filament\Resources\Pages\CreateRecord;
use Packstub\Flow\Filament\Resources\WorkflowResource;

class CreateWorkflow extends CreateRecord
{
    protected static string $resource = WorkflowResource::class;

    protected static bool $canCreateAnother = false;

    protected function getRedirectUrl(): string
    {
        return static::getResource()::getUrl('edit', ['record' => $this->getRecord()]);
    }
}
