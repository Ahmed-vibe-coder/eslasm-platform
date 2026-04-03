import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'Sign In' }

export default async function LoginPage() {
  const t = await getTranslations('auth.login')

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm sm:p-8">
      <h1 className="text-2xl font-semibold">{t('title')}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{t('subtitle')}</p>
    </div>
  )
}
