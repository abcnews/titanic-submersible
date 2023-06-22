<script lang="ts">
  export let alt: string;
  export let url: string;
  export let renditions: {
    url: string;
    width: number;
  }[];
  export let sizes: string;
  export let width: number | 'max' = 40;
  export let align: 'bottom' | 'top' = 'top';
</script>

<img
  loading="lazy"
  {alt}
  {sizes}
  srcset={renditions.map(d => `${d.url} ${d.width}w`).join(',')}
  src={url}
  style={width === 'max' ? `width: 100%` : `width: clamp(200px, ${width}vw, 400px);`}
  class:bottom={align === 'bottom'}
/>

<style>
  img {
    display: block;
    margin: 0 auto 1em auto;
  }
  .bottom {
    margin: 1em auto 0 auto;
  }
</style>
