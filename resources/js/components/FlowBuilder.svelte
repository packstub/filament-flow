<script>
    import { SvelteFlow, Controls, Background, MiniMap } from "@xyflow/svelte";
    import "@xyflow/svelte/dist/style.css";

    let { nodes: incomingNodes = [], edges: incomingEdges = [] } = $props();

    let nodes = $state.raw([]);
    let edges = $state.raw([]);

    $effect.pre(() => {
        if (nodes.length === 0) {
            nodes =
                incomingNodes.length > 0
                    ? incomingNodes
                    : [
                          {
                              id: "1",
                              position: { x: 0, y: 0 },
                              data: { label: "1" },
                          },
                          {
                              id: "2",
                              position: { x: 0, y: 100 },
                              data: { label: "2" },
                          },
                      ];
        }
        if (edges.length === 0) {
            edges =
                incomingEdges.length > 0
                    ? incomingEdges
                    : [{ id: "e1-2", source: "1", target: "2" }];
        }
    });
</script>

<div style="width: 100%; height: 500px; border: 1px solid #ccc;">
    <SvelteFlow bind:nodes bind:edges fitView>
        <Controls />
        <Background />
        <MiniMap />
    </SvelteFlow>
</div>
