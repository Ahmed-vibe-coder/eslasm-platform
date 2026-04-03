import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'Platform Analytics' }

export default async function AdminAnalyticsPage() {
  const t = await getTranslations('admin')

  const statKeys = [
    'monthlySignups', 'monthlyRevenue', 'churnRate',
    'activeAgencies', 'totalEnrollments', 'avgCourseRating',
  ] as const

  return (
    <div>
      <h1 className="text-xl font-semibold sm:text-2xl">{t('analytics.title')}</h1>
      <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('analytics.subtitle')}</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {statKeys.map((key) => (
          <div key={key} className="rounded-xl border bg-card p-4 sm:p-6">
            <p className="text-sm text-muted-foreground">{t(`stats.${key}`)}</p>
            <p className="mt-2 text-2xl font-bold sm:text-3xl">&mdash;</p>
          </div>
        ))}
      </div>
    </div>
  )
}
