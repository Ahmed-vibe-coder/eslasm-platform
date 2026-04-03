import { getTranslations } from 'next-intl/server'

export const metadata = { title: 'Pricing' }

export default async function PricingPage() {
  const t = await getTranslations('marketing.pricing')

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">{t('title')}</h1>
    </div>
  )
}
