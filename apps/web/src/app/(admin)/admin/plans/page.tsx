import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'Pricing Plans' }

export default async function AdminPlansPage() {
  const t = await getTranslations('admin.plans')

  const tiers = ['starter', 'pro', 'enterprise'] as const

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold sm:text-2xl">{t('title')}</h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('subtitle')}</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier} className="rounded-xl border bg-card p-4 sm:p-6">
            <h3 className="text-lg font-semibold">{t(`tiers.${tier}`)}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t('configure', { tier: t(`tiers.${tier}`) })}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
