import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'My Agencies' }

export default async function AgenciesPage() {
  const t = await getTranslations('dashboard.agencies')

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold sm:text-2xl">{t('title')}</h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('subtitle')}</p>
        </div>
      </div>
    </div>
  )
}
