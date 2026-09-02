<?php

namespace Packstub\Flow\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Packstub\Flow\Facades\Flow;
use Packstub\Flow\Nodes\Triggers\Webhook;

class WebhookController
{
    public function __invoke(Request $request, string $workflow, string $token): JsonResponse
    {
        $model = Flow::workflowModel()::query()->where('is_active', true)->find($workflow);

        if (! $model) {
            abort(404);
        }

        $node = null;

        foreach ($model->triggerNodes() as $candidate) {
            if (($candidate['data']['identifier'] ?? null) !== Webhook::class) {
                continue;
            }

            $expected = (string) ($candidate['data']['config']['token'] ?? '');

            if ($expected !== '' && hash_equals($expected, $token)) {
                $node = $candidate;

                break;
            }
        }

        if (! $node) {
            abort(404);
        }

        $body = $request->isJson() ? (array) $request->json()->all() : $request->all();

        $run = Flow::run($model, [
            'webhook' => $body,
            'webhook_token' => $token,
            'headers' => collect($request->headers->all())->map(fn (array $values) => $values[0] ?? null)->all(),
        ], (string) $node['id']);

        return response()->json([
            'accepted' => true,
            'run' => $run?->getKey(),
            'status' => $run?->status->value ?? 'queued',
        ], 202);
    }
}
