'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

interface EditorPageProps {
  params: Promise<{ agencyId: string; pageId: string }>
}

export default function EditorPage({ params }: EditorPageProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  useEffect(() => {
    let editorInstance: unknown = null

    async function initEditor() {
      const resolvedParams = await params
      const grapesjs = (await import('grapesjs')).default

      if (!editorRef.current) return

      editorInstance = grapesjs.init({
        container: editorRef.current,
        height: '100%',
        width: '100%',
        storageManager: false,
        noticeOnUnload: false,
        panels: { defaults: [] },
      })

      void resolvedParams
    }

    void initEditor()

    return () => {
      if (editorInstance && typeof (editorInstance as { destroy: () => void }).destroy === 'function') {
        (editorInstance as { destroy: () => void }).destroy()
      }
    }
  }, [params])

  return (
    <div className="flex h-full flex-col">
      <header className="flex h-12 items-center justify-between border-b bg-background px-4">
        <span className="text-sm font-medium">{t('builder.pageEditor')}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border px-3 py-1 text-sm text-muted-foreground hover:bg-secondary"
          >
            {t('common.saveDraft')}
          </button>
          <button
            type="button"
            className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {t('common.publish')}
          </button>
        </div>
      </header>
      <div ref={editorRef} className="flex-1" />
    </div>
  )
}
