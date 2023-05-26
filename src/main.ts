import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import uView from 'vk-uview-ui'
import App from './App.vue'

// unocss
import 'uno.css'
// 不这样做会重复加载module 导致错误 Error: [JS Framework] Failed to receiveTasks, instance (1) is not available.
uni.uhfModule = uni.requireNativePlugin('UHFModule')

export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  app.use(uView)
  return {
    app
    // uni-app 官方文档示例 https://zh.uniapp.dcloud.io/tutorial/vue3-pinia.html#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86-pinia
  }
}
