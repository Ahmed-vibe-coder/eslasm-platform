import { getTranslations } from 'next-intl/server'

interface AgencyDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function AgencyDetailPage({ params }: AgencyDetailPageProps) {
  const { id } = await params
  const t = await getTranslations('dashboard.agencyDetail')

  return (
    <div>
      <h1 className="text-xl font-semibold sm:text-2xl">{t('title')}</h1>
      <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('managing', { id })}</p>
    </div>
  )
}
