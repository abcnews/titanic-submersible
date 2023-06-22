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
  <p>{Math.round(depthInMetres)} metres</p>
  <p class="pressure">{Math.round(pressureInAtmospheres)} atm</p>
</div>

<style>
  .depth-indicator {
    font-family: var(--dls-font-stack-sans);
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    text-align: right;
    position: fixed;
    bottom: var(--threshold);
    left: 0;
    width: 100vw;
    color: #fff;
    font-size: 1rem;
    padding: 0 15px;
    opacity: 0;
    transition: opacity 1s;
  }

  @media (min-width: 980px) {
    .depth-indicator {
      font-size: 1.5rem;
    }
  }

  p {
    position: relative;
    top: 1.9em;
    margin: 0.5em 0;
  }

  .visible {
    opacity: 1;
  }

  .bottom {
    position: absolute;
    bottom: 0;
  }
</style>
