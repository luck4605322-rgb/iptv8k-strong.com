"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, Tv } from "lucide-react"

export function HlsVideo({
  src,
  title,
  placeholder,
  errorText,
}: {
  src: string | null
  title?: string
  placeholder: string
  errorText: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const hasError = src !== null && failedSrc === src

  useEffect(() => {
    const video = videoRef.current
    if (!video || !src) return

    let cancelled = false
    let destroy: (() => void) | undefined

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled) return
      if (Hls.isSupported()) {
        const hls = new Hls({ enableWorker: true, lowLatencyMode: true })
        hls.loadSource(src)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {})
        })
        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (!data.fatal) return
          if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
            hls.recoverMediaError()
            return
          }
          setFailedSrc(src)
          hls.destroy()
        })
        destroy = () => hls.destroy()
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        const onError = () => setFailedSrc(src)
        video.addEventListener("error", onError)
        video.src = src
        video.play().catch(() => {})
        destroy = () => video.removeEventListener("error", onError)
      } else {
        setFailedSrc(src)
      }
    })

    return () => {
      cancelled = true
      destroy?.()
      video.removeAttribute("src")
      video.load()
    }
  }, [src])

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card">
      <video
        ref={videoRef}
        className="h-full w-full bg-background"
        controls={Boolean(src) && !hasError}
        playsInline
        aria-label={title}
      />
      {(!src || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card p-6 text-center">
          {hasError ? (
            <AlertTriangle className="h-10 w-10 text-primary" aria-hidden="true" />
          ) : (
            <Tv className="h-10 w-10 text-primary" aria-hidden="true" />
          )}
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground" role={hasError ? "alert" : undefined}>
            {hasError ? errorText : placeholder}
          </p>
        </div>
      )}
    </div>
  )
}
