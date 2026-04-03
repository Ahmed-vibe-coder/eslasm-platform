import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'All Tenants' }

export default async function AdminTenantsPage() {
  const t = await getTranslations('admin.tenants')

  const columns = ['name', 'subdomain', 'plan', 'status', 'created'] as const

  return (
    <div>
      <h1 className="text-xl font-semibold sm:text-2xl">{t('title')}</h1>
      <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('subtitle')}</p>
      <div className="mt-6 overflow-x-auto rounded-xl border bg-card">
        <div className="min-w-[600px] border-b px-6 py-4">
          <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground">
            {columns.map((col) => (
              <span key={col}>{t(`columns.${col}`)}</span>
            ))}
          </div>
        </div>
        <div className="p-6 text-center text-sm text-muted-foreground">
          {t('empty')}
        </div>
      </div>
    </div>
  )
}
