export interface KeyCodeData {
  keyCode: number
  action: 'Single' | 'Double' | 'LongPress'
}

export interface UHFLintener {
  error: null | string
}
export type UniAppEventData<T = any> = { module: string; data: T }
export interface ReadSingleTagData {
  empty: boolean
  epc: string
  RSSI: number
  user?: string
  tid?: string
}

export type ReadSingleTagCallBack = (data: ReadSingleTagData) => void

export interface UHFModule {
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
