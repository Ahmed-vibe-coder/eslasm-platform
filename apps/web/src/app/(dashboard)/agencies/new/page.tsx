import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'Create Agency' }

export default async function CreateAgencyPage() {
  const t = await getTranslations('dashboard.createAgency')

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-xl font-semibold sm:text-2xl">{t('title')}</h1>
      <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('subtitle')}</p>
    </div>
  )
}
