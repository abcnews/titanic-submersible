<script lang="ts">
  export let alt: string;
  export let url: string;
  export let renditions;

  console.log('renditions :>> ', renditions);
</script>

<img {alt} src={url} />
