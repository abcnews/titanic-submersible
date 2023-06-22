<script lang="ts">
  import { ROWS, TITANIC } from '../lib/constants';

  export let depthInMetres: number;

  let pressureInAtmospheres: number;

  $: pressureInAtmospheres = depthInMetres / 10;
</script>

<div class="depth-indicator" style="--threshold: {(100 / ROWS) * 2}vh;">
  <div class="pressure">{Math.round(pressureInAtmospheres)} atmosphers</div>
  <div>{Math.round(depthInMetres)} metres</div>
</div>

<style>
  .depth-indicator {
    color: #000000;
    background-color: #dadada;
    width: 240px;
    position: absolute;
    left: calc(50% + 40px);
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5em 0.5em 0.5em 50px;
    font-size: 0.875em;
    font-weight: bold;
    line-height: 1.5;
  }

  .pressure {
    font-size: 1.5em;
  }
</style>
