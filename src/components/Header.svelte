<script lang="ts">
  import Ship from './Ship.svelte';
</script>

<div class="u-full header">
  <div class="boat"><Ship /></div>
  <div class="wave" aria-hidden="true" />
  <div class="wave" aria-hidden="true" />
</div>

<style>
  .header {
    background: linear-gradient(to top, #ffffff 0%, #92dbff 100%);
    background-position: 0 50%;
    margin: 0;
    position: absolute;
    top: 0;
    height: 100%;
  }

  .boat {
    position: absolute;
    bottom: -10px;
    width: 100vw;
    transform-origin: center;
    animation: boat 7s ease-in-out infinite;
    /* --x: 300px;
    --y: 100px;
    --dx: 1s;
    --dy: 0.4s;
    animation: x var(--dx, 1s), y var(--dy, 0.5s);
    animation-timing-function: cubic-bezier(0.5, -1000, 0.5, 1000);
    animation-iteration-count: infinite; */
  }

  .wave {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMjE5LjI5NiAyOS4xODNDMTcwLjIzIDQwLjk4NiA0MC4wNTQgNTEuOTQ2IDAgNTEuOTQ2VjEwMGg3NDBWNTEuOTQ2cy0xMDIuMTM4IDguNDMtMTg2LjI1Mi0xNi44NjFDNDY5LjYzNSA5Ljc5MyA0NTguNjIgNC43MzUgMzk2LjUzNi41MTljLTYyLjA4NC00LjIxNS0xMzQuMTgxIDE4LjMwNy0xNzcuMjQgMjguNjY0WiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjM3MCIgeDI9IjM3MCIgeTE9IjAiIHkyPSIxMDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0Y5RkQ1IiBzdG9wLW9wYWNpdHk9Ii4yNyIvPjxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiM1OTk2Q0YiIHN0b3Atb3BhY2l0eT0iLjYzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTk5NkNGIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+)
      repeat-x;
    background-size: 185px 25px;
    position: absolute;
    bottom: -7px;
    width: 4440px;
    height: 25px;
    animation: wave 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    bottom: 0px;
    animation: wave 9s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  @keyframes boat-swell {
    100%,
    0% {
      /* transform: translate(-2px, 4px); */
    }
    50% {
      /* transform: translate(2px, -4px); */
    }
  }

  @keyframes boat {
    100%,
    0% {
      transform: rotate(-3deg) translate(-5px, 4px);
    }
    30% {
      transform: rotate(3deg) translate(0px, -4px);
    }
    50% {
      transform: rotate(-3deg) translate(5px, 0px);
    }
    70% {
      transform: rotate(3deg) translate(0px, -4px);
    }
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -740px;
    }
  }
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, 0px, 0);
    }
    50% {
      transform: translate3d(0, 6px, 0);
    }
  }
</style>
