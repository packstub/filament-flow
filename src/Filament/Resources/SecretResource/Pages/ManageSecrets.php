<?php

namespace Packstub\Flow\Filament\Resources\SecretResource\Pages;

use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;
use Packstub\Flow\Filament\Resources\SecretResource;
use Packstub\Flow\Support\Tenancy;

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
            CreateAction::make()->mutateDataUsing(function (array $data): array {
                if ($tenant = Tenancy::panelTenant()) {
                    $data['tenant_type'] = $tenant->getMorphClass();
                    $data['tenant_id'] = (string) $tenant->getKey();
                }

                return $data;
            }),
        ];
    }
}
