<script>
  import './styles.scss';
  import { computeStyle, faceStyle, titles, round } from './utils';
  import { relCompassState, absCompassState } from './compass';

  let useAbsSensor = true;
  $: compassState = useAbsSensor ? absCompassState : relCompassState;
  $: rootStyle = computeStyle($compassState);

  let faces = titles.map((name, i) => ({
    name,
    cl: `cube-face-${i + 1}`,
    style: faceStyle(i),
  }));
</script>

<div class="info">
  <label>
    Use absolute sensor:
    <input type="checkbox" bind:checked={useAbsSensor} />
  </label>
  {#each ['α', 'β', 'γ'] as letter, i}
    <span>{letter}: {round($compassState[i])}</span>
  {/each}
</div>

<div class="app-container">
  <div class="cube-container">
    <div style={rootStyle} class="cube">
      {#each faces as { name, style, cl }, i}
        <div {style} class={cl}>{name}</div>
      {/each}
    </div>
  </div>
</div>
