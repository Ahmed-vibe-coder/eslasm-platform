export type UserRole = 'super_admin' | 'agency_owner' | 'trainer' | 'student'

export interface User {
  id: string
  email: string
  name: string
  avatarUrl: string | null
  role: UserRole
  tenantId: string | null
  createdAt: string
}
