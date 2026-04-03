import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

interface BuilderPagesListProps {
  params: Promise<{ agencyId: string }>
}

export default async function BuilderPagesList({ params }: BuilderPagesListProps) {
  const { agencyId } = await params
  const t = await getTranslations('builder')

  return (
    <div className="flex h-full flex-col">
      <header className="flex h-14 items-center justify-between border-b px-4">
        <h1 className="text-base font-semibold sm:text-lg">{t('pagesTitle', { agencyId })}</h1>
        <Link
          href={`/${agencyId}/editor/new`}
          className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          {t('newPage')}
        </Link>
      </header>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <p className="text-muted-foreground">{t('selectPage')}</p>
      </main>
    </div>
  )
}
