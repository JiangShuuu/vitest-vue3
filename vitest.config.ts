import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    server: {},
    setupFiles: ['src/setupTests.ts'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
