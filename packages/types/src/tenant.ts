export type PlanTier = 'starter' | 'pro' | 'enterprise'
export type AgencyStatus = 'active' | 'suspended' | 'pending'

export interface Tenant {
  id: string
  slug: string
  name: string
  domain: string | null
  subdomain: string
  logoUrl: string | null
  primaryColor: string
  status: AgencyStatus
  planTier: PlanTier
  ownerId: string
  createdAt: string
  updatedAt: string
}
