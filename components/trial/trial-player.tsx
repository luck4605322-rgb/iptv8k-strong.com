"use client"

import { useDeferredValue, useMemo, useState } from "react"
import useSWR from "swr"
import { Loader2, Search } from "lucide-react"
import { HlsVideo } from "@/components/trial/hls-video"
import { isTrialConfigured } from "@/lib/trial-config"
import { fetchLiveCatalog, liveStreamUrl, type LiveStream } from "@/lib/xtream"
import { whatsappWith } from "@/lib/contact"
import type { TrialDictionary } from "@/lib/trial-dictionary"

const PAGE_SIZE = 150
const ALL = "all"

export function TrialPlayer({ t }: { t: TrialDictionary }) {
  const { data, error, isLoading, mutate } = useSWR(isTrialConfigured ? "trial-live-catalog" : null, fetchLiveCatalog, {
    revalidateOnFocus: false,
  })

  const [category, setCategory] = useState(ALL)
  const [query, setQuery] = useState("")
  const [limit, setLimit] = useState(PAGE_SIZE)
  const [current, setCurrent] = useState<LiveStream | null>(null)
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    if (!data) return []
    const q = deferredQuery.trim().toLowerCase()
    return data.streams.filter(
      (s) => (category === ALL || s.category_id === category) && (!q || s.name.toLowerCase().includes(q)),
    )
  }, [data, category, deferredQuery])

  if (!isTrialConfigured) {
    return <Notice text={t.notConfigured} />
  }

  const src = current ? liveStreamUrl(current.stream_id) : null

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:flex-row-reverse">
        <div className="flex flex-1 flex-col gap-3">
          <HlsVideo src={src} title={current?.name} placeholder={t.selectChannel} errorText={t.playError} />
          {current && (
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {t.nowPlaying}:<span className="font-semibold text-foreground">{current.name}</span>
            </p>
          )}
        </div>

        <aside className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-card p-4 lg:w-80" aria-label={t.category}>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {t.category}
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setLimit(PAGE_SIZE)
              }}
              disabled={!data}
              className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value={ALL}>{t.allChannels}</option>
              {data?.categories.map((c) => (
                <option key={c.category_id} value={c.category_id}>
                  {c.category_name}
                </option>
              ))}
            </select>
          </label>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setLimit(PAGE_SIZE)
              }}
              placeholder={t.search}
              aria-label={t.search}
              disabled={!data}
              className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {data && (
            <p className="text-xs text-muted-foreground">
              {filtered.length.toLocaleString()} {t.channelCount}
            </p>
          )}

          <div className="h-80 overflow-y-auto rounded-lg border border-border bg-background lg:h-[26rem]">
            {isLoading && (
              <div className="flex h-full items-center justify-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                {t.loading}
              </div>
            )}
            {error && (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center text-sm text-muted-foreground">
                <p role="alert">{t.loadError}</p>
                <button
                  type="button"
                  onClick={() => mutate()}
                  className="rounded-lg border border-primary/50 px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {t.retry}
                </button>
              </div>
            )}
            {data && filtered.length === 0 && (
              <p className="p-4 text-center text-sm text-muted-foreground">{t.noResults}</p>
            )}
            {data && filtered.length > 0 && (
              <ul className="flex flex-col p-1">
                {filtered.slice(0, limit).map((stream) => {
                  const active = current?.stream_id === stream.stream_id
                  return (
                    <li key={stream.stream_id}>
                      <button
                        type="button"
                        onClick={() => setCurrent(stream)}
                        aria-current={active ? "true" : undefined}
                        className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                          active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <ChannelLogo src={stream.stream_icon} />
                        <span className="truncate">{stream.name}</span>
                      </button>
                    </li>
                  )
                })}
                {filtered.length > limit && (
                  <li className="p-2">
                    <button
                      type="button"
                      onClick={() => setLimit((l) => l + PAGE_SIZE)}
                      className="w-full rounded-md border border-border py-2 text-sm font-semibold text-primary hover:bg-secondary"
                    >
                      {t.showMore}
                    </button>
                  </li>
                )}
              </ul>
            )}
          </div>
        </aside>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-2xl font-bold">{t.ctaTitle}</h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">{t.ctaText}</p>
        </div>
        <a
          href={whatsappWith("Hi STRONG 8K, I tried the free trial and would like to subscribe.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient inline-flex h-11 shrink-0 items-center justify-center rounded-xl px-6 font-semibold"
        >
          {t.ctaButton}
        </a>
      </div>
    </div>
  )
}

function ChannelLogo({ src }: { src?: string }) {
  if (!src) return <span className="h-6 w-6 shrink-0 rounded bg-secondary" aria-hidden="true" />
  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote panel logos on arbitrary hosts
    <img src={src} alt="" loading="lazy" className="h-6 w-6 shrink-0 rounded object-contain" onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
  )
}

function Notice({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center">
      <p className="max-w-md leading-relaxed text-muted-foreground text-pretty">{text}</p>
      <a
        href={whatsappWith("Hi STRONG 8K, I'd like a free test line.")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gradient inline-flex h-11 items-center justify-center rounded-xl px-6 font-semibold"
      >
        WhatsApp
      </a>
    </div>
  )
}
