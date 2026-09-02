<?php

namespace Packstub\Flow\Filament\Resources\SecretResource\Pages;

use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;
use Packstub\Flow\Filament\Resources\SecretResource;

class ManageSecrets extends ManageRecords
{
    protected static string $resource = SecretResource::class;

    public function getSubheading(): ?string
    {
        return __('packstub-flow::flow.secrets.intro');
    }

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
