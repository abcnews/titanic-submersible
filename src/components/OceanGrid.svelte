<script lang="ts">
</script>

<div class="grid">
  <slot />
</div>

<style lang="scss">
  div {
    display: grid;
    grid-template-rows: repeat(999, 10vh);
    grid-template-columns: repeat(10, 10vw);
    width: 100%;
    height: 1000vh;
    background: linear-gradient(180deg, #648bd4 0%, #071b3d);
  }
</style>
