<script lang="ts">
  import { ROWS, TITANIC } from '../lib/constants';

  export let depthInMetres: number;

  let pressureInAtmospheres: number;

  $: pressureInAtmospheres = depthInMetres / 10;
</script>

<div
  class="depth-indicator"
  class:visible={depthInMetres >= 20}
  class:bottom={depthInMetres >= TITANIC}
  style="--threshold: {(100 / ROWS) * 2}vh;"
>
  <div>{Math.round(depthInMetres)} metres</div>
  <div class="pressure">{Math.round(pressureInAtmospheres)} atm</div>
</div>

<style>
  .depth-indicator {
    border-bottom: 2px solid #fff;
    text-align: right;
    position: fixed;
    bottom: var(--threshold);
    left: 0;
    width: 100vw;
    color: #fff;
    font-size: 2rem;
    padding-right: 1rem;
    opacity: 0;
    transition: opacity 1s;
  }

  .pressure {
    position: absolute;
    right: 0.5em;
    top: 1.5em;
  }

  .visible {
    opacity: 1;
  }

  .bottom {
    position: absolute;
    bottom: 0;
  }
</style>
