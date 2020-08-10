import { readable } from 'svelte/store';

function init(set) {
  function listener({ alpha, beta, gamma }) {
    set([beta, gamma, alpha]);
  }

  window.addEventListener('deviceorientation', listener);

  return () => {
    window.removeEventListener('deviceorientation', listener);
  }
}

export const compassState = readable([0, 0, 0], init);
