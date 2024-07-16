import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/vue')) {
            return 'vendor-vue'
          }
          if (id.includes('node_modules/pinia')) {
            return 'vendor-pinia'
          }
          if (id.includes('node_modules/@dcloudio')) {
            return 'vendor-@dcloudio'
          }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development'
  },
  plugins: [uni()]
})
