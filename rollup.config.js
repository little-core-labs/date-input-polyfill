
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'

const OUTPUT_DIR = 'dist'

export default [
  {
    input: ['src/date-input-polyfill.js'],
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      json(),
      postcss(),
      babel({ babelHelpers: 'bundled' })
    ],
    output: [
      {
        file: `${OUTPUT_DIR}/date-input-polyfill.umd.js`,
        format: 'umd',
        compact: true,
        plugins: [terser()],
        sourcemap: true
      }
    ]
  },
  {
    input: ['src/date-input-polyfill.js'],
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      json(),
      postcss()
    ],
    output: [
      {
        file: `${OUTPUT_DIR}/date-input-polyfill.esm.js`,
        format: 'es',
        compact: true,
        plugins: [terser()],
        sourcemap: true
      }
    ]
  }
]
