<?php

namespace Packstub\Flow\Http\Controllers;

use Filament\Notifications\Notification;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Models\WorkflowWait;
use Packstub\Flow\Nodes\Actions\RequestApproval;

/**
 * The Approve / Reject links in notifications and emails: a signed URL that
 * resolves the wait for the signed-in approver.
 */
class ApprovalController
{
    public function __invoke(Request $request, string $wait, string $outcome): RedirectResponse
    {
        /** @var WorkflowWait|null $wait */
        $wait = Flow::waitModel()::query()->where('type', 'approval')->find($wait);

        if (! $wait || ! hash_equals($wait->token, (string) $request->query('token'))) {
            abort(404);
        }

        $user = $request->user();
        $email = $user?->getAttribute('email');

        if (! $wait->canBeDecidedBy($email)) {
            abort(403, __('packstub-flow::flow.approvals.not_an_approver'));
        }

        if (! in_array($outcome, ['approved', 'rejected'], true)) {
            abort(404);
        }

        $title = (string) ($wait->meta['title'] ?? '');

        if (! $wait->isPending()) {
            Notification::make()->title(__('packstub-flow::flow.approvals.already_decided', ['title' => $title, 'outcome' => $wait->outcome]))->warning()->send();
        } elseif (Flow::resolveWait($wait, $outcome, ['comment' => null], $email ?: (string) $user?->getKey())) {
            Notification::make()->title(__('packstub-flow::flow.approvals.decided', ['title' => $title, 'outcome' => __("packstub-flow::flow.approvals.outcomes.{$outcome}")]))->success()->send();
        }

        return redirect()->to(RequestApproval::approvalsPageUrl() ?? url('/'));
    }
}
