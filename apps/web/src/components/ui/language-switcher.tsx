'use client'

import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { locales, localeNames, type Locale } from '@/i18n/config'
import { cn } from '@/lib/utils'
import { setLocaleCookie } from '@/lib/set-locale'

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations('common')
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function handleChange(newLocale: Locale) {
    startTransition(async () => {
      await setLocaleCookie(newLocale)
      router.refresh()
    })
  }

  return (
    <div className={cn('relative', className)}>
      <select
        aria-label={t('language')}
        disabled={isPending}
        onChange={(e) => handleChange(e.target.value as Locale)}
        className="cursor-pointer appearance-none rounded-md border bg-background px-3 py-1.5 pe-8 text-sm text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
        defaultValue=""
      >
        <option value="" disabled>
          {t('language')}
        </option>
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute end-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
  )
}
