'use server'

import { cookies } from 'next/headers'
import type { Locale } from '@/i18n/config'

export async function setLocaleCookie(locale: Locale): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
}
