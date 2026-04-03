import type { BuilderPage, GrapesJSData, Template } from '@eduforge/types'
import { apiClient } from './base'

export const builderApi = {
  getPages: (tenantId: string) =>
    apiClient.get<BuilderPage[]>(`/builder/pages?tenantId=${tenantId}`),

  getPage: (pageId: string) =>
    apiClient.get<BuilderPage>(`/builder/pages/${pageId}`),

  savePage: (pageId: string, data: { structure: GrapesJSData; title?: string }) =>
    apiClient.patch<BuilderPage>(`/builder/pages/${pageId}`, data),

  createPage: (tenantId: string, data: { title: string; slug: string; isHomepage?: boolean }) =>
    apiClient.post<BuilderPage>(`/builder/pages`, { tenantId, ...data }),

  deletePage: (pageId: string) =>
    apiClient.delete<void>(`/builder/pages/${pageId}`),

  publishPage: (pageId: string) =>
    apiClient.post<BuilderPage>(`/builder/pages/${pageId}/publish`, {}),

  getTemplates: () =>
    apiClient.get<Template[]>('/builder/templates'),

  applyTemplate: (pageId: string, templateId: string) =>
    apiClient.post<BuilderPage>(`/builder/pages/${pageId}/apply-template`, { templateId }),
}
