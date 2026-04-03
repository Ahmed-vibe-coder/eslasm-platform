'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { cn } from '@/lib/utils'

const adminNavKeys = ['overview', 'tenants', 'templates', 'plans', 'users', 'analytics'] as const
const adminNavHrefs: Record<string, string> = {
  overview: '/admin',
  tenants: '/admin/tenants',
  templates: '/admin/templates',
  plans: '/admin/plans',
  users: '/admin/users',
  analytics: '/admin/analytics',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const t = useTranslations('admin')

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 shrink-0 border-e bg-background lg:block">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/admin" className="text-lg font-bold tracking-tight">
            EduForge <span className="text-xs font-normal text-muted-foreground">{t('navItems.overview')}</span>
          </Link>
        </div>
        <nav className="space-y-1 p-4">
          {adminNavKeys.map((key) => {
            const href = adminNavHrefs[key]!
            const isActive =
              href === '/admin'
                ? pathname === '/admin'
                : pathname === href || pathname.startsWith(`${href}/`)
            return (
              <Link
                key={key}
                href={href}
                className={cn(
                  'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {t(`navItems.${key}`)}
              </Link>
            )
          })}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b px-4 sm:px-6">
          <h2 className="text-sm font-medium text-muted-foreground">{t('panelTitle')}</h2>
          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:block" />
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-secondary/20 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
