<script lang="ts">
  import { ROWS, TITANIC } from '../lib/constants';

  export let depthInMetres: number;
  const formatter = new Intl.NumberFormat();
  let pressureInAtmospheres: number;

  $: pressureInAtmospheres = depthInMetres / 10;
</script>

<div class="depth-indicator" style="--threshold: {(100 / ROWS) * 2}vh;">
  <div class="label">PRESSURE</div>
  <div class="pressure">
    <span class="number">{formatter.format(Math.round(pressureInAtmospheres))}</span> atmospheres
  </div>
  <div><span class="number">{formatter.format(Math.round(depthInMetres))}</span> metres deep</div>
</div>

<style>
  .depth-indicator {
    color: #000000;
    background-color: #dadada;
    width: 250px;
    position: absolute;
    left: calc(50% + 34px);
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5em 0.5em 0.5em 50px;
    font-size: 0.875em;
    font-weight: bold;
    line-height: 1.5;
  }
  .label {
    margin-bottom: -5px;
    font-size: 1em;
    font-weight: bolder;
  }
  .pressure {
    font-size: 1.4em;
  }

  .number {
    font-family: var(--dls-font-stack-monospace);
  }
</style>
