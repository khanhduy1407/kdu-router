const buble = require('rollup-plugin-buble')
const flow = require('rollup-plugin-flow-no-whitespace')
const cjs = require('rollup-plugin-commonjs')
const node = require('rollup-plugin-node-resolve')
const replace = require('rollup-plugin-replace')

module.exports = {
  entry: 'src/index.js',
  dest: 'dist/kdu-router.js',
  format: 'umd',
  moduleName: 'KduRouter',
  plugins: [replace({
    'process.env.NODE_ENV': '"development"'
  }), flow(), node(), cjs(), buble()]
}
