export interface Plan {
  id: string
  name: string
  tier: 'starter' | 'pro' | 'enterprise'
  price: number
  currency: string
  billingPeriod: 'monthly' | 'yearly'
  features: string[]
  limits: {
    maxCourses: number
    maxStudents: number
    maxStorage: number
    customDomain: boolean
    aiBuilder: boolean
    whiteLabel: boolean
  }
}
