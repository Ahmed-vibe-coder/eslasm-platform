import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'Billing' }

export default async function BillingPage() {
  const t = await getTranslations('dashboard.billing')

  return (
    <div>
      <h1 className="text-xl font-semibold sm:text-2xl">{t('title')}</h1>
      <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('subtitle')}</p>
    </div>
  )
}
