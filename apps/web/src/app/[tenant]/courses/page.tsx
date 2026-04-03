import { getTranslations } from 'next-intl/server'

interface TenantCoursesPageProps {
  params: Promise<{ tenant: string }>
}

export default async function TenantCoursesPage({ params }: TenantCoursesPageProps) {
  const { tenant } = await params
  const t = await getTranslations('tenant.courses')
  const name = tenant.replace(/-/g, ' ')

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl font-bold sm:text-3xl">{t('title')}</h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">{t('browse', { name })}</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-center rounded-xl border-2 border-dashed p-8 text-muted-foreground sm:p-12">
          {t('empty')}
        </div>
      </div>
    </div>
  )
}
