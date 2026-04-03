import type { ApiResponse, ApiError } from '@eduforge/types'

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async request<T>(
    endpoint: string,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}/api${endpoint}`

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      const error: ApiError = await response.json()
      throw new Error(error.message ?? 'API request failed')
    }

    return response.json()
  }

  get<T>(endpoint: string, init?: RequestInit) {
    return this.request<T>(endpoint, { ...init, method: 'GET' })
  }

  post<T>(endpoint: string, body: unknown, init?: RequestInit) {
    return this.request<T>(endpoint, {
      ...init,
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  put<T>(endpoint: string, body: unknown, init?: RequestInit) {
    return this.request<T>(endpoint, {
      ...init,
      method: 'PUT',
      body: JSON.stringify(body),
    })
  }

  patch<T>(endpoint: string, body: unknown, init?: RequestInit) {
    return this.request<T>(endpoint, {
      ...init,
      method: 'PATCH',
      body: JSON.stringify(body),
    })
  }

  delete<T>(endpoint: string, init?: RequestInit) {
    return this.request<T>(endpoint, { ...init, method: 'DELETE' })
  }
}

export const apiClient = new ApiClient(BASE_URL)
