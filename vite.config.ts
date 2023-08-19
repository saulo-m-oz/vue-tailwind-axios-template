import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import aliases from './aliases.config'

const absolutePath = (path: string) => fileURLToPath(new URL(path, import.meta.url))
const alias = Object.entries(aliases).reduce((carry, [alias, path]) => {
  return { ...carry, [alias]: absolutePath(path) }
}, {})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias
  }
})
