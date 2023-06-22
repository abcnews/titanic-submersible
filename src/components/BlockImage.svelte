<script lang="ts">
  export let alt: string;
  export let url: string;
  export let renditions: {
    url: string;
    width: number;
  }[];
  export let sizes: string;
</script>

<img loading="lazy" {alt} {sizes} srcset={renditions.map(d => `${d.url} ${d.width}w`).join(',')} src={url} />
