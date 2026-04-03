import type { Tenant, PaginatedResponse } from '@eduforge/types'
import { apiClient } from './base'

export const agenciesApi = {
  list: (params?: { page?: number; limit?: number }) =>
    apiClient.get<PaginatedResponse<Tenant>>(
      `/agencies?${new URLSearchParams(params as Record<string, string>)}`,
    ),

  getById: (id: string) =>
    apiClient.get<Tenant>(`/agencies/${id}`),

  getBySlug: (slug: string) =>
    apiClient.get<Tenant>(`/agencies/slug/${slug}`),

  create: (data: Pick<Tenant, 'name' | 'subdomain'>) =>
    apiClient.post<Tenant>('/agencies', data),

  update: (id: string, data: Partial<Tenant>) =>
    apiClient.patch<Tenant>(`/agencies/${id}`, data),

  delete: (id: string) =>
    apiClient.delete<void>(`/agencies/${id}`),

  connectDomain: (id: string, domain: string) =>
    apiClient.post<{ verified: boolean }>(`/agencies/${id}/domain`, { domain }),
}
