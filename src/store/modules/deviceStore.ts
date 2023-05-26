import { defineStore } from 'pinia'
import type { ReadSingleTagData } from '@/types'

export const useDeviceStore = defineStore('deviceStore', {
  state: () => ({
    /** @name 当前读取的标签 */
    currentReadTag: null as ReadSingleTagData | null
  }),
  actions: {
    /** @name 设置当前读取的标签 */
    setCurrentReadTag(tag: ReadSingleTagData | null) {
      this.currentReadTag = tag
    }
  }
})
