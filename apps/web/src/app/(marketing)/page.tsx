import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
  const t = await getTranslations('marketing.hero')

  return (
    <div>
      <section className="container mx-auto px-4 py-16 text-center sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg lg:text-xl">
          {t('subtitle')}
        </p>
      </section>
    </div>
  )
}
