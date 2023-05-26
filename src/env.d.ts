/// <reference types="vite/client" />
/// <reference types="@dcloudio/types" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  VITE_APP_TITLE: string
  VITE_APP_AXIOS_BASE_URL: string
}

interface KeyCodeData {
  keyCode: number
  action: 'Single' | 'Double' | 'LongPress'
}

interface UHFLintener {
  error: null | string
}
type UniAppEventData<T = any> = { module: string; data: T }
interface ReadSingleTagData {
  empty: boolean
  epc: string
  RSSI: number
  user?: string
  tid?: string
}

type ReadSingleTagCallBack = (data: ReadSingleTagData) => void
interface UHFModule {
  unlockScreen: () => void
  openKeyDownService: () => void
  closeUHF: () => boolean
  showApp: () => void
  addEventListener(
    event: 'keyDown',
    callback: (data: UniAppEventData<KeyCodeData>) => void
  ): void
  addEventListener(
    event: 'open',
    callback: (data: UniAppEventData<UHFLintener>) => void
  ): void
  addEventListener(
    event: 'error',
    callback: (data: UniAppEventData<UHFLintener>) => void
  ): void
  addEventListener(event: string, callback: () => void): void // 基本的通用事件处理函数

  getOverlayStatus: () => boolean
  test: () => void
  removeAllEventListeners: () => void
  openUHF: () => void
  readSingleTag: (callback: ReadSingleTagCallBack) => void
}
interface Uni {
  uhfModule: UHFModule
}
