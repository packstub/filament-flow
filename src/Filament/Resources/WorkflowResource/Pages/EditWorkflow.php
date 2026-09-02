<?php

namespace Packstub\Flow\Filament\Resources\WorkflowResource\Pages;

use Packstub\Flow\Filament\Resources\WorkflowResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditWorkflow extends EditRecord
{
    protected static string $resource = WorkflowResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
