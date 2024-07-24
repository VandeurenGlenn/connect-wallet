import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { readdir, unlink } from 'fs/promises'
import { join } from 'path'
import nodePolyfill from 'rollup-plugin-polyfill-node'

const clean = async () => {
  return {
    name: 'clean', // this name will show up in warnings and errors
    generateBundle: async () => {
      try {
        const files = await readdir('exports')
        for (const file of files) {
          if (file.endsWith('.js')) await unlink(join('exports', file))
        }
      } catch (error) {}
      return
    }
  }
}

export default [
  {
    input: ['./src/connect-wallet.ts'],
    output: [
      {
        format: 'es',
        dir: './exports'
      }
    ],
    plugins: [clean(), commonjs(), nodeResolve({ browser: true }), typescript(), nodePolyfill()]
  }
]
