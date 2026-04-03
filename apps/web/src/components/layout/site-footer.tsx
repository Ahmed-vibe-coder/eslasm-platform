import Link from 'next/link'
import { useTranslations } from 'next-intl'

export function SiteFooter() {
  const t = useTranslations()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">{t('common.appName')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">{t('footer.product')}</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">{t('common.pricing')}</Link></li>
              <li><Link href="/templates" className="text-sm text-muted-foreground hover:text-foreground">{t('common.templates')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">{t('footer.company')}</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">{t('footer.about')}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">{t('footer.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">{t('footer.legal')}</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  )
}
