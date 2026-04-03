import { getTranslations } from 'next-intl/server'

interface TenantRegisterPageProps {
  params: Promise<{ tenant: string }>
}

export default async function TenantRegisterPage({ params }: TenantRegisterPageProps) {
  const { tenant } = await params
  const t = await getTranslations('tenant.register')
  const name = tenant.replace(/-/g, ' ')

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold capitalize">{t('title', { name })}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t('subtitle')}</p>
      </div>
    </div>
  )
}
