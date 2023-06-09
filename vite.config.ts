import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unocss
    Unocss()
  ],
  optimizeDeps: {
    exclude: ['@dcloudio/uni-vue-devtools/**']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir:
      'F:\\project\\uni-app\\UniPlugin-Hello-AS\\app\\src\\main\\assets\\apps\\__UNI__471BDAB'
  },
  css: {
    // 配置`scss`和`less`全局变量
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/vars/_base.scss";'
      },
      less: {
        additionalData: '@import "@/styles/vars/_base.less";'
      }
    }
  }
})
