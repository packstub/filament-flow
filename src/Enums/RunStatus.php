<?php

namespace Packstub\Flow\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasIcon;
use Filament\Support\Contracts\HasLabel;

enum RunStatus: string implements HasColor, HasIcon, HasLabel
{
    case Running = 'running';
    case Delayed = 'delayed';
    case Success = 'success';
    case Failed = 'failed';

    public function getLabel(): string
    {
        return __('packstub-flow::flow.runs.status.'.$this->value);
    }

    public function getColor(): string
    {
        return match ($this) {
            self::Running => 'info',
            self::Delayed => 'warning',
            self::Success => 'success',
            self::Failed => 'danger',
        };
    }

    public function getIcon(): string
    {
        return match ($this) {
            self::Running => 'heroicon-o-arrow-path',
            self::Delayed => 'heroicon-o-clock',
            self::Success => 'heroicon-o-check-circle',
            self::Failed => 'heroicon-o-x-circle',
        };
    }

    public function isFinished(): bool
    {
        return in_array($this, [self::Success, self::Failed], true);
    }
}
