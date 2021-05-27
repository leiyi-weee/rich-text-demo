import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default {
  input: './src/index.tsx',
  output: {
    file: 'weee-auth/index.js',
    format: 'umd',
    name: 'file'
  },
  plugins: [
    postcss({
      plugins: [
        autoprefixer()
      ]
    }),
    typescript(),
    babel(),
    copy({
      targets: [
        { src: './package.json', dest: './weee-auth' }
      ]
    })
  ]
}
