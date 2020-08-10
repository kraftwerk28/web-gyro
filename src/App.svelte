<script>
  import './styles.scss';
  import { computeStyle, faceStyle, titles } from './utils';
  import { compassState } from './compass';

  $: rootStyle = computeStyle($compassState);
  let faces = titles.map((name, i) => ({
    name,
    cl: `cube-face-${i + 1}`,
    style: faceStyle(i),
  }));
</script>

<div class="app-container">
  <div class="cube-container">
    <div style={rootStyle} class="cube">
      {#each faces as { name, style, cl }, i}
        <div {style} class={cl}>{name}</div>
      {/each}
    </div>
  </div>
</div>
