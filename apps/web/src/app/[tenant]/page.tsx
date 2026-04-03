import { getTranslations } from 'next-intl/server'

interface TenantHomePageProps {
  params: Promise<{ tenant: string }>
}

export default async function TenantHomePage({ params }: TenantHomePageProps) {
  const { tenant } = await params
  const t = await getTranslations('tenant')
  const name = tenant.replace(/-/g, ' ')

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center px-4">
          <span className="text-lg font-bold capitalize">{name}</span>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center sm:py-24">
          <h1 className="text-3xl font-bold capitalize sm:text-4xl">{t('welcome', { name })}</h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{t('tagline')}</p>
        </section>
      </main>
    </div>
  )
}
