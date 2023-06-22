<script lang="ts">
  import { fade } from 'svelte/transition';
  import DepthGauge from './DepthGauge.svelte';
  import PressureGauge from './PressureGauge.svelte';
  import { TITANIC } from '../lib/constants';

  export let depthInMetres: number;
  $: visible = depthInMetres > 85 && depthInMetres < TITANIC;
</script>

{#if visible}
  <div class="gauge" class:bottom={depthInMetres >= TITANIC - 1} transition:fade>
    <DepthGauge {depthInMetres} />
    <PressureGauge pressure={depthInMetres / 10} />
  </div>
{/if}

<style>
  .gauge {
    font-family: var(--dls-font-stack-sans);
    position: fixed;
    bottom: 20vh;
    height: 2px;
    background: rgba(255, 255, 255, 0.5);
    width: 100vw;
  }
  .bottom {
    position: absolute;
    bottom: 0;
  }
</style>
