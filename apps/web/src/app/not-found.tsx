import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function NotFound() {
  const t = await getTranslations('errors')
  const tc = await getTranslations('common')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-6xl font-bold text-muted-foreground">{t('notFound')}</h1>
      <h2 className="text-xl font-semibold sm:text-2xl">{t('pageNotFound')}</h2>
      <p className="text-sm text-muted-foreground sm:text-base">{t('pageNotFoundDescription')}</p>
      <Link href="/" className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">
        {tc('goHome')}
      </Link>
    </div>
  )
}
