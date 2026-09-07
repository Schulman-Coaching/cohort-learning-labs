'use client'

import { useEffect, useRef, useState } from 'react'
import { calendlyEmbedUrl } from '@/lib/booking'

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'

type CalendlyApi = {
  initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyApi
  }
}

let calendlyScriptPromise: Promise<CalendlyApi> | null = null

function loadCalendly(): Promise<CalendlyApi> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Calendly is client-only'))
  }
  if (window.Calendly) return Promise.resolve(window.Calendly)
  if (calendlyScriptPromise) return calendlyScriptPromise

  const promise = new Promise<CalendlyApi>((resolve, reject) => {
    const finish = () => {
      if (window.Calendly) resolve(window.Calendly)
      else reject(new Error('Calendly API missing after script load'))
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      if (window.Calendly) {
        finish()
        return
      }
      existing.addEventListener('load', finish, { once: true })
      existing.addEventListener(
        'error',
        () => reject(new Error('Calendly script failed to load')),
        { once: true }
      )
      // load may have already fired before the listeners were attached.
      const started = Date.now()
      const poll = window.setInterval(() => {
        if (window.Calendly) {
          window.clearInterval(poll)
          finish()
        } else if (Date.now() - started > 8000) {
          window.clearInterval(poll)
          reject(new Error('Calendly script timed out'))
        }
      }, 25)
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.addEventListener('load', finish, { once: true })
    script.addEventListener(
      'error',
      () => {
        // Drop the dead tag so a later loadCalendly() can create a fresh one
        // and actually retry the fetch instead of reusing the failed script.
        script.remove()
        reject(new Error('Calendly script failed to load'))
      },
      { once: true }
    )
    document.body.appendChild(script)
  })

  calendlyScriptPromise = promise
  void promise.catch(() => {
    if (calendlyScriptPromise === promise) calendlyScriptPromise = null
  })

  return promise
}

export default function CalendlyEmbed({ url }: { url: string }) {
  const [failed, setFailed] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const embedUrl = calendlyEmbedUrl(url)

  // Load widget.js ourselves and call initInlineWidget on every mount.
  // next/script + data-url auto-scan only runs once, so SPA navigations to
  // /contact left an empty booking box until a full reload.
  useEffect(() => {
    const parent = containerRef.current
    if (!parent) return

    let cancelled = false

    const timeout = window.setTimeout(() => {
      if (!cancelled) setFailed(true)
    }, 12000)
    const onMessage = (event: MessageEvent) => {
      const frame = parent.querySelector('iframe')
      if (
        event.origin === new URL(embedUrl).origin &&
        event.source === frame?.contentWindow &&
        event.data?.event === 'calendly.event_type_viewed'
      ) {
        window.clearTimeout(timeout)
        setFailed(false)
      }
    }
    window.addEventListener('message', onMessage)

    loadCalendly()
      .then((calendly) => {
        if (cancelled) return
        parent.innerHTML = ''
        calendly.initInlineWidget({
          url: embedUrl,
          parentElement: parent,
        })
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
        window.clearTimeout(timeout)
      })

    return () => {
      cancelled = true
      window.clearTimeout(timeout)
      window.removeEventListener('message', onMessage)
      parent.innerHTML = ''
    }
  }, [embedUrl])

  return (
    <div className="min-w-0 border border-rule bg-ground">
      <div className="border-b border-rule p-5 font-sans text-sm leading-relaxed">
        <p role="status">
          {failed
            ? 'The calendar is taking longer than expected. You can book directly on Calendly.'
            : 'Choose a time below, or open the calendar in a separate tab.'}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block border-b border-accent pb-1 text-accent hover:text-accent-hover"
        >
          Open booking calendar <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full"
        data-auto-load="false"
        hidden={failed}
        style={{ minWidth: 0, height: '720px' }}
      />
    </div>
  )
}
