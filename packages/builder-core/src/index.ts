import type { GrapesJSData } from '@eduforge/types'

export type { GrapesJSData }
export { heroBlock, coursesGridBlock } from './blocks'

export const defaultBuilderConfig = {
  storageManager: false,
  noticeOnUnload: false,
  height: '100%',
  width: '100%',
}
