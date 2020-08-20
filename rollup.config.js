import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';

const isDev = process.env.NODE_ENV === 'development';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist/',
    format: 'iife',
  },
  plugins: [
    svelte(),
    resolve(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist/' },
        { src: 'src/assets/', dest: 'dist/' },
      ],
      copyOnce: true
    }),
    scss({
      output: 'dist/styles.css',
      outputStyle: isDev ? undefined : 'compressed',
    }),
    !isDev && terser(),
  ]
};
