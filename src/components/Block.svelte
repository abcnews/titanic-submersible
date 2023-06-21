<script lang="ts">
  import { depth as depthPixels } from '../lib/stores';
  import { TITANIC, SCREENS, ROWS, COLUMNS, ROWS_PER_METRE } from '../lib/constants';
  import BlockImage from './BlockImage.svelte';

  export let colStart: number;
  export let colEnd: number;
  export let depth: number;
  export let elements;

  let pixelsPerMetre: number;

  $: pixelsPerMetre = $depthPixels / TITANIC;
</script>

<div style="grid-column: {colStart}/{colEnd}; grid-row:{Math.floor(ROWS_PER_METRE * depth)}">
  {#if $depthPixels}
    {#each elements as child}
      {#if child instanceof HTMLElement}
        {@html child.outerHTML}
      {:else}
        <BlockImage {...child} />
      {/if}
    {/each}
  {/if}
</div>
