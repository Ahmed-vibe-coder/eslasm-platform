import { getTranslations } from 'next-intl/server'

interface TenantDashboardPageProps {
  params: Promise<{ tenant: string }>
}

export default async function TenantDashboardPage({ params }: TenantDashboardPageProps) {
  const { tenant } = await params
  const t = await getTranslations('tenant.dashboard')
  const name = tenant.replace(/-/g, ' ')

  const statKeys = ['enrolledCourses', 'completed', 'certificates'] as const

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-xl font-semibold sm:text-2xl">{t('title')}</h1>
      <p className="mt-1 text-sm capitalize text-muted-foreground sm:text-base">{t('subtitle', { name })}</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {statKeys.map((key) => (
          <div key={key} className="rounded-xl border bg-card p-4 sm:p-6">
            <p className="text-sm text-muted-foreground">{t(key)}</p>
            <p className="mt-2 text-2xl font-bold sm:text-3xl">0</p>
          </div>
        ))}
      </div>
    </div>
  )
}
