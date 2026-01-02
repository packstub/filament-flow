<script>
  import { SvelteFlow, Controls, Background, MiniMap } from '@xyflow/svelte';
  import '@xyflow/svelte/dist/style.css';

  let { nodes = [], edges = [] } = $props();

  let internalNodes = $state.raw(nodes.length > 0 ? nodes : [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ]);

  let internalEdges = $state.raw(edges.length > 0 ? edges : [
    { id: 'e1-2', source: '1', target: '2' },
  ]);
</script>

<div style="width: 100%; height: 500px; border: 1px solid #ccc;">
  <SvelteFlow bind:nodes={internalNodes} bind:edges={internalEdges} fitView>
    <Controls />
    <Background />
    <MiniMap />
  </SvelteFlow>
</div>
