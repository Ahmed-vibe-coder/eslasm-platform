import { getTranslations } from 'next-intl/server'

interface TenantCatchAllPageProps {
  params: Promise<{ tenant: string; slug: string[] }>
}

export default async function TenantCatchAllPage({ params }: TenantCatchAllPageProps) {
  const { tenant, slug } = await params
  const t = await getTranslations('tenant')
  const name = tenant.replace(/-/g, ' ')
  const pagePath = slug.join('/')

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <p className="text-sm capitalize text-muted-foreground">{name}</p>
      <p className="mt-2 text-muted-foreground">{t('page', { path: pagePath })}</p>
    </div>
  )
}
