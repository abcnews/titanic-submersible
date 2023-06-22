<script lang="ts">
  import { depth as depthPixels } from '../lib/stores';
  import { COLUMNS, ROWS_PER_METRE } from '../lib/constants';
  import BlockImage from './BlockImage.svelte';
  import type { BlockImage as BlockImageType } from '../index';

  export let colStart: number;
  export let colEnd: number;
  export let depth: number;
  export let elements: (HTMLElement | BlockImageType)[];
</script>

<div class="block" style="grid-column: {colStart}/{colEnd}; grid-row:{Math.round(ROWS_PER_METRE * depth)}">
  {#if $depthPixels}
    {#each elements as child}
      {#if child instanceof HTMLElement}
        {@html child.outerHTML}
      {:else}
        <BlockImage sizes={`${(colEnd - colStart) * COLUMNS}vw`} {...child} />
      {/if}
    {/each}
  {/if}
</div>

<style>
  .block {
    position: relative;
  }
</style>
