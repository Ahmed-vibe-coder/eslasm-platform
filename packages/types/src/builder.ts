export interface BuilderPage {
  id: string
  tenantId: string
  slug: string
  title: string
  isHomepage: boolean
  isPublished: boolean
  structure: GrapesJSData
  createdAt: string
  updatedAt: string
}

export interface GrapesJSData {
  components: unknown[]
  styles: unknown[]
  assets: unknown[]
}

export interface Template {
  id: string
  name: string
  description: string
  thumbnailUrl: string
  category: string
  structure: GrapesJSData
  isActive: boolean
  createdAt: string
}
