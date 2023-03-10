import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 全局样式
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以,并且不需要再main.js引入。会爆重复引入错误
        additionalData: '@import "@/assets/style/global.scss";'
        // additionalData: '@use "@/assets/style/global.scss";'
      }
    }
  },
  server: {
    port: 8080,
    proxy: {
      // 接口地址代理
      '/api': {

        target: 'http://localhost:8080', // MOCK
        rewrite: path => path.replace(/^\/api/, '')

        // target: 'https://mock.presstime.cn/mock/639f3b8a7ffe39009ae6bb33', // 接口的域名

        // target: 'http://127.0.0.1:8010', // 接口的域名
        // rewrite: path => path.replace(/^\/api/, '')
      },
    },
    host: '0.0.0.0',
    //自动打开浏览器
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './'),
    }
  },
})
