import type { Course, Lesson, PaginatedResponse } from '@eduforge/types'
import { apiClient } from './base'

export const coursesApi = {
  list: (tenantId: string, params?: { page?: number; limit?: number; status?: string }) =>
    apiClient.get<PaginatedResponse<Course>>(
      `/courses?tenantId=${tenantId}&${new URLSearchParams(params as Record<string, string>)}`,
    ),

  getById: (id: string) =>
    apiClient.get<Course & { lessons: Lesson[] }>(`/courses/${id}`),

  create: (data: Omit<Course, 'id' | 'createdAt' | 'updatedAt' | 'enrollmentCount'>) =>
    apiClient.post<Course>('/courses', data),

  update: (id: string, data: Partial<Course>) =>
    apiClient.patch<Course>(`/courses/${id}`, data),

  delete: (id: string) =>
    apiClient.delete<void>(`/courses/${id}`),

  getLessons: (courseId: string) =>
    apiClient.get<Lesson[]>(`/courses/${courseId}/lessons`),

  enroll: (courseId: string) =>
    apiClient.post<{ enrollmentId: string }>(`/courses/${courseId}/enroll`, {}),
}
