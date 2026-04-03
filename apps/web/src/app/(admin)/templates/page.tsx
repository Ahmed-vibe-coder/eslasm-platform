import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'Manage Templates' }

export default async function AdminTemplatesPage() {
  const t = await getTranslations('admin.templates')

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold sm:text-2xl">{t('title')}</h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('subtitle')}</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-center rounded-xl border-2 border-dashed p-8 text-muted-foreground sm:p-12">
          {t('upload')}
        </div>
      </div>
    </div>
  )
}
