import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), svgLoader()],
  server: {
    port: 5000
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@scss': path.resolve(__dirname, 'src/assets/scss'),
      '@store': path.resolve(__dirname, 'src/store'),
      
    }
  },
})
