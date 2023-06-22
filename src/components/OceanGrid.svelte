<script lang="ts">
  import { onMount } from 'svelte';
  import { depth } from '../lib/stores';
  import { TITANIC, SCREENS, ROWS, COLUMNS } from '../lib/constants';
  import { getReadableStore } from '@abcnews/progress-utils';
  import DepthGuage from './DepthGuage.svelte';
  import PressureGuage from './PressureGuage.svelte';

  let ocean: HTMLDivElement;
  let scroll: ReturnType<typeof getReadableStore>;
  let depthInMetres: number;

  onMount(() => {
    const resizeObserver = new ResizeObserver(entries => {
      // We're only watching one element
      const entry = entries.at(0);
      if (!entry) return;
      $depth = entry.contentBoxSize[0].blockSize;
    });
    resizeObserver.observe(ocean);

    scroll = getReadableStore('ocean', {
      indicatorSelector: () => 'div.grid.ocean-depths',
      regionThreshold: 1 - ((100 / ROWS) * 2) / 100
    });
    return () => resizeObserver.unobserve(ocean);
  });
  $: depthInMetres = typeof $scroll?.data?.threshold === 'number' ? $scroll.data.threshold * TITANIC : -1;
</script>

<div
  bind:this={ocean}
  class="grid u-full ocean-depths"
  style="--titanic-height: {SCREENS * 100}vh; --titanic-columns: {COLUMNS}; --titanic-column-width: {100 /
    COLUMNS}vw; --titanic-row-height: {100 / ROWS}vh;"
>
  <DepthGuage {depthInMetres} />
  <PressureGuage pressure={depthInMetres / 10} />
  <slot />
</div>

<style lang="scss">
  .ocean-depths {
    display: grid;
    grid-template-rows: repeat(auto-fill, var(--titanic-row-height));
    grid-template-columns: repeat(var(--titanic-columns), var(--titanic-column-width));
    height: var(--titanic-height);
    background: linear-gradient(180deg, #5996cf 0%, #070021 23%, #000 27%);
    position: relative;
    color: #fff;
    font-size: clamp(0.9rem, 3vw, 1.1rem);
  }
</style>
