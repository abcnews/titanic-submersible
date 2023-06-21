<script lang="ts">
  import Block from './Block.svelte';
  import OceanGrid from './OceanGrid.svelte';

  export let blocks: import('..').Block[];
  console.log('blocks :>> ', blocks);
</script>

<OceanGrid>
  {#each blocks as block}
    <Block {...block} />
  {/each}
</OceanGrid>

<style>
</style>
