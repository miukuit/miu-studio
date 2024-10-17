import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd())
  const { VITE_PUBLIC_PATH } = viteEnv
  return {
    base: VITE_PUBLIC_PATH || '/',
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src')
      }
    },
  }
})
