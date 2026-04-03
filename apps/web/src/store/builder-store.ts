import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { GrapesJSData } from '@eduforge/types'

type Device = 'desktop' | 'tablet' | 'mobile'

interface BuilderState {
  pageId: string | null
  pageTitle: string
  structure: GrapesJSData | null
  device: Device
  isDirty: boolean
  isSaving: boolean
  isPublishing: boolean

  setPageId: (id: string) => void
  setPageTitle: (title: string) => void
  setStructure: (data: GrapesJSData) => void
  setDevice: (device: Device) => void
  setDirty: (dirty: boolean) => void
  setSaving: (saving: boolean) => void
  setPublishing: (publishing: boolean) => void
  reset: () => void
}

const initialState = {
  pageId: null,
  pageTitle: '',
  structure: null,
  device: 'desktop' as Device,
  isDirty: false,
  isSaving: false,
  isPublishing: false,
}

export const useBuilderStore = create<BuilderState>()(
  devtools(
    (set) => ({
      ...initialState,
      setPageId: (id) => set({ pageId: id }),
      setPageTitle: (title) => set({ pageTitle: title }),
      setStructure: (data) => set({ structure: data, isDirty: true }),
      setDevice: (device) => set({ device }),
      setDirty: (dirty) => set({ isDirty: dirty }),
      setSaving: (saving) => set({ isSaving: saving }),
      setPublishing: (publishing) => set({ isPublishing: publishing }),
      reset: () => set(initialState),
    }),
    { name: 'builder-store' },
  ),
)
