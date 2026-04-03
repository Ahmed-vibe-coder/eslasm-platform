import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'Dashboard' }

export default async function DashboardPage() {
  const t = await getTranslations()

  return (
    <div>
      <h1 className="text-xl font-semibold sm:text-2xl">{t('nav.overview')}</h1>
      <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('dashboard.welcome')}</p>
    </div>
  )
}
