import { getTranslations } from 'next-intl/server'

interface TenantCourseDetailProps {
  params: Promise<{ tenant: string; courseId: string }>
}

export default async function TenantCourseDetailPage({ params }: TenantCourseDetailProps) {
  const { tenant, courseId } = await params
  const t = await getTranslations('tenant.courses')
  const name = tenant.replace(/-/g, ' ')

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <p className="text-sm capitalize text-muted-foreground">{name}</p>
      <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{t('detail')}</h1>
      <p className="mt-2 text-muted-foreground">{t('courseId', { id: courseId })}</p>
    </div>
  )
}
